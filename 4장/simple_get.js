// 라우팅
// 라우팅이란 사용자의 요청, URL에 따라 다른 콘텐츠를 전달하는 것
const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = 3000;
app.use(logger("tiny"));
const simple_module = require("./simple_module.js");
app.get("/", simple_module.intro);
app.get("/users/:userName/books/:bookName", simple_module.handleBook);

app.listen(PORT, () => {
  console.log(`서버 생성.${PORT}`);
});
