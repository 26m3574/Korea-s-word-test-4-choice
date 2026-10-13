// ----------------------
// Partごとの単語データ
// ----------------------
const partWords = {
  1: {
    1: [
    { en: "네", jp: "はい" },
    { en: "예의", jp: "礼儀" },
    { en: "오이", jp: "きゅうり" },
    { en: "왜", jp: "なぜ" },
    { en: "우유", jp: "牛乳" },
    { en: "위", jp: "上" },
    { en: "유아", jp: "幼児" }
    ],

     2: [
  { en: "과자", jp: "菓子" },
  { en: "교과서", jp: "教科書" },
  { en: "뉴스", jp: "ニュース" },
  { en: "도로", jp: "道路" },
  { en: "모자", jp: "帽子" },
  { en: "무료", jp: "無料" },
  { en: "바지", jp: "ズボン" },
  { en: "수도", jp: "首都" },
  { en: "사과", jp: "リンゴ" },
  { en: "시계", jp: "時計" },
  { en: "아버지", jp: "父、お父さん" },
  { en: "어머니", jp: "母、お母さん" },
  { en: "아시아", jp: "アジア" },
  { en: "여자", jp: "女" },
  { en: "고기", jp: "肉" },
  { en: "신발", jp: "靴" },
  { en: "노래", jp: "歌" }
],


    3: [
    { en: "쓰레기", jp: "ゴミ" },
    { en: "우표", jp: "切手" },
    { en: "취미", jp: "趣味" },
    { en: "치마", jp: "スカート" },
    { en: "토끼", jp: "ウサギ" },
    { en: "포도", jp: "ブドウ" },
    { en: "휴지", jp: "トイレットペーパー" }
  ],

  4: [
    { en: "감", jp: "柿" },
    { en: "고향", jp: "故郷" },
    { en: "단어", jp: "単語" },
    { en: "밥", jp: "ごはん" },
    { en: "안경", jp: "眼鏡" },
    { en: "연필", jp: "鉛筆" },
    { en: "옷", jp: "服" },
    { en: "입학", jp: "入学" },
    { en: "장갑", jp: "手袋" },
    { en: "책", jp: "本" },
    { en: "학교", jp: "学校" },
    { en: "챙문",jp:"窓"}
  ],

  5: [
    { en: "가방", jp: "鞄" },
    { en: "가수", jp: "歌手" },
    { en: "경찰", jp: "警察" },
    { en: "공무원", jp: "公務員" },
    { en: "네", jp: "はい" },
    { en: "눈", jp: "目" },
    { en: "발", jp: "足" },
    { en: "다리", jp: "脚" },
    { en: "대학생", jp: "大学生" },
    { en: "딸기", jp: "いちご" },
    { en: "떡볶이", jp: "トッポキ" },
    { en: "머리", jp: "頭" },
    { en: "몸", jp: "体" },
    { en: "무엇", jp: "何(名詞を置き換える語：何が好きですか)" },
    { en: "변호사", jp: "弁護士" },
    { en: "비누", jp: "石鹸" },
    { en: "손", jp: "手" },
    { en: "씨", jp: "～さん" },
    { en: "아니요", jp: "いいえ" },
    { en: "우산", jp: "傘" },
    { en: "얼굴", jp: "顔" },
    { en: "이름", jp: "名前" },
    { en: "입", jp: "口" },
    { en: "장미", jp: "バラ" },
    { en: "저", jp: "わたくし" },
    { en: "직업", jp: "職業" },
    { en: "코", jp: "鼻" },
    { en: "팔", jp: "腕" },
    { en: "하늘", jp: "空" },
    { en: "회사원", jp: "会社員" }
  ],

      6: [
    { en: "것(가)", jp: "もの" },
    { en: "나라", jp: "国" },
    { en: "남동생", jp: "弟" },
    { en: "사람", jp: "人" },
    { en: "사전", jp: "辞書" },
    { en: "사진", jp: "写真" },
    { en: "수건", jp: "タオル" },
    { en: "얼마", jp: "いくら" },
    { en: "이것(이거)", jp: "これ" },
    { en: "이쪽", jp: "こちら" },
    { en: "일본", jp: "日本" },
    { en: "일본어", jp: "日本語" },
    { en: "중학생", jp: "中学生" },
    { en: "지우개", jp: "消しゴム" },
    { en: "청바지", jp: "ジーンズ" },
    { en: "친구", jp: "友達" },
    { en: "한국", jp: "韓国" },
    { en: "한국어", jp: "韓国語" },
    { en: "형제", jp: "兄弟" }
  ],

      7: [
    { en: "가다", jp: "行く" },
    { en: "공원", jp: "公園" },
    { en: "교실", jp: "教室" },
    { en: "남쪽", jp: "南側" },
    { en: "다시", jp: "もう一度" },
    { en: "대학교", jp: "大学" },
    { en: "도서관", jp: "図書館" },
    { en: "동쪽", jp: "東側" },
    { en: "뒤", jp: "後ろ" },
    { en: "만들다", jp: "作る" },
    { en: "매점", jp: "売店" },
    { en: "먹다", jp: "食べる" },
    { en: "몇", jp: "何、いくつの( 名詞の前に置いて修飾する語（数詞)：何時ですか)" },
    { en: "아래", jp: "下" },
    { en: "밖", jp: "外" },
    { en: "번호", jp: "番号" },
    { en: "병원", jp: "病院" },
    { en: "북쪽", jp: "北側" },
    { en: "생일", jp: "誕生日" },
    { en: "서점", jp: "本屋" },
    { en: "서쪽", jp: "西側" },
    { en: "안", jp: "中" },
    { en: "쓰다", jp: "書く" },
    { en: "밑", jp: "下（別表現）" },
    { en: "속", jp: "中（別表現）" },
    { en: "앉다", jp: "座る" },
    { en: "앞", jp: "前" },
    { en: "없다", jp: "ない、いない" },
    { en: "옆", jp: "隣、横" },
    { en: "오다", jp: "来る" },
    { en: "오른쪽", jp: "右側" },
    { en: "왼쪽", jp: "左側" },
    { en: "원", jp: "ウォン" },
    { en: "의자", jp: "椅子" },
    { en: "읽다", jp: "読む" },
    { en: "있다", jp: "ある、いる" },
    { en: "자전거", jp: "自転車" },
    { en: "전화", jp: "電話" },
    { en: "주다", jp: "あげる、くれる" },
    { en: "지하철", jp: "地下鉄" },
    { en: "집", jp: "家" },
    { en: "찾다", jp: "探す" },
    { en: "천천히", jp: "ゆっくり" },
    { en: "층", jp: "階" },
    { en: "학생회관", jp: "学生会館" },
    { en: "호텔", jp: "ホテル" },
    { en: "회사", jp: "会社" },
    { en: "영", jp: "零" },
    { en: "공", jp: "０" },
    { en: "일", jp: "一" },
    { en: "이", jp: "二" },
    { en: "삼", jp: "三" },
    { en: "사", jp: "四" },
    { en: "오", jp: "五" },
    { en: "육", jp: "六" },
    { en: "칠", jp: "七" },
    { en: "팔", jp: "八" },
    { en: "구", jp: "九" },
    { en: "십", jp: "十" },
    { en: "백", jp: "百" },
    { en: "천", jp: "千" },
    { en: "만", jp: "万" }
  ],


    8: [
    { en: "강아지", jp: "子犬" },
    { en: "같이", jp: "一緒に" },
    { en: "배고프다", jp: "空腹だ" },
    { en: "기다리다", jp: "待つ" },
    { en: "김치", jp: "キムチ" },
    { en: "냉면", jp: "冷麺" },
    { en: "놀다", jp: "遊ぶ" },
    { en: "닫다", jp: "閉める" },
    { en: "라면", jp: "ラーメン" },
    { en: "마시다", jp: "飲む" },
    { en: "맛", jp: "味" },
    { en: "맛있다", jp: "おいしい" },
    { en: "무슨", jp: "何の、どんな(名詞を直接置き換える語：何色ですか)" },
    { en: "반찬", jp: "おかず" },
    { en: "배우다", jp: "習う、学ぶ" },
    { en: "보다", jp: "見る" },
    { en: "불고기", jp: "プルコギ" },
    { en: "사다", jp: "買う" },
    { en: "사랑하다", jp: "愛する" },
    { en: "산책", jp: "散策" },
    { en: "서다", jp: "立つ" },
    { en: "식당", jp: "食堂" },
    { en: "싫어하다", jp: "嫌いだ" },
    { en: "아이", jp: "子供" },
    { en: "아주", jp: "とても" },
    { en: "아침", jp: "朝、朝ごはん" },
    { en: "어떻다", jp: "どうだ" },
    { en: "어때요", jp: "どうですか" },
    { en: "역", jp: "駅" },
    { en: "예쁘다", jp: "綺麗だ" },
    { en: "운동장", jp: "運動場" },
    { en: "음식", jp: "食べ物" },
    { en: "사주다", jp: "おごる" },
    { en: "저녁", jp: "夕方、夕食" },
    { en: "점심", jp: "昼、昼食" },
    { en: "점원", jp: "店員" },
    { en: "정말", jp: "本当に" },
    { en: "좋아하다", jp: "好きだ" },
    { en: "하다", jp: "する" },
    { en: "한국요리", jp: "韓国料理" }
  ],
},

2: {
  1: [
  { en: "안녕하세요", jp: "こんにちは" },
  { en: "안녕하십니까", jp: "こんにちは" },
  { en: "안녕히 가세요", jp: "さようなら(見送る人)" },
  { en: "안녕히 계세요", jp: "さようなら(去る人)" },
  { en: "또 만나요", jp: "また会いましょう" },
  { en: "감사합니다", jp: "ありがとうございます" },
  { en: "고맙습니다", jp: "ありがとうございます" },
  { en: "미안해요", jp: "ごめんなさい" },
  { en: "죄송합니다", jp: "申し訳ありません" },
  { en: "괜찮아요", jp: "だいじょうぶです" },
  { en: "실례합니다", jp: "失礼します" },
  { en: "처음 뵙겠습니다", jp: "初めまして" },
  { en: "만나서 반갑습니다", jp: "お会いできてうれしいです" },
  { en: "수고하셨습니다", jp: "お疲れさまでした" },
  { en: "많이 드세요", jp: "たくさん召し上がってください" },
  { en: "잘 먹겠습니다", jp: "いただきます" },
  { en: "잘 먹었습니다", jp: "ごちそうさまでした" },
  { en: "잘 부탁드립니다", jp: "よろしくお願いします" },
  { en: "축하합니다", jp: "おめでとうございます" },
  { en: "안녕히 주무세요", jp: "おやすみなさい" },
  { en: "오랜만이에요", jp: "お久しぶりです" },
  { en: "다녀오겠습니다", jp: "行ってきます" },
  { en: "다녀왔습니다", jp: "ただいま" }
],

},

  3: {
  1: [
    { 
      en: "번호", 
      jp: "番号",
      choices: ["番号", "病院", "北側", "学校"]  // ★固定選択肢
    },
    { 
      en: "병원", 
      jp: "病院",
      choices: ["病院", "番号", "友達", "時間"] 
    },
  ],
},

  
  4: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] }
};

