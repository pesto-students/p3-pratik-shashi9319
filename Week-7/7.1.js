// https://leetcode.com/submissions/detail/764352217/
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.lastNode = null;
  }

  addElement(element) {
    let node = new Node();
    let currNode = null;
    if (this.head == null) {
      this.head = node;
    } else {
      currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
      this.lastNode = currNode.next;
    }
    this.size++;
  }
  reverseList() {
    let cur = head;
    let next = null;
    let prev = null;
    while (cur !== null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
  getItem() {
    let currNode = head;
    while (currNode) {
      console.log(currNode);
      currNode = currNode.next;
    }
  }
}
try {
  const linkedList = new LinkedList();
  linkedList.addElement(1);
  linkedList.addElement(2);
  linkedList.addElement(3);
  linkedList.addElement(4);
  linkedList.addElement(5);
  linkedList.addElement(6);
  linkedList.addElement(7);
  linkedList.reverseList();
  linkedList.getItem();
} catch (e) {
  console.log(e);
}
