//leetcode.com/submissions/detail/765217877/
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

  addElement() {
    let node = new Node(element);
    let currNode = head;
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

  getItem() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode);
      currNode = currNode.next;
    }
  }

  rotateLinkedList(k) {
    //Return head if list length is 0 or 1, or if k=0
    if (!head || !head.next || k === 0) return head;

    //find end of list and count list length
    let tail = head;
    let len = 1;
    while (tail.next) {
      tail = tail.next;
      len++;
    }

    // mod k to length as k can be greater than length of list
    k = k % len;

    //move till the required start of returning list and maintain previous pointer
    let prev = null;
    let temp = head;
    let count = 1;
    while (count <= len - k) {
      prev = temp;
      temp = temp.next;
      count++;
    }

    //edge case if k%len comes to be 0 or equal to length of list, no rotation
    if (!prev || !temp) return head;

    //update previous's next to null and tails next to head
    prev.next = null;
    tail.next = head;

    // return new start
    return temp;
  }
}
