import btNode from "./btNode.ts";
import { dfsStackLoop } from "./dfs.ts";
import { bfsQueueLoop } from "./bfs.ts";

function treeIncludesBFS(rootNode: btNode, thingToCheck: any): boolean {
  let includedData = bfsQueueLoop(rootNode);

  return includedData.includes(thingToCheck);
}

function treeIncludesDFS(rootNode: btNode, thingToCheck: any): boolean {
  let includedData = dfsStackLoop(rootNode);

  return includedData.includes(thingToCheck);
}

export { treeIncludesBFS, treeIncludesDFS };
