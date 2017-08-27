var DoublyLinkedList = function() {
  var doubleList = {};
  doubleList.head = null;
  doubleList.butt = null;


  doubleList.addHead = function(value) {
    var oldHead = this.head;
    var newHead = new Node(value);
    if (oldHead) {
      newHead.next = oldHead;
      oldHead.prev = newHead;
      this.head = newHead;
    } else {
      this.head = newHead;
      if (!this.butt) {
        this.butt = newHead;
      }
    }
  };

  doubleList.addToButt = function(value) {
    var oldButt = this.butt;
    var newButt = new Node(value);
    if (oldButt) {
      newButt.prev = oldButt;
      oldButt.next = newButt;
      this.butt = newButt;
    } else {
      this.butt = newButt;
      if (!this.head) {
        this.head = newButt;
      }
    }
  };

  doubleList.removeHead = function() {
    var oldHead = this.head;
    if (oldHead) {
      var newHead = oldHead.next;
      if (newHead) {
        oldHead.next = null;
        newHead.prev = null;
        this.head = newHead;
        return oldHead.value;
      } else {
        this.head = null;
      }
    }
  };

  doubleList.removeNode = function(target) {
    var traverse = function(node) {
      if (node.value === target) {
        var nextNode = node.next;
        var prevNode = node.prev;
        node.next = null;
        node.prev = null;
        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        return node.value;
      } else if (node.next === null) {
        return undefined;
      } else {
        return traverse(node.next);
      }
    };
    return traverse(this.head);
  };

  doubleList.removeButt = function() {
    var oldButt = this.butt;
    if (oldButt) {
      var newButt = oldButt.prev;
      if (newButt) {
        oldButt.prev = null;
        newButt.next = null;
        this.butt = newButt;
        return oldButt.value;
      } else {
        this.butt = null;
      }
    }
  };

  doubleList.contains = function(target) {
    var traverse = function (node) {
      if (node.value === target) {
        return true;
      } else if (node.next/*value*/ !== null) {
        return traverse(node.next);
      } else {
        return false/*undefined*/;
      }
    };
    return traverse(this.head);
  };

  doubleList.getNode = function(target) {
    var traverse = function (node) {
      if (node.value === target) {
        return node;
      } else if (node.next) {
        return traverse(node.next);
      } else {
        return undefined;
      }
    };
    return traverse(this.head);
  };

  doubleList.appendTo = function(target, newValue) {
    var traverse = function (node) {
      if (node.value === target) {
        var previousNextNode = node.next;
        var newNode = new Node(newValue);
        node.next = newNode;
        newNode.prev = node;
        newNode.next = previousNextNode;
        previousNextNode.prev = newNode;
        return;
      } else if (node.next) {
        traverse(node.next);
      } else {
        var newNode = new Node(newValue);
        node.next = newNode;
        newNode.prev = node;
        return;
      }
    };
    return traverse(this.head);
  };

  doubleList.prependTo = function(targetValue, newValue) {
    var traverse = function(node) {
      //base case: target value is found
      if (node.value === targetValue) {
        //save current node as old node
        var oldNode = node;
        //generate new node
        var newNode = new Node(newValue);
        //assign the new node's next to old node
        newNode.next = oldNode;
        var prevNode = oldNode.prev;
        //assign the old node's prev to new node
        prevNode.next = newNode;
        newNode.prev = prevNode;
        // prev - node
        // prev - newNode - node
      } else if (node.next) {
        return traverse(node.next);
      } else {
        return undefined;
      }
    };
    return traverse(this.head);
  };

  return doubleList;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// console.log('OUR TEST START')
// ourLinkeddoubleList = LinkeddoubleList();
// ourLinkeddoubleList.addToButt('a');
// ourLinkeddoubleList.addToButt('b');
// ourLinkeddoubleList.addToTail('c');
// ourLinkeddoubleList.addToTail('d');
// ourLinkeddoubleList.addToTail('e');
// ourLinkeddoubleList.addToTail('f');
// ourLinkeddoubleList.addToTail('g');
// ourLinkeddoubleList.addToTail('h');
// ourLinkeddoubleList.addToTail('i');
// ourLinkeddoubleList.addToTail('j');
// ourLinkeddoubleList.removeHead();
// ourLinkeddoubleList.removeHead();
// console.log('OUR TEST FINISH')