// async와 await
// 앞의 예제를 보다 쉽게 바꿀 수 있음

const a = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(1);
      resolve(1);
    }, delay);
  });
};
const b = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(2);
      resolve(2);
    }, delay);
  });
};
const c = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(3);
      resolve(3);
    }, delay);
  });
};

const main = async () => {
  await a();
  await b();
  await c();
};
main();

// await는 말 그대로 "이 Promise를 반환하는 값을 기다려라"라는 뜻
// 따라서 Promise를 반환하는 함수가 완료되었을 때 그 다음줄의 로직이 실행됨
// await은 async 안에서만 써야하고, async는 Promise의 resolved된 값을 반환함

// 여러 가지의 비동기를 한꺼번에 병렬로 처리하기 위한 Promise.all
// 예를 들어 A, B, C를 동시에 한꺼번에 실행한 후 D를 실행하고 싶으은 경우에 사용함
// Promise.all에 비동기함수들을 올리면 한번에 모든 함수들이 이벤트 큐에 올라가고 이것이 끝나면 뒤에 있는 then 메서드가 실행됨
const async = (message, ret) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      console.log(new Date());
      resolve(ret);
    }, 2000);
  });
};

const promises = [async("비동기함수1발동", 1), async("비동기함수2발동", 2)];
Promise.all(promises).then((data) => {
  console.log(data);
});
/*
비동기함수1발동
2021-11-25T14:12:18.095Z
비동기함수2발동
2021-11-25T14:12:18.097Z
[ 1, 2 ]
*/
