const func1 = (e, index) => {
  console.log(`${index}번째 요소는 ${e}입니다.`);
};

const func2 = (e, index) => e * 2;
const func3 = (prev, curr, index) => prev + curr;
const func4 = (e) => e % 2;
const a = [1, 2, 3, 4, 5].forEach(func1);

/*
forEach는 배열에서 그 안에 있는 요소를 이용하여 변경시키는 등 무언가를 할 때 사용.
map, filter, reduce 등의 함수보다 성능이 뛰어나기에, 배열 요소 각각에 어떤 작업을 할 때는 이를 추천.

map은 배열을 이용해 '새로운 배열'을 만들 때 사용
filter는 배열을 이용해 '조건에 맞는 원소로 배열'을 만들때 사용
reduce는 배열을 통해 '하나의 계산된 값(computed result)'를 추출할때 사용
*/

console.log(a); // undefiend
const b = [1, 2, 3, 4, 5].map(func2);
console.log(b); // [ 2, 4, 6, 8, 10 ]
const c = [1, 2, 3, 4, 5].reduce(func3);
console.log(c); // 15
const d = [1, 2, 3, 4, 5].filter((e) => e % 2);
console.log(d); // [ 1, 3, 5 ]

// every는 모든 조건을 만족해야 true 반환, some은 하나의 조건만 만족하면 true 반환

const numbers = [1, 3, 5, 4];
const isAllOdd = numbers.every((e) => e % 2);
const isSomeOdd = numbers.some((e) => e % 2);
console.log(isAllOdd, isSomeOdd); // false, true
