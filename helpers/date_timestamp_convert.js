module.exports = (date) => {
  this.date = new Date(date);
  function formatNumber(num) {
    return num >= 10 ? num : `0${num}`;
  }

  return `${formatNumber(this.date.getDate())}/${formatNumber(
    this.date.getMonth() + 1
  )}/${this.date.getFullYear()}`;
};
