const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const goToTop = () => window.scrollTo(0, 0);
var regexp  = new RegExp('{{([^}]+)}}', 'g');