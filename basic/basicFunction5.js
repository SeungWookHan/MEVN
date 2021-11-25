// promise와 async/await

/*
I/O 바운드: DB, 파일시스템, 네트워크 등을 다루는 작업
CPU 바운드: CPU 자원을 사용하는 일을 다루는 작업
*/

// setTimeout
const job_1 = () => {
  const b = Math.random() * 100;
  setTimeout(() => {
    console.log(1);
  }, b);
};
const job_2 = () => {
  const b = Math.random() * 100;
  setTimeout(() => {
    console.log(2);
  }, b);
};
const job_3 = () => {
  const b = Math.random() * 100;
  setTimeout(() => {
    console.log(3);
  }, b);
};
job_1();
job_2();
job_3();

// 랜덤시간 후에 호출되므로 실행될 때마다 각기 다른 순서로 출력됨

console.log("Hi");
setTimeout(function timeout() {
  console.log("async funcion1 complete");
}, 5000);
setTimeout(function timeout() {
  console.log("async funcion2 complete");
}, 5000);
console.log("wooogy");
/*
Hi
wooogy
async funcion1 complete
async funcion2 complete
*/

// 위의 코드는 Hi, wooogy가 먼저 출력된 이후 async function1, 2가 순차적으로 나오게 됨
// 기본적으로 자바스크림트 함수는 콜스택에 쌓였다가 pop이 되면서 동기적으로 실행이 됨.
// 하지만 setTimeout, I/O bound 등의 web Api 작업은 콜스택에 쌓인 다음,
// 바로 web Api 백그라운드 공간으로 넘어간 후 비동기적으로 완료가 되면 콜백 큐에 쌓이고 이벤트 루프를 이용해 다시 콜스택에 쌓여 호출됨
