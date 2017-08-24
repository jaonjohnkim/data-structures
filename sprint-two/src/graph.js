

// Instantiate a new graph
var Graph = function() {
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // console.log(node);
  this[node] = node;
  // console.log(this);
  // console.log('this.node...')
  // console.log(this.node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (node === this[key]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // console.log(this);
  // console.log(node);
  
  this.removeEdge(node);

  for (var key in this) {
    if (node === this[key]) {
      delete this[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.edges;
  var combo1 = fromNode + ',' + toNode;
  var combo2 = toNode + ',' + fromNode;
  return edges.includes(combo1) || edges.includes(combo2);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push(fromNode + ',' + toNode, toNode + ',' + fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edges = this.edges;

  if (toNode === undefined) { // Only when we delete an entire node
    for (var i = 0; i < edges.length; i++) {
      if (edges[i].includes(fromNode)) {
        edges.splice(i, 1);
        i--;
      }
    }
  } else {
    
    var combo1 = fromNode + ',' + toNode;
    var combo2 = toNode + ',' + fromNode;
    for (var i = 0; i < edges.length; i++) {
      if (edges[i] === combo1 || edges[i] === combo2) {
        edges.splice(i, 1);
        i--;
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (this[key].constructor === Number) {
      cb(this[key]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// Linear time

