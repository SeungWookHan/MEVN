// find, findIndex, includes

const 조건 = (e) => e.height >= 180;
const 친구들 = [
  { name: "한승욱", height: 173 },
  { name: "김승욱", height: 175 },
  { name: "박승욱", height: 180 },
  { name: "이승욱", height: 190 },
];
const 키큰친구 = 친구들.find(조건);
console.log(키큰친구); // { name: '박승욱', height: 180 }
const 키큰친구인덱스 = 친구들.findIndex(조건);

// find, finIndex는 모두 배열의 0 부터 배열의 길이-1(마지막) 요소까지 왼쪽부터 순차적으로 확인 후
// 조건에 맞는 요소가 나타나면 그 요소를 뽑고 종료함.
// 아무것도 뽑히지 않는다면 find: undefiend, findIndex: -1 을 반환

const a = [1, 2, 3, 4, 5];
console.log(a.includes(3)); // true

// includes는 배열에 어떠한 요소가 있는지 없는지 확인하는 함수
// ES7에 나왔고 ES5의 indexOf보다 성능이 더 좋음

// 종종 indexOf를 사용해야할 때도 있는데, 바로 배열안에 어떤 요소를 찾고 해당 인덱스를 반환할 경우
// const ret = a.indexOf(3)
const ret = a.findIndex((e) => e === 3);
console.log(ret); // 2
// 보통은 findIndex가 빠르기에 해당 함수 사용을 권장
