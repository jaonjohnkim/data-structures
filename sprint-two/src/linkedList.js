var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if there is a tail, then the old tail will now reference .next to the new tail  
    var newTail = Node(value); // Created a new Node with list functionality ex | value | X |
    if (list.tail) { // Is there a tail already?
      list.tail.next = newTail; // if yes, we want to make our current tail to reference our upcoming new tail
    }
    list.head = list.head || newTail;
    list.tail = newTail; // reassign the tail title to our new tail
  };

  list.removeHead = function() {
    // check if head is null
    if (list.head) {
      // if exist
      // assign list.head.value to a variable
      var previous = list.head.value;      
      var oldHead = list.head;
      list.head = list.head.next;
      delete oldHead;
      return previous;
    }
    
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
