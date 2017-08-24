var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  _.extend(newTree, treeMethods);
  
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(value);
};

treeMethods.contains = function(target) {
  
  checkForTarget(this);
  
  function checkForTarget(node) {
    if (node.value === target) {
      return true;
    } else {
      if (node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          checkForTarget(node.children[i]);
        }
      }
    }
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
