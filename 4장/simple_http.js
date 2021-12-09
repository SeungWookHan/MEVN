const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plaon; charset=utf-8");
  res.end("안녕하세요 MEVN 프로젝트임.");
});

server.listen(PORT, () => {
  console.log(`Server runing at http://127.0.0.1:${PORT}/`);
});
