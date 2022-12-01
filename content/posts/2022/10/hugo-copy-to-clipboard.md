---
title: "How-to: Add a copy-to-clipboard button on hugo for inline code samples"
date: 2022-10-16
tags: ["tech", "hugo", "howto"]
categories: ["technology"]
---

## Motivation

When I first made my Hugo website, one of the very first things I wanted to do was add a “copy to clipboard” button next to important snippets. My theme came with a copy button for multi-line code snippets, but there was nothing available for `inline code like this`, i.e. the `<code>` HTML tag. It was pretty important for me to make how-to guides that were as simple and easy to follow as possible, and this was a feature that seemed worth the time to figure out.

## Outcome

Create a copy to clipboard button for {{% copy-to-clipboard id="example" %}}`code like this`{{% /copy-to-clipboard %}}.

The above line is written like this in the markdown.

```markdown
Create a copy to clipboard button for {{%/* copy-to-clipboard id="example" */%}}`code like this`{{%/* /copy-to-clipboard */%}}.
```

You can see a live example in [this post](posts/2022/10/chrome-brave-browser-wayland-support/).

## Solution

{{< admonition note >}}
I'm not a Hugo expert, nor an HTML, CSS, or JavaScript expert. All of these things I have only dabbled in. There is likely a better way to organize this or achieve this. I will show you how I accomplished it and hopefully you can improve it from there.
{{< / admonition >}}

### 1. Create the JavaScript and CSS files

The first step is to create a JavaScript file and create a function that will take in an element id, and then copy the text in that element to the clipboard.

Create `static/copy-to-clipboard.js` with the following contents.

```js
/*
 * Some methods for copying to the clipboard and updating a tooltip.
 */

function copyToClipboard(textElementId, tooltipId) {
  element = document.getElementById(textElementId);
  const copyText = element.textContent;
  navigator.clipboard.writeText(copyText);
  var tooltip = document.getElementById(tooltipId);
  tooltip.innerHTML = "Copied: " + copyText;
}

function tooltipReset(tooltipId) {
  var tooltip = document.getElementById(tooltipId);
  tooltip.innerHTML = "Copy to clipboard";
}
```

Create `static/tooltip.css` with the following contents.

```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
```

### 2. Include the files with the base layout html

{{< admonition note >}}
If you don't already have a `layouts/_default/baseof.html` file, your theme should. You can copy the contents of that file to this location to override the theme layout, then add the lines mentioned.
{{< / admonition >}}

In `layouts/_default/baseof.html` add the following to the `<head>` section

```html
<script src="/copy-to-clipboard.js" async></script>
<link rel="stylesheet" href="/tooltip.css">
```

### 3. Create the Hugo shortcode to use in markdown

Create the shortcode by creating a file `layouts/shortcodes/copy-to-clipboard.html`

```html
<span id="{{.Get `id`}}-text">
    {{.Inner}}
</span>
<span class="tooltip">
    <span class="tooltiptext" id="{{.Get `id`}}-tooltip">
        Copy to clipboard
    </span>
    <i class="fa fa-clipboard" style="font-size:12px; cursor:pointer;"
        onclick="copyToClipboard('{{.Get `id`}}-text', '{{.Get `id`}}-tooltip')"
        onmouseout="tooltipReset('{{.Get `id`}}-tooltip')">
    </i>
</span>
```

This is the part that will allow you to wrap any text in a markdown file like so
```
{{%/* copy-to-clipboard id="some-id" */%}}my text to copy{{%/* /copy-to-clipboard */%}}
```

You can use markdown or HTML to format the text if necessary, such as adding code tags. The JavaScript should select only the visible text to copy to the clipboard (i.e. not the markdown formatting).
