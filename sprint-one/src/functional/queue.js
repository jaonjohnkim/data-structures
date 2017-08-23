var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var previous = storage[0];
    for (var key in storage) {
      if (key === count - 1) {
        delete storage[key];
      } else {
        storage[key] = storage[parseInt(key) + 1];
      }
    }
    count--;
    return previous;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
