import btNode from "../btNode.ts";

const nodeD = new btNode("d");
const nodeE = new btNode("e");
const nodeF = new btNode("f");
const nodeB = new btNode("b", nodeD, nodeE);
const nodeC = new btNode("c", undefined, nodeF);
const nodeA = new btNode("a", nodeB, nodeC);

export default nodeA;
