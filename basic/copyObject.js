// 복사하기
// spread 연산자와 Object.assign

// 깊이가 1단계에서만 유효함
const a = { b: 1 };
let b = { ...a };
let c = Object.assign({}, a);
c.b = 3;
b.b = 3;
console.log(a);
// { b: 1 }
// 이처럼 원본 객체에는 영향 안감

const a2 = {
  b: 1,
  c: {
    d: 2,
  },
};
let b2 = { ...a2 };
let c2 = Object.assign({}, a2);
c2.c.d = 3;
console.log(a2);
// { b: 1, c: { d: 3 } }
// 이처럼 깊이가 2단계 이상일때는 원본 객체에 영향감..

/*
이를 해결하기 위한 방법큰 2개.
1. 재귀적으로 해결
2. JSON.parse & JSON.stringify
*/

// 재귀적 방법
const copy = (o) => {
  let out = {};
  let value, key;
  for (key in o) {
    value = o[key];
    out[key] = typeof value === "object" && value != null ? copy(value) : value;
  }
  return out;
};
const a_ = {
  b: 1,
  c: {
    d: 2,
  },
};
let b_ = copy(a_);
b_.c.d = 4;
console.log(a_);
// { b: 1, c: { d: 2 } }
// 원본 객체에 영향 없음

// JSON.parse & JSON.stringify
// JSON.stringify로 문자열로 만들어놓고 다시 parse를 통해 객체로 만드는 것!
let b__ = JSON.parse(JSON.stringify(a_));
b__.c.d = 4;
console.log(a_);
// { b: 1, c: { d: 2 } }
// 원본 객체에 영향 없음=
