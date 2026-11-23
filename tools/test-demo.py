"""Verify the two demo pages share article text and preview keywords have response files."""
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
assert preview.articles == test.articles
assert len(preview.articles) == 2
assert "Example Party" in preview.articles[0]
assert "Example Party" not in preview.articles[1]
assert len(set(preview.keywords)) >= 4
assert not test.keywords and not test.scripts
for keyword in set(preview.keywords):
    lines = (root / "responses" / (keyword + ".md")).read_text().splitlines()
    assert len(lines) == 3 and lines[1] == ""
    assert 0 < len(lines[0]) <= 128 and 0 < len(lines[2]) <= 255
print("Demo article parity, plain test page and response fixtures passed.")
