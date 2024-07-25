const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const buildOutputPath = path.join(repositoryRootPath, 'out');
const isEmptyObject = obj => Object.keys(obj).length === 0;