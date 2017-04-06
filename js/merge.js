/*jshint esversion: 6*/

function merge (array) {
//validation check to make sure the input is an array
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
//validation check to make sure all indices of the input are numbers
    if (typeof (array[i]) !== 'number') {
      throw new Error("not all numbers");
    }
  }
//initializing array variables for the indices left and right of the center index
    let split = parseInt(array.length / 2);
    let left = array.slice(0, split);
    let right = array.slice(split, array.length);
//base case
    if (array.length < 2) {
      return array;
    }
//returning the sorted array using my sort function and recursion on the left and right arrays
    return sort(merge(left), merge(right));
}

function sort (left, right) {
  if (Array.isArray(left) !== true || Array.isArray(right) !== true) {
    return false;
  }
//initializing a result value to be an array
    let result = [];
    while (left.length && right.length) {
//comparing values and pushing values to the result array from least to greatest
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
//pushing values from a single array if only the left or right sides have values left in them
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
//returing result to be returned in merge function
    return result;
}

module.exports = merge;