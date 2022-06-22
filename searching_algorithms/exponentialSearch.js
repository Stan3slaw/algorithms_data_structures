function binarySearch(arrayToSearch, valueToSearch, start, end) {
  if (start <= end) {
    var middleIndex = Math.floor((end + start) / 2);
    var middleElem = arrayToSearch[middleIndex];
    if (middleElem === valueToSearch) {
      return middleIndex;
    } else if (valueToSearch < middleElem) {
      end = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }
    return binarySearch(arrayToSearch, valueToSearch, start, end);
  }
  return -1;
}

function exponentialSearch(arrayToSearch, valueToSearch) {
  const length = arrayToSearch.length;
  if (arrayToSearch[0] === valueToSearch) {
    return 0;
  }

  var i = 1;
  while (i < length && arrayToSearch[i] <= valueToSearch) {
    i = i * 2;
  }
  return binarySearch(arrayToSearch, valueToSearch, i / 2, Math.min(i, length - 1));
}

console.log(exponentialSearch([5, 7, 12, 36, 42, 56, 78, 90], 42));
