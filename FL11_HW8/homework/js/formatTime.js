function formatTime (minutesArg) {
  const days = Math.floor(minutesArg / (24 * 60));
  const hours = Math.floor((minutesArg % (24 * 60)) / 60);
  const minutes = Math.floor((minutesArg % (24 * 60)) % 60);
  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`
}

formatTime(120);
formatTime(59);
formatTime(3601);