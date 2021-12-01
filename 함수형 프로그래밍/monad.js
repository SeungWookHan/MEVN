// 모나드
// 함수형 프로그래밍에서 '참조 투명성'을 위해 모나드를 사용
// 컨텍스트 레벨을 값 레벨로 끌어들여 추상화한 컨테이너 박스...?
/*
컨텍스트: 어떤 로직 실행에 영향을 줄 수 있는 레지스터, 콜스택, 객체의 현재 상태 등
참조 투명성: 입력과 출력이 동일하게 일대일 매칭
*/

// 아이덴티티 모나드, 퓨처모나드 등이 있는데 여기서는 퓨처모나드 그 중 Promise를 다룸

// Promise
// 불확실한 미래의 값을 성공, 실패 2가지 값으로 설정하고 안전한 연산을 도와주는 컨테이너

/*
Promise가 모나드인 이유
1. Promise를 감싸서 반환하면 Promise<pending>이 나옴. 즉, 타입을 매개변수로 받아 모나드화된 타입 반환 가능
2. Promise에는 resolve를 통해 순수한 값 끄집어내기 가능. 즉, unit 함수가 있음
3. Promise는 중복되더라도 then 메서드를 통해 순수한 값 끄집어내기 가능. 즉, bind 함수가 있음(flattern)
*/

// 1번
const g = JSON.parse;
const f = (k) => k.temp;
const fg = (x) => new Promise((resolve, reject) => resolve(x)).then(g).then(f);
const log = (x) => console.log(x);

fg('{"temp":36.5}')
  .catch((_) => "JSON PARSE is not working")
  .then(log);

// 36.5

// 2번
const log_ = console.log;
const users = [
  { name: "승욱" },
  { name: "하나" },
  { name: "성욱" },
  { name: "국원" },
];
const getUserByName = (name) =>
  users.find((u) => u.name === name) || Promise.reject("객체에 없습니다.");
const g_ = getUserByName;
const f_ = ({ name }) => `${name}이가 춤을 춥니다.`;
const fg_ = (x) =>
  new Promise((resolve, reject) => resolve(x)).then(g_).then(f_);
fg_("승욱")
  .catch((_) => _)
  .then(log);
fg_("승욱1")
  .catch((_) => _)
  .then(log);
// 승욱이가 춤을 춥니다.
// 객체에 없습니다.
