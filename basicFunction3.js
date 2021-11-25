// 구문 생략
const name = "승욱";
const age = "27";
const job = "회장";
const data_used_ES6 = { name, age, job };
const data_not_used_ES6 = { name: name, age: age, job: job };
console.log(data_used_ES6);
console.log(data_not_used_ES6);

// 1과 2는 동일. 한번에 객체 정의 가능

// spred 연산자
const a = (b, ...rest) => {
  console.log(rest);
};
a(1, 2, 3); // [2, 3]

const b = [1, 2, 3];
const a2 = (a, b, c) => console.log(a, b, c);
a2(...b); // 1 2 3

const a3 = [1, 2, 3, 4, 5];
const [head, ...rest] = a3;
console.log(head, rest); // 1 [ 2, 3, 4, 5 ]

/*
...을 spread 연산자라고 부름
1번의 경우 b라는 매개변수로 제외한 나머지 것을 배열로 담음
2번의 경우 배열을 분해해서 각각 a, b, c로 담음
3번의 경우 head를 제외한 나머지 변수를 rest에 담음
*/

const d = [1, 2, 3];
const e = [4, 5, 6];
const f = [...d, ...e];
console.log(f); // [ 1, 2, 3, 4, 5, 6 ]
// 배열끼리 합칠때 보통 concat을 사용하지만 spread 연산자를 통해 분해하여 순수 요소들로 합칠 수도 있음
// spread 연산자는 이터러블이고, 배열은 이터러블 객체이기에 해당 연산자로 분해 가능!

// concat vs spread
// 배열의 길이가 10개인 경우는 후자, 100개인 경우는 전자가 성능테스트시 더 좋게 나옴. 항상 객체들을 고려해 성능 테스트 진행해야함

const g = { name: "한승욱", age: 27 };
const h = { ...g, key: 1 };
console.log(h); // { name: '한승욱', age: 27, key: 1 }
// 객체 안에 있는 값들을 순수 key, value로 분해하고 다시 새로운 객체에 할당 가능.
