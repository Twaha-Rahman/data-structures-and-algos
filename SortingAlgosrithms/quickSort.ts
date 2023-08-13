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

export default quickSort;
