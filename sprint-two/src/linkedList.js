var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

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

  list.contains = function(target) {
    var recurseThroughList = function (nextItem) {
      if (nextItem.value === target) {
        return true;
      } else if (nextItem.next !== null) {
        recurseThroughList(nextItem);
      }
      return false;
    };

    if (this.head.value === target) {
      return true;
    } else if (this.head.next !== null) {
      return recurseThroughList(this.head.next);
    } else {
      return false;
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