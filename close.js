const lastElement = arr => arr[arr.length - 1];
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};