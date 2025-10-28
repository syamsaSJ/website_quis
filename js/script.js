const materials = [
  {
    level: 1,
    title: "Pengertian & Fungsi Makna Denotatif dan Konotatif",
    content: `
          <b>A. Pengertian makna kata denotatif dan konotatif</b><br>
        <b>Makna Denotatif</b> adalah makna suatu kata yang sesuai dengan konsep asalnya tanpa mengalami perubahan maupun penambahan arti, sehingga makna ini disebut juga makna lugas.<br>
        <b>Makna Konotatif</b> adalah makna yang didasarkan pada perasaan atau pemikiran seseorang.<br><br>
        <b>B. Fungsi kata denotatif dan konotatif</b><br>
        <b>Fungsi kata denotatif:</b> untuk menjelaskan sesuatu dengan jelas dan nyata agar orang lain mudah memahami maksudnya.<br>
        <b>Fungsi kata konotatif:</b> untuk menyampaikan pesan secara halus dan membangkitkan perasaan pembaca atau pendengar.
      `,
    video: "https://www.youtube.com/embed/nR8ZdVvmpJo?si=SJwPHQvMW0RSSxRh",
    question: "Perhatikan dua kalimat berikut ini!<br>1. Ibu menanam bunga mawar di halaman rumah.<br>2. Hati Ibu seindah bunga mawar yang sedang mekar.<br><br>Berdasarkan kedua kalimat tersebut, manakah pernyataan yang paling tepat?",
    options: {
      A: "Kalimat (1) menggunakan makna konotatif karena menjelaskan bunga yang nyata.",
      B: "Kalimat (2) menggunakan makna denotatif karena menggambarkan keindahan hati Ibu.",
      C: "Kalimat (1) menggunakan makna denotatif karena menjelaskan bunga yang sebenarnya, sedangkan kalimat (2) menggunakan makna konotatif karena menggambarkan perasaan.",
      D: "Kedua kalimat menggunakan makna denotatif karena sama-sama menyebut bunga mawar.",
    },
    answer: "C",
  },
  {
    level: 2,
    title: "Ciri-Ciri Makna Denotatif dan Konotatif",
    content: `
        <b>Ciri-ciri Makna Denotatif:</b><br>
        1. Maknanya sebenarnya dan apa adanya.<br>
        2. Dapat dilihat, dirasakan, atau dibuktikan secara nyata.<br>
        3. Tidak mengandung perasaan atau kiasan.<br>
        4. Biasanya digunakan dalam berita, laporan, atau pelajaran.<br><br>
        <b>Ciri-ciri Makna Konotatif:</b><br>
        1. Maknanya tidak sebenarnya (bermakna kiasan).<br>
        2. Sering menimbulkan perasaan tertentu seperti kagum, sedih, atau bangga.<br>
        3. Digunakan untuk mempercantik bahasa atau memberi makna yang lebih dalam.<br>
        4. Banyak ditemukan dalam puisi, peribahasa, dan cerita.
      `,
    video: "https://www.youtube.com/embed/tAZifOTPMKs?si=oeXkmNnHHE9msjYJ",
    question: "Perhatikan dua kalimat berikut!<br>1. “Rudi memelihara ular di rumahnya.”<br>2. “Dia disebut ular karena suka berbohong.”<br><br>Dari kedua kalimat di atas, yang memiliki makna denotatif adalah …",
    options: {
      A: "Kalimat 1, karena kata ular bermakna sebenarnya yaitu hewan melata.",
      B: "Kalimat 2, karena kata ular menunjukkan sifat seseorang.",
      C: "Keduanya bermakna konotatif karena mengandung perasaan.",
      D: "Keduanya bermakna denotatif karena bisa dibuktikan secara nyata.",
    },
    answer: "A",
  },
  {
    level: 3,
    title: "Penggunaan Kata Denotatif dan Konotatif",
    content: `
        <b>Kata Denotatif digunakan ketika:</b><br>
        • Menulis laporan, berita, atau penjelasan ilmiah.<br>
        • Berbicara apa adanya tanpa perasaan atau perumpamaan.<br><br>
        <b>Kata Konotatif digunakan ketika:</b><br>
        • Menulis puisi, cerita, peribahasa, atau pidato.<br>
        • Ingin mengungkapkan perasaan atau memuji seseorang.<br>
        • Ingin menyampaikan pesan secara halus.
      `,
    video: "https://www.youtube.com/embed/_k_H6iSdUcc?si=80RKe3Z0_9lossMj",
    question: "Perhatikan dua kalimat berikut!<br>1. “Ibu membeli emas di toko perhiasan.”<br>2. “Anak itu adalah emas bagi keluarganya.”<br><br>Kalimat yang cocok digunakan dalam pidato untuk memuji seseorang adalah …",
    options: {
      A: "Kalimat 1, karena bermakna sebenarnya dan bisa dibuktikan.",
      B: "Kalimat 2, karena kata emas bermakna kiasan untuk orang yang berharga.",
      C: "Kalimat 1, karena termasuk penjelasan ilmiah.",
      D: "Kalimat 2, karena menjelaskan kegiatan jual beli di toko.",
    },
    answer: "B",
  },
];

