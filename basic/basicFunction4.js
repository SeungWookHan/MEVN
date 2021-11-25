// 구조분해 할당
// 배열이나 객체의 속성을 해체하여 개별 변수에 쉽게 담는 것을 의미

// 1. swap
let a = 1;
let b = 2;
console.log(a, b); // 1, 2
[a, b] = [b, a];
console.log(a, b); // 2, 1
// 이렇게 구조분해 할당을 이용해 한줄로 스왑 가능. 파이썬 같다..

// 2. 배열의 요소 쉽게 담기
const d = () => [1, 2, 3, 4];
const [e, f, g] = d();
console.log(e, f, g); // 1 2 3
// 이렇게 함수로 받은 값들을 쉽게 배열의 요소로 할당할 수 있음

// 3. 객체의 value를 쉽게 담기
const h = () => {
  return { name: "한승욱", job: "프로그래머" };
};
const { name } = h();
console.log(name); // 한승욱

const a2 = [1, 2];
const [b2, c2] = a2;
console.log(b2, c2); // 1 2

const a3 = { 이름: "한승욱", 노래: "한승욱짱" };
const { 이름, 노래 } = a3;
console.log(이름, 노래); // 한승욱 한승욱짱
