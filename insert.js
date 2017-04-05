/*jshint esversion: 6*/

function insert (array) {
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    while (i > -1) {
      if (typeof (array[i]) !== 'number') {
        throw new Error("not all numbers");
      } else if (array[i] > array[i + 1]) {
        let curr = array[i];
        array[i] = array [i + 1];
        array[i + 1] = curr;
        i--;
      } else {
        break;
      }
    }
  }
  return array;
}
module.exports = insert;