var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var previous;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    count--;
    previous = storage[count];
    delete storage[count];
    return previous;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
