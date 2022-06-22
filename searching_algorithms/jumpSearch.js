function jumpSearch(arr, target) {
  const len = arr.length;
  const step = Math.floor(Math.sqrt(len));
  let blockStart = 0;
  let currentStep = step;

  while (arr[Math.min(currentStep, len) - 1] < target) {
    blockStart = currentStep;
    currentStep += step;

    if (blockStart >= len) return -1;
  }

  while (arr[blockStart] < target) {
    blockStart++;
    if (blockStart == Math.min(currentStep, len)) return -1;
  }

  if (arr[blockStart] === target) return blockStart;
  else return -1;
}

console.log(jumpSearch([5, 7, 12, 36, 42, 56, 78, 90], 90));
