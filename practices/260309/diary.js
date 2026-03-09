// ============================================
// 나만의 일기장 - 배열/객체 CRUD + DOM 연습
// ============================================
// 각 Part의 TODO를 채워서 일기장을 완성하세요!
// 실행: diary.html을 브라우저에서 열기

// 기분 이모지 매핑 (제공됨 - 수정하지 마세요)
const MOOD_EMOJIS = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  excited: "🎉",
  confused: "🤔",
  calm: "😌",
};

// ============================================
// Part 1: DOM 요소 선택하기
// ============================================
// document.querySelector()를 사용해서 HTML 요소를 선택하세요.
// 괄호 안에 CSS 선택자(id는 '#이름', class는 '.이름')를 넣으면 됩니다.

// TODO: 각 변수에 알맞은 요소를 선택하세요
const diaryForm = document.querySelector("#diary-form"); // 힌트: '#diary-form'
const titleInput = document.querySelector("#title-input"); // 힌트: '#title-input'
const contentInput = document.querySelector("#content-input"); // 힌트: '#content-input'
const moodSelect = document.querySelector("#mood-select"); // 힌트: '#mood-select'
const submitBtn = document.querySelector("#submit-btn"); // 힌트: '#submit-btn'
const diaryList = document.querySelector("#diary-list"); // 힌트: '#diary-list'
const emptyMessage = document.querySelector("#empty-message"); // 힌트: '#empty-message'
const statsContainer = document.querySelector("#stats"); // 힌트: '#stats'

const moodFilterSelect = document.querySelector("#mood-filter-select");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

// ============================================
// Part 2: 데이터 구조 만들기
// ============================================

// 일기 항목 하나는 이런 구조의 객체입니다:
// {
//   id: 1,
//   date: "2026-03-09",
//   title: "오늘의 일기",
//   content: "오늘은 코딩 공부를 했다.",
//   mood: "happy"
// }

// TODO: 빈 일기장 배열을 선언하세요
let diary = [];

// 일기 ID를 자동으로 증가시키기 위한 변수 (제공됨)
let nextId = 1;

// 수정 모드 추적 변수 (제공됨)
// null이면 새 일기 추가 모드, 숫자면 해당 id의 일기를 수정 중
let editingId = null;

let filtering = "";

// ============================================
// Part 3: 일기 추가하기 (Create)
// ============================================

function addEntry(title, content, mood) {
  // TODO: 새 일기 객체를 만들어서 diary 배열에 추가하세요
  //
  // 단계:
  // 1. 새 객체를 만드세요 (id, date, title, content, mood 속성)
  //    - id는 nextId를 사용
  //    - date는 new Date().toISOString().slice(0, 10)
  //    - title, content, mood는 파라미터 값 사용
  // 2. 배열에 추가하세요
  // 3. nextId를 1 증가시키세요
  //
  // 힌트: 배열 끝에 요소를 추가하는 메서드는?

  const newDiary = {
    id: nextId,
    data: new Date().toISOString().slice(0, 10),
    title: title,
    content: content,
    mood: mood,
  };

  diary.push(newDiary);

  nextId++;
}

// ============================================
// Part 4: 일기 목록 그리기 (Read + DOM)
// ============================================

