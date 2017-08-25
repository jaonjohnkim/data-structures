

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var firstLinkedList = this._storage.get(index);
  // if the index is undefined
  if (firstLinkedList === undefined) {
    // if yes, add a linked list that points to an empty array
    this._storage.set(index, {next: []});
  } else {
  // if there is something there, it is a linked list
    for (var i = 0; i < firstLinkedList.next.length; i++) { // then iterate thru the array
      // if key in the internal linked list matches our key
      if (firstLinkedList.next[i].next[0] === k) {
        // update the value
        firstLinkedList.next[i].next[1] = v;
        // return
        return;
      }
    }
  }
  // create a linked list of our k, v and push into the array
  var newLinkedList = {next: [k, v]};
  this._storage.get(index).next.push(newLinkedList);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //run get function to access the storage at that index
  var firstLinkedList = this._storage.get(index);
  //if it is a linked list
  if (firstLinkedList !== undefined) {
    //if the linked list is empty
    if (firstLinkedList.next.length === 0) {
      //return undefined
      return undefined;
    //if the linked list is not empty
    } else {
      //for loop
      for (var i = 0; i < firstLinkedList.next.length; i++) {
        //access the key at the second index of the linked list
        var key = firstLinkedList.next[i].next[0];
        //if the keys match
        if (key === k) {
          //return the value
          return firstLinkedList.next[i].next[1];
        }
      //end
      }
      //once the loop checks for all the keys, and finds no match, then
      return undefined;
    }
  //if it is not a linked list/if it is empty
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (linkedList, i, storage) {
    //check if linked list is undefined
    if (linkedList) {
      //assume that insert had populated that linkedlist 
      //with an array with at least 1 linkedlist 
      //iterate through the array
      for (var j = 0; j < linkedList.next.length; j++) {
        //go into the linked list by .next, and get the 0 index for key
        //if key matches
        if (linkedList.next[j].next[0] === k) {
          //delete the linkedlist
          linkedList.next.splice(j, 1);
        }  
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// look up is constant time operation
// remove is linear time operation
