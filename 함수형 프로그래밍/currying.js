// 커링
// 어떤 함수의 예상되는 여러개의 매개변수보다 적은 수의 매개변수를 받아, 함수가 실행되지 않고 넘겨지다가
// 모든 매개변수가 채워지면 그때 실행되는 기법
// 클로저를 활용해서 외부함수의 컨텍스트가 소멸되어도 내부함수가 외부의 실행환경을 참조할 수 있음

const R = require("ramda");
const a = R.add(1);
const b = a(2);
console.log(b); //3

const addFourNumbers = (a, b, c, d) => a + b + c + d;
const curriedAddFourNumbers = R.curry(addFourNumbers);
const f = curriedAddFourNumbers(1, 2);
const g = f(3);
console.log(g(4)); //10

// 커스텀커링
const curry = (fn) => (a) => (b) => fn(a, b);
const f1 = curry((a, b) => a + b);
const f2 = f1(1);
const ret = f2(2);
console.log(ret); // 3
// f1, f2를 통해 실행 시점을 느리게 함
