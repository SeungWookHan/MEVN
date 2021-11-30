// 무인수 프로그래밍

// 그 전에 함수형 패러다임에서는 최대한 원래(원본)의 변수가 그대로 있어야 한다는 점이 중요하다.
const a = [1, 2, 3, 4, 5];
let b = a.slice(1);
console.log(a, b); // [ 1, 2, 3, 4, 5 ] [ 2, 3, 4, 5 ]
b = a.splice(1);
console.log(a, b); // [ 1 ] [ 2, 3, 4, 5 ]
// 즉 splice는 배열을 파괴하기에 slice를 사용하는 것이 적절하다고 할 수 있다.

// 무인수 프로그래밍 시작
// 매개변수만을 바꿔서 로직을 유연하게 수정할 수 있는 것
const { map, filter, pipe, values, go } = require("fxjs");
const L = require("fxjs");
const 친구들 = [
  {
    name: "한승욱",
    do: "개발자",
  },
  {
    name: "김승욱",
    do: "군인",
  },
  {
    name: "이승욱",
    do: "사업가",
  },
  {
    name: "박승욱",
    do: "개발자",
  },
];
const t = 친구들.map((e) => (e.do === "개발자" ? e : null)).filter((e) => e);
const prop = (key) => (obj) => obj[key];
const propEqual = (value) => (key) => (obj) => prop(key)(obj) === value;
console.log(t);
const t2 = go(친구들, L.filter(propEqual("개발자")("do")), L.takeAll);
console.log(t2);
/*
[ { name: '한승욱', do: '개발자' }, { name: '박승욱', do: '개발자' } ]
[ { name: '한승욱', do: '개발자' }, { name: '박승욱', do: '개발자' } ]
*/

// 위에서 t라는 함수의 문제점은 추후 조건이 바뀐 것을 추출할시 매번 새로 만들어야함
// 이는 t2로 해결 가능함
