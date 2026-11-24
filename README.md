# Right to Reply Test

**Our guarantee:** Right to Reply is free to use, will always remain free to use, and will never include advertising.

**New to GitHub?** [How to set up ChatGPT and submit updates without coding](CHATGPT_GUIDE.md).

Test source configuration for **Right to Reply**, an independent, politically neutral right-of-reply project for officially registered UK political parties.

This repository publishes fictional example responses for testing the browser extension. It does not represent a participating political party. All replies use a neutral underline and short statement; party identity is revealed only when a reader expands a statement. The extension reads `party.json`, `identifiers.json` from `main`, and the complete automatically generated `responses.json` bundle from `keyword-index` on a scheduled background refresh. No keyword-specific downloads occur when readers open replies. Proposed party contributions must be made through a public pull request and reviewed under exactly the same rules for every party.

- [Editorial and participation rules](CONTENT_POLICY.md)
- [How to contribute and supply public evidence](CONTRIBUTING.md)

Published responses are plain text only: a one-line response of up to 128 characters and an extended description of up to 255 characters, with no links. Source links and discussion belong in the public PR, not the extension.

## Demonstration website

- [Frequently asked questions](https://mikemayne.github.io/right-to-reply-test/faq.html) — participation, content verification, public review and reader privacy.

- [Interactive preview](https://mikemayne.github.io/right-to-reply-test/) — fictional interface mock-up with five, two and one matching replies; no extension required. Its data is not part of the real party feed.
- [Extension test page](https://mikemayne.github.io/right-to-reply-test/test.html) — a separate article with no simulated markup, using the repository’s example party and response files.

Publish GitHub Pages from `main` at the repository root. To test locally, run `python -m http.server 8000` from the repository root and open `http://localhost:8000/`. The interactive preview uses local fictional fixtures, while the extension test page uses the actual example-party feed. The decorative navigation and separate article on the extension test page are negative controls.
