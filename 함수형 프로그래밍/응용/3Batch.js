// 무겁고 많은 비동기로직을 배치단위로 처리

// 이전 3번을 배치단위로 구현
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency";
import { go } from "fxjs";
import captureWebsite from "capture-website";
const BATCH = 5;
const process = ([url, filename]) =>
  captureWebsite.file(url, filename, {
    fullPage: true,
  });

async function main() {
  const list = [];
  const from = 1442;
  const to = 1492;
  for (let i = from; i < to; i++) {
    for (let e of ["A", "B", "C", "D"]) {
      const url = `https://codeforces.com/contest/${i}/problem/${e}`;
      list.push([url, `./img/${i}${e}.png`]);
    }
  }
  await go(list, L.map(process), C.takeAll(BATCH));
  console.log("스크래핑 완료");
  return ret;
}
main();

// 리스트를 그대로 받아 L.map으로 사이트를 캡처하는 함수들의 모음으로 리스트를 수정, C.takeAll을 통해 배치단위인 5개씩 비동지적인 로직 시행
