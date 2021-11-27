// 제너레이터
// 코루틴
const log = console.log;
function* map(f, list) {
  for (const a of list) {
    yield f(a);
    // return f(a)
  }
}

const add = (a) => a + 10;
const a = [1, 2, 3];
const customGenerator = map(add, a);
log(customGenerator.next());
log("어떤 로직 1");
log(customGenerator.next());
log("어떤 로직 2");
log(customGenerator.next());
/*
{ value: 11, done: false }
어떤 로직 1
{ value: 12, done: false }
어떤 로직 2
{ value: 13, done: false }
*/

// map이라는 함수가 순차적으로 작동함!
// 보통 map 함수는 배열을 어떤 함수를 통해 한번에 새로운 배열로 반환하지만 지금 보는 것은 next() 메서드를 통해 자신이 원하는 시점에 결괏값 반환 가능
// value는 yield한 값, done은 return 유무
// 이는 next() 메서드가 호출되어야만 반환될 수 있음

// 코루틴 작동 원리
/*
yield문이 있는 해당 값에 해당하는 스택프레임(매개변수, 로컬변수, 실행위치)을 복사해 저장해둔다.
동시에 자바스크립트 콜스택에서 해당 스택프레임 제거한다.
next() 메서드가 발동하면 스택프레임을 복원해 실행한다.
*/

// 이터러블/이터레이러 프로토콜
function* gen() {
  yield 10;
  if (false) yield 20;
  yield 30;
  return 90;
  yield 30;
}
let iter = gen();
log([...iter]); // [ 10, 30 ]

iter = gen();
for (const a of iter) {
  log(a); // 10, 30
}

// [...]을 통해 순회하는 객체 하나하나를 분해하여 배열로 만들 수 있음
// for (a of b) 형식으로 요소 끄집어내기 가능

/*
용어 정리

이터러블: 이터레이터를 반환하는 [Symbol.iterator]()라는 키를 가진 값이자 반복할 수 있는 순차적이고 순회적인 객체
이터레이터: {value, done} 객체를 반환하는 next() 메서드를 가진 값. 이터러블의 포인터
이터러블 프로토콜: for a of b, 구조분해 할당을 통해 동작할 수 있는 약속.
이터레이터 프로토콜: next 메서드를 통해 다음 로직으로 갈 수 있는 것
제너레이터: 함수 이름 왼쪽에 *이 붙는 함수로써 이터레이터를 쉽게 만들 수 있고 쉽게 이터러블한 객체를 반환할 수 있는 함수
*/
