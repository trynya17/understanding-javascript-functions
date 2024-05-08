const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const merge = (a, b) => a.concat(b);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};