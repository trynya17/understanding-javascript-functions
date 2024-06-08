var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const updated = numbers.filter(element => element > 6);