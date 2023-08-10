import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";

import { nodeA } from "../helper/letterBasedBT.ts";
import { dfsStackLoop, dfsRecursion } from "../dfs.ts";

Deno.test("Null as root node", () => {
  const result = dfsStackLoop(null);
  assertEquals(result, []);
});

Deno.test("Binary tree with a height of 3 level", () => {
  const result = dfsStackLoop(nodeA);
  assertEquals(result, ["a", "b", "d", "e", "c", "f"]);
});
