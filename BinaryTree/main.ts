import { dfsStackRecursion, dfsRecursion, dfsStackLoop } from "./dfs.ts";
import { bfsQueueLoop } from "./bfs.ts";
import { treeIncludesDFS, treeIncludesBFS } from "./treeIncludes.ts";
import { treeSumDFS, treeSumBFS } from "./treeSum.ts";
import { treeMinValueDFS, treeMinValueBFS } from "./treeMinValue.ts";
import maxRootToLeafSum from "./maxRootToLeafSum.ts";
import { nodeA } from "./helper/letterBasedBT.ts";
import node1 from "./helper/numberBasedBT.ts";

const result1 = dfsRecursion(nodeA, []);
const result2 = dfsStackRecursion(nodeA, []);
const result3 = dfsStackLoop(nodeA);

console.log("--------- DFS ---------");

console.log(result1);
console.log(result2);
console.log(result3);

console.log("--------- BFS ---------");

const result4 = bfsQueueLoop(nodeA);

console.log(result4);

console.log("--------- Tree Includes ---------");

const result5 = treeIncludesBFS(nodeA, "e");
const result6 = treeIncludesDFS(nodeA, "e");

console.log(result5, result6);

console.log("--------- Tree Sum ---------");

const sumOfBTValuesDFS = treeSumDFS(node1);
const sumOfBTValuesBFS = treeSumBFS(node1);

console.log(sumOfBTValuesDFS, sumOfBTValuesBFS);

console.log("--------- Tree Min Value ---------");

const minBTValueDFS = treeMinValueDFS(node1);
const minBTValueBFS = treeMinValueBFS(node1);

console.log(minBTValueDFS, minBTValueBFS);

console.log("--------- Max Root To Leaf SUm ---------");

const maxSum = maxRootToLeafSum(node1);

console.log(maxSum);
