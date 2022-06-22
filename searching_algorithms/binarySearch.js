function binarySearch(arr, key) {
  const middleIndex = Math.floor(arr.length / 2);
  const middleElem = arr[middleIndex];

  if (middleElem === key) {
    return middleIndex;
  } else if (middleElem < key && arr.length > 1) {
    return binarySearch(arr.splice(middleIndex, arr[arr.length - 1]), key);
  } else if (middleElem > key && arr.length > 1) {
    return binarySearch(arr.splice(0, middleIndex), key);
  } else {
    return -1;
  }
}

console.log(binarySearch([5, 7, 12, 36, 42, 56, 78, 90], 42));
