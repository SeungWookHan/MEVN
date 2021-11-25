// 자바스크립트로 큐 구현
class Queue {
  constructor() {
    this.a = [];
  }
  front() {
    if (this.a.length === 0) {
      console.log("큐가 비었습니다.");
      return;
    } else return this.a[0];
  }
  enqueue(value) {
    this.a.push(value);
  }
  dequeue() {
    if (this.a.length === 0) {
      console.log("큐가 비었습니다.");
      return;
    }
    this.a.shift();
  }
}
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
for (let i = 0; i < 4; i++) {
  console.log(q.front());
  q.dequeue();
}
/*
1
2
3
4
*/
