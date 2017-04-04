/*jshint esversion: 6*/

module.exports = function (array) {
  newArray = array;
  if (Array.isArray(array) !== true) {
    return false;
  } else {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'number') {
        return false;
      }
        if (array[i] <= array[i + 1]) {
        }
    }
    return newArray;
  }
};
console.log(module.exports([1, 5, 3, 7]));