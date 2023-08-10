import btNode from "./btNode.ts";
import { dfsStackLoop } from "./dfs.ts";
import { bfsQueueLoop } from "./bfs.ts";

function treeSumDFS(rootNode: btNode): number {
  const numbers = dfsStackLoop(rootNode);

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return sum;
}

function treeSumBFS(rootNode: btNode): number {
  const numbers = bfsQueueLoop(rootNode);

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return sum;
}

export { treeSumDFS, treeSumBFS };
