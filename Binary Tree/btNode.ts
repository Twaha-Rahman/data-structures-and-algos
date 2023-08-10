class btNode {
  data: string | number;
  left: btNode | null;
  right: btNode | null;

  constructor(...args: [string | number, btNode?, btNode?]) {
    this.data = args[0];

    if (args[1] === undefined || args[1] === null) {
      this.left = null;
    } else {
      this.left = args[1];
    }

    if (args[2] === undefined || args[2] === null) {
      this.right = null;
    } else {
      this.right = args[2];
    }
  }
}

export default btNode;
