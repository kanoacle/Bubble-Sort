/*jshint esversion: 6*/

const quick = function (array) {
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    var left = [];
    var right = [];
    var pivot = array[0];
    if (typeof array[i] !== 'number') {
      return false;
    } else {
      for (var y = 1; y < array.length; y++) {
        if (array[y] < pivot) {
          left.push(array[y]);
        } else {
          right.push(array[y]);
        }
      }
      array = quick(left).concat(pivot, quick(right));
    }
  }
  return array;
};
module.exports = quick;