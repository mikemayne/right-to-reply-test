# Contributing to Right to Reply

Read [the editorial and participation rules](CONTENT_POLICY.md) before opening a pull request.

**Who can submit:** one verified, authorised GitHub account per officially registered UK political party. No submissions on behalf of another party or organisation. All party-content changes must be proposed in a public PR.

## Submission template

Use these plain-text fields for each proposed entry:

- **Party:** the registered party this response represents
- **Trigger keyword or phrase:** the exact phrase or closely matched phrase to which that party wishes to respond; the reply must not appear unless the party itself is mentioned
- **One-line response:** `Your one line response to the keyword goes here`
- **Extended description (up to 255 characters):** `An extended description of up to 255 characters goes here, no links.`

The published response is **plain text only**. The one-line response must be one line and at most 160 characters. No external links, redirects, executable content, markup or unexpected fields may appear in the published response. The party's triggering text and replies must be attributed only to that party.

## Evidence and public discussion

Include in the **PR description or public PR comments**, not in published data:

1. The proposed keyword, one-line response and extended description.
2. An itemised list of any factual claims and quotations, each paired with reputable supporting evidence and public source links, with relevant date, attribution and context.
3. An explanation of any forecasts, uncertainties, substantial qualifications or corrections to existing wording.

Links to reputable evidence **are allowed and encouraged in the public PR**. They are **never displayed to extension users as part of the party's reply**. All questions, amendments, evidence challenges and review decisions are public.

Only approved changes may be released. This repository publishes a fictional example response for integration testing, not a real political reply. For each approved response, use a Markdown file in `responses/` named after its keyword, containing two one-line plain-text paragraphs separated by one blank line. The first paragraph is limited to 160 characters and the second to 255. List the filename without `.md` in `party.json`. List the party name and complete approved aliases in `identifiers.json`.

**All abusive conduct is prohibited.** Abusive conduct in a PR or its discussion, including harassment, intimidation and abusive language, will be flagged and may be reported to GitHub. If the party's sole nominated account is suspended or banned by GitHub, **the party must resolve that directly with GitHub**. Right to Reply cannot reverse GitHub's decision or accept a replacement account to circumvent the restriction. Legitimate criticism and political disagreement are not themselves abuse.

Review times are **not guaranteed**. Conduct, accuracy and cooperation affect prioritisation, but political positions do not. See [the full policy](CONTENT_POLICY.md) for rejection, challenge, correction and immediate-removal rules.
