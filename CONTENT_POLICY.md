# Right to Reply — Editorial and Participation Rules

These rules apply equally to every participating political party. **Right to Reply is an independent, politically neutral project.** It does not endorse, oppose or favour any party, candidate, ideology or political position. It provides a right of reply, not an endorsement or an independent certification of the party's views.

## 1. Who may participate

- Participation is limited to **officially registered UK political parties**, as listed on the relevant Electoral Commission register. Think tanks, pressure groups, campaign movements, private individuals and other organisations are not eligible to submit official replies.
- Every eligible party is offered the **same opportunity, terms, editorial rules and technical capabilities**. The initial invitation is to be extended to all eligible parties on the same basis; parties may join later.
- Each party must identify **one authorised GitHub account at a time** to submit its content. The account must be used and secured in accordance with GitHub's terms; credentials must not be shared. A party may request a replacement representative for legitimate personnel changes. The owner must verify the new authorisation and withdraw the previous account's authorisation before accepting submissions from the replacement. No unofficial supporter or third-party organisation may submit material on the party's behalf.
- A party may submit responses only in its own name. It cannot create responses that impersonate, purport to represent or are branded as another party.
- A reply is displayed only when **that party is mentioned and its approved keyword or phrase matches**. Parties choose the keywords or phrases associated with their own positions, subject to the same published technical and editorial safeguards. Broad policy topics are permitted when the statement directly addresses the topic. Generic connecting words such as `and`, and triggers with no clear connection to the statement, are not permitted.
- **People's names must not be used as response keywords.** Names may still be listed as approved party identifiers for recognising a reference to that party; this does not make them response triggers.

## 2. Published content and format

Each approved entry comprises an identifying party/trigger, a **single-line plain-text response of no more than 128 characters**, and a required expanded plain-text description of **no more than 255 characters**. No line breaks are permitted in the one-line response. The test placeholders are:

> Your one line response to the keyword goes here

> An extended description of up to 255 characters goes here, no links.

- **No links in published content**: no URLs, redirects, clickable destinations, embedded resources, HTML, scripts, markup, tracking, concealed instructions or executable material.
- Only explicitly approved plain-text fields may enter the published feed. Unexpected fields and active content must be rejected. Published text must be rendered as inert text, never interpreted as code.
- All external evidence links, contextual explanations and discussion belong **in the public pull request only**, never in the user-facing response or extension payload.
- By submitting content, the party confirms that it owns or has obtained the necessary rights and permissions to publish and license the material, and grants Right to Reply permission to reproduce, display and redistribute its approved submissions through the extension and associated project materials without payment. Do not submit copyrighted third-party material without the necessary permission or other lawful basis. A party cannot grant rights it does not hold.
- A party's submission must not change the extension's behaviour, code, security settings or distribution mechanism. The extension must consume only validated, owner-approved published content, not unreviewed PR branches or party-controlled resources.

## 3. Accuracy, evidence and quotations

- **Every factual claim must be supported by credible, reputable and independently checkable evidence** supplied in the PR. Evidence must directly substantiate the specific claim, with relevant dates, context and qualifications. A source merely mentioning a subject is not sufficient.
- **Quotations are held to the same standard as direct claims.** Quotes must be authentic, accurately attributed, contextualised and supported by evidence. Quoting an unsupported factual assertion does not make that assertion established fact.
- No selective statistics, cherry-picked quotations, misleading omissions or distortions that materially alter a reader's understanding. Where uncertainty or important contrary evidence is relevant, it must not be concealed.
- Clearly distinguish **established facts, party opinions, values, proposals and predictions**. Predictions are not facts; material assumptions and uncertainty must be made clear.
- Claims about other parties' or individuals' positions must be fairly and accurately represented. Do not fabricate or mischaracterise another party's policies.
- Evidence and claims must remain current. Include dates for time-dependent statistics, statements or policy positions where relevant.

### Accepted sources of factual evidence

The following criteria apply equally to every party. Use the source appropriate to the claim, rather than relying on a single organisation as the authority on every subject.

