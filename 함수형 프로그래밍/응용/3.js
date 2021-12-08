// 무겁고 많은 비동기로직을 배치단위로 처리
import captureWebsite from "capture-website";
const process = (url, filename) =>
  captureWebsite.file(url, filename, {
    fullPage: true,
  });

async function main() {
  const from = 1434;
  const to = 1492;
  for (let i = from; i < to; i++) {
    for (const e of ["A", "B", "C", "D"]) {
      const url = `https://codeforces.com/contest/${i}/problem/${e}`;
      await process(url, `./img/${i}${e}.png`);
    }
  }
  console.log("스크래핑 완료");
}

main();

// 하지만 이는 순차적으로 for 루프를 돌기에 node.js의 비동기적 이벤트 처리를 잘 활용하지 못하는 것이다.
// 그렇다고 이를 모두 Promise.all에 돌리기에도 리스트 크기가 200개가 넘으니 말도 안된다(크롬 브라우저 200개가 열리고 이는 메모리 초과로 이어질 것)

// 이렇게 비용이 크고 개수가 많은 비동기 로직의 경우 배치단위로 처리해야한다.
