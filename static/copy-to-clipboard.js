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