let quizList = [];
let currentIndex = 0;
let correctCount = 0;
let timer;
let timeLeft = 0;
let words = [];

let selectedPart;
let selectedWeek;

// ----------------------
// スタート
// ----------------------

function startQuiz() {
  const mode = document.getElementById("mode").value;
  const count = Number(document.getElementById("questionCount").value);
  const limit = Number(document.getElementById("timeLimit").value);

  timeLeft = limit;

  quizList = shuffle(words).slice(0, count);
  currentIndex = 0;
  correctCount = 0;

  document.getElementById("settingsArea").style.display = "none";
  document.getElementById("quizArea").style.display = "block";
  document.getElementById("progressArea").style.display = "block";

  document.getElementById("totalNum").textContent = count;

  showQuestion(mode);
  startTimer();
}

// ----------------------
// タイマー
// ----------------------
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `残り時間: ${timeLeft}秒`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion(false);
    }
  }, 1000);
}

// ----------------------
// 問題表示（付箋対応）
// ----------------------
function showQuestion(mode) {
  const q = quizList[currentIndex];

  document.getElementById("nowNum").textContent = currentIndex + 1;

  const questionText = mode === "en_to_jp" ? q.en : q.jp;
  const correctAnswer = mode === "en_to_jp" ? q.jp : q.en;

  const wrongList = JSON.parse(localStorage.getItem("wrongWords") || "[]");
  const isWrongBefore = wrongList.includes(q.en);

  const questionBox = document.getElementById("question");

  // ★ 質問＋手動付箋ボタン＋付箋アイコン
  questionBox.innerHTML = `
    <span class="question-main">${questionText}</span>
    ${isWrongBefore ? '<span class="fusen">📌</span>' : ''}
    <button id="toggleFusenBtn" class="toggle-fusen-btn">
      ${isWrongBefore ? '付箋を外す' : '付箋をつける'}
    </button>
  `;

  // ★ 手動付箋 ON/OFF
// ★ 手動付箋 ON/OFF
const toggleBtn = document.getElementById("toggleFusenBtn");
toggleBtn.onclick = () => {
  const list = JSON.parse(localStorage.getItem("wrongWords") || "[]");
  const idx = list.indexOf(q.en);

  if (idx === -1) {
    list.push(q.en);
  } else {
    list.splice(idx, 1);
  }

  localStorage.setItem("wrongWords", JSON.stringify(list));

  // ★ 質問部分だけ更新（選択肢は再生成しない）
  const isWrongNow = list.includes(q.en);
  questionBox.innerHTML = `
    <span class="question-main">${questionText}</span>
    ${isWrongNow ? '<span class="fusen">📌</span>' : ''}
    <button id="toggleFusenBtn" class="toggle-fusen-btn">
      ${isWrongNow ? '付箋を外す' : '付箋をつける'}
    </button>
  `;

  // ★ ボタンのイベントを再付与
  document.getElementById("toggleFusenBtn").onclick = toggleBtn.onclick;
};

  // ★ 選択肢生成（あなたの元コードをそのまま利用）
  let choices;

  if (selectedPart === 3 && q.choices) {
    choices = q.choices.slice();
  } else {
    choices = [correctAnswer];

    while (choices.length < 4) {
      const rand = words[Math.floor(Math.random() * words.length)];
      const option = mode === "en_to_jp" ? rand.jp : rand.en;

      if (!choices.includes(option)) {
        choices.push(option);
      }
    }

    choices = shuffle(choices);
  }

  const choicesArea = document.getElementById("choices");
  choicesArea.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.onclick = () => nextQuestion(choice === correctAnswer);
    choicesArea.appendChild(btn);
  });
}

