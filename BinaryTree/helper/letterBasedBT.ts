import btNode from "../btNode.ts";

// dfs-test-00
const nodeD = new btNode("d");
const nodeE = new btNode("e");
const nodeF = new btNode("f");
const nodeB = new btNode("b", nodeD, nodeE);
const nodeC = new btNode("c", undefined, nodeF);
const nodeA = new btNode("a", nodeB, nodeC);

// dfs-test-01
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

// dfs-test-02
const node_a = new btNode("a");

//dfs-test-03
const n_a = new btNode("a");
const n_b = new btNode("b");
const n_c = new btNode("c");
const n_d = new btNode("d");
const n_e = new btNode("e");

n_a.right = n_b;
n_b.left = n_c;
n_c.right = n_d;
n_d.right = n_e;

export { nodeA };
