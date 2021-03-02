module.exports = (setDate) => {
  function formatNumber(num) {
    return num >= 10 ? num : `0${num}`;
  }

  setDate = `${formatNumber(new Date(setDate).getMonth() + 1)}-${formatNumber(
    new Date(setDate).getDate()
  )}-${formatNumber(new Date(setDate).getFullYear())}`;

  setDate = new Date(setDate).getTime();
  return setDate;
};