// ----------------------
// 次の問題（正誤保存）
// ----------------------
function nextQuestion(isCorrect) {
  clearInterval(timer);

  const judge = document.getElementById("judge");

  if (isCorrect) {
    correctCount++;
    judge.textContent = "〇";
    judge.className = "correct show";
  } else {
    judge.textContent = "×";
    judge.className = "wrong show";
  }

  const wordStatus = JSON.parse(localStorage.getItem("wordStatus") || "{}");
  const q = quizList[currentIndex];
  wordStatus[q.en] = isCorrect;
  localStorage.setItem("wordStatus", JSON.stringify(wordStatus));

  document.getElementById("nextBtn").style.display = "block";
}

function goNext() {
  document.getElementById("nextBtn").style.display = "none";

  const judge = document.getElementById("judge");
  judge.textContent = "";
  judge.className = "";

  currentIndex++;

  if (currentIndex >= quizList.length) {
    showResult();
  } else {
    timeLeft = Number(document.getElementById("timeLimit").value);
    showQuestion(document.getElementById("mode").value);
    startTimer();
  }
}

// ----------------------
// 結果表示
// ----------------------
function showResult() {
  document.getElementById("quizArea").style.display = "none";
  document.getElementById("progressArea").style.display = "none";

  const resultArea = document.getElementById("resultArea");
  resultArea.style.display = "block";

  const rate = Math.round((correctCount / quizList.length) * 100);

  const week = new URLSearchParams(window.location.search).get("week");
  localStorage.setItem(`week${week}_rate`, rate);

  resultArea.innerHTML = `
    <h2>結果</h2>
    <p>正解数：${correctCount} / ${quizList.length}</p>
    <p>正答率：${rate}%</p>
    <button class="result-btn" onclick="returnToStart()">スタート画面に戻る</button>
  `;
}

