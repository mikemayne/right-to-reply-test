# Contributing to Right to Reply

Read [the editorial and participation rules](CONTENT_POLICY.md) before opening a pull request.

**Who can submit:** one verified, authorised GitHub account at a time per officially registered UK political party. A legitimate change of representative requires the owner's approval and revocation of the previous authorisation. Do not share credentials. No submissions on behalf of another party or organisation. All party-content changes must be proposed in a public PR.

## Submission template

Use these plain-text fields for each proposed entry:

- **Party:** the registered party this response represents
- **Trigger keyword or phrase:** the exact phrase or closely matched phrase to which that party wishes to respond; the reply must not appear unless the party itself is mentioned. People's names cannot be response keywords. Direct quotes from opposing parties (including close variants intended to target those quotes) cannot be used as triggers, and responses to such quotes are forbidden. Broad policy keywords such as `tax`, `immigration` and `fossil fuels` are explicitly permitted where the reply is directly relevant. Generic connecting words and unrelated triggers are not permitted
- **One-line response:** `Your one line response to the keyword goes here`
- **Extended description (up to 255 characters):** `An extended description of up to 255 characters goes here, no links.`

The published response is **plain text only**. The one-line response must be one line and at most 128 characters. No external links, redirects, executable content, markup or unexpected fields may appear in the published response. The party's triggering text and replies must be attributed only to that party. Keep responses focused on policies, proposals, voting records, political positions and consequences. No personal allegations or personal attacks, including allegations of misconduct, criminality or other defamatory allegations about identifiable individuals, whether named or not.

By submitting material you confirm your party has the necessary rights to publish and license it, and permits Right to Reply to reproduce, display and redistribute approved content without payment. Do not include copyrighted material you have no lawful right to use.

## Evidence and public discussion

Include in the **PR description or public PR comments**, not in published data:

1. The proposed keyword, one-line response and extended description.
2. An itemised list of any factual claims and quotations, each paired with reputable supporting evidence and public source links, with relevant date, attribution and context.
3. An explanation of any forecasts, uncertainties, substantial qualifications or corrections to existing wording.

Use the [accepted source criteria in section 3 of the editorial rules](CONTENT_POLICY.md#accepted-sources-of-factual-evidence). Cite Britannica, recognised historical scholarship or original archival records for historical facts; official statistics for statistical claims; official party documents for party positions; Hansard for parliamentary statements; official legislation for legal claims; and peer-reviewed research or authoritative evidence assessments for scientific claims. Wikipedia is also accepted for established historical facts supported by reliable citations; prefer the underlying source for disputed claims. Newspaper reporting, social posts and AI-generated answers are not sufficient evidence on their own. The contributor must supply direct, checkable references and acknowledge material uncertainty.

Links to reputable evidence **are allowed and encouraged in the public PR**. They are **never displayed to extension users as part of the party's reply**. All questions, amendments, evidence challenges and review decisions are public. Suggestions that make the platform fairer for everyone are welcome through public GitHub discussion, but suggestions that favour one political party over others will not be adopted.

Only approved changes may be released. This repository publishes a fictional example response for integration testing, not a real political reply. For each approved response, use a Markdown file in `responses/` named after its keyword, containing two one-line plain-text paragraphs separated by one blank line. The first paragraph is limited to 128 characters and the second to 255. Add, edit or delete the individual Markdown file. Its filename (without `.md`) is the keyword. The keyword index and complete response bundle are automatically generated after merging to `main`; never edit either or submit them in a PR. All readers receive the same complete bundle, never a keyword-specific request. Only the owner may change the publishing workflow. List the party name and complete approved aliases in `identifiers.json`.

**All abusive conduct is prohibited.** Abusive conduct in a PR or its discussion, including harassment, intimidation and abusive language, will be flagged and may be reported to GitHub. If the party's sole nominated account is suspended or banned by GitHub, **the party must resolve that directly with GitHub**. Right to Reply cannot reverse GitHub's decision or facilitate evasion of its restrictions. The owner may refuse a replacement account following a suspension or ban; legitimate personnel changes are otherwise permitted subject to verification. Legitimate criticism and political disagreement are not themselves abuse.

Review times are **not guaranteed**. Conduct, accuracy and cooperation affect prioritisation, but political positions do not. Well-considered, properly evidenced submissions may be prioritised over bulk submissions. The owner may reject or withdraw material presenting potential legal liability. See [the full policy](CONTENT_POLICY.md) for rejection, challenge, correction and immediate-removal rules.
