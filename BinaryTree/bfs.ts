import btNode from "./btNode.ts";

function bfsQueueLoop(rootNode: btNode): any[] {
  const result: any[] = [];
  const queue: btNode[] = [];

  queue.unshift(rootNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode === undefined) break;
    result.push(currentNode.data);

    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }

  return result;
}

export { bfsQueueLoop };
