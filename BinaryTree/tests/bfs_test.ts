import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";

import { nodeA } from "../helper/letterBasedBT.ts";
import { bfsQueueLoop } from "../bfs.ts";

Deno.test("Null as root node", () => {
  const result = bfsQueueLoop(null);
  assertEquals(result, []);
});

Deno.test("Binary tree with a height of 3 level", () => {
  const result = bfsQueueLoop(nodeA);
  assertEquals(result, ["a", "b", "c", "d", "e", "f"]);
});
