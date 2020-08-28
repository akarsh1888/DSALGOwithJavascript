// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtFirst(newNodeData) {
    this.head = new Node(newNodeData, this.head);
  }

  listSize() {
    let first = this.head;
    let c = 0;
    while (first !== null) {
      c++;
      first = first.next;
    }
    return c;
  }

  getListFirst() {
    return this.head ? this.head : "Linked List Empty";
  }

  getListLast() {
    let first = this.head;
    let secondLast = null;

    while (first !== null) {
      secondLast = first;
      first = first.next;
    }
    return secondLast ? secondLast : "Linked List Empty";
  }

  removeListFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeListLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let last = this.head.next;
    while (last.next !== null) {
      prev = last;
      last = last.next;
    }

    prev.next = null;

    return prev;
  }

  insertListLast(newNodeData) {
    if (!this.head) {
      this.head = new Node(newNodeData);
      return;
    }

    const lastNode = this.getListLast();

    lastNode.next = new Node(newNodeData);
  }
}

const node1 = new Node("Iam first Node");
const list = new LinkedList();
list.head = node1;
list.insertAtFirst("Iam Second Node");
list.insertAtFirst("Iam Third Node");
list.insertListLast("Iam now new First Node");

module.exports = { Node, LinkedList };
