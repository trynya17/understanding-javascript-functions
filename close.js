const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;