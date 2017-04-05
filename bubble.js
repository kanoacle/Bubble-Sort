/*jshint esversion: 6*/

function bubble (array) {
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      return false;
    } else {
      let swap;
      do {
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