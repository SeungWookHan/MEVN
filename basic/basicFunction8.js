// 이터러블, 이터레이터

// 이터러블
// 어떤 요소들을 순회하며 쉽게 탐색할 수 있는 자료구조
// 자바스크립트에서는 '이터러블 프로토콜'이라는 규칙을 준수한 객체 = Symbol.iterator 메서드를 가짐
// 해당 메서드는 next()라는 메서드를 가지고 있는 객체를 반환, next()는 value와 done 프로퍼티를 가지고 있는 객체를 반환함
const a = ["사과", "딸기", "포도", "배"];
console.log(Symbol.iterator in a);
for (const b of a) console.log(b);
/*
true
사과
딸기
포도
배

여기에서 볼 수 있듯이 배열은 Symbol.iterator 메서드를 가지고 있음
*/

let mp = new Map();
mp.set("사과", "딸기");
mp.set("포도", "배");
console.log(mp.get("사과"));
for (const a of mp) console.log(a);
console.log(Symbol.iterator in mp);
/*
딸기
[ '사과', '딸기' ]
[ '포도', '배' ]
true

for a of b는 이터러블 객체를 탐색할 수 있는 방법 중 하나
map 역시 이터러블함
*/

console.log("----------------------------------");

// 이터레이터
const a2 = ["사과", "딸기", "포도", "배"];
const it = a[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
/*
{ value: '사과', done: false }
{ value: '딸기', done: false }
{ value: '포도', done: false }
{ value: '배', done: false }
{ value: undefined, done: true }
*/

// 이전의 for a of b 형식이 아닌 next() 메서드로 끄집어낸 모습
// 이처럼 이터러블한 것은 모두 이터레이터를 반환함
// 이터레이터라는 것은 순회할 때 쓰는 포인터로 이터러블에서 값을 뽑아낼 때 사용!
// it의 next() 메서드를 통해 value, done의 속성을 가진 이터레이터 객체 반환 가능

console.log("----------------------------------");
