const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = Number(
  fs.readFileSync("result_baekjoon/2000/2164.txt").toString().trim()
);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

const card_list = new LinkedList();

for (let i = 1; i <= input; i++) {
  card_list.add(i);
}

while (card_list.getSize() !== 1) {
  card_list.removeHead();
  card_list.add(card_list.getHead());
  card_list.removeHead();
}

console.log(card_list.getHead());
