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
  apiKey: "GANTI_DENGAN_API_KEY_KAMU",
  authDomain: "GANTI_DENGAN_PROJECT_ID.firebaseapp.com",
  projectId: "GANTI_DENGAN_PROJECT_ID",
  storageBucket: "GANTI_DENGAN_PROJECT_ID.appspot.com",
  messagingSenderId: "GANTI_DENGAN_SENDER_ID",
  appId: "GANTI_DENGAN_APP_ID",
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
