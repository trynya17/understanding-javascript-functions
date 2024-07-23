console.log("0 && 1 = "+(0 && 1));
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};