import btNode from "./btNode.ts";

function dfsRecursion(
  passedNode: btNode,
  // passedStack: string[] | number[]
  passedStack: any[]
): string[] | number[] {
  if (passedNode === null) return passedStack;

  passedStack.push(passedNode.data);

  if (passedNode.left == null && passedNode.right == null) {
    return passedStack;
  }

  if (passedNode.left != null) {
    passedStack = dfsRecursion(passedNode.left, passedStack);
  }

  if (passedNode.right != null) {
    passedStack = dfsRecursion(passedNode.right, passedStack);
  }

  return passedStack;
}

function stack(
  passedStack: btNode[],
  // passedResult: string[] | number[]
  passedResult: any[]
): string[] | number[] {
  const currentNode = passedStack.pop();

  if (currentNode === undefined) {
    console.log("Reached unreacheable code!!");

    return [];
  }

  passedResult.push(currentNode.data);

  if (currentNode.right !== null) {
    passedStack.push(currentNode.right);
  }

  if (currentNode.left !== null) {
    passedStack.push(currentNode.left);
  }

  if (passedStack.length === 0) {
    return passedResult;
  } else {
    return stack(passedStack, passedResult);
  }
}

function dfsStackRecursion(
  passedNode: btNode,
  passedStack: btNode[]
): string[] | number[] {
  // const result: string[] | number[] = [];
  const result: any[] = [];

  if (passedNode === null) return result;

  passedStack.push(passedNode);
  const currentNode = passedStack.pop();

  if (currentNode === undefined) {
    console.log("Reached unreacheable code!!");

    return [];
  }

  result.push(currentNode.data);

  if (currentNode.right !== null) {
    passedStack.push(currentNode.right);
  }

  if (currentNode.left !== null) {
    passedStack.push(currentNode.left);
  }

  if (passedStack.length === 0) {
    return result;
  } else {
    return stack(passedStack, result);
  }
}

function dfsStackLoop(rootNode: btNode | null): string[] | number[] {
  if (rootNode === null) return [];

  const stack: btNode[] = [];
  // const result: string[] | number[] = [];
  const result: any[] = [];
  stack.push(rootNode);

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode === undefined) break;
    result.push(currentNode.data);

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  return result;
}

export { dfsRecursion, dfsStackRecursion, dfsStackLoop };
