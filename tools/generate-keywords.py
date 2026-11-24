"""Generate a deterministic keyword index or complete approved response bundle."""
import json
import sys
import unicodedata
from pathlib import Path

MAX_BYTES = 256 * 1024

def generate(directory, bundle=False):
    names = []
    replies = []
    seen = set()
    if directory.exists():
        for path in sorted(directory.iterdir(), key=lambda p: p.name):
            if path.suffix != ".md":
                continue
            if not path.is_file() or path.is_symlink():
                raise ValueError(f"Invalid response file: {path.name}")
            name = path.stem
            key = unicodedata.normalize("NFKC", name).lower()
            if (not name or name != name.strip() or len(name) > 100 or
                not any(c.isalnum() for c in name) or
                any(c in '/\\<>' or unicodedata.category(c) in ('Cc', 'Cf', 'Cs') for c in name)
                or key in seen):
                raise ValueError(f"Invalid or duplicate keyword: {name!r}")
            seen.add(key)
            names.append(name)
            if bundle:
                body = path.read_text(encoding="utf-8")
                lines = body.removesuffix("\n").split("\n")
                if (len(lines) != 3 or lines[1] != "" or
                    not all(line and line == line.strip() and len(line) <= limit and
                            not any(c in "<>" or unicodedata.category(c) in ("Cc", "Cf", "Cs") for c in line)
                            for line, limit in ((lines[0], 128), (lines[2], 255)))):
                    raise ValueError(f"Invalid response: {path.name}")
                replies.append([name, body])
    data = (json.dumps(names, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    if len(data) > MAX_BYTES:
        raise ValueError("Keyword index exceeds 256 KiB")
    if bundle:
        data = (json.dumps(replies, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8")
        if len(data) > 8 * 1024 * 1024:
            raise ValueError("Response bundle exceeds 8 MiB")
    return data

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("directory", nargs="?", default="responses")
    parser.add_argument("--bundle", action="store_true")
    args = parser.parse_args()
    sys.stdout.buffer.write(generate(Path(args.directory), args.bundle))
