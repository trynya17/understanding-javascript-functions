const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const merge = Object.assign({}, obj1, obj2);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();