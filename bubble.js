/*jshint esversion: 6*/

const bubble = function (array) {
  if (Array.isArray(array) !== true) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      return false;
    } else {
      var swap;
      do {
        swap = false;
        for (var y = 0; y < array.length; y++) {
          if (array[y] > array[y + 1]) {
            var curr = array[y];
            array[y] = array[y + 1];
            array[y + 1] = curr;
            swap = true;
          }
        }
      } while (swap === true);
    }
  }
  return array;
};
module.exports = bubble;