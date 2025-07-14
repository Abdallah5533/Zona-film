
const films = [
  "اللمبي", "صعيدي في الجامعة الأمريكية", "الناظر", "كده رضا", "طير إنت",
  "مرجان أحمد مرجان", "الفيل الأزرق", "إبراهيم الأبيض", "عوكل", "بوبوس"
];

let current = 0;
let timeLeft = 120;
let timer;

function showFilm() {
  document.getElementById("root").innerHTML = `
    <h1>🎬 الفيلم:</h1>
    <h2>${films[current]}</h2>
    <p>⏳ الوقت المتبقي: <span id="time">${timeLeft}</span> ثانية</p>
    <button onclick="nextFilm()">التالي</button>
  `;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft <= 0) clearInterval(timer);
  }, 1000);
}

function nextFilm() {
  clearInterval(timer);
  current = (current + 1) % films.length;
  timeLeft = 120;
  showFilm();
}

showFilm();
