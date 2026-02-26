// 우리가 써야 할 방식
/** let, const */

// let : 변경이 가능한 값
// const : 변경이 불가능한 값

// let으로 변수 선언
const name = '홍길동';
let age = 25;

console.log(name); // 홍길동
console.log(age);  // 25


// // 값 변경 가능
age = 26;
age = 27;
console.log(age);  // 27

// 값이 변할 수 있는 경우

let count = 0;
count = count + 1;
count = count + 1;
console.log(count); // 2

let userName = '게스트';
userName = '홍길동'; // 로그인 후 변경

let score = 0;
score = 100; // 게임 진행 중 변경

/** 어떤 기준으로 let, const ?? */
// 기본 : const로 하고, 나중에 변경이 일어날 것 같으면 let으로 변경한다.