// 4-1. 일기 하나를 HTML 요소로 만들기
function renderEntry(entry) {
  // TODO: 일기 항목 하나를 DOM 요소로 만들어서 반환(return)하세요
  //
  // 만들어야 할 HTML 구조:
  // <div class="entry">
  //   <div class="entry-header">
  //     <span class="entry-mood">😊</span>
  //     <h3 class="entry-title">제목</h3>
  //     <span class="entry-date">2026-03-09</span>
  //   </div>
  //   <p class="entry-content">내용</p>
  //   <div class="entry-actions">
  //     <button class="edit-btn">수정</button>
  //     <button class="delete-btn">삭제</button>
  //   </div>
  // </div>
  //
  // 단계:
  // 1. document.createElement('div')로 컨테이너를 만들고 className = 'entry' 설정
  // 2. 헤더 영역을 만들고 (className = 'entry-header')
  //    - 기분 이모지 span (MOOD_EMOJIS[entry.mood] 활용)
  //    - 제목 h3 (entry.title을 textContent로)
  //    - 날짜 span (entry.date를 textContent로)
  //    을 각각 만들어서 헤더에 appendChild
  // 3. 내용 p 요소를 만들기 (entry.content를 textContent로)
  // 4. 버튼 영역을 만들고 (className = 'entry-actions')
  //    - 수정 버튼: className = 'edit-btn', textContent = '수정'
  //    - 삭제 버튼: className = 'delete-btn', textContent = '삭제'
  // 5. 수정 버튼에 클릭 이벤트 추가:
  //    editBtn.addEventListener('click', function() { fillFormForEdit(entry.id); });
  // 6. 삭제 버튼에 클릭 이벤트 추가:
  //    deleteBtn.addEventListener('click', function() { deleteEntry(entry.id); });
  // 7. 컨테이너에 헤더, 내용, 버튼 영역을 순서대로 appendChild
  // 8. 컨테이너를 return
  //
  // 힌트: createElement, textContent, className, appendChild, addEventListener

  const entryDiv = document.createElement("div");
  entryDiv.className = "entry";

  // heaer create
  const entryHeaderDiv = document.createElement("div");
  entryHeaderDiv.className = "entry-header";

  const entryMood = document.createElement("span");
  entryMood.className = "entry-mood";
  entryMood.textContent = MOOD_EMOJIS[entry.mood];

  const entryTitle = document.createElement("h3");
  entryTitle.className = "entry-title";
  entryTitle.textContent = entry.title;

  const entryDate = document.createElement("span");
  entryDate.className = "entry-date";
  entryDate.textContent = entry.date;

  entryHeaderDiv.appendChild(entryMood);
  entryHeaderDiv.appendChild(entryTitle);
  entryHeaderDiv.appendChild(entryDate);

  // content create

  const entryContent = document.createElement("p");
  entryContent.classname = "entry-content";
  entryContent.textContent = entry.content;

  // buttons create

  const entryActions = document.createElement("div");
  entryActions.className = "entry-actions";

  const entryEditBtn = document.createElement("button");
  entryEditBtn.className = "edit-btn";
  entryEditBtn.textContent = "수정";

  const entryDelBtn = document.createElement("button");
  entryDelBtn.className = "delete-btn";
  entryDelBtn.textContent = "삭제";

  entryEditBtn.addEventListener("click", function () {
    fillFormForEdit(entry.id);
  });

  entryDelBtn.addEventListener("click", function () {
    deleteEntry(entry.id);
  });

  entryActions.appendChild(entryEditBtn);
  entryActions.appendChild(entryDelBtn);

  entryDiv.appendChild(entryHeaderDiv);
  entryDiv.appendChild(entryContent);
  entryDiv.appendChild(entryActions);

  return entryDiv;
}

// 4-2. 전체 일기 목록 그리기
function renderAllEntries(mood) {
  // TODO: diary 배열의 모든 일기를 화면에 그리세요
  //
  // 단계:
  // 1. diaryList의 내용을 비우세요 (innerHTML = '')
  // 2. diary 배열이 비어있으면 emptyMessage를 보이게,
  //    비어있지 않으면 숨기세요
  //    (요소.style.display = 'block' 또는 'none')
  // 3. diary 배열을 순회하면서 renderEntry(항목)를 호출하고
  //    반환된 요소를 diaryList에 appendChild하세요
  //
  // 힌트: forEach로 순회, appendChild로 추가

  diaryList.innerHTML = "";

  diary.length === 0
    ? (emptyMessage.style.display = "block")
    : (emptyMessage.style.display = "none");

  if (mood === "") {
    diary.forEach((list) => {
      diaryList.appendChild(renderEntry(list));
    });
  } else {
    const filterdList = diary.filter((list) => {
      return list.mood === mood;
    });

    if (filterdList.length === 0) {
      emptyMessage.style.display = "block";
    } else {
      filterdList.forEach((list) => {
        diaryList.appendChild(renderEntry(list));
      });
    }
  }

  document.querySelector("#diary-title").textContent =
    `일기 목록 (${diary.length})`;
}

// ============================================
// Part 5: 일기 수정하기 (Update)
// ============================================

// 5-1. 배열에서 일기 데이터 수정
function updateEntry(id, updates) {
  // TODO: diary 배열에서 id가 일치하는 일기를 찾아서 수정하세요
  //
  // 단계:
  // 1. diary 배열에서 id가 일치하는 항목을 찾으세요
  // 2. 찾은 항목이 있으면, updates 객체의 속성들을 덮어쓰세요
  // 예: updateEntry(1, { title: "수정!", mood: "sad" })
  //     → id가 1인 일기의 title과 mood만 변경
  //
  // 힌트: find()로 찾고, Object.assign()으로 속성 복사

  const editDiary = diary.find((list) => {
    return list.id === id;
  });
  Object.assign(editDiary, updates);
}

