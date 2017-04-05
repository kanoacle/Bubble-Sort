/*jshint esversion: 6*/

function select (array) {
//validation check to make sure the input is an array
  if (Array.isArray(array) !== true) {
    return false;
  }
//initializing minimum value variables for sorting
  let curr;
  let next;
  for (let i = 0; i < array.length - 1; i++) {
//validation check to make sure all indices of the input are numbers
    if (typeof (array[i]) !== 'number' || typeof (array[array.length - 1]) !== 'number') {
      throw new Error('not all numbers');
    }
//setting current minimum value to the first index in the array and comparing values
    curr = i;
    for (let y = i + 1; y < array.length; y++) {
      if (array[y] < array[curr]) {
        curr = y;
      }
    }
//sorting by comparing values switching the minimum until completion
    if (curr !== i) {
      next = array[curr];
      array[curr] = array[i];
      array[i] = next;
    }
  }
  return array;
}
module.exports = select;