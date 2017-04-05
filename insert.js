/*jshint esversion: 6*/

function insert (array) {
//validation check to make sure the input is an array
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    while (i > -1) {
//validation check to make sure all indices of the input are numbers
      if (typeof (array[i]) !== 'number') {
        throw new Error("not all numbers");
      } else if (array[i] > array[i + 1]) {
//sorting the input by comparing values and placing the item under inspection in the correct index
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