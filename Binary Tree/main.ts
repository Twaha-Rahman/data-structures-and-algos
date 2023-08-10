import btNode from "./btNode.ts";
import { dfsStackRecursion, dfsRecursion, dfsStackLoop } from "./dfs.ts";
import { bfsQueueLoop } from "./bfs.ts";
import { treeIncludesDFS, treeIncludesBFS } from "./treeIncludes.ts";
import { treeSumDFS, treeSumBFS } from "./treeSum.ts";
import { treeMinValueDFS, treeMinValueBFS } from "./treeMinValue.ts";
import maxRootToLeafSum from "./maxRootToLeafSum.ts";

const nodeD = new btNode("d");
const nodeE = new btNode("e");
const nodeF = new btNode("f");
const nodeB = new btNode("b", nodeD, nodeE);
const nodeC = new btNode("c", undefined, nodeF);
const nodeA = new btNode("a", nodeB, nodeC);

const node6 = new btNode(2);
const node5 = new btNode(1);
const node4 = new btNode(4);
const node3 = new btNode(4, undefined, node5);
const node2 = new btNode(11, node4, node6);
const node1 = new btNode(3, node2, node3);

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
