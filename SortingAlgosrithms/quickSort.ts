function myPartition(array: number[], low: number, high: number): number {
  const pivot = array[high];

  // we don't check the last index as we are using it as pivot
  let [i, j] = [low, high - 1];

  while (i < j) {
    while (i < j) {
      if (array[i] > pivot) {
        break;
      }
      ++i;
    }

    while (j > i) {
      if (array[j] <= pivot) {
        break;
      }
      --j;
    }

    [array[i], array[j]] = [array[j], array[i]];
  }

  [array[i], array[high]] = [array[high], array[i]];

  return i;
}

function quickSort(array: number[], low: number, high: number) {
  const numbersWithinBound = high - low;

  if (numbersWithinBound < 2) return;

  const pivotIndex = myPartition(array, low, high);

  if (pivotIndex === 0) {
    return;
  }

  if (!(pivotIndex - low <= 1)) {
    quickSort(array, low, pivotIndex - 1);
  }

  if (!(high - pivotIndex <= 1)) {
    quickSort(array, pivotIndex + 1, high);
  }
}

const inputArr = [8, 7, 6, 1, 0, 9, 2];

quickSort(inputArr, 0, inputArr.length - 1);

console.log(inputArr);

////////////

const input = [1, 7, 4, 1, 10, 9, 2];

quickSort(input, 0, input.length - 1);

console.log(input);

///////////

const arr = [5, 6, 7, 1, 2, 3];

quickSort(arr, 0, arr.length - 1);

console.log(arr);

///////////
