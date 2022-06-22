function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }
  let minVal = array[0];
  let maxVal = array[0];

  array.forEach((currentVal) => {
    if (currentVal > maxVal) {
      maxVal = currentVal;
    } else if (currentVal < minVal) {
      minVal = currentVal;
    }
  });

  const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  array.forEach(function (currentVal) {
    buckets[Math.floor((currentVal - minVal) / bucketSize)].push(currentVal);
  });

  array.length = 0;

  buckets.forEach(function (bucket) {
    insertionSort(bucket);
    bucket.forEach(function (element) {
      array.push(element);
    });
  });
  return array;
}

console.log(
  bucketSort(
    [0.897, 0.565, 0.656, 3, 0.1234, 1, 0.665, 0.3434, 5, 0.2, 0.3231, 0.8999, 0.23213],
    2,
  ),
);
