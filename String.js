const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    return "String can't be empty";
  }
};

module.exports = stringLength;
