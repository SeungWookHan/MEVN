// pm2로 서버 관리하기

// 1. 중지되는 예 = 수동으로 다시 시작하여야 하는 예
const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const obj = {
    이름: "한승욱",
  };
  res.end(JSON.stringify(obj));
});

setTimeout(() => {
  // 에러를 발생시켜 1초마다 서버가 중지되게 함
  JSON.parse("{Z"); // 이는 올바른 JSON 형식이 아니라 에러 남
}, 1000);
server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
