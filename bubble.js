/*jshint esversion: 6*/

function bubble (array) {
//validation check to make sure the input is an array
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
//validation check to make sure all indices of the input are numbers
    if (typeof array[i] !== 'number') {
      return false;
    } else {
      let swap;
      do {
//sorting the input by comparing value and swapping one at a time
        swap = false;
        for (let y = 0; y < array.length; y++) {
          if (array[y] > array[y + 1]) {
            let curr = array[y];
            array[y] = array[y + 1];
            array[y + 1] = curr;
            swap = true;
          }
        }
      } while (swap === true);
    }
  }
  return array;
}
module.exports = bubble;