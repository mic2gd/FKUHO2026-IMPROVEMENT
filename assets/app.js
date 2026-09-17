// ============================================================
// CBT Remedial - Blok Dasar-Dasar Biomedis FK UHO
// Logic utama aplikasi (vanilla JS, tanpa dependency build tool)
// ============================================================

(function () {
  "use strict";

  const QUESTIONS = window.QUESTIONS || [];
  const LETTERS = ["A", "B", "C", "D", "E"];
  const EXAM_DURATION_SEC = 90 * 60; // 1 jam 30 menit
  const SUBJECTS = ["Anatomi", "Biokimia", "Fisiologi", "Histologi"];

  const APP = {
    user: null,
    mode: "exam",
    exam: {
      order: [],
      index: 0,
      answers: {},
      remainingSec: EXAM_DURATION_SEC,
      timerId: null,
      submitted: false,
      resultSummary: null
    },
    flashcard: {
      order: [],
      index: 0,
      filter: "Semua"
    }
  };

  // ---------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showScreen(id) {
    $all(".screen").forEach(function (el) { el.hidden = true; });
    const target = document.getElementById(id);
    if (target) target.hidden = false;
    window.scrollTo(0, 0);
  }

  function formatHMS(totalSec) {
    const s = Math.max(0, Math.floor(totalSec));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return [h, m, sec].map(function (n) { return String(n).padStart(2, "0"); }).join(":");
  }

  function formatDurationHuman(totalSec) {
    const s = Math.max(0, Math.floor(totalSec));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    if (m <= 0) return sec + " detik";
    return m + " menit " + sec + " detik";
  }

  // ===========================================================
  // LOGIN SCREEN
  // ===========================================================
  function initLoginScreen() {
    const modeButtons = $all(".mode-option");
    modeButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        modeButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        APP.mode = btn.getAttribute("data-mode");
      });
    });

    $("#form-login").addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = $("#input-nama").value.trim();
      const nim = $("#input-nim").value.trim();
      const kelas = $("#input-kelas").value.trim();
      const errorEl = $("#login-error");

      if (!nama || !nim || !kelas) {
        errorEl.textContent = "Nama, NIM, dan Kelas wajib diisi sebelum memulai.";
        errorEl.hidden = false;
        return;
      }
      errorEl.hidden = true;
      APP.user = { nama: nama, nim: nim, kelas: kelas };

      if (APP.mode === "exam") {
        startExam();
      } else {
        startFlashcard();
      }
    });
  }

  // ===========================================================
  // EXAM MODE
  // ===========================================================
  function buildExamOrder() {
    // Urutan SOAL diacak per sesi (poin 9), dan urutan OPSI jawaban tiap
    // soal juga diacak secara independen supaya kunci jawaban tidak bisa
    // dihafal posisinya oleh peserta lain.
    return shuffle(QUESTIONS).map(function (q) {
      return {
        no: q.no,
        subject: q.subject,
        soal: q.soal,
        pilihan: q.pilihan,
        kunci: q.kunci,
        pembahasan: q.pembahasan,
        displayOrder: shuffle(LETTERS)
      };
    });
  }

  function startExam() {
    APP.exam.order = buildExamOrder();
    APP.exam.index = 0;
    APP.exam.answers = {};
    APP.exam.remainingSec = EXAM_DURATION_SEC;
    APP.exam.submitted = false;
    APP.exam.resultSummary = null;

    $("#exam-nama-tag").textContent = APP.user.nama;
    $("#exam-meta-tag").textContent = APP.user.nim + " \u2022 Kelas " + APP.user.kelas;

    showScreen("screen-exam");
    renderExamQuestion();
    startExamTimer();
  }

  function startExamTimer() {
    updateTimerDisplay();
    if (APP.exam.timerId) clearInterval(APP.exam.timerId);
    APP.exam.timerId = setInterval(function () {
      APP.exam.remainingSec -= 1;
      updateTimerDisplay();
      if (APP.exam.remainingSec <= 0) {
        clearInterval(APP.exam.timerId);
        finalizeExam(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = $("#exam-timer");
    el.textContent = formatHMS(APP.exam.remainingSec);
    el.classList.toggle("is-warning", APP.exam.remainingSec <= 5 * 60);
  }

  function renderExamQuestion() {
    const q = APP.exam.order[APP.exam.index];
    const subjectTag = $("#q-subject-tag");
    subjectTag.textContent = q.subject;
    subjectTag.setAttribute("data-subject", q.subject);
    $("#q-number").textContent = String(APP.exam.index + 1);
    $("#q-text").textContent = q.soal;

    const optionsHtml = q.displayOrder.map(function (originalKey, idx) {
      const displayLetter = LETTERS[idx];
      const selected = APP.exam.answers[q.no] === originalKey;
      return (
        '<div class="option-item' + (selected ? " is-selected" : "") + '" data-original-key="' + originalKey + '" tabindex="0" role="button">' +
          '<span class="option-letter">' + displayLetter + '</span>' +
          '<span class="option-text">' + escapeHtml(q.pilihan[originalKey]) + '</span>' +
        '</div>'
      );
    }).join("");
    $("#q-options").innerHTML = optionsHtml;

    const answeredCount = Object.keys(APP.exam.answers).length;
    $("#exam-progress-text").textContent = answeredCount + " / " + QUESTIONS.length + " terjawab";

    $("#btn-prev").disabled = APP.exam.index === 0;
    $("#btn-next").disabled = APP.exam.index === APP.exam.order.length - 1;

    if (!$("#navigator-overlay").hidden) renderNavigatorGrid();
  }

  function handleOptionClick(e) {
    const item = e.target.closest(".option-item");
    if (!item) return;
    const q = APP.exam.order[APP.exam.index];
    APP.exam.answers[q.no] = item.getAttribute("data-original-key");
    renderExamQuestion();
  }

  function renderNavigatorGrid() {
    const grid = $("#navigator-grid");
    grid.innerHTML = APP.exam.order.map(function (q, idx) {
      const answered = Object.prototype.hasOwnProperty.call(APP.exam.answers, q.no);
      const isCurrent = idx === APP.exam.index;
      return (
        '<button type="button" class="nav-num' +
        (answered ? " is-answered" : "") +
        (isCurrent ? " is-current" : "") +
        '" data-index="' + idx + '">' + (idx + 1) + '</button>'
      );
    }).join("");
  }

  function initExamScreen() {
    $("#q-options").addEventListener("click", handleOptionClick);
    $("#q-options").addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        const item = e.target.closest(".option-item");
        if (item) { e.preventDefault(); handleOptionClick(e); }
      }
    });

    $("#btn-prev").addEventListener("click", function () {
      if (APP.exam.index > 0) { APP.exam.index -= 1; renderExamQuestion(); }
    });
    $("#btn-next").addEventListener("click", function () {
      if (APP.exam.index < APP.exam.order.length - 1) { APP.exam.index += 1; renderExamQuestion(); }
    });

    $("#btn-open-navigator").addEventListener("click", function () {
      renderNavigatorGrid();
      $("#navigator-overlay").hidden = false;
    });
    $("#btn-close-navigator").addEventListener("click", function () {
      $("#navigator-overlay").hidden = true;
    });
    $("#navigator-overlay").addEventListener("click", function (e) {
      if (e.target.id === "navigator-overlay") $("#navigator-overlay").hidden = true;
    });
    $("#navigator-grid").addEventListener("click", function (e) {
      const btn = e.target.closest(".nav-num");
      if (!btn) return;
      APP.exam.index = parseInt(btn.getAttribute("data-index"), 10);
      $("#navigator-overlay").hidden = true;
      renderExamQuestion();
    });

    $("#btn-submit-exam").addEventListener("click", function () {
      const answered = Object.keys(APP.exam.answers).length;
      $("#confirm-answered").textContent = String(answered);
      $("#confirm-overlay").hidden = false;
    });
    $("#btn-cancel-submit").addEventListener("click", function () {
      $("#confirm-overlay").hidden = true;
    });
    $("#confirm-overlay").addEventListener("click", function (e) {
      if (e.target.id === "confirm-overlay") $("#confirm-overlay").hidden = true;
    });
    $("#btn-confirm-submit").addEventListener("click", function () {
      $("#confirm-overlay").hidden = true;
      finalizeExam(false);
    });
  }

  function finalizeExam(auto) {
    if (APP.exam.submitted) return;
    APP.exam.submitted = true;
    if (APP.exam.timerId) clearInterval(APP.exam.timerId);

    let benar = 0, salah = 0;
    QUESTIONS.forEach(function (q) {
      const userAnswer = APP.exam.answers[q.no];
      if (userAnswer && userAnswer === q.kunci) benar += 1;
      else salah += 1;
    });
    const skor = benar; // 1 soal = 1 poin
    const durasiDetik = EXAM_DURATION_SEC - APP.exam.remainingSec;

    APP.exam.resultSummary = {
      benar: benar,
      salah: salah,
      skor: skor,
      durasiDetik: durasiDetik,
      auto: !!auto
    };

    saveAttemptToLeaderboard(APP.exam.resultSummary);
    renderResult(APP.exam.resultSummary);
    showScreen("screen-result");
  }

  function saveAttemptToLeaderboard(summary) {
    if (!window.db) return; // Firebase belum dikonfigurasi - lewati penyimpanan
    const attemptsRef = window.db.collection("attempts");
    attemptsRef.where("nim", "==", APP.user.nim).get()
      .then(function (snap) {
        const attemptNumber = snap.size + 1;
        return attemptsRef.add({
          nama: APP.user.nama,
          nim: APP.user.nim,
          kelas: APP.user.kelas,
          skor: summary.skor,
          benar: summary.benar,
          salah: summary.salah,
          durasiDetik: summary.durasiDetik,
          attemptNumber: attemptNumber,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
      })
      .catch(function (err) {
        console.error("Gagal menyimpan hasil ke leaderboard:", err);
      });
  }

  // ===========================================================
  // RESULT & REVIEW
  // ===========================================================
  function renderResult(summary) {
    $("#score-big").textContent = summary.skor;
    $("#score-benar").textContent = summary.benar;
    $("#score-salah").textContent = summary.salah;
    $("#score-durasi").textContent = formatDurationHuman(summary.durasiDetik) + (summary.auto ? " (waktu habis)" : "");

    const html = QUESTIONS.map(function (q) {
      const userAnswer = APP.exam.answers[q.no];
      const isCorrect = userAnswer === q.kunci;
      const badgeClass = userAnswer ? (isCorrect ? "correct" : "wrong") : "wrong";
      const badgeText = userAnswer ? (isCorrect ? "Benar" : "Salah") : "Tidak dijawab";

      const optionsHtml = LETTERS.map(function (key) {
        if (!q.pilihan[key]) return "";
        let cls = "review-option";
        if (key === q.kunci) cls += " mark-correct";
        else if (key === userAnswer) cls += " mark-user-wrong";
        return (
          '<div class="' + cls + '">' +
            '<div class="opt-line"><b>' + key + '.</b> <span>' + escapeHtml(q.pilihan[key]) + '</span></div>' +
            '<div class="opt-explain">' + escapeHtml(q.pembahasan[key] || "") + '</div>' +
          '</div>'
        );
      }).join("");

      return (
        '<div class="review-item card">' +
          '<div class="review-item-head">' +
            '<span class="subject-tag" data-subject="' + q.subject + '">' + q.subject + '</span>' +
            '<span class="review-result-badge ' + badgeClass + '">Soal ' + q.no + ' \u2022 ' + badgeText + '</span>' +
          '</div>' +
          '<p class="review-question">' + escapeHtml(q.soal) + '</p>' +
          optionsHtml +
        '</div>'
      );
    }).join("");
    $("#review-list").innerHTML = html;
  }

  function initResultScreen() {
    $("#btn-goto-leaderboard").addEventListener("click", function () {
      showScreen("screen-leaderboard");
      renderLeaderboard();
    });
    $("#btn-back-home-1").addEventListener("click", backToHome);
  }

  // ===========================================================
  // LEADERBOARD
  // ===========================================================
  function renderLeaderboard() {
    const recapBody = $("#personal-recap-body");
    const lbList = $("#leaderboard-list");

    if (!window.db) {
      recapBody.innerHTML = '<p>Leaderboard belum aktif. Lengkapi konfigurasi Firebase pada <code>assets/firebase-config.js</code> (lihat README.md) supaya hasil ujian tersimpan dan bisa dibandingkan.</p>';
      lbList.innerHTML = "";
      return;
    }

    recapBody.textContent = "Memuat data\u2026";
    lbList.textContent = "Memuat leaderboard\u2026";

    window.db.collection("attempts").where("nim", "==", APP.user.nim).get()
      .then(function (snap) {
        if (snap.empty) {
          recapBody.innerHTML = "<p>Belum ada riwayat percobaan untuk NIM ini.</p>";
          return;
        }
        let jumlahPercobaan = snap.size;
        let terbaik = 0;
        let terakhir = null;
        let terakhirTime = 0;
        snap.forEach(function (doc) {
          const d = doc.data();
          if (d.skor > terbaik) terbaik = d.skor;
          const t = d.timestamp && d.timestamp.toMillis ? d.timestamp.toMillis() : 0;
          if (t >= terakhirTime) { terakhirTime = t; terakhir = d; }
        });
        recapBody.innerHTML =
          "<p><strong>" + escapeHtml(APP.user.nama) + "</strong> \u2022 " + escapeHtml(APP.user.nim) + " \u2022 Kelas " + escapeHtml(APP.user.kelas) + "</p>" +
          "<p>Jumlah percobaan: <strong>" + jumlahPercobaan + " kali</strong></p>" +
          "<p>Nilai terakhir: <strong>" + (terakhir ? terakhir.skor : "-") + "</strong> \u2022 Nilai terbaik: <strong>" + terbaik + "</strong></p>";
      })
      .catch(function (err) {
        console.error(err);
        recapBody.innerHTML = "<p>Gagal memuat rekap pribadi. Periksa kembali konfigurasi dan aturan keamanan Firestore.</p>";
      });

    window.db.collection("attempts").orderBy("skor", "desc").limit(20).get()
      .then(function (snap) {
        if (snap.empty) {
          lbList.innerHTML = "<p>Belum ada peserta yang menyelesaikan simulasi ujian.</p>";
          return;
        }
        let rank = 0;
        lbList.innerHTML = snap.docs.map(function (doc) {
          rank += 1;
          const d = doc.data();
          return (
            '<div class="lb-row">' +
              '<span class="lb-rank' + (rank <= 3 ? " top3" : "") + '">' + rank + '</span>' +
              '<span class="lb-name">' + escapeHtml(d.nama) + '<small>' + escapeHtml(d.nim) + ' \u2022 Kelas ' + escapeHtml(d.kelas) + '</small></span>' +
              '<span class="lb-attempts">Percobaan ke-' + (d.attemptNumber || 1) + '</span>' +
              '<span class="lb-score">' + d.skor + '</span>' +
            '</div>'
          );
        }).join("");
      })
      .catch(function (err) {
        console.error(err);
        lbList.innerHTML = "<p>Gagal memuat leaderboard. Periksa kembali konfigurasi dan aturan keamanan Firestore.</p>";
      });
  }

  function initLeaderboardScreen() {
    $("#btn-back-home-2").addEventListener("click", backToHome);
  }

  // ===========================================================
  // FLASHCARD MODE
  // ===========================================================
  function buildFlashcardFilters() {
    const counts = { "Semua": QUESTIONS.length };
    SUBJECTS.forEach(function (s) { counts[s] = QUESTIONS.filter(function (q) { return q.subject === s; }).length; });

    const chips = ["Semua"].concat(SUBJECTS);
    $("#flashcard-filters").innerHTML = chips.map(function (name) {
      return '<button type="button" class="filter-chip' + (name === APP.flashcard.filter ? " is-active" : "") +
        '" data-filter="' + name + '">' + name + ' (' + counts[name] + ')</button>';
    }).join("");
  }

  function applyFlashcardFilter(filterName) {
    APP.flashcard.filter = filterName;
    const base = filterName === "Semua" ? QUESTIONS : QUESTIONS.filter(function (q) { return q.subject === filterName; });
    APP.flashcard.order = shuffle(base);
    APP.flashcard.index = 0;
    $("#flashcard").classList.remove("is-flipped");
    buildFlashcardFilters();
    renderFlashcard();
  }

  function startFlashcard() {
    APP.flashcard.filter = "Semua";
    buildFlashcardFilters();
    applyFlashcardFilter("Semua");
    showScreen("screen-flashcard");
  }

  function renderFlashcard() {
    const total = APP.flashcard.order.length;
    if (total === 0) {
      $("#fc-question").textContent = "Tidak ada soal untuk kategori ini.";
      $("#fc-options").innerHTML = "";
      $("#fc-answer").textContent = "-";
      $("#fc-explanations").innerHTML = "";
      $("#fc-index").textContent = "0";
      $("#fc-total").textContent = "0";
      return;
    }
    const q = APP.flashcard.order[APP.flashcard.index];
    const subjectTag = $("#fc-subject-tag");
    subjectTag.textContent = q.subject;
    subjectTag.setAttribute("data-subject", q.subject);

    $("#fc-question").textContent = q.soal;
    $("#fc-options").innerHTML = LETTERS.map(function (key) {
      if (!q.pilihan[key]) return "";
      return '<div class="fc-opt-line"><b>' + key + '.</b>' + escapeHtml(q.pilihan[key]) + '</div>';
    }).join("");

    $("#fc-answer").textContent = q.kunci + ". " + q.pilihan[q.kunci];
    $("#fc-explanations").innerHTML = LETTERS.map(function (key) {
      if (!q.pembahasan[key]) return "";
      return '<div class="fc-exp-line"><b>' + key + '.</b> ' + escapeHtml(q.pembahasan[key]) + '</div>';
    }).join("");

    $("#fc-index").textContent = String(APP.flashcard.index + 1);
    $("#fc-total").textContent = String(total);
  }

  function initFlashcardScreen() {
    $("#flashcard-filters").addEventListener("click", function (e) {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      applyFlashcardFilter(chip.getAttribute("data-filter"));
    });

    const cardEl = $("#flashcard");
    cardEl.addEventListener("click", function () { cardEl.classList.toggle("is-flipped"); });
    cardEl.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        cardEl.classList.toggle("is-flipped");
      }
    });

    $("#fc-prev").addEventListener("click", function () {
      const total = APP.flashcard.order.length;
      if (total === 0) return;
      APP.flashcard.index = (APP.flashcard.index - 1 + total) % total;
      cardEl.classList.remove("is-flipped");
      renderFlashcard();
    });
    $("#fc-next").addEventListener("click", function () {
      const total = APP.flashcard.order.length;
      if (total === 0) return;
      APP.flashcard.index = (APP.flashcard.index + 1) % total;
      cardEl.classList.remove("is-flipped");
      renderFlashcard();
    });
    $("#fc-shuffle").addEventListener("click", function () {
      APP.flashcard.order = shuffle(APP.flashcard.order);
      APP.flashcard.index = 0;
      cardEl.classList.remove("is-flipped");
      renderFlashcard();
    });

    $("#btn-back-home-3").addEventListener("click", backToHome);
  }

  // ===========================================================
  // NAVIGATION HOME / RESET
  // ===========================================================
  function backToHome() {
    if (APP.exam.timerId) clearInterval(APP.exam.timerId);
    $("#form-login").reset();
    $("#login-error").hidden = true;
    showScreen("screen-login");
  }

  // ===========================================================
  // INIT
  // ===========================================================
  function init() {
    if (!QUESTIONS.length) {
      document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif;">Bank soal (assets/questions.js) tidak ditemukan atau kosong.</p>';
      return;
    }
    initLoginScreen();
    initExamScreen();
    initResultScreen();
    initLeaderboardScreen();
    initFlashcardScreen();
    showScreen("screen-login");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
