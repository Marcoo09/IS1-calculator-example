const { Exceptions } = require("./exceptions");

const sum = (a, b) => a + b;

const div = (a, b) => {
  if (b === 0) {
    return () => {
      throw new Error(Exceptions.DIVISION_BY_ZERO);
    };
  } else {
    return a / b;
  }
};

module.exports = {
  sum,
  div,
};
