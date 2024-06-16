var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const scriptRootPath = path.join(repositoryRootPath, 'script');