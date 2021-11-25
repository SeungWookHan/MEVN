// Callback & Promise

// Promise 예
const a = (c = "네이버") => {
  return new Promise((resolve, reject) => {
    // 비동기 함수로직
    setTimeout(() => {
      resolve(`${c}로부터 받은 사랑`);
    }, 1 * 1000);
  });
};

a()
  .then((ret) => {
    console.log(ret);
    return a(`카카오`);
  })
  .then((ret) => {
    console.log(ret);
  });

const a1 = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(1);
      resolve(1);
    }, delay);
  });
};
const b1 = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(2);
      resolve(2);
    }, delay);
  });
};
const c1 = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(3);
      resolve(3);
    }, delay);
  });
};

a1()
  .then((ret) => b1())
  .then((ret) => c1());
// a1().then(b1).then(c1) 이렇게도 가능
