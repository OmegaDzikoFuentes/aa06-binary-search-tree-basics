// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {

    this.root = null;

  }

  insert(val, currentNode=this.root) {

    //if there is no root, create root node and insert
    if(!this.root) {

      this.root = new TreeNode(val);

      return;

    }

    //if value is less than curr value
    if(val < currentNode.val) {

      //check if current node has left pointer
      if(!currentNode.left) {

        //place node at current node's left
        currentNode.left = new TreeNode(val);

      } else { //if it does have a left pointer, recursively call insert passing in the lfeft pointer

        this.insert(val, currentNode.left);

      }

    } else { //if value is higher than current node value

      if(!currentNode.right) {

        //insert the node at current node
        currentNode.right = new TreeNode(val);

      } else { //recursively call insert for the current node

        this.insert(val, currentNode.right);

      }

    }

  }

  search(val) {

    //if root is null, return false because tree is empty
    if(!this.root) {

      return false;

    }

    //set root node to current variable
    let current = this.root;

    //loop and seach through nodes
    while(current) {

      //if the value is lower go left by reassgining current to the left
      if(val < current.val) {

        current = current.left;

      } else if(val > current.val) {

          current = current.right;

        } else {

          return true;

        }

      }

      return false;

  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
