function partition(array: number[], start: number, end: number): number {
  const pivot = array[end];

  let [i, j] = [start - 1, start];

  while (j <= end - 1) {
    if (array[j] <= pivot) {
      i++;
      [array[j], array[i]] = [array[i], array[j]];
    }

    j++;
  }

  i++;
  [array[i], array[end]] = [array[end], array[i]];

  return i;
}

function quickSort(array: number[], start: number, end: number) {
  if (end <= start) return;

  const pivotIndex = partition(array, start, end);
  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);
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
