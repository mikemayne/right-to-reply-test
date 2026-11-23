"""Generate a deterministic keyword index from approved response filenames."""
import json
import sys
import unicodedata
from pathlib import Path

MAX_BYTES = 256 * 1024

def generate(directory):
    names = []
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
    data = (json.dumps(names, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    if len(data) > MAX_BYTES:
        raise ValueError("Keyword index exceeds 256 KiB")
    return data

if __name__ == "__main__":
    sys.stdout.buffer.write(generate(Path(sys.argv[1] if len(sys.argv) > 1 else "responses")))
