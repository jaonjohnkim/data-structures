var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addHead = function(value) {
    var newNode = Node(value);
    if (this.head) {
      var oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    } else {
      this.head = newNode;
    }    
  };

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    
    if (this.head === null) {
      this.head = newNode;
    }
    // console.log('New tail was added, list is now: ');
    // console.log(list);
  };

  list.removeHead = function() {
    var previousHead = this.head;
    this.head = previousHead.next;
    // console.log('Head was removed, list is now: ');
    // console.log(list);
    return previousHead.value;
  };

  list.removeNode = function(target) {
    var context = this;
    if (this.head.value === target) {
      return this.removeHead();
    }
    var recurseThroughListSavePrevious = function (node) {
      if (node.next !== null) {
        if (node.next.next === null) {
          var oldTail = node.next;
          context.tail = node;
          context.tail.next = null;
          return oldTail.value;
        } else if (node.next.value === target) {
          var oldValue = node.next.value;
          var newReferenceNode = node.next.next;
          node.next.next = null;
          node.next = newReferenceNode;
          return oldValue;
        } else {
          return recurseThroughListSavePrevious(node.next);
        }
      }
      return undefined;
    };
    return recurseThroughListSavePrevious(this.head);
  };

  list.removeTail = function(prevNode) {
    if (prevNode === undefined) {
      return this.removeNode(this.tail);
    }
    console.log(prevNode);
    var oldTail = this.tail;
    this.tail = prevNode.value;
    this.tail.next = null;
    return oldTail.value;
  };

  list.contains = function(target) {

    if (this.getNode(target)) {
      return true;
    }
    return false;

  };

  list.getNode = function(target) {
    var recurseThroughList = function (nextItem) {
      if (nextItem.value === target) {
        return nextItem;
      } else if (nextItem.next !== null) {
        return recurseThroughList(nextItem.next);
      }
      return false;
    };
    return recurseThroughList(this.head);
  };

  list.addTo = function(targetValue, newValue) {
    var nodeToAppendTo = this.getNode(targetValue);
    if (nodeToAppendTo) {
      var nextNode = nodeToAppendTo.next;
      nodeToAppendTo.next = new Node(newValue);
      nodeToAppendTo.next.next = nextNode;
    }
    
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
// console.log('OUR TEST START')
// ourLinkedList = LinkedList();
// ourLinkedList.addToTail('a');
// ourLinkedList.addToTail('b');
// ourLinkedList.addToTail('c');
// ourLinkedList.addToTail('d');
// ourLinkedList.addToTail('e');
// ourLinkedList.addToTail('f');
// ourLinkedList.addToTail('g');
// ourLinkedList.addToTail('h');
// ourLinkedList.addToTail('i');
// ourLinkedList.addToTail('j');
// ourLinkedList.removeHead();
// ourLinkedList.removeHead();
// console.log('OUR TEST FINISH')