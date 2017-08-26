describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(2);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(3);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a head that was removed', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(2)).to.equal(false);
  });

  it('should add a new node that is not head or tail', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addTo(3, 3.5);
    expect(linkedList.contains(3.5)).to.equal(true);
    expect(linkedList.head.next.next.next.value).to.equal(3.5);
    expect(linkedList.head.next.next.next.next.value).to.equal(4);
    linkedList.addTo(4, 4.5);
    expect(linkedList.head.next.next.next.next.next.value).to.equal(4.5);
    // console.log(linkedList);
  });
  
  it('should add a new head', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addHead(0);
    expect(linkedList.head.value).to.equal(0);
    // console.log(linkedList);
  });

  it('should add a new tail', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.tail.value).to.equal(6);
    // console.log(linkedList);
  });
  
  it ('should remove a node that is not head or tail', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeNode(3);
    expect(linkedList.contains(3)).to.equal(false);
    linkedList.removeNode(2);
    linkedList.removeNode(4);
    expect(linkedList.contains(4)).to.equal(false);
    console.log(linkedList);
  });

  it ('should remove head or tail', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeNode(5);
    linkedList.removeNode(1);
    console.log(linkedList);
    expect(linkedList.head.value).to.equal(2);
    expect(linkedList.tail.value).to.equal(4);
    // console.log(linkedList);
  });
  

});
