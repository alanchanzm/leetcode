import TreeNode from './treeNode';

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const treeNode = new TreeNode(val);
    insertNode(this.root, treeNode);

    function insertNode(root, node) {
      if (root === null) {
        root = node;
      } else if (node.val < root.val) {
        insertNode(root.left, node);
      } else {
        insertNode(root.right, node);
      }
    }
  }
}

export default Tree;
