/** 변수의 이름 규칙 */
// 1. 첫 글자: 문자, _, $ 만 가능
let name = '홍길동';    // ✅
let _private = 'secret'; // ✅
let $element = 'div';    // ✅
let 1number = 10;        // ❌ 숫자로 시작 불가

// // 2. 공백 사용 불가
let my name = '홍길동';  // ❌
let myName = '홍길동';   // ✅

// // 3. 특수문자 사용 불가 (_, $ 제외)
let my-name = '홍길동';  // ❌
let my@name = '홍길동';  // ❌
let my_name = '홍길동';  // ✅

// // 4. 예약어 사용 불가
let if = 10;        // ❌ if는 예약어
let class = 'A';    // ❌ class는 예약어
let return = true;  // ❌ return은 예약어
