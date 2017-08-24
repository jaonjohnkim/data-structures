var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function () {
    if (this.count > 0) {
      this.count--;
      var previous = this.storage[0];
      for (var key in this.storage) {
        if (key === this.count) {
          delete this.storage[key];
        } else {
          this.storage[key] = this.storage[parseInt(key) + 1];
        }
      }
    }
  },
  size: function () {
    return this.count;
  }
};