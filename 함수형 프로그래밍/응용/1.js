// 배열 안에서 차례대로 작동하는 비동기로직
// map 함수 안에서 비동기로직을 구현하는 것은 어려운데, 순차적인 비동기적 map을 구현하는 것
const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const log = (a) => {
  return console.log(`${new Date()}: ${a}`);
};

// 1초의 지연을 가져올 비동기함수 delay
const delay = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, 1000);
  });
};

async function test_fp() {
  const list = [1, 3, 5, 6, 7, 9];
  return await _.go(
    // 즉시실행 pipe함수로, 이것으로 함수합성 진행
    list,
    L.map((a) => a + 100), // 각 원소에 10을 더함
    L.map(delay), // 요소마다 각각 delay 진행
    _.each(log) // 로그 출력
  );
}

test_fp().then((ret) => console.log(ret));

/*
Wed Dec 08 2021 20:25:41 GMT+0900 (대한민국 표준시): 101
Wed Dec 08 2021 20:25:42 GMT+0900 (대한민국 표준시): 103
Wed Dec 08 2021 20:25:43 GMT+0900 (대한민국 표준시): 105
Wed Dec 08 2021 20:25:44 GMT+0900 (대한민국 표준시): 106
Wed Dec 08 2021 20:25:45 GMT+0900 (대한민국 표준시): 107
Wed Dec 08 2021 20:25:46 GMT+0900 (대한민국 표준시): 109
[ 101, 103, 105, 106, 107, 109 ]
*/
