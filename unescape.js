const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const getRandomBoolean = () => Math.random() >= 0.5;
const randomString = () => Math.random().toString(36).slice(2);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);