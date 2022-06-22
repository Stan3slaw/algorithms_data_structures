function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort([23, 45, 16, 37, 3, 99, 22]));
