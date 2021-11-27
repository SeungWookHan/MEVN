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