const finalData = [
  { q: "Makna denotatif adalah makna yang ....", options: { A: "Mengandung perasaan atau kiasan", B: "Sama seperti arti sebenarnya di kamus", C: "Digunakan untuk memperindah kata", D: "Mengandung makna rahasia" }, a: "B" },
  { q: "Makna konotatif adalah makna yang ....", options: { A: "Artinya sesuai kamus", B: "Mengandung perasaan atau kiasan", C: "Tidak memiliki makna", D: "Digunakan untuk laporan" }, a: "B" },
  { q: "Kata bermakna denotatif digunakan agar ....", options: { A: "Kalimat menjadi indah", B: "Arti kalimat mudah dimengerti dan jelas", C: "Kalimat terasa sedih", D: "Kalimat menjadi lucu" }, a: "B" },
  { q: "Kata bermakna konotatif sering digunakan untuk ....", options: { A: "Menulis laporan ilmiah", B: "Menulis berita di koran", C: "Menulis puisi atau cerita", D: "Menulis jadwal pelajaran" }, a: "C" },
  {
    q: "Perhatikan kalimat berikut! “Ibu menanam bunga di taman.” Makna kata bunga pada kalimat tersebut adalah ....",
    options: { A: "Kiasan untuk orang cantik", B: "Benda yang nyata, yaitu tanaman berbunga", C: "Nama panggilan seseorang", D: "Makna perasaan" },
    a: "B",
  },
  {
    q: "Perhatikan kalimat berikut! “Ani adalah bunga desa di kampungnya.” Makna kata bunga desa pada kalimat tersebut berarti ....",
    options: { A: "Tanaman yang tumbuh di desa", B: "Gadis yang paling cantik di desa", C: "Toko bunga yang ada di desa", D: "Nama sekolah di desa" },
    a: "B",
  },
  {
    q: "Kalimat yang memakai kata denotatif adalah ....",
    options: { A: "Kakek sedang memotong rumput di halaman.", B: "Kakek sedang memotong omongan ayah.", C: "Kakek adalah rumput hijau di pagi hari.", D: "Kakek memotong kalimat yang panjang." },
    a: "A",
  },
  {
    q: "Kalimat yang memakai kata konotatif adalah ....",
    options: { A: "Rina mencuci tangan sebelum makan.", B: "Rina adalah tangan kanan kepala sekolah.", C: "Rina terluka di tangan kirinya.", D: "Rina menggambar tangan manusia." },
    a: "B",
  },
  {
    q: "Perhatikan dua kalimat berikut: 1. Sinta menanam bunga di pot. 2. Sinta disebut bunga sekolah karena rajin dan cantik. Makna kata bunga pada kalimat (2) berubah menjadi ....",
    options: { A: "Dari denotatif ke konotatif", B: "Dari konotatif ke denotatif", C: "Dari benda ke tempat", D: "Dari umum ke khusus" },
    a: "A",
  },
  {
    q: "Kalimat berikut yang paling tepat untuk menunjukkan makna konotatif positif adalah ....",
    options: { A: "Dinda bunga kelas yang selalu ceria.", B: "Dinda memetik bunga di taman.", C: "Dinda menyiram bunga setiap pagi.", D: "Dinda membeli bunga di toko." },
    a: "A",
  },
];

