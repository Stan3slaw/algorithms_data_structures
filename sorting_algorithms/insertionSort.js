function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(insertionSort([4, 1, 54, 8, 20, 11]));
