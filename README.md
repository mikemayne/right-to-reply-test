# Right to Reply Test

Test source configuration for **Right to Reply**, an independent, politically neutral right-of-reply project for officially registered UK political parties.

This repository publishes fictional example responses for testing the browser extension. It does not represent a participating political party. The fictional test party uses a black underline (`#000000`). The extension reads `party.json`, `identifiers.json` and individual Markdown response files from `main`, and the automatically generated `keywords.json` from `keyword-index`. Proposed party contributions must be made through a public pull request and reviewed under exactly the same rules for every party.

- [Editorial and participation rules](CONTENT_POLICY.md)
- [How to contribute and supply public evidence](CONTRIBUTING.md)

Published responses are plain text only: a one-line response of up to 128 characters and an extended description of up to 255 characters, with no links. Source links and discussion belong in the public PR, not the extension.

## Demonstration website

- [Interactive preview](https://mikemayne.github.io/right-to-reply-test/) — no extension required.
- [Extension test page](https://mikemayne.github.io/right-to-reply-test/test.html) — the same article with no simulated markup.

Publish GitHub Pages from `main` at the repository root. To test locally, run `python -m http.server 8000` from the repository root and open `http://localhost:8000/`. The preview reads the same individual Markdown files as the extension. The decorative navigation and separate article are negative controls.