let currentStudent = "";
let progress = 0; // level terakhir yang sudah selesai
const studentInput = document.getElementById("studentName");
const startBtn = document.getElementById("startBtn");
const levelsContainer = document.getElementById("levelsContainer");

startBtn.addEventListener("click", () => {
  if (!studentInput.value.trim()) return alert("Isi nama dulu!");
  currentStudent = studentInput.value.trim();
  progress = getProgress();
  renderLevels();
  document.getElementById("studentCard").classList.add("hidden");
});

function getProgress() {
  const db = JSON.parse(localStorage.getItem("smojo_scores") || "{}");
  if (!db[currentStudent]) return 0;
  const scores = db[currentStudent];
  let p = 0;
  for (let i = 1; i <= 3; i++) {
    if (scores["level" + i] === 100) p = i;
  }
  return p;
}

function renderLevels() {
  levelsContainer.innerHTML = "";
  const db = JSON.parse(localStorage.getItem("smojo_scores") || "{}");
  const studentData = db[currentStudent] || {};

  materials.forEach((m) => {
    const locked = m.level > progress + 1;
    const done = studentData["level" + m.level] === 100;

    const div = document.createElement("div");
    div.className = "card";
    div.style.opacity = locked ? "0.5" : "1";

    // Tampilkan konten materi + tombol sesuai status
    let innerHTML = `
      <h3>
        Level ${m.level} - ${m.title}
        ${done ? "<span class='done-badge'>✅ Selesai</span>" : ""}
      </h3>
      ${
        locked
          ? "<p style='color:gray;font-style:italic'>🔒 Selesaikan level sebelumnya dulu!</p>"
          : `
          <div class='material-content' id='content-${m.level}'>
            ${m.content}
          </div>
          <div class='btn-row'>
            ${
              done
                ? `<button class='btn done' disabled>Level Selesai ✅</button>`
                : `
                  <button class='btn belum' onclick='showVideo(${m.level})'>Belum Faham 🎬</button>
                  <button class='btn sudah' onclick='showQuiz(${m.level})'>Sudah Faham 🧠</button>
                `
            }
          </div>
          <div id='video-${m.level}' class='video-wrap hidden'>
            <iframe src='${m.video}' allowfullscreen></iframe>
          </div>
          <div id='quiz-${m.level}' class='quiz hidden'></div>
        `
      }
    `;
    div.innerHTML = innerHTML;
    levelsContainer.appendChild(div);
  });

  if (progress >= 3) document.getElementById("finalQuizCard").classList.remove("hidden");
}

function showVideo(lvl) {
  document.getElementById("video-" + lvl).classList.remove("hidden");
  document.getElementById("quiz-" + lvl).classList.add("hidden");
}

function showQuiz(lvl) {
  const m = materials.find((x) => x.level === lvl);
  const quiz = document.getElementById("quiz-" + lvl);
  quiz.innerHTML = `<div class='question'>${m.question}</div>`;
  const opts = document.createElement("div");
  opts.className = "options";
  for (const [k, v] of Object.entries(m.options)) {
    const el = document.createElement("div");
    el.className = "option";
    el.textContent = k + ". " + v;
    el.addEventListener("click", () => {
      opts.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
      el.classList.add("selected");
    });
    opts.appendChild(el);
  }
  const result = document.createElement("div");
  result.className = "result";
  result.id = "result-" + lvl;
  const submit = document.createElement("button");
  submit.className = "btn primary small";
  submit.textContent = "Submit Jawaban";
  submit.onclick = () => checkAnswer(lvl, m, opts);
  quiz.append(opts, submit, result);
  quiz.classList.remove("hidden");
}

