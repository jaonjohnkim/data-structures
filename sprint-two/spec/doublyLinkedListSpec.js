describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and butt', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('butt');
  });

  it('should have methods named "addToButt", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToButt).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new butt when new nodes are added', function() {
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    expect(doublyLinkedList.butt.value).to.equal(4);
    doublyLinkedList.addToButt(5);
    expect(doublyLinkedList.butt.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    expect(doublyLinkedList.head.value).to.equal(2);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.addToButt(6);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a head that was removed', function() {
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(2)).to.equal(false);
  });

  it('should append a new node that is not head or butt', function() {
    doublyLinkedList.addToButt(1);
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.appendTo(3, 3.5);
    expect(doublyLinkedList.contains(3.5)).to.equal(true);
    expect(doublyLinkedList.head.next.next.next.value).to.equal(3.5);
    expect(doublyLinkedList.head.next.next.next.next.value).to.equal(4);
    doublyLinkedList.appendTo(4, 4.5);
    expect(doublyLinkedList.head.next.next.next.next.next.value).to.equal(4.5);
    // console.log(doublyLinkedList);
  });

  it('should prepend a new node that is not head or butt', function() {
    doublyLinkedList.addToButt(1);
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.prependTo(3, 2.5);
    expect(doublyLinkedList.contains(2.5)).to.equal(true);
    expect(doublyLinkedList.head.next.next.value).to.equal(2.5);
    expect(doublyLinkedList.head.next.next.next.next.value).to.equal(4);
    doublyLinkedList.prependTo(4, 3.5);
    expect(doublyLinkedList.head.next.next.next.next.value).to.equal(3.5);
    // console.log(doublyLinkedList);
  });
  
  it('should add a new head', function() {
    doublyLinkedList.addToButt(1);
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.addHead(0);
    expect(doublyLinkedList.head.value).to.equal(0);
    // console.log(doublyLinkedList);
  });

  it('should add a new butt', function() {
    doublyLinkedList.addToButt(1);
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.addToButt(6);
    expect(doublyLinkedList.butt.value).to.equal(6);
    // console.log(doublyLinkedList);
  });
  
  it ('should remove a node that is not head or butt', function() {
    doublyLinkedList.addToButt(1);
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.removeNode(3);
    expect(doublyLinkedList.contains(3)).to.equal(false);
    doublyLinkedList.removeNode(2);
    doublyLinkedList.removeNode(4);
    expect(doublyLinkedList.contains(4)).to.equal(false);
    console.log(doublyLinkedList);
  });

  it ('should remove head or butt', function() {
    doublyLinkedList.addToButt(1);
    doublyLinkedList.addToButt(2);
    doublyLinkedList.addToButt(3);
    doublyLinkedList.addToButt(4);
    doublyLinkedList.addToButt(5);
    doublyLinkedList.removeButt();
    doublyLinkedList.removeHead();
    console.log(doublyLinkedList);
    expect(doublyLinkedList.head.value).to.equal(2);
    expect(doublyLinkedList.butt.value).to.equal(4);
    // console.log(doublyLinkedList);
  });
  

});
