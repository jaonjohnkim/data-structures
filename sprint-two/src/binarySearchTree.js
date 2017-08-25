var BinarySearchTree = function(value) {
  var newTree = {
    value: value,
    left: null,
    right: null
  };
  newTree.insert = function(val) {
    var anotherTree = BinarySearchTree(val);

    var checkTree = function(val, tree) {
      if (val > tree.value) {
        if (tree.right === null) {
          tree.right = anotherTree;
        } else {
          checkTree(val, tree.right);
        }
      } else {
        if (tree.left === null) {
          tree.left = anotherTree;
        } else {
          checkTree(val, tree.left);
        }
      }
    };

    checkTree(val, newTree);
  };
  newTree.contains = function(val) {
    var checkValue = function(val, tree) {
      if (val === tree.value) {
        return true;
      } else if (val > tree.value) {
        if (tree.right !== null) {
          return checkValue(val, tree.right);
        } else {
          return false;
        }
      } else {
        if (tree.left !== null) {
          return checkValue(val, tree.left);
        } else {
          return false;
        }
      }  
    };
    return checkValue(val, newTree);
  };

  newTree.depthFirstLog = function(func) { 
    var allValues = [];
    var goThruTree = function(tree) {
      func(tree.value);
      if (tree.left !== null) {
        goThruTree(tree.left);
      } 
      if (tree.right !== null) {
        goThruTree(tree.right);
      }
    };
    goThruTree(newTree);
    return allValues;
  };
  return newTree;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
