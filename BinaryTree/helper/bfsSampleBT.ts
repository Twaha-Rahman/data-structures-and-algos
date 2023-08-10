import btNode from "../btNode.ts";

// bfs_test_00
const nodeD = new btNode("d");
const nodeE = new btNode("e");
const nodeF = new btNode("f");
const nodeB = new btNode("b", nodeD, nodeE);
const nodeC = new btNode("c", undefined, nodeF);
const nodeA = new btNode("a", nodeB, nodeC);

const bfs_test_00 = nodeA;

// bfs_test_01
const a = new btNode("a");
const b = new btNode("b");
const c = new btNode("c");
const d = new btNode("d");
const e = new btNode("e");
const f = new btNode("f");
const g = new btNode("g");
const h = new btNode("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

const bfs_test_01 = a;

// bfs_test_02
const bfs_test_02 = new btNode("a");

// bfs_test_03
const n_a = new btNode("a");
const n_b = new btNode("b");
const n_c = new btNode("c");
const n_d = new btNode("d");
const n_e = new btNode("e");
const n_x = new btNode("x");

n_a.right = n_b;
n_b.left = n_c;
n_c.left = n_x;
n_c.right = n_d;
n_d.right = n_e;

const bfs_test_03 = n_a;

export { bfs_test_00, bfs_test_01, bfs_test_02, bfs_test_03 };
