const scriptRootPath = path.join(repositoryRootPath, 'script');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();