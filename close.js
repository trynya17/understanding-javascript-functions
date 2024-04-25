const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};