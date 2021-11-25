// 제너레이터
// 제너레이터는 이터레이터를 쉽게 만들 수 있는 함수로, 커스텀한 이터러블을 만들 때 사용

const log = console.log;
function* gen() {
  yield 10;
  if (false) yield 20;
  yield 30;
  return 90;
  yield 30;
}
let iter = gen();
console.log(iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
/*
Object [Generator] {}
{ value: 10, done: false }
{ value: 30, done: false }
{ value: 90, done: true }
{ value: undefined, done: true }


gen 이라는 제너레이터 함수를 통해 이터레이터를 만들고 그것을 iter 변수에 할당해 next() 메서드를 통해 값을 끄집어냄
*/

function* gen2() {
  yield 10;
  if (false) yield 20;
  yield 30;
  return 90;
  yield 30;
}
console.log([...gen2()]); // [ 10, 30 ]
// next 대신에 ...을 이용해 value들만 추출 가능

// 제너레이터 안의 yield는 이터러블의 값에 해당. 즉 자신이 만들고 싶은 값을 yield를 통해 만들 수 있음

const add = (a) => a + 10;
const a = [1, 2, 3];
const ret = a.map(add);
log(ret); // [ 11, 12, 13 ]

// 아래 예제는 위의 예제를 아래처럼 제너레이터로 Array.prototype.map을 구현하는 예제
// map이란 어떤 배열에 어떤 함수를 적용해 새로운 배열을 반환하는 것!

function* map(f, list) {
  for (const a of list) {
    yield f(a);
  }
}
log(map(add, a)); // Object [Generator] {}
log([...map(add, a)]); // [ 11, 12, 13 ]
// spread 연산자를 통해 이터러블 객체를 배열로 만들 수 있음
