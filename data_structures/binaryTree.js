class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder(node, callback) {
    if (!node) {
      return;
    }
    if (callback) {
      callback(node);
    }
    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }

  inOrder(node, callback) {
    if (!node) {
      return;
    }
    this.inOrder(node.left, callback);
    if (callback) {
      callback(node);
    }
    this.inOrder(node.right, callback);
  }

  postOrder(node, callback) {
    if (!node) {
      return;
    }
    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);
    if (callback) {
      callback(node);
    }
  }

  treverseDFS(callback, method) {
    if (method === 'preOrder') {
      return this.preOrder(this.root, callback);
    }

    if (method === 'inOrder') {
      return this.inOrder(this.root, callback);
    }

    if (method === 'postOrder') {
      return this.postOrder(this.root, callback);
    }
  }

  treverseBFS(callback) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      callback(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  ifNodeExists(node, key) {
    if (!node) {
      return false;
    }

    if (node.value === key) {
      return true;
    }

    let res1 = this.ifNodeExists(node.left, key);
    if (res1) {
      return res1;
    }

    let res2 = this.ifNodeExists(node.right, key);
    return res2;
  }
}

const myTree = new BinaryTree();

myTree.add('abc');
myTree.add('cbs');
myTree.add('zkl');
myTree.add('pqw');
myTree.add('bac');
myTree.add('klm');
myTree.add('zyu');
myTree.add('ter');

// console.log(myTree);

// myTree.treverseDFS((node) => {
//   console.log(node.value);
// }, 'inOrder');

// myTree.treverseBFS((node) => {
//   console.log(node.value);
// });

console.log(myTree.ifNodeExists(myTree.root, 'zkl'));
