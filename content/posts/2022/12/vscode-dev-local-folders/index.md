---
title: "vscode.dev on Brave browser: Opening Local Folders is Unsupported"
date: 2022-12-01
tags: ["tech", "vscode"]
categories: ["technology"]
---

## Description

The [vscode.dev] website can be useful at times. But it doesn't work well in Brave browser.

{{< admonition quote >}}
Opening Local Folders is Unsupported

Your browser doesn't support opening local folders.You can either open single files or open a remote repository.
{{< / admonition >}}

{{< figure 
    src="opening-local-folders-unsupported.png" 
    alt="vscode.dev local folders error screenshot" 
    caption="Screenshot of the error vscode.dev gives" >}}

This support was intentionally removed by the Brave team as they deemed it to be unsafe. See https://github.com/brave/brave-browser/issues/11407.

## Solution

If you want to disregard the security concerns (do so at your own risk, of course) there is a simple workaround tucked away.

1. Go to {{% copy-to-clipboard id="file-system-access-api-flag" %}}`brave://flags/#file-system-access-api`{{% /copy-to-clipboard %}}
2. Set the `File System Access API` flag to `Enabled`

Relaunch the browser. [vscode.dev] should now work as expected.

[vscode.dev]: https://vscode.dev
