function fibonacciSearch(arr, x) {
  let length = arr.length;
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;

  while (fibM < length) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1;

  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, length - 1);

    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > x) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else return i;
  }

  if (fibMMm1 && arr[length - 1] == x) {
    return length - 1;
  }

  return -1;
}

console.log(fibonacciSearch([10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100, 235], 100));
