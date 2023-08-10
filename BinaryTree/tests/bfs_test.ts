import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";

import {
  bfs_test_00,
  bfs_test_01,
  bfs_test_02,
  bfs_test_03,
} from "../sampleBTs/bfsSampleBT.ts";
import { bfsQueueLoop } from "../bfs.ts";

Deno.test("Null as root node", () => {
  const result = bfsQueueLoop(null);
  assertEquals(result, []);
});

Deno.test("Test with BT Sample 00", () => {
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  const result = bfsQueueLoop(bfs_test_00);
  assertEquals(result, ["a", "b", "c", "d", "e", "f"]);
});

Deno.test("Test with BT Sample 01", () => {
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /       \
  //   g         h

  const result = bfsQueueLoop(bfs_test_01);
  assertEquals(result, ["a", "b", "c", "d", "e", "f", "g", "h"]);
});

Deno.test("Test with BT Sample 02", () => {
  //      a

  const result = bfsQueueLoop(bfs_test_02);
  assertEquals(result, ["a"]);
});

Deno.test("Test with BT Sample 03", () => {
  //      a
  //       \
  //        b
  //       /
  //      c
  //    /  \
  //   x    d
  //         \
  //          e

  const result = bfsQueueLoop(bfs_test_03);
  assertEquals(result, ["a", "b", "c", "x", "d", "e"]);
});
