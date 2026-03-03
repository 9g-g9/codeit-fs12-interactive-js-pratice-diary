// null, undefined만 기본값 사용
console.log(null ?? 10); // 10
console.log(undefined ?? 10); // 10

// 0, '', false는 그대로 유지
console.log(0 ?? 10); // 0
console.log(0 || 10); // 10

console.log("" ?? "default"); // ''
console.log(false ?? true); // false
