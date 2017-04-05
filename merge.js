/*jshint esversion: 6*/

function merge (array) {
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) !== 'number') {
      throw new Error("not all numbers");
    }
  }
    let split = parseInt(array.length / 2);
    let left = array.slice(0, split);
    let right = array.slice(split, array.length);
    if (array.length < 2) {
      return array;
    }
    return sort(merge(left), merge(right));
}

function sort (left, right) {
  if (Array.isArray(left) !== true || Array.isArray(right) !== true) {
    return false;
  }
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
}

module.exports = merge;