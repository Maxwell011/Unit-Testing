const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    return "String can't be empty";
  }
};

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = { stringLength, capitalize };
