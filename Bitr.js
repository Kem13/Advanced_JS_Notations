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

// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number, Find the total sum of all the numbers represented by all paths.

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function find_sum_of_path_numbers(root) {
    return find_root_to_leaf_path_numbers(root, 0);
  }
  
  function find_root_to_leaf_path_numbers(currentNode, pathSum) {
    if (currentNode === null) {
      return 0;
    }
  
    // calculate the path number of the current node
    pathSum = 10 * pathSum + currentNode.val;
  
    // if the current node is a leaf, return the current path sum
    if (currentNode.left === null && currentNode.right === null) {
      return pathSum;
    }
  
    // traverse the left and the right sub-tree
    return find_root_to_leaf_path_numbers(currentNode.left, pathSum) + 
           find_root_to_leaf_path_numbers(currentNode.right, pathSum);
  }
  
  
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);


// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
// Time complexity is O(N)
  const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  leftToRight = true;
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = new Deque();
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      // add the node to the current level based on the traverse direction
      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel.toArray());
    // reverse the traversal direction
    leftToRight = !leftToRight;
  }

  return result;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);