// 5-2. 수정할 일기를 폼에 채우기
function fillFormForEdit(id) {
  // TODO: id로 일기를 찾아서 폼 입력칸에 기존 값을 채우세요
  //
  // 단계:
  // 1. diary 배열에서 id가 일치하는 항목을 찾으세요
  // 2. 찾은 항목이 없으면 return
  // 3. 폼에 값을 채우세요:
  //    - titleInput.value = 찾은 일기의 title
  //    - contentInput.value = 찾은 일기의 content
  //    - moodSelect.value = 찾은 일기의 mood
  // 4. editingId = id (수정 모드로 전환)
  // 5. submitBtn.textContent = '수정 완료' (버튼 텍스트 변경)
  //
  // 힌트: DOM 요소의 .value 속성에 값을 넣으면 입력칸에 표시됩니다

  const editContent = diary.find((d) => {
    return d.id === id;
  });

  titleInput.value = editContent.title;
  contentInput.value = editContent.content;
  moodSelect.value = editContent.mood;

  editingId = id;

  submitBtn.textContent = "수정 완료";
}

// ============================================
// Part 6: 일기 삭제하기 (Delete)
// ============================================

function deleteEntry(id) {
  // TODO: diary 배열에서 id가 일치하는 일기를 삭제하고 화면을 갱신하세요
  //
  // 단계:
  // 1. 삭제할 일기의 '인덱스'를 찾으세요
  // 2. 인덱스가 유효하면 (-1이 아니면) 배열에서 해당 요소를 제거하세요
  // 3. renderAllEntries()를 호출해서 화면을 갱신하세요
  //
  // 힌트: findIndex()로 인덱스 찾기, splice()로 제거

  const deleteId = diary.findIndex((list) => list.id === id);

  deleteId !== -1 && editingId === null
    ? diary.splice(deleteId, 1)
    : alert("삭제할 수 있는 일기가 존재하지 않거나 수정중입니다!");
  renderAllEntries(filtering);
  renderStats();
}

// ============================================
// Part 7: 이벤트 연결하기
// ============================================

// 7-1. 폼 초기화
function clearForm() {
  // TODO: 폼의 모든 입력값을 초기화하세요
  //
  // 단계:
  // 1. titleInput.value = '' (빈 문자열)
  // 2. contentInput.value = '' (빈 문자열)
  // 3. moodSelect.selectedIndex = 0 (첫 번째 옵션으로)
  // 4. editingId = null (추가 모드로 복귀)
  // 5. submitBtn.textContent = '일기 추가' (버튼 텍스트 복원)

  titleInput.value = "";
  contentInput.value = "";
  searchInput.value = "";
  moodSelect.selectedIndex = 0;
  moodFilterSelect.selectedIndex = 0;
  filtering = "";
  editingId = null;
  submitBtn.textContent = "일기 추가";
}

// 7-2. 폼 제출 처리
function handleSubmit(e) {
  // TODO: 폼이 제출되면 일기를 추가하거나 수정하세요
  //
  // 단계:
  // 1. e.preventDefault()로 페이지 새로고침 방지
  // 2. 입력값 가져오기:
  //    const title = titleInput.value;
  //    const content = contentInput.value;
  //    const mood = moodSelect.value;
  // 3. 수정 모드인지 확인:
  //    if (editingId) → updateEntry(editingId, { title, content, mood })
  //    else → addEntry(title, content, mood)
  // 4. clearForm()으로 폼 초기화
  // 5. renderAllEntries()로 화면 갱신

  e.preventDefault();

  const title = titleInput.value;
  const content = contentInput.value;
  const mood = moodSelect.value;

  if (editingId) updateEntry(editingId, { title, content, mood });
  else addEntry(title, content, mood);

  clearForm();
  renderAllEntries(filtering);

  renderStats();
}

// 7-3. 이벤트 리스너 등록
// TODO: diaryForm에 'submit' 이벤트 리스너를 연결하세요
// 힌트: diaryForm.addEventListener('submit', handleSubmit);
// (Part 1에서 diaryForm을 올바르게 선택해야 동작합니다!)
if (diaryForm) {
  // TODO: 여기에 addEventListener를 작성하세요
  diaryForm.addEventListener("submit", handleSubmit);
}

// ============================================
// Part 8: 일기장 통계 (심화)
// ============================================

