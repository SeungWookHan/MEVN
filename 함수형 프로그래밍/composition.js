// 함수 합성

const R = require("ramda");
const f_1 = R.map((a) => a + 1);
const f_2 = R.filter((a) => a % 2);
const ret = f_2(f_1([1, 2, 3, 4]));
console.log(ret); // [ 3, 5 ]

// ramda를 이용한 함수합성 - compose
const ret_ = R.compose(Math.abs, R.add(1), R.multiply(2))(-4);
console.log(ret_); // 7
// 오른쪽에서 왼쪽으로 로직이 흐름

// ramda를 이용한 함수합성 - pipe
const f = R.pipe(R.negate, R.inc);
console.log(f(3)); // -2
// 왼쪽에서 오른쪽으로 흘러가는 로직. negate(곱셈), inc(덧셈)

// fx.js를 이용한 함수합성 - pipe
// 함수형 라이브러리는 크게 lodash, ramda, fxjs가 있음
const { map, filter, pipe } = require("fxjs");
const f_pipe = pipe(
  map((a) => a + 1),
  filter((a) => a % 2)
);
const _ret = f_pipe([1, 2, 3, 4]);
console.log(_ret); // [ 3, 5 ]
