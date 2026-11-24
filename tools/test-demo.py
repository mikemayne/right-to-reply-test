"""Verify the interactive preview and separate extension test page."""
from html.parser import HTMLParser
from pathlib import Path

root = Path(__file__).resolve().parents[1]

class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.articles = []
        self.current = None
        self.keywords = []
        self.scripts = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "article":
            self.current = []
        if tag == "script":
            self.scripts.append(attrs.get("src"))
        if "data-keyword" in attrs:
            assert self.current is not None
            self.keywords.append(attrs["data-keyword"])
    def handle_endtag(self, tag):
        if tag == "article":
            self.articles.append("".join(self.current))
            self.current = None
    def handle_data(self, data):
        if self.current is not None:
            self.current.append(data)

def parse(name):
    page = ArticleParser()
    page.feed((root / name).read_text())
    return page

preview, test = parse("index.html"), parse("test.html")
assert len(test.articles) == 2
assert "Example Party" in test.articles[0]
assert "Example Party" not in test.articles[1]
assert not test.keywords and not test.scripts
for keyword in ("example keyword", "magna aliqua", "ullamco laboris", "voluptate velit"):
    assert keyword in test.articles[0]
    lines = (root / "responses" / (keyword + ".md")).read_text().splitlines()
    assert len(lines) == 3 and lines[1] == ""
    assert 0 < len(lines[0]) <= 128 and 0 < len(lines[2]) <= 255
assert len(preview.articles) == 1
assert set(preview.keywords) == {"magna aliqua", "ullamco laboris", "voluptate velit"}
assert "five-parties.js" in preview.scripts and "preview.js" in preview.scripts
assert "reply-logo" in (root / "index.html").read_text()
assert not (root / "five-parties.html").exists()
for name in ("index.html", "test.html"):
    assert 'href="five-parties.html"' not in (root / name).read_text()
print("Interactive preview, plain extension test page and response fixtures passed.")
