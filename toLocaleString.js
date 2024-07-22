const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const merge = (a, b) => [...a, ...b];