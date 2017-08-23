var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function () {
    var storage = this.storage;
    if (this.count > 0) {
      var previous = storage[0];
      this.count--;
      for (var key in storage) {
        if (key === this.count) {
          delete storage[key];
        } else {
          storage[key] = storage[parseInt(key) + 1];
        }
      }
      return previous;
    }
    
  },
  size: function () {
    return this.count;
  }
};


