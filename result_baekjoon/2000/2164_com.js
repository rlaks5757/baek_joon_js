const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = Number(
  fs.readFileSync("result_baekjoon/2000/2164.txt").toString().trim()
);

//Node Class 생성
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

  //Linked List 생성
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      //Linked List 시작 시 초기 값 설정
      this.head = newNode;
    } else {
      //Linked List 시작 이후 Head Next 추가 및 추가 된 Next Node에 Prev 값 설정
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    //추가된 Node를 Tail에 설정
    this.tail = newNode;
    this._size++;

    return newNode;
  }

  //Linked List 내 Head Node Value Get
  getHead() {
    return this.head.value;
  }

  //Linked List 내 Head Node Value Delete
  removeHead() {
    //다음값을 기존 Head와 교체
    this.head = this.head.next;

    //바뀐 Head의 Prev 삭제
    this.head.prev = null;
    this._size--;
  }

  //Linked List Size Get
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
