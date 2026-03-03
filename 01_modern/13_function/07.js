// ❌ 나쁜 예
function processUser(user) {
  if (user) {
    if (user.age >= 18) {
      if (user.verified) {
        // 실제 로직
        return "처리 완료";
      } else {
        return "인증 필요";
      }
    } else {
      return "미성년자";
    }
  } else {
    return "사용자 없음";
  }
}

// ✅ 좋은 예 (조기 반환)
function processUser(user) {
  if (!user) return "사용자 없음";
  if (user.age < 18) return "미성년자";
  if (!user.verified) return "인증 필요";

  // 실제 로직
  return "처리 완료";
}
