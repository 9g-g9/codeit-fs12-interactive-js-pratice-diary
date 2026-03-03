// callback 함수
// 함수의 인자로 사용이 되는 함수

// const a = function (func1) {
//   console.log("함수 시작합니다..!!!");
//   func1();
// };

// const b = function () {};
// a(b);

// setTimeout
// setTimeout(함수, 밀리초);

// setTimeout
setTimeout(function () {
  console.log("2초 후 실행");
}, 3000);

forEach([1, 2, 3], function (item, index) {
  console.log(`${index}: ${item}`);
});
// forEach(배열, 함수)
