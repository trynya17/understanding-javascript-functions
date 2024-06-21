const intermediateAppPath = path.join(buildOutputPath, 'app');
const merge = (a, b) => [...a, ...b];
const stringReverse = str => str.split("").reverse().join("");