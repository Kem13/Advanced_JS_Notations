// Given a binary tree,and a number S find if the tree has a path from root-to-lear such that the sum of all the node values of that path equals S

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  
  function hasPath(root, sum) {
    if (root === null) {
      return false;
    }
  
    // if the current node is a leaf and its value is equal to the sum, we've found a path
    if (root.val === sum && root.left === null && root.right === null) {
      return true;
    }
  
    // recursively call to traverse the left and right sub-tree
    // return true if any of the two recursive call return true
    return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val);
  }
  
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Tree has path: ${hasPath(root, 23)}`);
  console.log(`Tree has path: ${hasPath(root, 16)}`);

  // Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.


  const Deque = require('./collections/deque');

  class TreeNode {
      constructor(val, left = null, right = null) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
  }

  function find_paths(root, sum) {
      allPaths = [];
      find_paths_recursive(currentNode, sum, new Deque(), allPaths);
      return allPaths;
  }

  function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
      if (currentNode === null) {
      return;
  }

  // add the current node to the path
  currentPath .push(currentNOde.val);

// If the current node is a learf and its value is equal to sum, save the current path
if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push(currentPath.toArray());
} else {
    // traverse the left sub-tree
    find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath)
    // traverse the right sub-tree
    find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath)
}
// remove the current node from the path to backtrakc,
// we need to remove the current node while we are going up the recursive call stacks.
currentPath.pop();
}