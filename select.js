/*jshint esversion: 6*/

function select (array) {
  if (Array.isArray(array) !== true) {
    return false;
  }
  let curr;
  let next;
  for (let i = 0; i < array.length - 1; i++) {
    if (typeof (array[i]) !== 'number' || typeof (array[array.length - 1]) !== 'number') {
      throw new Error('not all numbers');
    }
    curr = i;
    for (let y = i + 1; y < array.length; y++) {
      if (array[y] < array[curr]) {
        curr = y;
      }
    }
    if (curr !== i) {
      next = array[curr];
      array[curr] = array[i];
      array[i] = next;
    }
  }
  return array;
}
module.exports = select;