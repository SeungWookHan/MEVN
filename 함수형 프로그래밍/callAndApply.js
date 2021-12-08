//  call, apply
// call과 apply 모두 함수를 호출하는데 사용되고, 첫 번째 매개변수는 함수 내에서의 this의 값으로 사용됨

// call을 쓰는 생성자함수는 화살표함수로 만들면 안됨! this가 글로벌을 가리키게 됨.

function a(c, d) {
  const b = [this.name, this.adjective, "이가 춤을 춥니다.", c, d].join(" ");
  return b;
}

const 승욱 = {
  name: "승욱",
  adjective: "아주 간지나게",
};
console.log(a.apply(승욱, ["하지만 혼자", "외롭게 말이죠"]));
console.log(a.call(승욱, "하지만 혼자", "외롭게 말이죠"));

/*
승욱 아주 간지나게 이가 춤을 춥니다. 하지만 혼자 외롭게 말이죠
승욱 아주 간지나게 이가 춤을 춥니다. 하지만 혼자 외롭게 말이죠
*/
