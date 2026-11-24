# Updating your party's Right to Reply content with ChatGPT

You do not need to be a programmer, learn Git commands or install development software. After the one-time setup, updating a response can be as simple as describing the change to ChatGPT in ordinary English, checking the proposed wording and submitting a pull request (PR).

ChatGPT is optional. You can also edit the files directly on GitHub. The same [contribution instructions](CONTRIBUTING.md) and [editorial rules](CONTENT_POLICY.md) apply however you prepare your submission.

## One-time setup

1. Create an account at [GitHub](https://github.com/signup) if you do not already have one. This must be the single account nominated and authorised by your party at the time. Enable two-factor authentication and do not share credentials. If the authorised representative changes, ask the project owner to verify and approve the replacement account before submitting.
2. Once the project has provided your party's official repository address, open it on GitHub and select **Fork**. Create the fork under your nominated account. A fork is your own editable copy; it does not give you permission to change the official repository. The test repository contains fictional content only.
3. Sign in at [ChatGPT](https://chatgpt.com/). Open **Settings → Plugins** (called Apps on some interfaces), find GitHub, and install/connect it. Follow the GitHub authorisation screens using the nominated account. Grant access to your fork and only other repositories needed for this work, where available.
4. Return to ChatGPT and ask it to read the README, contribution instructions and editorial rules in your fork. If it cannot find the repository, check the selected repositories and allow a few minutes for the connection to become available.
5. Check that your ChatGPT experience supports editing and submitting PRs. GitHub access varies by plan and permissions; the standard read-only connection can prepare wording but cannot push changes. If needed, use [Codex](https://chatgpt.com/codex) with GitHub access to your fork, or use the manual browser method below.

See [OpenAI's GitHub connection instructions](https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt) for current setup details.

## Making an update

Once set up, you can simply tell ChatGPT which response to add, change or remove, provide your party's approved wording and supply any supporting public evidence. You can do this in the same conversational way as asking someone to edit a document.

For example, copy this prompt and replace the placeholders:

> Read the latest README, CONTRIBUTING.md and CONTENT_POLICY.md in [official party repository]. I am contributing from [my GitHub fork]. Prepare a new public pull request to the official repository's main branch, using a fresh branch based on its current main.
>
> Keyword: [exact keyword or phrase; not a person's name]
>
> One-line response: [approved wording, no more than 128 characters]
>
> Extended description: [approved wording, no more than 255 characters]
>
> Public evidence: [source links, dates and relevant context for each factual claim or quotation]
>
> Follow the current contribution instructions. Show me the proposed changes and PR description before submitting. Do not invent evidence, change unrelated files, modify code or merge the PR. Put evidence links in the PR description, not in the published response. Once I approve the changes, submit the PR if your connection permits it, and give me its link.

For an existing response, just ask to change the relevant text. To withdraw one, ask to remove the response for that keyword. There is no need to repeat the entire setup.

### Review and submit

- Check that the wording represents your party's approved position, is accurate and meets the length and plain-text restrictions. Check the supporting evidence yourself against the [accepted source criteria](CONTENT_POLICY.md#accepted-sources-of-factual-evidence). Ask ChatGPT to locate and verify qualifying references rather than relying on its answers. Wikipedia is accepted for established historical facts supported by reliable citations; prefer original references for disputed claims. Ensure the party has the rights and permissions required to publish and redistribute the submission, and that it discusses political issues rather than personal allegations or attacks. You remain responsible for anything submitted under your account.
- Approve the proposed changes. A write-capable connection can create a branch in your fork, commit the changes, and open the public PR to the official repository. If it cannot open the PR directly, use GitHub's **Compare & pull request** or **New pull request** screen, selecting your fork's branch as the source and the official repository's `main` as the destination.
- Open the PR link and check **Files changed** and the description. If the reviewer asks for a correction, ask ChatGPT to update the same PR branch; the existing PR will reflect the new commits. Answer evidence questions in the public PR discussion.
- The repository owner reviews the proposal under the same rules for all parties. Nothing is published simply because a PR has been opened. If approved and merged, the extension will pick up the published changes through its normal update process. Review and publication times are not guaranteed.

Each later update to already published content needs a new public PR. Never push directly to the official repository's main branch, and never merge your own proposal.

## If your ChatGPT connection is read-only

Ask ChatGPT to prepare the exact file contents and PR description for you. Then visit your fork in GitHub, sync it with the official repository's current main, create a new branch, and use the pencil icon to edit an existing response or **Add file** to create a new one (or the file menu to delete it). Follow the current [contribution instructions](CONTRIBUTING.md) for the filenames and any required metadata. Commit the changes to your new branch, then open a PR against the official repository and paste in the prepared description.

No command line is needed. Only public, approved-for-release information should be shared in this workflow; never include credentials, private party information or personal data in a PR.

**The important part is the content, not the technology.** Once the accounts and fork are ready, most routine updates amount to giving ChatGPT the wording and evidence, checking its work, and submitting it for review.
