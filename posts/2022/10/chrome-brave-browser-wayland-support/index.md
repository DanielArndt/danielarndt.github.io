# Enable Wayland support on Chrome / Brave Browser


## Description

If you get blurry windows with Chrome or Brave, and you’re using Wayland (the default window manager on Ubuntu), there is an easy fix. Once upon a time you had to edit the launch flags, which was a little more involved, but with more recent versions you can just edit the flag with the built in browser UI.

## Solution

Just head to {{% copy-to-clipboard id="flag" %}}`chrome://flags/#ozone-platform-hint`{{% /copy-to-clipboard %}} and change the drop down value to `auto`.

{{< figure src="ozone-flag.png" alt="ozone flag screenshot" caption="Screenshot of the Ozone platform hint browser flag" >}}