// 8-1. 통계 데이터 계산
function getDiaryStats() {
  // TODO: 일기장의 통계 객체를 만들어 반환하세요
  //
  // 반환 형태:
  // {
  //   total: 전체 일기 수,
  //   moods: { happy: 1, sad: 2, ... }  ← 기분별 개수
  // }
  //
  // 단계:
  // 1. total은 diary 배열의 길이
  // 2. moods는 빈 객체 {}로 시작
  // 3. diary를 순회하면서 각 항목의 mood를 키로 사용해 개수를 세세요
  //
  // 힌트: if (moods[mood]) { moods[mood]++ } else { moods[mood] = 1 }

  let moods = {};

  diary.forEach((list) => {
    const mood = list.mood;
    if (moods[mood]) {
      moods[mood]++;
    } else {
      moods[mood] = 1;
    }
  });

  return { total: diary.length, moods: moods };
}

// 8-2. 통계를 화면에 그리기
function renderStats() {
  // TODO: getDiaryStats()의 결과를 statsContainer에 표시하세요
  //
  // 표시 예:
  //   전체 일기: 5개
  //   😊 행복: 2개  😢 슬픔: 1개  🎉 신남: 2개
  //
  // 단계:
  // 1. const stats = getDiaryStats()로 통계를 가져오세요
  //    (stats가 없으면 return)
  // 2. statsContainer.innerHTML = ''으로 비우세요
  // 3. '전체 일기: N개' 요소를 만들어 추가하세요
  // 4. stats.moods 객체를 순회하면서 (for...in 또는 Object.entries)
  //    각 기분별 개수를 요소로 만들어 추가하세요
  //    (MOOD_EMOJIS[mood]로 이모지를 가져올 수 있습니다)
  //
  // 힌트: createElement, textContent, appendChild
  // CSS 클래스: 'stats-grid' (컨테이너), 'stat-item' (각 항목), 'stat-total' (전체 개수)

  const stats = getDiaryStats();

  if (stats === null) {
    return;
  }

  statsContainer.innerHTML = "";

  const statsDiary = document.createElement("div");
  statsDiary.className = "stats-grid";

  const total = document.createElement("p");
  total.className = "stat-total";
  total.textContent = `전체 일기: ${stats.total}개`;

  statsContainer.appendChild(total);

  for (const mood in stats.moods) {
    const moodCount = stats.moods[mood];
    const span = document.createElement("span");
    let moodName = "";

    for (let i = 0; i < moodSelect.childElementCount; i++) {
      if (moodSelect.children[i].value === mood) {
        moodName = moodSelect.children[i].textContent;
        break;
      }
    }

    if (moodSelect.value === mood) {
      moodSelect.children.value;
    }

    span.textContent = `${moodName} : ${moodCount}개`;

    statsContainer.appendChild(span);
  }
}

// ============================================
// 도전 과제 (다 풀었다면 시도해보세요!)
// ============================================
//
// 1. getEntriesByKeyword(keyword)
//    - 제목이나 내용에 keyword가 포함된 일기를 찾아 반환
//    - 힌트: filter() + includes()
//

function getEntriesByKeyword(keyword) {
  const keywordDiary = diary.filter((cont) => {
    return cont.title.includes(keyword) || cont.content.includes(keyword);
  });

  return keywordDiary;
}

searchBtn.addEventListener("click", function () {
  const searchText = searchInput.value;
  const searchList = getEntriesByKeyword(searchText);

  diaryList.innerHTML = "";

  if (searchList.length === 0) {
    const p = document.createElement("p");
    p.className = "empty-message";
    p.textContent = "검색 결과가 존재하지 않습니다.";
    diaryList.appendChild(p);
  } else {
    searchList.forEach((list) => {
      diaryList.appendChild(renderEntry(list));
    });
  }
});

// 2. renderAllEntries를 수정해서 특정 mood만 필터링 가능하게 만들기
//    - 예: renderAllEntries('happy') → 행복한 일기만 표시
//    - 힌트: 파라미터로 mood를 받아서, 있으면 filter 적용
//
moodFilterSelect.addEventListener("change", function () {
  filtering = moodFilterSelect.options[moodFilterSelect.selectedIndex].value;

  renderAllEntries(filtering);
});

// 3. 일기 개수를 헤더 제목 옆에 실시간으로 표시하기
//    - 예: "일기 목록 (3)"
//    - 힌트: renderAllEntries 안에서 h2의 textContent 수정
