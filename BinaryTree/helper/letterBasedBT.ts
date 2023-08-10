import btNode from "../btNode.ts";

// Sample One
const nodeD = new btNode("d");
const nodeE = new btNode("e");
const nodeF = new btNode("f");
const nodeB = new btNode("b", nodeD, nodeE);
const nodeC = new btNode("c", undefined, nodeF);
const nodeA = new btNode("a", nodeB, nodeC);

const a = new btNode("a");
const b = new btNode("b");
const c = new btNode("c");
const d = new btNode("d");
const e = new btNode("e");
const f = new btNode("f");
const g = new btNode("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

export { nodeA };
