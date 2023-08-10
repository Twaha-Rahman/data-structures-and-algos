import btNode from "./btNode.ts";
import { dfsStackLoop } from "./dfs.ts";
import { bfsQueueLoop } from "./bfs.ts";

function treeMinValueDFS(rootNode: btNode): number {
  const numbers = dfsStackLoop(rootNode);

  let smallestVal = NaN;

  numbers.forEach((num) => {
    const convertedNum = Number(num);

    if (isNaN(smallestVal) || smallestVal > convertedNum) {
      smallestVal = convertedNum;
    }
  });

  return smallestVal;
}

function treeMinValueBFS(rootNode: btNode): number {
  const numbers = bfsQueueLoop(rootNode);

  let smallestVal = NaN;

  numbers.forEach((num) => {
    const convertedNum = Number(num);

    if (isNaN(smallestVal) || smallestVal > convertedNum) {
      smallestVal = convertedNum;
    }
  });

  return smallestVal;
}

export { treeMinValueDFS, treeMinValueBFS };
