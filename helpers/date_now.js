module.exports = () => {
  function formatNumber(num) {
    return num >= 10 ? num : `0${num}`;
  }

  return `${new Date().getFullYear()}-${formatNumber(
    new Date().getMonth() + 1
  )}-${formatNumber(new Date().getDate())}`;
};
