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
  if (arr.length < 2) return [];
  if (l === r) return arr;

  const m = Math.floor((l + r) / 2);

  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);

  return arr;
}

export default mergeSort;
