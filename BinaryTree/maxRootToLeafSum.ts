import btNode from "./btNode.ts";

function maxRootToLeafSum(rootNode: btNode | null): number {
  if (rootNode === null) return 0;

  const stack: btNode[] = [];
  const maxSumPathNums: number[] = [];

  stack.push(rootNode);

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode === undefined) continue;

    maxSumPathNums.push(Number(currentNode.data));

    if (currentNode.left === null && currentNode.right === null) continue;
    if (currentNode.left !== null && currentNode.right !== null) {
      if (currentNode.left >= currentNode.right) {
        stack.push(currentNode.left);
        continue;
      } else {
        stack.push(currentNode.right);
        continue;
      }
    }

    if (currentNode.left !== null) stack.push(currentNode.left);
    if (currentNode.right !== null) stack.push(currentNode.right);
  }

  const sum = maxSumPathNums.reduce((acc, current) => acc + current);

  return sum;
}

export default maxRootToLeafSum;