// ----------------------
// スタート画面へ戻る
// ----------------------
function returnToStart() {
  document.getElementById("resultArea").style.display = "none";
  document.getElementById("settingsArea").style.display = "block";

  quizList = [];
  currentIndex = 0;
  correctCount = 0;
  timeLeft = 0;

  document.getElementById("judge").textContent = "";
  document.getElementById("judge").className = "";
  document.getElementById("nextBtn").style.display = "none";
}

// ----------------------
// シャッフル
// ----------------------
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// ----------------------
// Part → Week（復習モード対応）
// ----------------------
document.querySelectorAll('.partBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const part = Number(btn.dataset.part);
if (part === 2) {
      window.location.href = `week2.html?part=2`;
      return;
    }
    if (part === 3) {
      window.location.href = `week3.html?part=3`;
      return;
    }
     
    if (part === 5) {
      window.location.href = "week.html?part=5&review=1";
      return;
    }

    window.location.href = `week.html?part=${part}`;
  });
});

// ----------------------
// Week → index.html（復習モード対応）
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const part = Number(params.get("part"));
  const isReview = params.get("review") === "1";

  const weekButtons = document.querySelectorAll('.weekBtn');

  if (weekButtons.length > 0) {
    weekButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const week = Number(btn.dataset.week);

        if (part === 5 && isReview) {
          const wrongList = JSON.parse(localStorage.getItem("wrongWords") || "[]");
          const filtered = partWords[1][week].filter(w => wrongList.includes(w.en));

          localStorage.setItem("reviewWords", JSON.stringify(filtered));

          window.location.href = `index.html?part=5&week=${week}&review=1`;
          return;
        }

        window.location.href = `index.html?part=${part}&week=${week}`;
      });
    });
  }
});

