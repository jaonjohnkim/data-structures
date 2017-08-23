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
  push: function () {
    // this.
  },
  pop: function () {
    // this.
  },
  size: function () {
    return this.count;
  }

  
};


