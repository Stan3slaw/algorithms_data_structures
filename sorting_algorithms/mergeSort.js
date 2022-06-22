function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const firstPart = arr.slice(0, middleIndex);
  const secondPart = arr.slice(middleIndex);
  return merge(mergeSort(firstPart), mergeSort(secondPart));
}

function merge(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    let minVal;
    if (arr1[0] < arr2[0]) {
      minVal = arr1.shift();
    } else {
      minVal = arr2.shift();
    }
    result.push(minVal);
  }

  if (arr1.length) {
    result = [...result, ...arr1];
  } else {
    result = [...result, ...arr2];
  }
  return result;
}

console.log(mergeSort([100, -20, 30, -40, 10, 11]));
