import btNode from "../btNode.ts";

const node6 = new btNode(2);
const node5 = new btNode(1);
const node4 = new btNode(4);
const node3 = new btNode(4, undefined, node5);
const node2 = new btNode(11, node4, node6);
const node1 = new btNode(3, node2, node3);

export default node1;
