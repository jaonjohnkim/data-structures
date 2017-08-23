var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    
    //generate object
  var someInstance = {
    storage: {},
    count: 0
  };
  //assign properties
  //borrow methods
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function () {
    if (this.count > 0) {
      this.count--;
      var previous = this.storage[this.count];
      return previous;
    }
  },
  size: function () {
    return this.count;
  }

  
};