function checkAnswer(lvl, m, opts) {
  const sel = opts.querySelector(".selected");
  const resultEl = document.getElementById("result-" + lvl);
  if (!sel) return (resultEl.textContent = "Pilih jawaban dulu!");
  const chosen = sel.textContent[0];
  const correct = m.answer;
  if (chosen === correct) {
    resultEl.textContent = "Benar ✅";
    resultEl.style.color = "green";
    saveScore(lvl, 100);
    progress = lvl; // update progres
    renderLevels(); // refresh tampilan level berikutnya
    if (lvl === 3) document.getElementById("finalQuizCard").classList.remove("hidden");
  } else {
    resultEl.textContent = "Salah ❌. Jawaban benar: " + correct;
    resultEl.style.color = "red";
    saveScore(lvl, 0);
  }
}

function saveScore(lvl, score) {
  const db = JSON.parse(localStorage.getItem("smojo_scores") || "{}");
  if (!db[currentStudent]) db[currentStudent] = {};
  db[currentStudent]["level" + lvl] = score;
  localStorage.setItem("smojo_scores", JSON.stringify(db));
}

/* ========== Quiz Final ========== */
const startFinal = document.getElementById("startFinal");
const finalPage = document.getElementById("finalPage");
const finalQuestion = document.getElementById("finalQuestion");
const finalOptions = document.getElementById("finalOptions");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progress");

let currentQ = 0;
let score = 0;

startFinal.addEventListener("click", () => {
  currentQ = 0;
  score = 0;
  finalPage.classList.add("active");
  showQuestion();
});

function showQuestion() {
  const q = finalData[currentQ];
  finalQuestion.textContent = q.q;
  finalOptions.innerHTML = "";
  for (const [key, val] of Object.entries(q.options)) {
    const b = document.createElement("div");
    b.className = "option";
    b.textContent = `${key}. ${val}`;
    b.addEventListener("click", () => {
      finalOptions.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
      b.classList.add("selected");
    });
    finalOptions.appendChild(b);
  }
  progressText.textContent = `Soal ${currentQ + 1} dari ${finalData.length}`;
  nextBtn.textContent = currentQ === finalData.length - 1 ? "Selesai 🏁" : "Next ➡️";
}

nextBtn.addEventListener("click", () => {
  const sel = finalOptions.querySelector(".selected");
  if (!sel) return alert("Pilih jawaban dulu!");
  const ans = sel.textContent[0];
  if (ans === finalData[currentQ].a) score++;
  currentQ++;
  if (currentQ < finalData.length) showQuestion();
  else endFinal();
});

function endFinal() {
  finalPage.classList.remove("active");
  const percent = Math.round((score / finalData.length) * 100);
  const db = JSON.parse(localStorage.getItem("smojo_scores") || "{}");
  if (!db[currentStudent]) db[currentStudent] = {};
  db[currentStudent].final = percent;
  localStorage.setItem("smojo_scores", JSON.stringify(db));
  localStorage.setItem("lastResult", JSON.stringify({ name: currentStudent, score: percent }));
  window.location.href = "result.html";
}

/* ========== Tombol Login Admin ========== */
const adminBtn = document.createElement("button");
adminBtn.textContent = "Login Admin 🔑";
adminBtn.className = "btn ghost small";
adminBtn.style.position = "fixed";
adminBtn.style.top = "10px";
adminBtn.style.right = "10px";
adminBtn.onclick = () => {
  const user = prompt("Masukkan Username:");
  const pass = prompt("Masukkan Password:");
  if (user === "dinarnisaul" && pass === "Din@rnc21") {
    window.location.href = "admin.html";
  } else {
    alert("Login gagal! Username atau password salah.");
  }
};
document.body.appendChild(adminBtn);

function saveScoreServer(name, scores) {
  fetch("save_score.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, scores }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Saved:", data))
    .catch((err) => console.error("Error:", err));
}

function saveScore(lvl, score) {
  const db = JSON.parse(localStorage.getItem("smojo_scores") || "{}");
  if (!db[currentStudent]) db[currentStudent] = {};
  db[currentStudent]["level" + lvl] = score;
  localStorage.setItem("smojo_scores", JSON.stringify(db));

  // 🔽 Kirim ke server juga
  saveScoreServer(currentStudent, db[currentStudent]);
}
