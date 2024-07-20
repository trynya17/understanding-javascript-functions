const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const channelName = getChannelName(channel);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;