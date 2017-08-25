

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentValue = this._storage.get(index);
  
  if (currentValue !== undefined) { //if there is already something in that index
    var key = Object.keys(currentValue)[0];
    if (key !== k) { //if the keys are different 
      // console.log('The key at the storage: ' + key + ', and k : ' + k);
      var newType = {};
      newType[key] = currentValue[key];
      newType[k] = v;
      this._storage.set(index, newType);
    } else { //if keys are the same, then simply overwrite
      var keyVal = {};
      keyVal[k] = v;
      this._storage.set(index, keyVal);
    }
  } else { // if nothing at that storage spot
    var keyVal = {};
    keyVal[k] = v;
    this._storage.set(index, keyVal);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var getThis = this._storage.get(index);
  if (getThis === undefined) {
    return undefined;
  }
  return getThis[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (value, i, storage) {
    if (storage[i] !== undefined) {
      if (Object.keys(storage[i])[0] === k) {
        storage.splice(i, 1);
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// linear time complexity
