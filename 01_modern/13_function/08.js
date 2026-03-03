// 익명 함수표현식
// const 변수명 = function () {

// }

// 이름 있는 함수 표현식 (Named Function Expression)
const 변수명 = function 함수명(매개변수) {
  // ...
};

// 재귀함수
// 1. 재귀 함수
const countdown = function count(n) {
  if (n <= 0) return;
  console.log(n);
  count(n - 1); // 자기 자신 호출
};

countdown(5); // 5, 4, 3, 2, 1
