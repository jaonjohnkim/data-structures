var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  _.extend(newTree, treeMethods);
  
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var checkForTarget = function (tree) {
    if (tree.value === target) {
      return true;
    } else {
      if (tree.children.length > 0) {
        for (var i = 0; i < tree.children.length; i++) {
          if (checkForTarget(tree.children[i])) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return checkForTarget(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
