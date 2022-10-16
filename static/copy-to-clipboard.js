function copyToClipboard(textElementId) {
  element = document.getElementById(textElementId);
  const copyText = element.textContent;
  navigator.clipboard.writeText(copyText);
}
