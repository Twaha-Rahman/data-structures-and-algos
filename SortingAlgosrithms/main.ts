function merge(arr: number[], L: number, M: number, R: number) {
  const [left, right] = [arr.slice(L, M + 1), arr.slice(M + 1, R + 1)];
  let [i, j, k] = [L, 0, 0];

  while (j < left.length && k < right.length) {
    if (left[j] <= right[k]) {
      arr[i] = left[j];
      j++;
    } else {
      arr[i] = right[k];
      k++;
    }
    ++i;
  }

  while (j < left.length) {
    arr[i] = left[j];
    j++;
    i++;
  }

  while (k < right.length) {
    arr[i] = right[k];
    k++;
    i++;
  }
  console.log(arr);
}

function mergeSort(arr: number[], l: number, r: number): number[] {
  if (l === r) return arr;

  const m = Math.floor((l + r) / 2);

  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);

  return arr;
}

const unsortedArray = [14, 12, 2, 1, 19, 18, 4, 3, 11, 13, 5, 6, 7];
const sortedArray = mergeSort(unsortedArray, 0, unsortedArray.length - 1);

// We modify the passed in array
console.log(sortedArray, unsortedArray);
// Expected: [5, 6, 7, 11, 12, 13]
