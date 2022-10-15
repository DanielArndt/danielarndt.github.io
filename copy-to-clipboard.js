/*
 * Some methods for copying to the clipboard and updating a tooltip.
 */

function copyToClipboard(textElementId) {
  element = document.getElementById(textElementId);
  const copyText = element.textContent;
  navigator.clipboard.writeText(copyText);
}
