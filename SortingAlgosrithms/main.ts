function myMerge(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];

  while (arr1.length + arr2.length > 0) {
    if (arr1.length === 0) {
      mergedArray.push(arr2.shift());
      continue;
    }
    if (arr2.length === 0) {
      mergedArray.push(arr1.shift());
      continue;
    }

    if (arr1[0] <= arr2[0]) {
      mergedArray.push(arr1.shift());
    } else {
      mergedArray.push(arr2.shift());
    }
  }

  return mergedArray;
}

function merge(arr: number[], L: number, M: number, R: number) {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);

  console.log(left, right);

  let [i, j, k] = [L, 0, 0];

  while (j < left.length && k < right.length) {
    if (left[j] <= right[k]) {
      arr[i] = left[j];
      j += 1;
    } else {
      arr[i] = right[k];
      k += 1;
    }
  }

  while (j < left.length) {
    arr[i] = left[j];
    j += 1;
    i += 1;
  }

  while (k < right.length) {
    arr[i] = right[k];
    k += 1;
    i += 1;
  }
}

function mergeSort(
  unsortedArr: number[],
  left: number,
  right: number
): number[] {
  if (unsortedArr.length === 0) return [];

  if (left === right) return unsortedArr;

  const middle = Math.floor((left + right) / 2);

  mergeSort(unsortedArr, left, middle);
  mergeSort(unsortedArr, middle + 1, right);
  merge(unsortedArr, left, middle, right);

  return unsortedArr;
}

const unsortedArray = [12, 11, 13, 5, 6, 7];
const sortedArray = mergeSort(unsortedArray, 0, unsortedArray.length - 1);

console.log(sortedArray);
// Expected: [5, 6, 7, 11, 12, 13]
