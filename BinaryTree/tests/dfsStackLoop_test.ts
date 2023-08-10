import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";

import {
  dfs_test_00,
  dfs_test_01,
  dfs_test_02,
  dfs_test_03,
} from "../sampleBTs/dfsSampleBT.ts";
import { dfsStackLoop } from "../dfs.ts";

Deno.test("Null as root node", () => {
  const result = dfsStackLoop(null);
  assertEquals(result, []);
});

Deno.test("Test with BT Sample 00", () => {
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  const result = dfsStackLoop(dfs_test_00);
  assertEquals(result, ["a", "b", "d", "e", "c", "f"]);
});

Deno.test("Test with BT Sample 01", () => {
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /
  //   g

  const result = dfsStackLoop(dfs_test_01);
  assertEquals(result, ["a", "b", "d", "e", "g", "c", "f"]);
});

Deno.test("Test with BT Sample 02", () => {
  //      a

  const result = dfsStackLoop(dfs_test_02);
  assertEquals(result, ["a"]);
});

Deno.test("Test with BT Sample 03", () => {
  //      a
  //       \
  //        b
  //       /
  //      c
  //       \
  //        d
  //         \
  //          e

  const result = dfsStackLoop(dfs_test_03);
  assertEquals(result, ["a", "b", "c", "d", "e"]);
});
