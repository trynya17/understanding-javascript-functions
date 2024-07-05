const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const isWeekday = (date) => date.getDay() % 6 !== 0;
function myAPITS(someString: string, someNum: number) { ... };