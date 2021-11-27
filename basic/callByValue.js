// 자바스크립트는 함수의 매개변수로 넘길 때 어떤 값들, 참조형(reference type), 기본형(primitive type)으로 넘기든 무조건 call by value로 넘겨지게 됨
// 하지만 참조형의 경우 매개변수의 객체 속성 값이 변경되면 함수 바깥의 원본도 변경된다.

const f1 = (obj) => {
  obj = null;
};
let b1 = { a: 1 };
f1(b1);
console.log(b1); // { a: 1 }

const f2 = (array) => {
  array = null;
};
let b2 = [];
let a2 = b2;
f2(b2);
console.log(b2); // []

const swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
};
let x = 1;
let y = 2;
swap(x, y);
console.log(x, y); // 1, 2

/*
b1 객체를 null로 만드는 것 같지만 그렇게 안됨. obj에는 주솟값의 복사본이 들어가게 되고, 또 다른 주솟값에 null이 할당되는 것임
배열도 마찬가지
값을 넘겨도 마찬가지로 스왑이 안 일어남

자바스크립트에서는 함수로 매개변수가 들어갈 때 call by value로 복사본이 들어가기 때문에 함수 안에서 바꾸는 연산을 해도 이뤄지지 않음
*/

// 하지만 객체의 속성 변화라먄?
const a = { a: 1 };
console.log(a); // { a: 1 }
const b = (c) => (c.a = 2);
b(a);
console.log(a); // { a: 2 }

/*
객체의 속성이 변하게 된다.
참조형의 복사본인 객체를 전달했고, 각 객체는 다른 주소값을 가지지만 둘다 똑같은 {"a":1}이라는 값을 바라보고 있기 때문에,
여기서 해당 속성값이 변화하면 원본의 값도 변화하게 됨
*/

/*
자바스크립트의 참조형, 기본형

참조형(reference type): 객체, 배열, 함수, 날짜, 정규표현식
기본형(primitive type): 숫자, 문자열, 불리언, null, undefiend, 심볼
*/
