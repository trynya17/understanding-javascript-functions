const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const scriptRootPath = path.join(repositoryRootPath, 'script');