---
title: "Enable Wayland support on Chrome / Brave Browser"
date: 2022-10-05
draft: true
---

<script src="/copy-to-clipboard.js"></script>
<link rel="stylesheet" href="/tooltip.css">

If you get blurry windows with Chrome or Brave, and you’re using Wayland (the default window manager on Ubuntu), there is an easy fix. Once upon a time you had to edit the launch flags, which was a little more involved, but with more recent versions you can just edit the flag with the built in browser UI.

Just head to <a id="flag-text">`chrome://flags/#ozone-platform-hint`</a><span class="tooltip"><span class="tooltiptext" id="flag-tooltip">Copy to clipboard</span><i class="fa fa-clipboard" style="font-size:12px; cursor:pointer;" onclick="copyToClipboard('flag-text', 'flag-tooltip')" onmouseout="tooltipReset('flag-tooltip')"></i></span> and change the drop down value to `auto`.
