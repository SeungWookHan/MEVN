// express - 쉬운 미들웨어 설정
const express = require("express");
const app = express(); // express라는 모듈을 실행한 값을 app에 담음
const PORT = 3000;
// --- 1번 로직
app.use((req, res, next) => {
  // app.use를 통해 모든 http 요청에 대해 미들웨어 설정
  // req: 요청
  // res: 응답
  // next: 다음 미들웨어로 로직을 넘기거나 매개변수를 넘기는 용
  console.log("1 Time:", Date.now());
  next();
});
app.use((req, res, next) => {
  // 2번 로직
  console.log("2 Time:", Date.now());
  next();
});

app.listen(PORT, () => {
  console.log(`서버가 생성되었습니다.${PORT}`);
}); // 서버 실행

// 미들웨어란? 어떤 로직계층을 중간에 넣는 것!
// 이를 통해 어떤 요청을 할 때 중간에 인증이나 로거 작업 등을 쉽게 할 수 있음

/*
서버가 생성되었습니다.3000
요청 보낸 후
1 Time: 1639051350790
2 Time: 1639051350791
*/
