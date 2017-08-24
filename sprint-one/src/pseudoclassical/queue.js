var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
    
  
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function () {
  if (this.count > 0) {
    var previous = this.storage[0];
    this.count--;
    for (var key in this.storage) {
      if (key === this.count) {
        delete this.storage[key];
      } else {
        this.storage[key] = this.storage[parseInt(key) + 1];
      }
    }
    return previous;
  }
  
};

Queue.prototype.size = function () {
  return this.count;
};