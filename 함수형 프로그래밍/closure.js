// 클로저
// 독특한 함수체제를 1. 프라이빗 변수 모방 2. 가상의 블록 스코프 변수 생성 가능
// 외부함수의 실행 컨텍스트가 소멸해도 외부함수의 실행환경을 소멸하지 않고 참조할 수 있는 것
// 스코프체인이 형성될 때 [[scope]]로 참조 가능

const test = (function () {
  let count = 0;
  return {
    increase() {
      count++;
    },
    decrease() {
      count--;
    },
    getValue() {
      console.log(count);
    },
  };
})();
test.increase();
test.increase();
test.increase();
test.getValue(); // 3

// 자바스크립트에는 private 변수가 없지만 즉시실행함수, 클로저를 이용해 구현 가능.
// 위에서 count라는 값은 getValue를 통해서만 접근 가능

// 클로저 예2
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
console.log([add(), add(), add()]); // [ 1, 2, 3 ]
// counter 변수가 클로저로 남아 있어서 계속해서 더하기 가능. 마치 정적변수가 생각이 난다....
