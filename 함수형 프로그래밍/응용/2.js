// reduce를 통한 집계
const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const users = [
  { id: 1, name: "승욱", age: 27 },
  { id: 2, name: "하나", age: 26 },
  { id: 3, name: "칠복", age: 22 },
  { id: 4, name: "구복", age: 21 },
];

const f = (info, user) => {
  const group = user.age - (user.age % 10);
  info.count[group] = (info.count[group] || 0) + 1;
  info.total[group] = (info.total[group] || 0) + user.age;
  return info;
};

const ret = _.reduce(f, { count: {}, total: {} }, users);
console.log(ret);

// { count: { '20': 4 }, total: { '20': 96 } }
