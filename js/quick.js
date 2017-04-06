/*jshint esversion: 6*/

function quick (array) {
//validation check to make sure the input is an array
  if (Array.isArray(array) !== true) {
    return false;
  }
//initializing array variables for sorting
    let less = [];
    let greater = [];
    let pivot = array[0];
//base case
    if (array.length < 2) {
      return array;
    }
    for (let y = 1; y < array.length; y++) {
//validation check to make sure all indices of the input are numbers
      if (typeof (array[y]) !== 'number' || typeof (pivot) !== 'number') {
        throw new Error("not all numbers");
      } else if (array[y] < pivot) {
//sorting by comparing values and creating two arrays of numbers less than and greater than the pivot value
        less.push(array[y]);
      } else {
        greater.push(array[y]);
      }
    }
//setting value of the array to a recursive concatonated version of the less and greater arrays along with the pivot
  array = quick(less).concat(pivot, quick(greater));
//returning concatonated sorted array
  return array;
}
module.exports = quick;