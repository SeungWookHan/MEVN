// 로깅
const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = 3000;
// --- 1번 로직
app.use(logger("tiny")); // logger를 tiny 버전으로 실행,
// HTTP 메서드 :url :상태코드 :응답컨텐츠길이 - :응답헤더시작시간 으로 로그 출력됨
app.use((req, res, next) => {
  console.log("1 Time:", Date.now());
  next();
});
// --- 2번 로직
app.use((req, res, next) => {
  console.log("2 Time:", Date.now());
  next();
});

app.listen(PORT, () => {
  console.log(`서버가 생성되었습니다.${PORT}`);
});
/*서버가 생성되었습니다.3000
1 Time: 1639052489444
2 Time: 1639052489444
GET / 404 139 - 4.572 ms
*/
