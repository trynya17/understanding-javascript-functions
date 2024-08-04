const flattenedArray = arr => [].concat(...arr);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const getRandomBoolean = () => Math.random() >= 0.5;