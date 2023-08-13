import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";

import quickSort from "../quickSort.ts";

Deno.test("Sorts an array properly", () => {
  const inputArr = [8, 7, 6, 1, 0, 9, 2];

  quickSort(inputArr, 0, inputArr.length - 1);

  assertEquals(inputArr, [0, 1, 2, 6, 7, 8, 9]);
});

Deno.test("Sorts an array with repeated numbers", () => {
  const inputArr = [1, 7, 4, 1, 10, 9, 2];

  quickSort(inputArr, 0, inputArr.length - 1);

  assertEquals(inputArr, [1, 1, 2, 4, 7, 9, 10]);
});

Deno.test(
  "Does not throw when an array fileed with the same number is passed",
  () => {
    const inputArr = [5, 5, 5, 5, 5, 5, 5];

    quickSort(inputArr, 0, inputArr.length - 1);

    assertEquals(inputArr, [5, 5, 5, 5, 5, 5, 5]);
  }
);

Deno.test("Does not throw when an array with only 1 element is passed", () => {
  const inputArr = [8];

  quickSort(inputArr, 0, inputArr.length - 1);

  assertEquals(inputArr, [8]);
});

Deno.test("Does not throw when an empty array is passed", () => {
  const inputArr: number[] = [];

  quickSort(inputArr, 0, inputArr.length - 1);

  assertEquals(inputArr, []);
});
