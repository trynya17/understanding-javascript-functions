const appName = getAppName(channel);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;