// ----------------------
// index.html に戻ったとき Week の単語をセット（Part対応）
// ----------------------
// ----------------------
// index.html に戻ったとき Week の単語をセット（Part対応）
// ----------------------
const params2 = new URLSearchParams(window.location.search);
selectedWeek = Number(params2.get("week"));
selectedPart = Number(params2.get("part"));
const isReview2 = params2.get("review") === "1";

if (selectedWeek) {
  words.length = 0;

  if (isReview2) {
    const reviewWords = JSON.parse(localStorage.getItem("reviewWords") || "[]");
    reviewWords.forEach(w => words.push(w));
  } else {
    partWords[selectedPart][selectedWeek].forEach(w => words.push(w));
  }

  // ★ Part3 のときだけタイトルを文法用に変更
  const title = document.querySelector("#settingsArea h2");
  if (selectedPart === 3) {
    title.textContent = "韓国語文法4択クイズ";
  } else if (selectedPart === 2) {
    title.textContent = "韓国語会話表現4択クイズ";
  }else {
    title.textContent = "韓国単語4択クイズ";
  }

  // ★ 最大値を総単語数に設定
  const questionInput = document.getElementById("questionCount");
  questionInput.max = words.length;

  // ★ 入力が最大値を超えたら自動で最大値に戻す
  questionInput.addEventListener("input", () => {
    if (Number(questionInput.value) > words.length) {
      questionInput.value = words.length;
    }
  });

  document.getElementById("partArea").style.display = "none";
  document.getElementById("settingsArea").style.display = "block";
}

function goBack() {
  window.history.back();
}

// index.html（パート選択画面）だけ戻るボタンを消す
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  const isPartSelectPage = path.endsWith("/html/index.html") && !params.has("week");

  if (isPartSelectPage) {
    const backBtn = document.getElementById("backBtn");
    if (backBtn) backBtn.style.display = "none";
  }
});
