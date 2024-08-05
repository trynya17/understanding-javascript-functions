const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);