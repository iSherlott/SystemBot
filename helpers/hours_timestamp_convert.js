module.exports = (date) => {
  this.date = new Date(date);
  function formatNumber(num) {
    return num >= 10 ? num : `0${num}`;
  }

  return `${formatNumber(this.date.getHours())}:${formatNumber(
    this.date.getMinutes()
  )}:${formatNumber(this.date.getSeconds())}`;
};
