
/** 권장사항 */
// 1. camelCase 사용 (자바스크립트 관례)
let userName = '홍길동';        // ✅
let userAge = 25;               // ✅
let isLoggedIn = true;          // ✅
let maxLoginAttempts = 5;       // ✅

let user_name = '홍길동';       // ❌ snake_case (파이썬 스타일)
let UserName = '홍길동';        // ❌ PascalCase (클래스명)

// 2. 상수는 대문자 + 언더스코어
const MAX_SIZE = 100;           // ✅
const API_KEY = 'abc123';       // ✅
const TAX_RATE = 0.1;           // ✅

// 3. 의미 있는 이름 사용
let a = 25;                     // ❌ 무슨 의미인지 모름
let age = 25;                   // ✅ 나이라는 의미가 명확

let x = '홍길동';               // ❌
let userName = '홍길동';        // ✅

// 4. boolean은 is, has로 시작
let isActive = true;            // ✅
let hasChildren = false;        // ✅
let canEdit = true;             // ✅