/*jshint esversion: 6*/

function quick (array) {
  if (Array.isArray(array) !== true) {
    return false;
  }
    let left = [];
    let right = [];
    let pivot = array[0];
    if (array.length < 2) {
      return array;
    }
    for (let y = 1; y < array.length; y++) {
      if (typeof (array[y]) !== 'number' || typeof (pivot) !== 'number') {
        throw new Error("not all numbers");
      } else if (array[y] < pivot) {
        left.push(array[y]);
      } else {
        right.push(array[y]);
      }
    }
  array = quick(left).concat(pivot, quick(right));
  return array;
}
module.exports = quick;