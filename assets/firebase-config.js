// =====================================================================
// KONFIGURASI FIREBASE
// =====================================================================
// Ganti seluruh nilai di bawah ini dengan konfigurasi dari project
// Firebase kamu sendiri (gratis). Caranya ada di README.md, bagian
// "Setup Firebase (untuk Leaderboard)".
//
// Firebase Console -> Project Settings -> General -> scroll ke "Your apps"
// -> pilih app web (</>) -> salin objek firebaseConfig ke sini.
// =====================================================================

const firebaseConfig = {
  apiKey: "AIzaSyAplU8C6N21iTn0BwLNJ-uErlHhxTX97sE",
  authDomain: "ujian-ddb-fk26.firebaseapp.com",
  projectId: "ujian-ddb-fk26",
  storageBucket: "ujian-ddb-fk26.firebasestorage.app",
  messagingSenderId: "63282114589",
  appId: "1:63282114589:web:39f44ccdaa564d203616f4"
};

// Inisialisasi Firebase + Firestore, dipakai oleh assets/app.js.
// Dibuat aman (try/catch) supaya kalau konfigurasi belum diisi atau
// jaringan bermasalah, aplikasi TETAP jalan (mode Simulasi & Flash Card
// tetap bisa dipakai), hanya fitur Leaderboard yang akan menampilkan
// pesan supaya konfigurasi dilengkapi dulu.
window.firebaseConfig = firebaseConfig;
window.isFirebaseConfigured = !Object.values(firebaseConfig).some(
  (v) => typeof v === "string" && v.indexOf("GANTI_DENGAN") !== -1
);

window.db = null;
if (window.isFirebaseConfigured) {
  try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
  } catch (err) {
    console.error("Gagal inisialisasi Firebase:", err);
    window.db = null;
  }
}