| Type of claim | Accepted evidence |
| --- | --- |
| Established historical facts | [Encyclopaedia Britannica](https://www.britannica.com/), [The National Archives](https://www.nationalarchives.gov.uk/) or equivalent national archives, recognised academic historical works (such as [Cambridge Histories](https://www.cambridge.org/core/publications/collections/cambridge-histories)), specialist historical reference works (such as the [Oxford Dictionary of National Biography](https://academic.oup.com/oxford-dictionary-of-national-biography)), and peer-reviewed historical research. [Wikipedia](https://en.wikipedia.org/) is also accepted for established historical facts where the relevant passage is supported by reliable citations. Prefer the underlying source for disputed or materially uncertain claims. |
| Economic, demographic and other statistics | [Office for National Statistics](https://www.ons.gov.uk/), [Office for Budget Responsibility](https://obr.uk/), or equivalent official statistical authorities and official published datasets appropriate to the claim. Identify the period, measure and relevant limitations. |
| A party's own policy | Its official published manifesto, policy document or authorised public statement. This establishes the party's stated position, not the truth of factual assertions made within it. |
| Parliamentary statements and proceedings | [Hansard](https://hansard.parliament.uk/) and equivalent official parliamentary records. A record establishes what was said or done, not necessarily the truth of claims made in a debate. |
| Legislation | [legislation.gov.uk](https://www.legislation.gov.uk/) or the equivalent official legislation source in the relevant jurisdiction. Identify the applicable version, commencement and amendments. |
| Scientific and medical claims | Relevant published peer-reviewed research, preferably systematic reviews, meta-analyses or authoritative evidence assessments where available. Do not present a single study as established consensus. |

Newspaper articles, opinion pieces, social media posts, AI-generated answers and unsourced Wikipedia passages are not sufficient evidence of factual claims on their own. They may help locate qualifying evidence. This restriction does not prevent citing an original publication as evidence of what it actually published or said.

For historical claims, distinguish documented events and dates from disputed explanations, interpretations and motives. Do not treat an original record as proof of every assertion it contains. Where a material historical interpretation is disputed, use relevant independent academic scholarship, acknowledge significant uncertainty and avoid presenting one interpretation as settled fact.

If a factual claim cannot be supported by the appropriate qualifying evidence, omit it, narrow it to what the evidence establishes, or identify it accurately as an opinion where appropriate. An opinion label does not exempt its factual premises from these rules. The reviewer may request corroboration where sources conflict; no source is automatically conclusive merely because it appears in the table.

Provide direct links to the relevant record, passage or dataset, with a date and page, section or table number where applicable. If citing a book or subscription publication, provide sufficient bibliographic detail and a publicly checkable supporting reference or lawful accessible extract. Keep all evidence in the public PR, never in the published response. Contributors are responsible for supplying and checking it.

## 4. No manipulation or abuse

Content must not use deceptive or manipulative techniques described in **Defeating Manipulation**, including whataboutery/whataboutism, straw-man arguments, false dilemmas, unsupported insinuations, manufactured urgency or attempts to mislead through emotion or context.

Application is **context-sensitive**: legitimate policy comparison, clearly labelled opinion and ordinary emotional expression are not automatically prohibited. The issue is their deceptive or manipulative use.

- Address the keyword's actual subject; do not divert criticism into an unrelated attack on another party.
- Right to Reply is a platform for political arguments, not personal accusations. Responses may address policies, proposals, voting records, political positions and their consequences, including fair criticism and comparison of party policies.
- **No allegations of personal misconduct or criminality, personal attacks, or other defamatory allegations about identifiable individuals**, whether named or identifiable from context. This restriction applies to the short statement, extended description, keyword, and public submission or review discussion. Do not use indirect descriptions to evade it. The project may reject such material even if a contributor considers it true or in the public interest.
- No personal abuse, dehumanisation, discriminatory scapegoating or unsupported accusations.
- No false impressions of consensus, certainty, endorsement or authority.

## 5. Public PR process and review

- **The sole mechanism for adding, amending or replacing party content is a public GitHub pull request.** Supporting evidence, links, corrections, objections, discussions and review decisions must be on the public record. No private content negotiations or off-record editorial decisions.
- Every proposed factual assertion and quotation must be supported in the PR. The reviewer may request changes, additional evidence or clarification before approval.
- **No guarantees whatsoever are made about PR review or response times.** Review priority is at the repository owner's discretion, taking account of the contributor's honesty, accuracy, transparency, cooperation and respectful conduct. Well-considered, properly evidenced submissions may be prioritised over bulk or poorly prepared submissions.
- Misleading submissions, repeated rule violations, abusive behaviour or attempts to manipulate review may delay review or lead to rejection.
- **No difference in treatment or review priority may be based on political affiliation, ideology, viewpoint or whether the owner agrees with the contributor.** The same standards and opportunities apply to everyone; equal opportunity does not guarantee equal turnaround or acceptance.
- Rejections must identify the specific published rule(s) at issue. Contributors may challenge decisions in the public PR discussion. The owner retains final editorial control.

## 6. Abusive conduct and GitHub account enforcement

- **All abusive conduct in submissions, PR descriptions, comments or review discussions will be flagged.** This includes abusive language, harassment, intimidation and other abusive behaviour. Abusive conduct may be reported to GitHub for moderation and enforcement under its own rules. Political disagreement or good-faith criticism of a policy is not, by itself, abuse.
- Contributors are responsible for the conduct and continued availability of their party's **single nominated GitHub account at any given time**. The repository owner cannot control, reverse or guarantee protection from GitHub moderation or account restrictions.
- **If GitHub suspends or bans that account, the party must take the matter up directly with GitHub.** Right to Reply will not negotiate or appeal on the party's behalf or facilitate evasion of GitHub restrictions. The owner reserves the right to refuse authorisation of a replacement account following a suspension or ban. Legitimate changes of representative are otherwise permitted under section 1.
- GitHub alone decides the status of GitHub accounts. The project's editorial decisions and conduct rules continue to be applied equally to every party, irrespective of political affiliation or viewpoint.

## 7. Corrections and immediate removal

- Parties must submit a new public PR for any proposed change. Previously approved content cannot be altered silently.
- **If facts change, new evidence materially contradicts the evidence previously supplied, or accepted evidence becomes inaccurate, unreliable or misleading, the owner may suspend or remove affected content immediately and without prior warning or consultation.**
- The owner may also reject, suspend or remove content without prior notice if it presents a potential legal risk to the project, including defamation or copyright infringement, irrespective of whether the underlying claim is ultimately proven true.
- The reason for any removal must subsequently be documented publicly to the extent lawful and appropriate, without republishing potentially unlawful material or exposing private information. Removal does not itself imply dishonesty by the contributor.
- A party may submit updated wording and evidence through a new public PR, subject to the same rules.
- These correction and removal powers are applied without political favouritism.

## 8. Security and publication authority

Review approval is not permission to execute contributor-supplied code. Untrusted PR links and files must not be promoted into the published data or used to alter extension code. Only approved, validated releases are suitable for distribution. Technical validation may assist reviewers, but **the repository owner makes the final publication decision**.

This document governs contributions to this test repository and is intended to be applied consistently to any future party-specific repositories.
