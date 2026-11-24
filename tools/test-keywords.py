"""Exercise filename-only generation without touching the published branch."""
import json
import subprocess
import sys
import tempfile
from pathlib import Path

generator = Path(__file__).with_name("generate-keywords.py")
with tempfile.TemporaryDirectory() as tmp:
    directory = Path(tmp)
    def read():
        return json.loads(subprocess.check_output([sys.executable, generator, directory]))
    assert read() == []
    for name in ["net zero", "income tax"]:
        (directory / (name + ".md")).write_text("Short reply.\n\nDescription.\n")
    assert read() == ["income tax", "net zero"]
    def read_bundle():
        return json.loads(subprocess.check_output([sys.executable, generator, directory, "--bundle"]))
    assert read_bundle() == [[name, "Short reply.\n\nDescription.\n"] for name in read()]
    (directory / "income tax.md").unlink()
    assert read() == ["net zero"]
    assert [entry[0] for entry in read_bundle()] == ["net zero"]
    (directory / "net zero.md").write_text("Updated.\n\nDescription.\n")
    assert read_bundle()[0][1].startswith("Updated.")
    (directory / "bad.md").write_text("Broken")
    assert subprocess.run([sys.executable, generator, directory, "--bundle"], capture_output=True).returncode != 0
    (directory / "bad.md").unlink()
    for i in range(2000):
        (directory / f"keyword {i}.md").touch()
    assert len(read()) == 2001
    (directory / "NET ZERO.md").touch()
    result = subprocess.run([sys.executable, generator, directory], capture_output=True)
    assert result.returncode != 0
print("Keyword generator tests passed.")
