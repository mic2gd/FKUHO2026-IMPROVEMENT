// ============================================================
// BANK SOAL — MODE "PREDIKSI UJIAN REMEDIAL"
// Blok Dasar-Dasar Biomedis FK UHO — 100 soal (25 Anatomi,
// 25 Biokimia, 25 Fisiologi, 25 Histologi).
//
// Bank ini TERPISAH dari assets/questions.js (mode "Simulasi Ujian
// Teori") — sudut & redaksi soal sengaja dibuat berbeda supaya
// dua mode saling melengkapi sebagai latihan, bukan duplikat.
// Format identik dengan questions.js: no, subject, soal, pilihan
// (A-E), kunci, pembahasan (WAJIB A-E).
// ============================================================

window.QUESTIONS_PREDIKSI = [
  // ================= ANATOMI (1-25) =================
  {
    no: 1,
    subject: "Anatomi",
    soal: "Ciri yang TEPAT untuk mendeskripsikan posisi anatomis adalah...",
    pilihan: {
      A: "Berdiri tegak, wajah menghadap ke depan, telapak tangan menghadap ke depan",
      B: "Berdiri tegak, telapak tangan menghadap ke arah tubuh (medial)",
      C: "Berbaring telentang dengan lutut sedikit ditekuk",
      D: "Duduk tegak dengan kedua tangan bersedekap di dada",
      E: "Berdiri dengan punggung tangan menghadap ke depan"
    },
    kunci: "A",
    pembahasan: {
      A: "Benar, posisi anatomis baku: berdiri tegak, wajah ke depan, lengan di samping tubuh, telapak tangan menghadap ke depan (supinasi).",
      B: "Salah, ini bukan posisi acuan baku; posisi anatomis justru telapak tangan menghadap ke depan, bukan ke arah tubuh.",
      C: "Salah, ini menggambarkan posisi berbaring untuk pemeriksaan tertentu, bukan posisi anatomis.",
      D: "Salah, posisi ini tidak menjadi acuan standar deskripsi anatomi.",
      E: "Salah, pada posisi anatomis telapak tangan (bukan punggung tangan) yang menghadap ke depan."
    }
  },
  {
    no: 2,
    subject: "Anatomi",
    soal: "Bidang yang membagi tubuh menjadi bagian kanan dan kiri yang sama persis disebut bidang...",
    pilihan: { A: "Koronal", B: "Transversal", C: "Midsagital (median)", D: "Oblik", E: "Horizontal" },
    kunci: "C",
    pembahasan: {
      A: "Salah, bidang koronal membagi tubuh menjadi bagian depan (anterior) dan belakang (posterior).",
      B: "Salah, bidang transversal membagi tubuh menjadi bagian atas (superior) dan bawah (inferior).",
      C: "Benar, bidang midsagital/median membelah tubuh tepat di garis tengah menjadi separuh kanan dan kiri yang sama besar.",
      D: "Salah, bidang oblik adalah potongan miring, bukan tepat membagi dua sama besar.",
      E: "Salah, horizontal adalah istilah lain untuk bidang transversal, bukan pembagi kanan-kiri."
    }
  },
  {
    no: 3,
    subject: "Anatomi",
    soal: "Bidang yang sejajar dengan bidang midsagital tetapi letaknya tidak tepat di garis tengah tubuh disebut bidang...",
    pilihan: { A: "Koronal", B: "Sagital (paramedian)", C: "Transversal", D: "Frontal", E: "Aksial" },
    kunci: "B",
    pembahasan: {
      A: "Salah, koronal tegak lurus terhadap bidang sagital, membagi tubuh depan-belakang.",
      B: "Benar, bidang sagital yang tidak tepat di tengah (paramedian) tetap sejajar bidang midsagital namun membagi tubuh menjadi dua bagian yang tidak sama besar.",
      C: "Salah, transversal tegak lurus sumbu panjang tubuh, membagi atas-bawah.",
      D: "Salah, frontal adalah nama lain bidang koronal, bukan sagital.",
      E: "Salah, aksial adalah istilah lain untuk transversal pada pencitraan medis."
    }
  },
  {
    no: 4,
    subject: "Anatomi",
    soal: "Pada posisi anatomis, jantung terletak lebih ___ dibandingkan paru-paru kanan.",
    pilihan: { A: "Superior", B: "Inferior", C: "Medial", D: "Lateral", E: "Distal" },
    kunci: "C",
    pembahasan: {
      A: "Salah, superior berarti lebih ke atas, bukan menjelaskan posisi jantung terhadap paru.",
      B: "Salah, inferior berarti lebih ke bawah, tidak menggambarkan hubungan jantung-paru dengan tepat.",
      C: "Benar, jantung terletak lebih dekat ke garis tengah tubuh (medial) dibanding paru-paru yang berada di kedua sisi rongga toraks.",
      D: "Salah, justru paru-paru yang lebih lateral (menjauhi garis tengah) dibanding jantung.",
      E: "Salah, istilah proksimal-distal dipakai untuk anggota gerak, bukan organ rongga toraks."
    }
  },
  {
    no: 5,
    subject: "Anatomi",
    soal: "Siku terletak lebih ___ dibandingkan pergelangan tangan pada lengan atas manusia.",
    pilihan: { A: "Distal", B: "Proksimal", C: "Superfisial", D: "Medial", E: "Kontralateral" },
    kunci: "B",
    pembahasan: {
      A: "Salah, distal berarti lebih jauh dari pangkal anggota gerak — itu justru menggambarkan pergelangan tangan terhadap siku.",
      B: "Benar, proksimal berarti lebih dekat ke pangkal/titik perlekatan anggota gerak; siku lebih proksimal daripada pergelangan tangan.",
      C: "Salah, superfisial-profunda menggambarkan kedalaman dari permukaan kulit, bukan posisi sepanjang anggota gerak.",
      D: "Salah, medial-lateral menggambarkan jarak terhadap garis tengah tubuh, bukan sepanjang anggota gerak.",
      E: "Salah, kontralateral berarti sisi tubuh yang berlawanan, tidak relevan di sini."
    }
  },
  {
    no: 6,
    subject: "Anatomi",
    soal: "Kulit terletak lebih ___ dibandingkan otot pada anggota gerak.",
    pilihan: { A: "Profunda", B: "Distal", C: "Superfisial", D: "Proksimal", E: "Posterior" },
    kunci: "C",
    pembahasan: {
      A: "Salah, profunda berarti lebih dalam dari permukaan tubuh — justru menggambarkan otot terhadap kulit.",
      B: "Salah, distal-proksimal dipakai sepanjang sumbu anggota gerak, bukan kedalaman jaringan.",
      C: "Benar, superfisial berarti lebih dekat ke permukaan tubuh; kulit lebih superfisial dibanding otot yang ada di bawahnya.",
      D: "Salah, istilah ini tidak menjelaskan kedalaman jaringan.",
      E: "Salah, posterior-anterior menjelaskan letak depan-belakang, bukan kedalaman jaringan."
    }
  },
  {
    no: 7,
    subject: "Anatomi",
    soal: "Gerakan mengecilkan sudut antara dua tulang pada suatu sendi, misalnya menekuk siku, disebut...",
    pilihan: { A: "Ekstensi", B: "Fleksi", C: "Abduksi", D: "Rotasi", E: "Sirkumduksi" },
    kunci: "B",
    pembahasan: {
      A: "Salah, ekstensi adalah gerakan meluruskan sendi (memperbesar sudut), kebalikan dari fleksi.",
      B: "Benar, fleksi adalah gerakan menekuk sendi yang mengecilkan sudut antar tulang.",
      C: "Salah, abduksi adalah menjauhkan anggota gerak dari garis tengah tubuh, bukan menekuk sendi.",
      D: "Salah, rotasi adalah gerakan memutar tulang pada sumbunya sendiri.",
      E: "Salah, sirkumduksi adalah gabungan gerakan melingkar (fleksi-abduksi-ekstensi-adduksi berurutan)."
    }
  },
  {
    no: 8,
    subject: "Anatomi",
    soal: "Gerakan menjauhkan lengan dari garis tengah tubuh, misalnya mengangkat lengan ke samping, disebut...",
    pilihan: { A: "Adduksi", B: "Fleksi", C: "Abduksi", D: "Ekstensi", E: "Depresi" },
    kunci: "C",
    pembahasan: {
      A: "Salah, adduksi justru mendekatkan anggota gerak ke garis tengah tubuh, kebalikan dari yang dimaksud.",
      B: "Salah, fleksi mengecilkan sudut sendi, tidak menggambarkan menjauhi garis tengah.",
      C: "Benar, abduksi adalah gerakan menjauhkan anggota gerak dari garis tengah (midline) tubuh.",
      D: "Salah, ekstensi adalah meluruskan sendi, bukan gerakan menjauhi garis tengah.",
      E: "Salah, depresi adalah gerakan menurunkan struktur seperti bahu, tidak relevan di sini."
    }
  },
  {
    no: 9,
    subject: "Anatomi",
    soal: "Ketika lengan bawah diputar sehingga telapak tangan menghadap ke depan (posisi anatomis), gerakan ini disebut...",
    pilihan: { A: "Pronasi", B: "Supinasi", C: "Inversi", D: "Eversi", E: "Rotasi lateral" },
    kunci: "B",
    pembahasan: {
      A: "Salah, pronasi justru memutar telapak tangan menghadap ke belakang/bawah, kebalikan dari yang dimaksud.",
      B: "Benar, supinasi adalah gerakan memutar lengan bawah sehingga telapak tangan menghadap ke depan/atas.",
      C: "Salah, inversi adalah istilah untuk gerakan telapak kaki menghadap ke dalam, bukan untuk lengan.",
      D: "Salah, eversi adalah istilah untuk gerakan telapak kaki menghadap ke luar, bukan untuk lengan.",
      E: "Salah, rotasi lateral menggambarkan gerakan sendi bahu/panggul memutar keluar, bukan istilah baku untuk lengan bawah."
    }
  },
  {
    no: 10,
    subject: "Anatomi",
    soal: "Gerakan telapak kaki menghadap ke arah dalam (medial) disebut...",
    pilihan: { A: "Eversi", B: "Pronasi", C: "Inversi", D: "Supinasi", E: "Adduksi" },
    kunci: "C",
    pembahasan: {
      A: "Salah, eversi justru memutar telapak kaki menghadap ke luar (lateral).",
      B: "Salah, pronasi adalah istilah untuk lengan bawah, bukan untuk kaki.",
      C: "Benar, inversi adalah gerakan memutar telapak kaki menghadap ke dalam/medial.",
      D: "Salah, supinasi adalah istilah untuk lengan bawah, bukan untuk kaki.",
      E: "Salah, adduksi menggambarkan mendekatkan anggota gerak ke garis tengah tubuh, bukan memutar telapak kaki."
    }
  },
  {
    no: 11,
    subject: "Anatomi",
    soal: "Gerakan mengangkat bahu ke arah atas, seperti gerakan 'shrug', disebut...",
    pilihan: { A: "Depresi", B: "Elevasi", C: "Protraksi", D: "Retraksi", E: "Abduksi" },
    kunci: "B",
    pembahasan: {
      A: "Salah, depresi justru menurunkan struktur, kebalikan dari mengangkat.",
      B: "Benar, elevasi adalah gerakan menggerakkan struktur ke arah superior/atas, misalnya mengangkat bahu.",
      C: "Salah, protraksi adalah menggerakkan struktur ke arah depan (menjauhi tubuh secara horizontal).",
      D: "Salah, retraksi adalah menggerakkan struktur ke arah belakang.",
      E: "Salah, abduksi menjauhkan anggota gerak dari garis tengah, bukan mengangkat ke atas."
    }
  },
  {
    no: 12,
    subject: "Anatomi",
    soal: "Gerakan melingkar yang menggabungkan fleksi, abduksi, ekstensi, dan adduksi secara berurutan sehingga membentuk pola kerucut disebut...",
    pilihan: { A: "Rotasi", B: "Sirkumduksi", C: "Inversi", D: "Protraksi", E: "Oposisi" },
    kunci: "B",
    pembahasan: {
      A: "Salah, rotasi adalah memutar tulang pada sumbunya sendiri, bukan gabungan berurutan beberapa gerakan.",
      B: "Benar, sirkumduksi adalah kombinasi berurutan fleksi-abduksi-ekstensi-adduksi yang membentuk gerakan melingkar seperti kerucut, contohnya pada sendi bahu.",
      C: "Salah, inversi khusus untuk telapak kaki menghadap ke dalam.",
      D: "Salah, protraksi adalah gerakan menjulurkan struktur ke depan secara horizontal.",
      E: "Salah, oposisi adalah gerakan khas ibu jari menyentuh jari-jari lain, bukan gerakan melingkar sendi besar."
    }
  },
  {
    no: 13,
    subject: "Anatomi",
    soal: "Kepala, leher, dan batang tubuh (toraks, abdomen, panggul) termasuk dalam kelompok yang disebut...",
    pilihan: { A: "Sistem apendikular", B: "Rangka aksial", C: "Regio distal", D: "Sistem viseral", E: "Rangka perifer" },
    kunci: "B",
    pembahasan: {
      A: "Salah, apendikular justru merujuk pada anggota gerak (tangan dan kaki), bukan kepala-leher-batang tubuh.",
      B: "Benar, rangka aksial mencakup tengkorak, tulang belakang, dan toraks yang membentuk sumbu utama tubuh.",
      C: "Salah, distal adalah istilah arah pada anggota gerak, bukan nama kelompok regio tubuh.",
      D: "Salah, sistem viseral merujuk pada organ dalam, bukan kelompok regio kerangka tubuh.",
      E: "Salah, 'rangka perifer' bukan istilah baku; yang baku adalah rangka apendikular."
    }
  },
  {
    no: 14,
    subject: "Anatomi",
    soal: "Otak dan sumsum tulang belakang dilindungi oleh rongga tubuh yang disebut rongga...",
    pilihan: { A: "Ventral", B: "Dorsal", C: "Torakal", D: "Abdominal", E: "Pelvis" },
    kunci: "B",
    pembahasan: {
      A: "Salah, rongga ventral (toraks, abdomen, pelvis) berisi organ jantung, paru, dan organ pencernaan/reproduksi, bukan sistem saraf pusat.",
      B: "Benar, rongga dorsal terdiri dari rongga kranial (otak) dan rongga vertebral/spinal (sumsum tulang belakang).",
      C: "Salah, rongga torakal adalah bagian dari rongga ventral yang berisi jantung dan paru.",
      D: "Salah, rongga abdominal berisi organ pencernaan, bukan sistem saraf pusat.",
      E: "Salah, rongga pelvis berisi organ reproduksi dan kandung kemih, bukan sistem saraf pusat."
    }
  },
  {
    no: 15,
    subject: "Anatomi",
    soal: "Untuk kepentingan pemeriksaan klinis, regio abdomen paling sederhana dibagi menjadi...",
    pilihan: { A: "2 regio", B: "4 kuadran", C: "6 regio", D: "8 kuadran", E: "12 regio" },
    kunci: "B",
    pembahasan: {
      A: "Salah, pembagian 2 bagian terlalu sederhana untuk kepentingan klinis.",
      B: "Benar, pembagian klinis paling umum adalah 4 kuadran (kanan atas, kiri atas, kanan bawah, kiri bawah) menggunakan garis vertikal dan horizontal melalui umbilikus.",
      C: "Salah, pembagian 9 regio (bukan 6) yang dipakai untuk deskripsi anatomis lebih rinci, bukan pembagian klinis sederhana.",
      D: "Salah, tidak ada pembagian baku 8 kuadran.",
      E: "Salah, bukan 12; pembagian anatomis rinci yang umum adalah 9 regio."
    }
  },
  {
    no: 16,
    subject: "Anatomi",
    soal: "Permukaan telapak tangan disebut permukaan...",
    pilihan: { A: "Dorsal", B: "Palmar (volar)", C: "Plantar", D: "Medial", E: "Distal" },
    kunci: "B",
    pembahasan: {
      A: "Salah, dorsal manus adalah istilah untuk punggung tangan, bukan telapak tangan.",
      B: "Benar, palmar (atau volar) adalah istilah khusus untuk permukaan telapak tangan.",
      C: "Salah, plantar adalah istilah untuk telapak kaki, bukan telapak tangan.",
      D: "Salah, medial menunjukkan arah ke garis tengah tubuh, bukan permukaan tangan tertentu.",
      E: "Salah, distal menunjukkan jarak dari pangkal anggota gerak, bukan permukaan tangan."
    }
  },
  {
    no: 17,
    subject: "Anatomi",
    soal: "Permukaan telapak kaki disebut permukaan...",
    pilihan: { A: "Palmar", B: "Dorsal", C: "Plantar", D: "Proksimal", E: "Superfisial" },
    kunci: "C",
    pembahasan: {
      A: "Salah, palmar adalah istilah untuk telapak tangan, bukan telapak kaki.",
      B: "Salah, dorsum pedis adalah istilah untuk punggung kaki, kebalikan dari telapak kaki.",
      C: "Benar, plantar adalah istilah khusus untuk permukaan telapak kaki.",
      D: "Salah, proksimal menunjukkan kedekatan ke pangkal anggota gerak, bukan permukaan kaki tertentu.",
      E: "Salah, superfisial menggambarkan kedekatan ke permukaan tubuh secara umum, bukan istilah spesifik telapak kaki."
    }
  },
  {
    no: 18,
    subject: "Anatomi",
    soal: "Jika mata kanan dan telinga kanan berada pada sisi tubuh yang sama, hubungan keduanya disebut...",
    pilihan: { A: "Kontralateral", B: "Bilateral", C: "Ipsilateral", D: "Distal", E: "Paramedian" },
    kunci: "C",
    pembahasan: {
      A: "Salah, kontralateral justru menggambarkan struktur pada sisi tubuh yang berlawanan.",
      B: "Salah, bilateral berarti terdapat pada kedua sisi tubuh, bukan hubungan dua struktur pada satu sisi.",
      C: "Benar, ipsilateral menggambarkan dua struktur yang berada pada sisi tubuh yang sama.",
      D: "Salah, distal adalah istilah arah sepanjang anggota gerak, bukan hubungan sisi tubuh.",
      E: "Salah, paramedian menggambarkan letak dekat garis tengah, bukan hubungan sisi kanan-kiri."
    }
  },
  {
    no: 19,
    subject: "Anatomi",
    soal: "Tangan kiri dan kaki kanan berada pada sisi tubuh yang berlawanan, sehingga hubungan keduanya disebut...",
    pilihan: { A: "Ipsilateral", B: "Kontralateral", C: "Medial", D: "Superfisial", E: "Aksial" },
    kunci: "B",
    pembahasan: {
      A: "Salah, ipsilateral justru untuk struktur pada sisi tubuh yang sama.",
      B: "Benar, kontralateral menggambarkan dua struktur pada sisi tubuh yang berlawanan, seperti tangan kiri dan kaki kanan.",
      C: "Salah, medial menunjukkan kedekatan ke garis tengah, bukan hubungan sisi kanan-kiri.",
      D: "Salah, superfisial menggambarkan kedalaman dari permukaan tubuh, tidak relevan di sini.",
      E: "Salah, aksial merujuk pada kelompok kepala-leher-batang tubuh, tidak relevan di sini."
    }
  },
  {
    no: 20,
    subject: "Anatomi",
    soal: "Bidang yang membagi tubuh menjadi bagian depan (anterior) dan belakang (posterior) disebut bidang...",
    pilihan: { A: "Sagital", B: "Transversal", C: "Koronal (frontal)", D: "Median", E: "Oblik" },
    kunci: "C",
    pembahasan: {
      A: "Salah, bidang sagital membagi tubuh menjadi kanan dan kiri, bukan depan-belakang.",
      B: "Salah, bidang transversal membagi tubuh menjadi atas dan bawah.",
      C: "Benar, bidang koronal (frontal) membagi tubuh menjadi bagian anterior (depan) dan posterior (belakang).",
      D: "Salah, median adalah bidang sagital tepat di tengah, membagi kanan-kiri bukan depan-belakang.",
      E: "Salah, bidang oblik adalah potongan miring yang tidak sejajar dengan tiga bidang utama."
    }
  },
  {
    no: 21,
    subject: "Anatomi",
    soal: "Lambung terletak lebih ___ dibandingkan hati pada rongga abdomen bagian atas.",
    pilihan: { A: "Superior", B: "Kiri (sinistra)", C: "Distal", D: "Dorsal saja", E: "Kontralateral" },
    kunci: "B",
    pembahasan: {
      A: "Salah, superior-inferior menggambarkan letak atas-bawah, bukan hubungan posisi lambung-hati yang lebih tepat digambarkan arah kanan-kiri.",
      B: "Benar, secara umum lambung terletak lebih ke sisi kiri (sinistra) rongga abdomen atas dibanding hati yang dominan di sisi kanan.",
      C: "Salah, istilah proksimal-distal digunakan untuk anggota gerak, bukan organ rongga abdomen.",
      D: "Salah, istilah 'dorsal saja' bukan istilah anatomis baku untuk membandingkan dua organ ini.",
      E: "Salah, kontralateral menggambarkan sisi tubuh yang berlawanan sebagai satu kesatuan istilah pasangan organ simetris, bukan konteks ini."
    }
  },
  {
    no: 22,
    subject: "Anatomi",
    soal: "Istilah yang tepat untuk menyatakan bahwa siku terletak 'lebih dekat ke tubuh' dibandingkan pergelangan tangan adalah...",
    pilihan: { A: "Siku lebih distal", B: "Siku lebih proksimal", C: "Siku lebih superfisial", D: "Siku lebih lateral", E: "Siku lebih inferior" },
    kunci: "B",
    pembahasan: {
      A: "Salah, distal berarti lebih jauh dari pangkal, justru berlawanan dengan pernyataan soal.",
      B: "Benar, proksimal berarti lebih dekat ke pangkal/titik perlekatan anggota gerak terhadap tubuh.",
      C: "Salah, superfisial-profunda menjelaskan kedalaman jaringan, bukan posisi sepanjang anggota gerak.",
      D: "Salah, lateral menjelaskan jarak terhadap garis tengah tubuh, bukan sepanjang anggota gerak.",
      E: "Salah, inferior menjelaskan posisi atas-bawah tubuh secara umum, kurang spesifik untuk konteks anggota gerak ini."
    }
  },
  {
    no: 23,
    subject: "Anatomi",
    soal: "Gerakan menjulurkan rahang bawah ke depan (seperti gerakan mengejek) disebut...",
    pilihan: { A: "Retraksi", B: "Protraksi", C: "Elevasi", D: "Depresi", E: "Adduksi" },
    kunci: "B",
    pembahasan: {
      A: "Salah, retraksi justru menarik struktur ke belakang, kebalikan dari menjulurkan ke depan.",
      B: "Benar, protraksi adalah gerakan menggerakkan struktur ke arah depan secara horizontal, seperti menjulurkan rahang bawah.",
      C: "Salah, elevasi adalah gerakan mengangkat struktur ke atas.",
      D: "Salah, depresi adalah gerakan menurunkan struktur ke bawah.",
      E: "Salah, adduksi adalah mendekatkan anggota gerak ke garis tengah tubuh, bukan menjulurkan struktur ke depan."
    }
  },
  {
    no: 24,
    subject: "Anatomi",
    soal: "Ibu jari menyentuh ujung jari kelingking pada tangan yang sama merupakan contoh gerakan...",
    pilihan: { A: "Oposisi", B: "Sirkumduksi", C: "Inversi", D: "Protraksi", E: "Rotasi" },
    kunci: "A",
    pembahasan: {
      A: "Benar, oposisi adalah gerakan khas ibu jari bergerak menyentuh ujung jari-jari lain, unik dimiliki manusia untuk fungsi menggenggam.",
      B: "Salah, sirkumduksi adalah gerakan melingkar sendi besar seperti bahu, bukan gerakan spesifik ibu jari ini.",
      C: "Salah, inversi khusus untuk telapak kaki, tidak relevan untuk gerakan ibu jari.",
      D: "Salah, protraksi adalah menjulurkan struktur ke depan, bukan gerakan menyentuh jari.",
      E: "Salah, rotasi adalah memutar tulang pada sumbunya, tidak menggambarkan gerakan oposisi ibu jari secara spesifik."
    }
  },
  {
    no: 25,
    subject: "Anatomi",
    soal: "Secara umum, tubuh manusia disusun oleh sekitar 11 sistem organ utama. Manakah yang TERMASUK salah satu sistem organ tersebut?",
    pilihan: { A: "Sistem integumen", B: "Sistem homeostasis", C: "Sistem anatomis", D: "Sistem morfologis", E: "Sistem fisiologis" },
    kunci: "A",
    pembahasan: {
      A: "Benar, sistem integumen (kulit dan turunannya) adalah salah satu dari 11 sistem organ utama tubuh manusia.",
      B: "Salah, homeostasis adalah konsep keseimbangan lingkungan internal, bukan nama sebuah sistem organ.",
      C: "Salah, 'anatomis' adalah cabang ilmu yang mempelajari struktur tubuh, bukan nama sistem organ.",
      D: "Salah, 'morfologis' merujuk pada bentuk/struktur secara umum, bukan nama sistem organ baku.",
      E: "Salah, 'fisiologis' adalah cabang ilmu yang mempelajari fungsi tubuh, bukan nama sistem organ."
    }
  },

  // ================= BIOKIMIA (26-50) =================
  {
    no: 26,
    subject: "Biokimia",
    soal: "Empat unsur (C, H, O, N) yang menyusun sebagian besar massa tubuh manusia secara kolektif disebut...",
    pilihan: { A: "Mineral makro", B: "Unsur makro (bulk elements)", C: "Trace element", D: "Elektrolit utama", E: "Unsur logam esensial" },
    kunci: "B",
    pembahasan: {
      A: "Salah, mineral makro merujuk pada mineral seperti Ca, P, K, Na dalam jumlah relatif besar, bukan istilah untuk C, H, O, N.",
      B: "Benar, karbon, hidrogen, oksigen, dan nitrogen disebut unsur makro/bulk elements karena menyusun sebagian besar (>95%) massa tubuh.",
      C: "Salah, trace element (mineral mikro) justru dibutuhkan dalam jumlah sangat kecil, seperti Fe, Zn, I.",
      D: "Salah, elektrolit utama merujuk pada ion seperti Na+, K+, Cl-, bukan unsur C, H, O, N.",
      E: "Salah, C, H, O, N bukan logam, sehingga istilah ini tidak tepat."
    }
  },
  {
    no: 27,
    subject: "Biokimia",
    soal: "Meskipun oksigen menyumbang massa terbesar dalam tubuh manusia, unsur dengan JUMLAH ATOM terbanyak dalam tubuh adalah...",
    pilihan: { A: "Oksigen", B: "Karbon", C: "Nitrogen", D: "Hidrogen", E: "Kalsium" },
    kunci: "D",
    pembahasan: {
      A: "Salah, oksigen unggul dalam persentase MASSA (karena atomnya berat), tetapi bukan yang terbanyak jumlah atomnya.",
      B: "Salah, karbon menyusun banyak molekul organik, namun jumlah atomnya kalah banyak dibanding hidrogen.",
      C: "Salah, nitrogen jauh lebih sedikit dibanding hidrogen maupun oksigen dari segi jumlah atom.",
      D: "Benar, karena air (H2O) sangat dominan dalam tubuh dan setiap molekulnya menyumbang 2 atom hidrogen, hidrogen menjadi unsur dengan JUMLAH ATOM terbanyak meski massanya kecil (atom H sangat ringan).",
      E: "Salah, kalsium adalah mineral makro penting namun jumlah atomnya jauh di bawah H, O, maupun C."
    }
  },
  {
    no: 28,
    subject: "Biokimia",
    soal: "Selain berperan pada tulang dan gigi, kalsium juga berfungsi penting dalam...",
    pilihan: { A: "Sintesis hemoglobin", B: "Transmisi impuls saraf dan kontraksi otot", C: "Pembentukan hormon tiroid", D: "Transportasi oksigen dalam darah", E: "Sintesis vitamin D di kulit" },
    kunci: "B",
    pembahasan: {
      A: "Salah, sintesis hemoglobin lebih berkaitan dengan zat besi (Fe), bukan kalsium.",
      B: "Benar, ion kalsium berperan penting dalam transmisi sinyal saraf (pelepasan neurotransmitter) dan proses kontraksi otot.",
      C: "Salah, hormon tiroid disintesis menggunakan unsur iodin, bukan kalsium.",
      D: "Salah, transportasi oksigen dilakukan oleh hemoglobin yang mengandung zat besi, bukan kalsium.",
      E: "Salah, sintesis vitamin D di kulit dipicu oleh sinar UV, kalsium justru diabsorpsi berkat bantuan vitamin D yang sudah aktif."
    }
  },
  {
    no: 29,
    subject: "Biokimia",
    soal: "Zat besi (Fe), zink (Zn), dan iodin (I) termasuk dalam kelompok mineral yang disebut...",
    pilihan: { A: "Mineral makro", B: "Elektrolit utama", C: "Mineral mikro (trace element)", D: "Unsur makro", E: "Vitamin larut lemak" },
    kunci: "C",
    pembahasan: {
      A: "Salah, mineral makro (seperti Ca, P, K, Na) dibutuhkan dalam jumlah relatif besar, berbeda dengan Fe, Zn, I.",
      B: "Salah, elektrolit utama merujuk pada ion seperti Na+, K+, Cl-, bukan kelompok mineral mikro ini secara umum.",
      C: "Benar, Fe, Zn, dan I hanya dibutuhkan dalam jumlah sangat kecil (trace) namun tetap esensial, sehingga disebut mineral mikro.",
      D: "Salah, unsur makro merujuk pada C, H, O, N, bukan mineral seperti Fe/Zn/I.",
      E: "Salah, Fe, Zn, I adalah mineral, bukan vitamin."
    }
  },
  {
    no: 30,
    subject: "Biokimia",
    soal: "Monosakarida-monosakarida pada polisakarida saling berikatan melalui ikatan yang disebut...",
    pilihan: { A: "Ikatan peptida", B: "Ikatan glikosidik", C: "Ikatan ester", D: "Ikatan fosfodiester", E: "Ikatan hidrogen" },
    kunci: "B",
    pembahasan: {
      A: "Salah, ikatan peptida menghubungkan asam amino pada protein, bukan monosakarida.",
      B: "Benar, ikatan glikosidik adalah ikatan kovalen yang menghubungkan satu monosakarida dengan monosakarida lain membentuk disakarida/polisakarida.",
      C: "Salah, ikatan ester umumnya menghubungkan gliserol dan asam lemak pada lipid.",
      D: "Salah, ikatan fosfodiester menghubungkan nukleotida-nukleotida pada asam nukleat (DNA/RNA).",
      E: "Salah, ikatan hidrogen adalah ikatan lemah non-kovalen, bukan ikatan utama antar monosakarida."
    }
  },
  {
    no: 31,
    subject: "Biokimia",
    soal: "Polisakarida yang berfungsi sebagai cadangan energi utama pada manusia, disimpan terutama di hati dan otot, adalah...",
    pilihan: { A: "Selulosa", B: "Pati (amilum)", C: "Glikogen", D: "Kitin", E: "Sukrosa" },
    kunci: "C",
    pembahasan: {
      A: "Salah, selulosa adalah polisakarida struktural pada dinding sel tumbuhan, tidak dapat dicerna manusia sebagai sumber energi.",
      B: "Salah, pati (amilum) adalah cadangan energi pada tumbuhan, bukan pada manusia.",
      C: "Benar, glikogen adalah bentuk simpanan energi karbohidrat utama pada manusia, disimpan terutama di hati dan otot rangka.",
      D: "Salah, kitin adalah polisakarida struktural pada eksoskeleton artropoda dan dinding sel jamur, bukan cadangan energi manusia.",
      E: "Salah, sukrosa adalah disakarida (gula meja), bukan polisakarida cadangan energi."
    }
  },
  {
    no: 32,
    subject: "Biokimia",
    soal: "Selulosa tidak dapat dicerna oleh sistem pencernaan manusia karena manusia tidak memiliki enzim untuk memutus ikatan...",
    pilihan: { A: "Ikatan glikosidik alfa (1,4)", B: "Ikatan glikosidik beta (1,4)", C: "Ikatan peptida", D: "Ikatan fosfodiester", E: "Ikatan hidrogen antar untai" },
    kunci: "B",
    pembahasan: {
      A: "Salah, ikatan glikosidik alfa (seperti pada pati/glikogen) justru DAPAT dipecah oleh enzim amilase manusia.",
      B: "Benar, selulosa tersusun dari ikatan glikosidik beta (1,4) yang tidak dapat dipecah oleh enzim pencernaan manusia, sehingga berfungsi sebagai serat.",
      C: "Salah, ikatan peptida berkaitan dengan pencernaan protein, tidak relevan dengan selulosa.",
      D: "Salah, ikatan fosfodiester berkaitan dengan asam nukleat, tidak relevan dengan selulosa.",
      E: "Salah, ikatan hidrogen bukan ikatan kovalen utama penyusun rantai selulosa yang dimaksud di sini."
    }
  },
  {
    no: 33,
    subject: "Biokimia",
    soal: "Kelompok vitamin yang bersifat larut lemak dan cenderung disimpan dalam jaringan adiposa adalah...",
    pilihan: { A: "Vitamin B kompleks dan C", B: "Vitamin A, D, E, K", C: "Vitamin C dan B12", D: "Semua vitamin larut air", E: "Vitamin B1, B2, B6" },
    kunci: "B",
    pembahasan: {
      A: "Salah, vitamin B kompleks dan C justru bersifat larut air, bukan larut lemak.",
      B: "Benar, vitamin A, D, E, K bersifat larut lemak sehingga dapat disimpan dalam jaringan adiposa dan hati.",
      C: "Salah, vitamin C dan B12 termasuk kelompok vitamin larut air.",
      D: "Salah, pertanyaan menanyakan vitamin larut LEMAK, bukan larut air.",
      E: "Salah, B1, B2, B6 termasuk kelompok vitamin B yang larut air."
    }
  },
  {
    no: 34,
    subject: "Biokimia",
    soal: "Vitamin larut air umumnya TIDAK banyak disimpan dalam tubuh sehingga perlu dikonsumsi rutin, kecuali...",
    pilihan: { A: "Vitamin B1 (tiamin)", B: "Vitamin B12", C: "Vitamin C", D: "Vitamin B6", E: "Vitamin B2 (riboflavin)" },
    kunci: "B",
    pembahasan: {
      A: "Salah, tiamin (B1) memang tidak banyak disimpan dan cadangannya cepat habis.",
      B: "Benar, meskipun larut air, vitamin B12 unik karena dapat disimpan dalam jumlah cukup besar di hati hingga bertahun-tahun.",
      C: "Salah, vitamin C tidak disimpan dalam jumlah besar dan perlu asupan rutin.",
      D: "Salah, vitamin B6 juga tidak disimpan dalam jumlah besar seperti B12.",
      E: "Salah, riboflavin (B2) juga termasuk vitamin larut air yang cadangannya terbatas."
    }
  },
  {
    no: 35,
    subject: "Biokimia",
    soal: "Vitamin yang berperan penting dalam proses pembekuan darah (koagulasi) adalah vitamin...",
    pilihan: { A: "Vitamin A", B: "Vitamin C", C: "Vitamin D", D: "Vitamin K", E: "Vitamin E" },
    kunci: "D",
    pembahasan: {
      A: "Salah, vitamin A lebih berkaitan dengan penglihatan dan integritas epitel, bukan koagulasi.",
      B: "Salah, vitamin C berperan sebagai antioksidan dan sintesis kolagen, bukan faktor koagulasi utama.",
      C: "Salah, vitamin D berperan dalam absorpsi kalsium-fosfat, bukan koagulasi darah secara langsung.",
      D: "Benar, vitamin K dibutuhkan untuk aktivasi beberapa faktor pembekuan darah di hati (misalnya faktor II, VII, IX, X).",
      E: "Salah, vitamin E berfungsi sebagai antioksidan larut lemak, bukan faktor koagulasi utama."
    }
  },
  {
    no: 36,
    subject: "Biokimia",
    soal: "Vitamin D berperan penting dalam homeostasis kalsium tubuh terutama dengan cara...",
    pilihan: { A: "Menghambat absorpsi kalsium di usus", B: "Meningkatkan absorpsi kalsium dan fosfat di usus", C: "Menghancurkan kalsium berlebih di ginjal", D: "Menggantikan fungsi hormon paratiroid sepenuhnya", E: "Menurunkan kadar kalsium darah secara langsung" },
    kunci: "B",
    pembahasan: {
      A: "Salah, vitamin D justru MENINGKATKAN, bukan menghambat, absorpsi kalsium di usus.",
      B: "Benar, bentuk aktif vitamin D (kalsitriol) meningkatkan absorpsi kalsium dan fosfat di usus halus, penting untuk mineralisasi tulang.",
      C: "Salah, vitamin D tidak berfungsi menghancurkan kalsium, melainkan membantu penyerapannya.",
      D: "Salah, vitamin D bekerja bersama hormon paratiroid, bukan menggantikannya sepenuhnya.",
      E: "Salah, efek vitamin D justru cenderung MENINGKATKAN kadar kalsium darah, bukan menurunkannya."
    }
  },
  {
    no: 37,
    subject: "Biokimia",
    soal: "Molekul organik non-protein (sering berasal dari vitamin) yang membantu kerja enzim dengan cara berikatan sementara/lepas dari enzim disebut...",
    pilihan: { A: "Apoenzim", B: "Koenzim", C: "Zimogen", D: "Substrat", E: "Isoenzim" },
    kunci: "B",
    pembahasan: {
      A: "Salah, apoenzim adalah bagian protein dari enzim yang belum aktif tanpa kofaktor/koenzim.",
      B: "Benar, koenzim adalah molekul organik non-protein (banyak berasal dari vitamin, misalnya NAD+ dari niasin) yang membantu aktivitas katalitik enzim.",
      C: "Salah, zimogen adalah bentuk enzim inaktif (proenzim) yang perlu diaktifkan lebih dulu.",
      D: "Salah, substrat adalah molekul yang diubah oleh enzim, bukan pembantu aktivitas enzim.",
      E: "Salah, isoenzim adalah variasi bentuk enzim yang mengatalisis reaksi sama namun struktur sedikit berbeda."
    }
  },
  {
    no: 38,
    subject: "Biokimia",
    soal: "Peningkatan suhu di atas suhu optimal enzim dapat menyebabkan penurunan drastis aktivitas enzim karena terjadi...",
    pilihan: { A: "Peningkatan afinitas terhadap substrat", B: "Denaturasi struktur tiga dimensi enzim", C: "Peningkatan jumlah enzim", D: "Perubahan substrat menjadi produk lebih cepat tanpa batas", E: "Aktivasi inhibitor kompetitif" },
    kunci: "B",
    pembahasan: {
      A: "Salah, suhu berlebih justru MENURUNKAN afinitas karena struktur enzim rusak, bukan meningkat.",
      B: "Benar, suhu ekstrem merusak ikatan yang mempertahankan struktur tiga dimensi enzim (denaturasi), sehingga sisi aktif kehilangan bentuk fungsionalnya.",
      C: "Salah, suhu tinggi tidak menambah jumlah enzim, justru dapat merusaknya.",
      D: "Salah, di atas suhu optimal kecepatan reaksi justru menurun drastis, bukan terus meningkat tanpa batas.",
      E: "Salah, denaturasi akibat suhu bukan mekanisme inhibisi kompetitif, melainkan kerusakan struktural permanen."
    }
  },
  {
    no: 39,
    subject: "Biokimia",
    soal: "Inhibitor kompetitif menghambat kerja enzim dengan cara...",
    pilihan: { A: "Berikatan pada sisi selain sisi aktif dan mengubah bentuk enzim", B: "Berikatan pada sisi aktif karena strukturnya menyerupai substrat", C: "Menghancurkan struktur enzim secara permanen", D: "Meningkatkan afinitas substrat terhadap enzim", E: "Berikatan hanya dengan produk reaksi" },
    kunci: "B",
    pembahasan: {
      A: "Salah, mekanisme ini menggambarkan inhibitor NON-kompetitif (berikatan di sisi alosterik), bukan kompetitif.",
      B: "Benar, inhibitor kompetitif memiliki struktur mirip substrat sehingga dapat 'bersaing' menempati sisi aktif enzim, menghambat substrat asli berikatan.",
      C: "Salah, inhibisi kompetitif umumnya reversibel dan tidak merusak struktur enzim secara permanen.",
      D: "Salah, inhibitor kompetitif justru menghambat, bukan meningkatkan, ikatan substrat dengan enzim.",
      E: "Salah, inhibitor kompetitif berikatan dengan enzim (di sisi aktif), bukan dengan produk reaksi."
    }
  },
  {
    no: 40,
    subject: "Biokimia",
    soal: "Reaksi oksidasi xenobiotik oleh enzim sitokrom P450 di hati merupakan bagian dari metabolisme xenobiotik fase...",
    pilihan: { A: "Fase 0", B: "Fase I", C: "Fase II", D: "Fase III", E: "Fase ekskresi langsung" },
    kunci: "B",
    pembahasan: {
      A: "Salah, tidak dikenal istilah 'fase 0' dalam metabolisme xenobiotik standar.",
      B: "Benar, fase I metabolisme xenobiotik melibatkan reaksi oksidasi/reduksi/hidrolisis, umumnya oleh enzim sitokrom P450, untuk membuat molekul lebih reaktif atau sedikit lebih polar.",
      C: "Salah, fase II adalah reaksi konjugasi (misalnya dengan glutation atau asam glukuronat), bukan oksidasi oleh sitokrom P450.",
      D: "Salah, tidak ada 'fase III' dalam pembagian standar dua fase metabolisme xenobiotik ini.",
      E: "Salah, ekskresi terjadi setelah fase I dan II, bukan reaksi oksidasi itu sendiri."
    }
  },
  {
    no: 41,
    subject: "Biokimia",
    soal: "Tujuan utama reaksi konjugasi pada fase II metabolisme xenobiotik adalah...",
    pilihan: { A: "Membuat senyawa lebih larut lemak agar mudah disimpan", B: "Meningkatkan kelarutan air senyawa agar mudah diekskresikan", C: "Mengaktifkan xenobiotik menjadi lebih toksik", D: "Menghancurkan enzim sitokrom P450", E: "Menyimpan xenobiotik secara permanen di hati" },
    kunci: "B",
    pembahasan: {
      A: "Salah, tujuannya justru sebaliknya — MENGURANGI kelarutan lemak agar tidak menumpuk di jaringan adiposa.",
      B: "Benar, konjugasi (misalnya dengan asam glukuronat, sulfat, atau glutation) meningkatkan kelarutan air suatu senyawa sehingga lebih mudah diekskresikan lewat ginjal atau empedu.",
      C: "Salah, tujuan konjugasi umumnya justru menurunkan toksisitas/detoksifikasi, bukan mengaktifkan racun.",
      D: "Salah, fase II tidak menghancurkan sitokrom P450 (enzim fase I); keduanya bekerja pada tahap berbeda.",
      E: "Salah, tujuan akhirnya adalah ekskresi keluar tubuh, bukan penyimpanan permanen di hati."
    }
  },
  {
    no: 42,
    subject: "Biokimia",
    soal: "Yang dimaksud dengan radikal bebas dalam konteks biokimia adalah...",
    pilihan: { A: "Molekul dengan elektron berpasangan sempurna", B: "Molekul atau atom dengan satu atau lebih elektron tidak berpasangan", C: "Ion bermuatan negatif stabil", D: "Enzim antioksidan utama tubuh", E: "Protein struktural membran sel" },
    kunci: "B",
    pembahasan: {
      A: "Salah, justru elektron berpasangan sempurna membuat molekul relatif stabil, bukan ciri radikal bebas.",
      B: "Benar, radikal bebas adalah atom/molekul dengan elektron tidak berpasangan pada orbital terluarnya, membuatnya sangat reaktif.",
      C: "Salah, ion negatif stabil belum tentu memiliki elektron tidak berpasangan.",
      D: "Salah, enzim antioksidan justru berfungsi MENETRALKAN radikal bebas, bukan menjadi radikal bebas itu sendiri.",
      E: "Salah, radikal bebas bukan definisi untuk protein struktural membran."
    }
  },
  {
    no: 43,
    subject: "Biokimia",
    soal: "Reaksi Fenton (Fe2+ + H2O2) menghasilkan radikal bebas yang sangat reaktif, yaitu...",
    pilihan: { A: "Radikal superoksida", B: "Radikal hidroksil", C: "Oksigen singlet", D: "Nitrit oksida", E: "Ozon" },
    kunci: "B",
    pembahasan: {
      A: "Salah, radikal superoksida (O2-) umumnya dihasilkan pada tahap awal rantai transpor elektron, bukan hasil utama reaksi Fenton.",
      B: "Benar, reaksi Fenton antara ion Fe2+ dan hidrogen peroksida (H2O2) menghasilkan radikal hidroksil (•OH) yang sangat reaktif dan merusak sel.",
      C: "Salah, oksigen singlet terbentuk melalui jalur berbeda, bukan reaksi Fenton klasik.",
      D: "Salah, nitrit oksida (NO) adalah radikal bebas yang berperan sebagai sinyal, bukan produk utama reaksi Fenton.",
      E: "Salah, ozon adalah molekul oksigen berbeda (O3), bukan produk reaksi Fenton."
    }
  },
  {
    no: 44,
    subject: "Biokimia",
    soal: "Enzim superoksida dismutase (SOD) berperan sebagai antioksidan dengan cara...",
    pilihan: { A: "Mengubah H2O2 menjadi air dan oksigen", B: "Mengubah radikal superoksida menjadi H2O2", C: "Menetralkan langsung radikal hidroksil", D: "Menghambat pembentukan sitokrom P450", E: "Menyimpan elektron bebas secara permanen" },
    kunci: "B",
    pembahasan: {
      A: "Salah, mengubah H2O2 menjadi air dan oksigen adalah fungsi enzim katalase, bukan SOD.",
      B: "Benar, SOD mengkatalisis perubahan radikal superoksida (O2-) yang reaktif menjadi hidrogen peroksida (H2O2) yang relatif kurang reaktif.",
      C: "Salah, radikal hidroksil sangat reaktif dan tidak ada enzim spesifik yang menetralkannya secara langsung; pencegahan lebih efektif melalui antioksidan non-enzimatik.",
      D: "Salah, SOD tidak berkaitan dengan penghambatan sitokrom P450.",
      E: "Salah, SOD bekerja mengkatalisis reaksi kimia, bukan 'menyimpan' elektron bebas."
    }
  },
  {
    no: 45,
    subject: "Biokimia",
    soal: "Vitamin C dan vitamin E berperan sebagai antioksidan...",
    pilihan: { A: "Enzimatik, karena keduanya adalah enzim", B: "Non-enzimatik, karena keduanya bukan enzim", C: "Yang hanya bekerja di dalam mitokondria", D: "Yang justru meningkatkan pembentukan radikal bebas", E: "Yang menggantikan fungsi seluruh enzim antioksidan tubuh" },
    kunci: "B",
    pembahasan: {
      A: "Salah, vitamin C dan E bukan enzim, sehingga tidak tepat disebut antioksidan enzimatik.",
      B: "Benar, vitamin C dan E adalah molekul non-enzim yang bekerja langsung menetralkan radikal bebas, sehingga digolongkan sebagai antioksidan non-enzimatik.",
      C: "Salah, keduanya bekerja di berbagai kompartemen sel (vitamin E larut lemak di membran, vitamin C larut air di sitosol/plasma), tidak terbatas mitokondria saja.",
      D: "Salah, fungsi utamanya justru MENETRALKAN, bukan meningkatkan, radikal bebas.",
      E: "Salah, keduanya melengkapi (bukan menggantikan sepenuhnya) sistem antioksidan enzimatik seperti SOD dan katalase."
    }
  },
  {
    no: 46,
    subject: "Biokimia",
    soal: "Perpindahan molekul melintasi membran sel mengikuti gradien konsentrasi (dari konsentrasi tinggi ke rendah) tanpa memerlukan energi ATP disebut...",
    pilihan: { A: "Transport aktif primer", B: "Transport aktif sekunder", C: "Difusi sederhana", D: "Endositosis", E: "Eksositosis" },
    kunci: "C",
    pembahasan: {
      A: "Salah, transport aktif primer justru memerlukan energi ATP secara langsung, berlawanan dengan ciri di soal.",
      B: "Salah, transport aktif sekunder memanfaatkan gradien ion yang sebelumnya dibentuk oleh transport aktif primer, bukan difusi murni.",
      C: "Benar, difusi sederhana adalah perpindahan molekul mengikuti gradien konsentrasi secara spontan tanpa memerlukan energi maupun protein transport khusus.",
      D: "Salah, endositosis adalah proses memasukkan materi besar ke sel dengan membentuk vesikel, memerlukan energi.",
      E: "Salah, eksositosis adalah proses mengeluarkan materi dari sel melalui vesikel, memerlukan energi."
    }
  },
  {
    no: 47,
    subject: "Biokimia",
    soal: "Pompa natrium-kalium (Na+/K+ ATPase) merupakan contoh mekanisme transport membran jenis...",
    pilihan: { A: "Difusi sederhana", B: "Difusi difasilitasi", C: "Transport aktif primer", D: "Transport aktif sekunder", E: "Osmosis" },
    kunci: "C",
    pembahasan: {
      A: "Salah, difusi sederhana tidak memerlukan energi maupun protein pembawa khusus seperti pompa ini.",
      B: "Salah, difusi difasilitasi menggunakan protein pembawa namun tetap mengikuti gradien konsentrasi tanpa energi ATP langsung.",
      C: "Benar, pompa Na+/K+ ATPase menggunakan energi ATP secara langsung untuk memompa Na+ keluar sel dan K+ masuk sel melawan gradien konsentrasi, sehingga termasuk transport aktif primer.",
      D: "Salah, transport aktif sekunder memanfaatkan gradien ion yang sudah terbentuk (misalnya oleh pompa ini), bukan pompa itu sendiri.",
      E: "Salah, osmosis khusus menggambarkan perpindahan air, bukan ion Na+/K+."
    }
  },
  {
    no: 48,
    subject: "Biokimia",
    soal: "Transport glukosa bersama ion natrium melalui protein pembawa yang sama (SGLT), memanfaatkan gradien Na+ yang sudah dibentuk pompa Na+/K+ ATPase, merupakan contoh...",
    pilihan: { A: "Difusi sederhana", B: "Transport aktif primer", C: "Transport aktif sekunder", D: "Osmosis", E: "Difusi difasilitasi murni" },
    kunci: "C",
    pembahasan: {
      A: "Salah, difusi sederhana tidak melibatkan protein pembawa khusus seperti SGLT.",
      B: "Salah, transport aktif primer menggunakan ATP secara langsung, sedangkan mekanisme di soal memanfaatkan gradien ion yang sudah ada (energi tidak langsung).",
      C: "Benar, ini adalah contoh transport aktif sekunder (symport), karena energi yang dipakai berasal dari gradien elektrokimia Na+ yang sebelumnya dibentuk oleh transport aktif primer (pompa Na+/K+ ATPase), bukan dari ATP secara langsung.",
      D: "Salah, osmosis khusus untuk perpindahan air melintasi membran semipermeabel.",
      E: "Salah, difusi difasilitasi murni tidak menggunakan energi gradien ion lain sebagai penggerak molekul kedua."
    }
  },
  {
    no: 49,
    subject: "Biokimia",
    soal: "Reseptor tirosin kinase pada membran sel akan aktif setelah mengikat ligan (misalnya insulin) melalui mekanisme...",
    pilihan: { A: "Aktivasi protein G heterotrimerik", B: "Dimerisasi reseptor dan autofosforilasi residu tirosin", C: "Pembukaan langsung kanal ion", D: "Pengikatan langsung ke DNA inti sel", E: "Penghancuran ligan oleh reseptor" },
    kunci: "B",
    pembahasan: {
      A: "Salah, aktivasi protein G adalah mekanisme khas reseptor terkait protein G (GPCR), bukan reseptor tirosin kinase.",
      B: "Benar, pengikatan ligan menyebabkan dua reseptor tirosin kinase berdekatan (dimerisasi) lalu saling memfosforilasi residu tirosin masing-masing (autofosforilasi), memicu jalur sinyal di dalam sel.",
      C: "Salah, pembukaan kanal ion langsung adalah mekanisme reseptor ionotropik, bukan reseptor tirosin kinase.",
      D: "Salah, reseptor tirosin kinase berada di membran sel, sinyalnya diteruskan ke inti melalui jalur perantara, bukan berikatan langsung ke DNA.",
      E: "Salah, reseptor tidak 'menghancurkan' ligan sebagai mekanisme aktivasinya."
    }
  },
  {
    no: 50,
    subject: "Biokimia",
    soal: "Mutasi titik yang mengubah satu kodon asam amino menjadi kodon stop, sehingga translasi protein terhenti lebih awal, disebut mutasi...",
    pilihan: { A: "Mutasi diam (silent)", B: "Mutasi missense", C: "Mutasi nonsense", D: "Mutasi frameshift", E: "Mutasi netral" },
    kunci: "C",
    pembahasan: {
      A: "Salah, mutasi silent tidak mengubah asam amino yang dihasilkan sama sekali (karena kode genetik bersifat redundan), bukan membentuk kodon stop.",
      B: "Salah, mutasi missense mengubah kodon menjadi asam amino LAIN, bukan menjadi kodon stop.",
      C: "Benar, mutasi nonsense mengubah kodon asam amino menjadi kodon stop, menyebabkan protein yang dihasilkan terpotong (truncated) dan sering kehilangan fungsi.",
      D: "Salah, mutasi frameshift terjadi akibat insersi/delesi basa yang mengubah seluruh kerangka baca (bukan sekadar satu kodon menjadi stop codon).",
      E: "Salah, 'mutasi netral' bukan istilah baku spesifik pada konteks kodon stop; istilah tepatnya adalah nonsense."
    }
  },

  // ================= FISIOLOGI (51-75) =================
  {
    no: 51,
    subject: "Fisiologi",
    soal: "Ilmu yang mempelajari fungsi normal tubuh dan mekanisme kerja organ-organ tubuh disebut...",
    pilihan: { A: "Anatomi", B: "Histologi", C: "Fisiologi", D: "Patologi", E: "Farmakologi" },
    kunci: "C",
    pembahasan: {
      A: "Salah, anatomi mempelajari struktur/bentuk tubuh, bukan fungsinya.",
      B: "Salah, histologi mempelajari struktur jaringan pada tingkat mikroskopik, bukan fungsi tubuh secara umum.",
      C: "Benar, fisiologi adalah ilmu yang mempelajari fungsi dan mekanisme kerja sel, jaringan, organ, hingga sistem tubuh dalam keadaan normal.",
      D: "Salah, patologi mempelajari penyakit dan perubahan akibat penyakit, bukan fungsi normal.",
      E: "Salah, farmakologi mempelajari efek obat pada tubuh, bukan fungsi tubuh secara umum."
    }
  },
  {
    no: 52,
    subject: "Fisiologi",
    soal: "Kondisi relatif stabil pada lingkungan internal tubuh yang dipertahankan meskipun terjadi perubahan lingkungan eksternal disebut...",
    pilihan: { A: "Metabolisme", B: "Homeostasis", C: "Adaptasi", D: "Anabolisme", E: "Katabolisme" },
    kunci: "B",
    pembahasan: {
      A: "Salah, metabolisme adalah keseluruhan reaksi kimia dalam tubuh, bukan istilah untuk kestabilan lingkungan internal.",
      B: "Benar, homeostasis adalah kemampuan tubuh mempertahankan kondisi internal yang relatif stabil (misalnya suhu, pH, kadar glukosa) meski lingkungan luar berubah.",
      C: "Salah, adaptasi adalah proses penyesuaian jangka panjang, bukan istilah spesifik untuk kestabilan lingkungan internal saat ini.",
      D: "Salah, anabolisme adalah reaksi pembentukan molekul kompleks, bukan konsep kestabilan lingkungan internal.",
      E: "Salah, katabolisme adalah reaksi pemecahan molekul kompleks, bukan konsep kestabilan lingkungan internal."
    }
  },
  {
    no: 53,
    subject: "Fisiologi",
    soal: "Mekanisme umpan balik (feedback) di mana hasil akhir suatu proses justru MENGHAMBAT proses itu sendiri disebut...",
    pilihan: { A: "Feedback positif", B: "Feedback negatif", C: "Feedforward", D: "Feedback netral", E: "Refleks sederhana" },
    kunci: "B",
    pembahasan: {
      A: "Salah, feedback positif justru MEMPERKUAT/mempercepat proses, kebalikan dari yang dimaksud soal.",
      B: "Benar, feedback negatif adalah mekanisme paling umum dalam homeostasis, di mana hasil akhir menghambat/mengurangi proses awal untuk mengembalikan kondisi ke set point, contohnya regulasi suhu tubuh.",
      C: "Salah, feedforward adalah respons antisipatif sebelum perubahan terjadi, bukan penghambatan setelah hasil akhir tercapai.",
      D: "Salah, 'feedback netral' bukan istilah baku dalam fisiologi.",
      E: "Salah, refleks sederhana adalah respons cepat terhadap stimulus, bukan istilah spesifik jenis feedback ini."
    }
  },
  {
    no: 54,
    subject: "Fisiologi",
    soal: "Manakah dari berikut ini yang merupakan CONTOH mekanisme feedback POSITIF dalam tubuh?",
    pilihan: { A: "Regulasi suhu tubuh saat kedinginan", B: "Regulasi kadar glukosa darah oleh insulin", C: "Proses pembekuan darah (kaskade koagulasi)", D: "Regulasi tekanan darah oleh baroreseptor", E: "Regulasi kadar CO2 darah oleh pernapasan" },
    kunci: "C",
    pembahasan: {
      A: "Salah, regulasi suhu tubuh adalah contoh klasik feedback NEGATIF.",
      B: "Salah, regulasi glukosa oleh insulin juga merupakan mekanisme feedback negatif untuk mengembalikan kadar glukosa ke normal.",
      C: "Benar, kaskade pembekuan darah adalah contoh feedback positif: aktivasi satu faktor koagulasi memicu aktivasi faktor berikutnya secara berantai dan semakin kuat hingga bekuan terbentuk.",
      D: "Salah, regulasi tekanan darah oleh baroreseptor adalah mekanisme feedback negatif.",
      E: "Salah, regulasi CO2 melalui pernapasan juga merupakan mekanisme feedback negatif."
    }
  },
  {
    no: 55,
    subject: "Fisiologi",
    soal: "Pada regulasi suhu tubuh, bagian otak yang berfungsi sebagai 'termostat' atau pusat pengatur suhu adalah...",
    pilihan: { A: "Korteks serebri", B: "Hipotalamus", C: "Serebelum", D: "Medula oblongata", E: "Talamus" },
    kunci: "B",
    pembahasan: {
      A: "Salah, korteks serebri lebih berperan dalam fungsi kognitif dan sensasi sadar, bukan pusat termoregulasi utama.",
      B: "Benar, hipotalamus berfungsi sebagai pusat pengatur suhu tubuh (termostat) yang menerima sinyal suhu dan memicu respons produksi/pelepasan panas.",
      C: "Salah, serebelum lebih berperan dalam koordinasi gerak dan keseimbangan.",
      D: "Salah, medula oblongata lebih berperan mengatur fungsi vital seperti pernapasan dan denyut jantung dasar.",
      E: "Salah, talamus lebih berfungsi sebagai stasiun relai sinyal sensorik, bukan pusat termoregulasi utama."
    }
  },
  {
    no: 56,
    subject: "Fisiologi",
    soal: "Saat suhu tubuh meningkat, tubuh melepaskan panas melalui mekanisme berikut, KECUALI...",
    pilihan: { A: "Vasodilatasi pembuluh darah kulit", B: "Berkeringat", C: "Menggigil (shivering)", D: "Peningkatan aliran darah ke permukaan kulit", E: "Penguapan keringat dari permukaan kulit" },
    kunci: "C",
    pembahasan: {
      A: "Salah (justru termasuk mekanisme pelepasan panas), vasodilatasi kulit meningkatkan aliran darah ke permukaan sehingga panas lebih mudah dilepaskan ke lingkungan.",
      B: "Salah (justru termasuk mekanisme pelepasan panas), keringat yang menguap membawa panas keluar dari tubuh.",
      C: "Benar, menggigil justru merupakan mekanisme PRODUKSI panas (melalui kontraksi otot berulang) yang terjadi saat tubuh KEDINGINAN, bukan mekanisme pelepasan panas saat kepanasan.",
      D: "Salah (justru termasuk mekanisme pelepasan panas), peningkatan aliran darah ke kulit membantu membuang panas ke lingkungan.",
      E: "Salah (justru termasuk mekanisme pelepasan panas), penguapan keringat adalah cara efektif melepaskan panas tubuh."
    }
  },
  {
    no: 57,
    subject: "Fisiologi",
    soal: "Saat tubuh kedinginan, mekanisme berikut membantu MEMPRODUKSI atau MEMPERTAHANKAN panas tubuh, KECUALI...",
    pilihan: { A: "Menggigil (shivering)", B: "Vasokonstriksi pembuluh darah kulit", C: "Piloereksi (bulu roma berdiri)", D: "Vasodilatasi pembuluh darah kulit", E: "Peningkatan laju metabolisme" },
    kunci: "D",
    pembahasan: {
      A: "Salah (justru termasuk mekanisme produksi panas), menggigil menghasilkan panas melalui kontraksi otot rangka berulang.",
      B: "Salah (justru termasuk mekanisme mempertahankan panas), vasokonstriksi kulit mengurangi aliran darah ke permukaan sehingga panas tidak banyak hilang ke lingkungan.",
      C: "Salah (juga membantu mempertahankan panas), piloereksi menciptakan lapisan udara isolasi di kulit (meski efeknya kecil pada manusia).",
      D: "Benar, vasodilatasi pembuluh darah kulit justru MENINGKATKAN pelepasan panas ke lingkungan, sehingga bukan mekanisme yang membantu tubuh menghangatkan diri saat kedinginan.",
      E: "Salah (juga termasuk mekanisme produksi panas), peningkatan laju metabolisme menghasilkan lebih banyak panas dari proses seluler."
    }
  },
  {
    no: 58,
    subject: "Fisiologi",
    soal: "Sistem buffer utama dalam plasma darah yang berperan penting menjaga pH darah tetap stabil adalah sistem buffer...",
    pilihan: { A: "Fosfat", B: "Protein plasma", C: "Bikarbonat", D: "Hemoglobin saja", E: "Asam laktat" },
    kunci: "C",
    pembahasan: {
      A: "Salah, buffer fosfat lebih berperan penting di cairan intrasel dan tubulus ginjal, bukan buffer utama plasma darah.",
      B: "Salah, protein plasma memang berkontribusi sebagai buffer namun bukan sistem buffer UTAMA plasma darah.",
      C: "Benar, sistem buffer bikarbonat (HCO3-/H2CO3) adalah sistem buffer utama dan paling penting dalam plasma darah untuk menjaga kestabilan pH.",
      D: "Salah, hemoglobin memang berperan sebagai buffer terutama di dalam eritrosit, tetapi bukan buffer UTAMA plasma secara keseluruhan.",
      E: "Salah, asam laktat adalah produk metabolisme yang justru dapat mengganggu pH, bukan sistem buffer."
    }
  },
  {
    no: 59,
    subject: "Fisiologi",
    soal: "Pada kondisi asidosis metabolik, tubuh melakukan kompensasi CEPAT (dalam hitungan menit) melalui sistem...",
    pilihan: { A: "Ginjal, dengan mereabsorpsi bikarbonat", B: "Pernapasan, dengan hiperventilasi menurunkan CO2", C: "Hati, dengan meningkatkan produksi protein plasma", D: "Kulit, dengan meningkatkan keringat", E: "Jantung, dengan meningkatkan denyut jantung" },
    kunci: "B",
    pembahasan: {
      A: "Salah, kompensasi ginjal memang penting namun berlangsung LAMBAT (berjam-jam hingga berhari-hari), bukan kompensasi cepat.",
      B: "Benar, sistem pernapasan memberikan kompensasi CEPAT (dalam hitungan menit) melalui hiperventilasi untuk menurunkan kadar CO2 darah, sehingga menggeser keseimbangan asam-basa ke arah kurang asam.",
      C: "Salah, hati tidak berperan sebagai mekanisme kompensasi cepat pada gangguan asam-basa.",
      D: "Salah, keringat tidak berperan langsung dalam kompensasi asam-basa darah.",
      E: "Salah, peningkatan denyut jantung bukan mekanisme kompensasi utama untuk asidosis metabolik."
    }
  },
  {
    no: 60,
    subject: "Fisiologi",
    soal: "Dibandingkan kompensasi oleh sistem pernapasan, kompensasi gangguan asam-basa oleh ginjal berlangsung lebih...",
    pilihan: { A: "Cepat, dalam hitungan detik", B: "Lambat, dalam hitungan jam hingga hari", C: "Sama cepatnya", D: "Tidak pernah terjadi", E: "Hanya terjadi pada anak-anak" },
    kunci: "B",
    pembahasan: {
      A: "Salah, justru sebaliknya — kompensasi ginjal jauh lebih lambat dibanding pernapasan yang bekerja dalam hitungan menit.",
      B: "Benar, kompensasi ginjal (dengan mengatur reabsorpsi/ekskresi bikarbonat dan ion hidrogen) berlangsung lebih lambat, membutuhkan waktu jam hingga beberapa hari, namun efeknya lebih bertahan lama.",
      C: "Salah, kecepatan keduanya berbeda signifikan; pernapasan jauh lebih cepat.",
      D: "Salah, kompensasi ginjal tetap terjadi, hanya saja lebih lambat.",
      E: "Salah, mekanisme ini berlaku pada semua kelompok usia, bukan hanya anak-anak."
    }
  },
  {
    no: 61,
    subject: "Fisiologi",
    soal: "Dari total cairan tubuh, kompartemen cairan yang memiliki volume TERBESAR adalah...",
    pilihan: { A: "Cairan intravaskular (plasma)", B: "Cairan interstisial", C: "Cairan intrasel (ICF)", D: "Cairan transelular", E: "Cairan limfe" },
    kunci: "C",
    pembahasan: {
      A: "Salah, plasma hanya merupakan sebagian kecil dari total cairan ekstrasel (ECF), apalagi dibanding total cairan tubuh.",
      B: "Salah, cairan interstisial memang komponen ECF terbesar, tetapi ECF secara keseluruhan masih lebih kecil dibanding ICF.",
      C: "Benar, cairan intrasel (ICF) merupakan komponen terbesar dari total cairan tubuh, sekitar dua pertiga dari keseluruhan cairan tubuh.",
      D: "Salah, cairan transelular (seperti cairan serebrospinal, cairan sendi) hanya menyumbang porsi sangat kecil dari total cairan tubuh.",
      E: "Salah, cairan limfe juga hanya menyumbang porsi kecil dibanding ICF secara keseluruhan."
    }
  },
  {
    no: 62,
    subject: "Fisiologi",
    soal: "Tekanan yang dihasilkan oleh protein plasma (terutama albumin) yang menarik cairan kembali ke dalam pembuluh darah disebut tekanan...",
    pilihan: { A: "Hidrostatik", B: "Onkotik (koloid osmotik)", C: "Atmosfer", D: "Osmotik kristaloid", E: "Interstisial" },
    kunci: "B",
    pembahasan: {
      A: "Salah, tekanan hidrostatik adalah tekanan yang mendorong cairan KELUAR pembuluh darah akibat tekanan darah, bukan yang menarik masuk.",
      B: "Benar, tekanan onkotik (koloid osmotik) dihasilkan terutama oleh protein plasma seperti albumin, menarik cairan kembali dari interstisial ke dalam pembuluh darah.",
      C: "Salah, tekanan atmosfer adalah tekanan udara luar, tidak relevan dengan pergerakan cairan antar kompartemen tubuh ini.",
      D: "Salah, osmotik kristaloid lebih dipengaruhi elektrolit kecil seperti Na+, bukan protein plasma besar seperti albumin.",
      E: "Salah, tekanan interstisial adalah tekanan pada cairan di luar pembuluh darah, bukan yang dihasilkan protein plasma."
    }
  },
  {
    no: 63,
    subject: "Fisiologi",
    soal: "Penurunan kadar albumin plasma (misalnya pada malnutrisi berat) dapat menyebabkan edema karena...",
    pilihan: { A: "Tekanan hidrostatik menurun drastis", B: "Tekanan onkotik plasma menurun sehingga cairan tertahan di jaringan interstisial", C: "Tekanan onkotik plasma meningkat drastis", D: "Ginjal berhenti memproduksi urin", E: "Jantung berhenti memompa darah" },
    kunci: "B",
    pembahasan: {
      A: "Salah, penurunan albumin tidak secara langsung menurunkan tekanan hidrostatik; justru tekanan onkotik yang terpengaruh.",
      B: "Benar, albumin rendah menyebabkan tekanan onkotik plasma menurun, sehingga daya tarik cairan kembali ke pembuluh darah berkurang dan cairan cenderung tertahan/menumpuk di jaringan interstisial (edema), sesuai prinsip hukum Starling.",
      C: "Salah, albumin rendah justru MENURUNKAN, bukan meningkatkan, tekanan onkotik plasma.",
      D: "Salah, edema akibat hipoalbuminemia bukan disebabkan oleh berhentinya produksi urin.",
      E: "Salah, mekanisme ini tidak berkaitan dengan berhentinya pompa jantung secara langsung."
    }
  },
  {
    no: 64,
    subject: "Fisiologi",
    soal: "Potensial membran istirahat sel saraf (sekitar -70 mV) terutama ditentukan oleh tingginya permeabilitas membran terhadap ion...",
    pilihan: { A: "Natrium (Na+)", B: "Kalium (K+)", C: "Kalsium (Ca2+)", D: "Klorida (Cl-) saja", E: "Magnesium (Mg2+)" },
    kunci: "B",
    pembahasan: {
      A: "Salah, permeabilitas terhadap Na+ pada kondisi istirahat justru relatif RENDAH dibandingkan K+.",
      B: "Benar, pada kondisi istirahat, membran sel saraf jauh lebih permeabel terhadap ion K+ dibanding ion lain, sehingga potensial membran istirahat mendekati potensial kesetimbangan K+.",
      C: "Salah, permeabilitas Ca2+ saat istirahat relatif kecil dan lebih berperan saat depolarisasi terminal akson/sinaps, bukan penentu utama potensial istirahat.",
      D: "Salah, meskipun Cl- berkontribusi, faktor utama penentu potensial istirahat adalah permeabilitas K+ yang jauh lebih tinggi.",
      E: "Salah, Mg2+ tidak menjadi faktor penentu utama potensial membran istirahat saraf."
    }
  },
  {
    no: 65,
    subject: "Fisiologi",
    soal: "Fase depolarisasi cepat pada potensial aksi sel saraf terjadi akibat...",
    pilihan: { A: "Pembukaan cepat kanal Na+ berpintu voltase, Na+ masuk sel", B: "Pembukaan kanal K+, K+ keluar sel", C: "Penutupan seluruh kanal ion", D: "Peningkatan aktivitas pompa Na+/K+ ATPase", E: "Masuknya ion klorida secara masif" },
    kunci: "A",
    pembahasan: {
      A: "Benar, depolarisasi cepat terjadi karena kanal Na+ berpintu voltase terbuka cepat, memungkinkan ion Na+ masuk secara masif ke dalam sel sehingga potensial membran menjadi lebih positif.",
      B: "Salah, pembukaan kanal K+ dengan keluarnya K+ justru berperan pada fase REPOLARISASI, bukan depolarisasi.",
      C: "Salah, depolarisasi justru terjadi karena kanal Na+ TERBUKA, bukan seluruh kanal tertutup.",
      D: "Salah, pompa Na+/K+ ATPase bekerja lebih lambat dan berperan memulihkan gradien ion setelah potensial aksi, bukan penyebab depolarisasi cepat.",
      E: "Salah, depolarisasi cepat terutama disebabkan oleh Na+, bukan ion klorida."
    }
  },
  {
    no: 66,
    subject: "Fisiologi",
    soal: "Fase repolarisasi pada potensial aksi sel saraf terutama disebabkan oleh...",
    pilihan: { A: "Masuknya ion Na+ secara masif", B: "Keluarnya ion K+ dari dalam sel", C: "Masuknya ion Ca2+ secara masif", D: "Berhentinya seluruh transport ion", E: "Peningkatan permeabilitas terhadap glukosa" },
    kunci: "B",
    pembahasan: {
      A: "Salah, masuknya Na+ secara masif justru menyebabkan DEPOLARISASI, bukan repolarisasi.",
      B: "Benar, setelah depolarisasi, kanal K+ terbuka dan ion K+ keluar sel, mengembalikan potensial membran menuju nilai negatif (repolarisasi).",
      C: "Salah, Ca2+ lebih berperan pada pelepasan neurotransmitter di sinaps, bukan penyebab utama repolarisasi akson.",
      D: "Salah, repolarisasi justru terjadi karena ADANYA pergerakan ion K+ keluar sel, bukan berhentinya transport ion.",
      E: "Salah, permeabilitas glukosa tidak berkaitan dengan mekanisme potensial aksi."
    }
  },
  {
    no: 67,
    subject: "Fisiologi",
    soal: "Prinsip 'all-or-none' pada potensial aksi berarti...",
    pilihan: { A: "Potensial aksi dapat memiliki amplitudo bervariasi tergantung kekuatan stimulus", B: "Jika ambang batas tercapai, potensial aksi akan terjadi penuh; jika tidak, tidak terjadi sama sekali", C: "Potensial aksi hanya terjadi pada sel otot, tidak pada sel saraf", D: "Semakin kuat stimulus, semakin besar amplitudo potensial aksi", E: "Potensial aksi terjadi secara bertahap sebanding stimulus" },
    kunci: "B",
    pembahasan: {
      A: "Salah, ini justru menggambarkan potensial berjenjang (graded potential), bukan prinsip all-or-none.",
      B: "Benar, prinsip all-or-none menyatakan bahwa begitu ambang batas tercapai, potensial aksi akan terjadi penuh dengan amplitudo yang konsisten; jika ambang batas tidak tercapai, potensial aksi tidak terjadi sama sekali.",
      C: "Salah, potensial aksi terjadi baik pada sel saraf maupun sel otot yang dapat tereksitasi (excitable cells).",
      D: "Salah, amplitudo potensial aksi TIDAK bergantung pada kekuatan stimulus (berbeda dengan frekuensi potensial aksi yang bisa meningkat).",
      E: "Salah, potensial aksi tidak terjadi bertahap; begitu ambang tercapai, responnya penuh (all), bukan proporsional (graded)."
    }
  },
  {
    no: 68,
    subject: "Fisiologi",
    soal: "Struktur taut sel yang berfungsi mencegah kebocoran cairan antar sel epitel, sehingga membentuk sawar yang rapat, disebut...",
    pilihan: { A: "Gap junction", B: "Tight junction", C: "Desmosom", D: "Hemidesmosom", E: "Plasmodesmata" },
    kunci: "B",
    pembahasan: {
      A: "Salah, gap junction berfungsi sebagai jalur komunikasi langsung antar sel, bukan mencegah kebocoran cairan.",
      B: "Benar, tight junction (zonula occludens) merapatkan membran sel yang berdekatan sehingga mencegah kebocoran cairan/molekul melalui ruang antar sel, penting misalnya pada epitel usus.",
      C: "Salah, desmosom berfungsi memberi kekuatan mekanik/perlekatan antar sel, bukan mencegah kebocoran cairan.",
      D: "Salah, hemidesmosom melekatkan sel ke membran basal, bukan mencegah kebocoran antar sel.",
      E: "Salah, plasmodesmata adalah struktur penghubung antar sel TUMBUHAN, bukan struktur pada sel hewan/manusia."
    }
  },
  {
    no: 69,
    subject: "Fisiologi",
    soal: "Struktur taut sel yang memungkinkan ion dan molekul kecil berpindah langsung antar sel yang berdekatan, penting untuk penyebaran impuls listrik pada otot jantung, adalah...",
    pilihan: { A: "Tight junction", B: "Desmosom", C: "Gap junction", D: "Hemidesmosom", E: "Zonula adherens" },
    kunci: "C",
    pembahasan: {
      A: "Salah, tight junction justru merapatkan sel untuk mencegah kebocoran, bukan memungkinkan pertukaran ion antar sel.",
      B: "Salah, desmosom hanya memberikan kekuatan mekanik perlekatan, tidak membentuk saluran komunikasi antar sel.",
      C: "Benar, gap junction terdiri dari protein konektor (konteksin) yang membentuk saluran langsung antar sitoplasma sel bersebelahan, memungkinkan ion dan sinyal listrik menyebar cepat, penting pada otot jantung agar berkontraksi serempak.",
      D: "Salah, hemidesmosom melekatkan sel ke membran basal, bukan membentuk saluran antar sel.",
      E: "Salah, zonula adherens berfungsi sebagai penguat perlekatan mekanis, bukan saluran komunikasi ion."
    }
  },
  {
    no: 70,
    subject: "Fisiologi",
    soal: "Curah jantung (cardiac output) dapat dihitung menggunakan rumus...",
    pilihan: { A: "Cardiac output = Tekanan darah x Resistensi vaskular", B: "Cardiac output = Stroke volume x Heart rate", C: "Cardiac output = Volume darah total / waktu sirkulasi", D: "Cardiac output = Tekanan sistolik - tekanan diastolik", E: "Cardiac output = Frekuensi napas x volume tidal" },
    kunci: "B",
    pembahasan: {
      A: "Salah, rumus ini menggambarkan hubungan tekanan darah dengan resistensi (mirip hukum Ohm), bukan rumus curah jantung.",
      B: "Benar, curah jantung (cardiac output) = volume sekuncup (stroke volume) dikalikan frekuensi denyut jantung (heart rate) per menit.",
      C: "Salah, ini bukan rumus baku curah jantung dalam fisiologi kardiovaskular dasar.",
      D: "Salah, selisih tekanan sistolik-diastolik disebut tekanan nadi (pulse pressure), bukan curah jantung.",
      E: "Salah, rumus ini menggambarkan ventilasi semenit (minute ventilation) pada sistem pernapasan, bukan curah jantung."
    }
  },
  {
    no: 71,
    subject: "Fisiologi",
    soal: "Sebagian besar CO2 diangkut dalam darah dari jaringan menuju paru-paru dalam bentuk...",
    pilihan: { A: "Terlarut bebas dalam plasma", B: "Berikatan dengan hemoglobin sebagai karbaminohemoglobin", C: "Ion bikarbonat (HCO3-)", D: "Gas CO2 murni di dalam eritrosit", E: "Berikatan dengan albumin" },
    kunci: "C",
    pembahasan: {
      A: "Salah, CO2 yang terlarut bebas dalam plasma hanya menyumbang porsi kecil (sekitar 7-10%) dari total transport CO2.",
      B: "Salah, karbaminohemoglobin memang salah satu bentuk transport CO2, namun porsinya lebih kecil (sekitar 20-30%) dibanding bentuk ion bikarbonat.",
      C: "Benar, sebagian besar (sekitar 70%) CO2 diangkut dalam bentuk ion bikarbonat (HCO3-) setelah CO2 diubah menjadi asam karbonat oleh enzim karbonat anhidrase di eritrosit.",
      D: "Salah, CO2 murni tidak dominan diangkut begitu saja tanpa diubah bentuk kimianya.",
      E: "Salah, CO2 tidak diangkut dengan cara berikatan pada albumin; albumin lebih berperan mengangkut zat lain dan menjaga tekanan onkotik."
    }
  },
  {
    no: 72,
    subject: "Fisiologi",
    soal: "Aktivasi sistem saraf simpatis secara umum akan menghasilkan respons tubuh berupa...",
    pilihan: { A: "Penurunan denyut jantung dan peningkatan aktivitas pencernaan", B: "Peningkatan denyut jantung dan pelebaran pupil (respons 'fight-or-flight')", C: "Penurunan tekanan darah secara drastis", D: "Peningkatan sekresi saliva dan gerakan usus", E: "Relaksasi otot rangka secara total" },
    kunci: "B",
    pembahasan: {
      A: "Salah, deskripsi ini justru menggambarkan efek dominan sistem saraf PARASIMPATIS, bukan simpatis.",
      B: "Benar, sistem saraf simpatis mengaktifkan respons 'fight-or-flight', antara lain meningkatkan denyut jantung, melebarkan pupil, dan mengalihkan aliran darah ke otot rangka.",
      C: "Salah, aktivasi simpatis umumnya justru MENINGKATKAN tekanan darah, bukan menurunkannya drastis.",
      D: "Salah, peningkatan sekresi saliva dan gerakan usus adalah efek dominan sistem parasimpatis, bukan simpatis.",
      E: "Salah, simpatis justru mempersiapkan otot rangka untuk aktivitas fisik, bukan merelaksasikannya secara total."
    }
  },
  {
    no: 73,
    subject: "Fisiologi",
    soal: "Sistem saraf parasimpatis berperan dominan dalam kondisi tubuh 'rest and digest', dengan efek umum berupa...",
    pilihan: { A: "Peningkatan denyut jantung dan pelebaran bronkus", B: "Peningkatan aktivitas pencernaan dan penurunan denyut jantung", C: "Pelebaran pupil dan penghambatan sekresi saliva", D: "Pengalihan aliran darah ke otot rangka", E: "Peningkatan sekresi hormon adrenalin" },
    kunci: "B",
    pembahasan: {
      A: "Salah, peningkatan denyut jantung dan pelebaran bronkus adalah efek dominan sistem simpatis, bukan parasimpatis.",
      B: "Benar, sistem parasimpatis mendukung kondisi istirahat dan pencernaan ('rest and digest'), meningkatkan aktivitas pencernaan (sekresi enzim, gerak peristaltik) sembari menurunkan denyut jantung.",
      C: "Salah, pelebaran pupil adalah efek simpatis; parasimpatis justru menyebabkan penyempitan pupil dan MENINGKATKAN (bukan menghambat) sekresi saliva.",
      D: "Salah, pengalihan darah ke otot rangka adalah ciri khas respons simpatis saat aktivitas fisik/stres.",
      E: "Salah, sekresi adrenalin (epinefrin) dipicu oleh aktivasi simpatis (medula adrenal), bukan parasimpatis."
    }
  },
  {
    no: 74,
    subject: "Fisiologi",
    soal: "Struktur diskus interkalatus pada otot jantung penting secara fungsional karena mengandung...",
    pilihan: { A: "Tight junction yang mencegah penyebaran impuls", B: "Gap junction yang memungkinkan penyebaran impuls listrik antar sel otot jantung", C: "Hanya jaringan ikat tanpa fungsi listrik", D: "Reseptor hormon tiroid", E: "Sel punca otot jantung" },
    kunci: "B",
    pembahasan: {
      A: "Salah, tight junction justru akan MENGHAMBAT penyebaran impuls jika mendominasi, bukan struktur utama diskus interkalatus.",
      B: "Benar, diskus interkalatus mengandung gap junction yang memungkinkan impuls listrik menyebar cepat antar sel otot jantung, sehingga jantung dapat berkontraksi secara serempak (sinsitium fungsional).",
      C: "Salah, diskus interkalatus justru memiliki peran listrik/fungsional penting, bukan sekadar jaringan ikat pasif.",
      D: "Salah, diskus interkalatus tidak berfungsi sebagai reseptor hormon tiroid.",
      E: "Salah, diskus interkalatus adalah struktur taut sel, bukan kumpulan sel punca."
    }
  },
  {
    no: 75,
    subject: "Fisiologi",
    soal: "Hormon antidiuretik (ADH/vasopresin) berperan dalam regulasi cairan tubuh dengan cara...",
    pilihan: { A: "Meningkatkan produksi urin secara drastis", B: "Meningkatkan reabsorpsi air di tubulus ginjal sehingga urin lebih pekat", C: "Menghambat rasa haus sepenuhnya", D: "Menurunkan tekanan darah secara langsung tanpa efek pada ginjal", E: "Merangsang ekskresi natrium berlebih" },
    kunci: "B",
    pembahasan: {
      A: "Salah, ADH justru MENGURANGI produksi urin (bersifat antidiuretik), bukan meningkatkannya.",
      B: "Benar, ADH meningkatkan permeabilitas tubulus ginjal (terutama duktus koligentes) terhadap air, sehingga reabsorpsi air meningkat dan urin menjadi lebih pekat, membantu mempertahankan volume cairan tubuh.",
      C: "Salah, ADH tidak menghambat rasa haus; keduanya justru sering diatur bersamaan oleh osmoreseptor hipotalamus saat tubuh kekurangan cairan.",
      D: "Salah, ADH bekerja terutama pada ginjal untuk mengatur reabsorpsi air, bukan menurunkan tekanan darah secara langsung tanpa melalui ginjal (meski pada kadar tinggi juga punya efek vasokonstriksi).",
      E: "Salah, regulasi ekskresi natrium lebih dominan dipengaruhi hormon aldosteron, bukan ADH."
    }
  },

  // ================= HISTOLOGI (76-100) =================
  {
    no: 76,
    subject: "Histologi",
    soal: "Empat jaringan dasar yang menyusun seluruh organ tubuh manusia adalah...",
    pilihan: { A: "Epitel, ikat, otot, saraf", B: "Epitel, tulang, darah, lemak", C: "Otot, saraf, darah, tulang rawan", D: "Ikat, lemak, darah, saraf", E: "Epitel, otot, tulang, darah" },
    kunci: "A",
    pembahasan: {
      A: "Benar, empat jaringan dasar tubuh manusia adalah jaringan epitel, jaringan ikat, jaringan otot, dan jaringan saraf.",
      B: "Salah, tulang, darah, dan lemak sebenarnya termasuk dalam kategori besar jaringan ikat, bukan jaringan dasar tersendiri yang setara.",
      C: "Salah, tulang rawan dan darah adalah bagian dari jaringan ikat, bukan kategori jaringan dasar tersendiri.",
      D: "Salah, lemak dan darah termasuk sub-jenis jaringan ikat, bukan jaringan dasar tersendiri yang setara dengan epitel/otot/saraf.",
      E: "Salah, tulang dan darah termasuk sub-jenis jaringan ikat, bukan jaringan dasar tersendiri."
    }
  },
  {
    no: 77,
    subject: "Histologi",
    soal: "Tahap awal dalam mikroteknik histologi yang bertujuan mempertahankan struktur sel dan mencegah pembusukan jaringan disebut...",
    pilihan: { A: "Dehidrasi", B: "Fiksasi", C: "Embedding", D: "Sectioning", E: "Staining" },
    kunci: "B",
    pembahasan: {
      A: "Salah, dehidrasi bertujuan menghilangkan kandungan air jaringan (biasanya dengan alkohol bertingkat), dilakukan SETELAH fiksasi.",
      B: "Benar, fiksasi (misalnya menggunakan formalin) adalah tahap awal untuk mengawetkan jaringan, menghentikan autolisis, dan mempertahankan struktur sel sedekat mungkin dengan kondisi hidup.",
      C: "Salah, embedding adalah proses menanamkan jaringan ke dalam medium (misalnya parafin) agar dapat dipotong tipis, dilakukan setelah dehidrasi.",
      D: "Salah, sectioning adalah proses memotong jaringan menjadi irisan tipis menggunakan mikrotom, dilakukan setelah embedding.",
      E: "Salah, staining (pewarnaan) adalah tahap akhir untuk memberi kontras warna pada struktur jaringan agar terlihat di mikroskop."
    }
  },
  {
    no: 78,
    subject: "Histologi",
    soal: "Pada pewarnaan Hematoksilin-Eosin (H&E), zat warna Hematoksilin bersifat basofilik dan akan mewarnai struktur...",
    pilihan: { A: "Sitoplasma menjadi merah muda", B: "Inti sel menjadi ungu-biru", C: "Serat kolagen menjadi kuning", D: "Membran sel menjadi hijau", E: "Mitokondria menjadi hitam" },
    kunci: "B",
    pembahasan: {
      A: "Salah, pewarnaan sitoplasma menjadi merah muda adalah hasil kerja Eosin, bukan Hematoksilin.",
      B: "Benar, Hematoksilin bersifat basa (basofilik) dan berikatan dengan struktur asam seperti DNA di inti sel, memberikan warna ungu-biru pada inti sel.",
      C: "Salah, pewarnaan H&E standar tidak menghasilkan warna kuning untuk kolagen; pewarnaan khusus lain (misalnya Masson's trichrome) lebih sesuai untuk kolagen.",
      D: "Salah, H&E tidak menghasilkan warna hijau pada membran sel.",
      E: "Salah, H&E tidak secara spesifik mewarnai mitokondria hitam; itu lebih menyerupai pewarnaan khusus lain."
    }
  },
  {
    no: 79,
    subject: "Histologi",
    soal: "Pada pewarnaan Hematoksilin-Eosin (H&E), zat warna Eosin bersifat asidofilik dan akan mewarnai struktur...",
    pilihan: { A: "Inti sel menjadi ungu-biru", B: "Sitoplasma dan protein menjadi merah muda", C: "DNA menjadi hitam pekat", D: "Nukleolus menjadi biru tua", E: "Kromatin menjadi ungu gelap" },
    kunci: "B",
    pembahasan: {
      A: "Salah, pewarnaan inti sel menjadi ungu-biru adalah hasil kerja Hematoksilin, bukan Eosin.",
      B: "Benar, Eosin bersifat asam (asidofilik) dan berikatan dengan struktur bermuatan positif seperti protein sitoplasma, memberikan warna merah muda.",
      C: "Salah, Eosin tidak mewarnai DNA menjadi hitam; DNA lebih diwarnai Hematoksilin menjadi ungu-biru.",
      D: "Salah, pewarnaan biru tua pada nukleolus/kromatin adalah hasil kerja Hematoksilin, bukan Eosin.",
      E: "Salah, kromatin diwarnai ungu gelap oleh Hematoksilin (bersifat basofilik), bukan oleh Eosin."
    }
  },
  {
    no: 80,
    subject: "Histologi",
    soal: "Jenis epitel yang sangat tipis dan khas ditemukan melapisi bagian dalam pembuluh darah (endotelium) serta alveolus paru adalah...",
    pilihan: { A: "Epitel kubus selapis", B: "Epitel silindris selapis", C: "Epitel pipih selapis", D: "Epitel transisional", E: "Epitel berlapis gepeng" },
    kunci: "C",
    pembahasan: {
      A: "Salah, epitel kubus selapis lebih khas ditemukan pada tubulus ginjal atau kelenjar, bukan pembuluh darah/alveolus.",
      B: "Salah, epitel silindris selapis lebih khas ditemukan pada lambung/usus, bukan pembuluh darah/alveolus.",
      C: "Benar, epitel pipih (skuamosa) selapis sangat tipis, memfasilitasi pertukaran zat secara efisien, sehingga khas ditemukan sebagai endotelium pembuluh darah dan dinding alveolus paru.",
      D: "Salah, epitel transisional khas pada kandung kemih karena kemampuannya meregang, bukan pada pembuluh darah/alveolus.",
      E: "Salah, epitel berlapis gepeng (skuamosa berlapis) khas pada kulit atau esofagus untuk proteksi, bukan pembuluh darah/alveolus."
    }
  },
  {
    no: 81,
    subject: "Histologi",
    soal: "Jenis epitel yang khas ditemukan pada tubulus ginjal dan banyak kelenjar, berbentuk seperti dadu dengan inti bulat di tengah, adalah...",
    pilihan: { A: "Epitel pipih selapis", B: "Epitel kubus selapis", C: "Epitel silindris berlapis", D: "Epitel transisional", E: "Epitel pipih berlapis" },
    kunci: "B",
    pembahasan: {
      A: "Salah, epitel pipih selapis khas pada pembuluh darah/alveolus, bukan tubulus ginjal/kelenjar.",
      B: "Benar, epitel kubus selapis berbentuk seperti dadu dengan inti bulat di tengah sel, khas ditemukan pada tubulus ginjal dan berbagai kelenjar sekretorik.",
      C: "Salah, epitel silindris berlapis relatif jarang, lebih ditemukan pada bagian tertentu uretra atau kelenjar besar, bukan tubulus ginjal.",
      D: "Salah, epitel transisional khas pada saluran kemih bagian bawah (kandung kemih), bukan tubulus ginjal.",
      E: "Salah, epitel pipih berlapis khas pada permukaan yang mengalami gesekan seperti kulit/esofagus, bukan tubulus ginjal."
    }
  },
  {
    no: 82,
    subject: "Histologi",
    soal: "Epitel yang mampu meregang secara signifikan tanpa robek, sehingga khas ditemukan pada dinding kandung kemih, disebut epitel...",
    pilihan: { A: "Kubus selapis", B: "Silindris bertingkat semu", C: "Transisional", D: "Pipih selapis", E: "Berlapis gepeng bertanduk" },
    kunci: "C",
    pembahasan: {
      A: "Salah, epitel kubus selapis tidak memiliki kemampuan meregang signifikan seperti epitel transisional.",
      B: "Salah, epitel silindris bertingkat semu lebih khas pada saluran pernapasan, bukan kandung kemih.",
      C: "Benar, epitel transisional memiliki struktur sel yang dapat berubah bentuk (dari kuboid menjadi pipih) saat organ terisi penuh, sehingga khas ditemukan pada kandung kemih dan sebagian ureter.",
      D: "Salah, epitel pipih selapis tidak dirancang untuk fungsi regangan besar seperti kandung kemih, melainkan untuk pertukaran zat.",
      E: "Salah, epitel berlapis gepeng bertanduk khas pada kulit sebagai proteksi terhadap gesekan/kekeringan, bukan untuk regangan kandung kemih."
    }
  },
  {
    no: 83,
    subject: "Histologi",
    soal: "Epitel berlapis gepeng (skuamosa berlapis) tanpa lapisan tanduk khas ditemukan pada...",
    pilihan: { A: "Epidermis kulit telapak tangan", B: "Esofagus", C: "Alveolus paru", D: "Tubulus ginjal", E: "Kandung kemih" },
    kunci: "B",
    pembahasan: {
      A: "Salah, epidermis kulit (terutama telapak tangan/kaki) memiliki lapisan tanduk (keratin) karena terus terpapar gesekan dan kekeringan.",
      B: "Benar, esofagus dilapisi epitel berlapis gepeng TANPA lapisan tanduk karena permukaannya tetap lembap, cukup untuk melindungi dari gesekan makanan yang melewatinya.",
      C: "Salah, alveolus paru dilapisi epitel pipih SELAPIS (bukan berlapis) untuk memfasilitasi pertukaran gas yang efisien.",
      D: "Salah, tubulus ginjal dilapisi epitel kubus selapis, bukan epitel berlapis gepeng.",
      E: "Salah, kandung kemih dilapisi epitel transisional, bukan epitel berlapis gepeng biasa."
    }
  },
  {
    no: 84,
    subject: "Histologi",
    soal: "Jaringan ikat longgar (areolar) memiliki fungsi utama sebagai...",
    pilihan: { A: "Menghasilkan kekuatan tarik maksimal seperti pada tendon", B: "Mengisi ruang antar organ dan mendukung struktur di sekitar pembuluh darah/saraf", C: "Menyimpan kalsium dalam jumlah besar", D: "Menghantarkan impuls listrik antar sel", E: "Melindungi tubuh dari gesekan mekanik berat" },
    kunci: "B",
    pembahasan: {
      A: "Salah, kekuatan tarik maksimal justru dimiliki jaringan ikat PADAT teratur seperti tendon, bukan jaringan ikat longgar.",
      B: "Benar, jaringan ikat longgar (areolar) berfungsi mengisi ruang antar organ, mendukung dan mengelilingi pembuluh darah serta saraf, serta memberi fleksibilitas.",
      C: "Salah, penyimpanan kalsium dalam jumlah besar adalah fungsi jaringan TULANG, bukan jaringan ikat longgar.",
      D: "Salah, menghantarkan impuls listrik adalah fungsi jaringan SARAF, bukan jaringan ikat longgar.",
      E: "Salah, perlindungan dari gesekan berat lebih menjadi fungsi epitel berlapis gepeng bertanduk (kulit), bukan jaringan ikat longgar."
    }
  },
  {
    no: 85,
    subject: "Histologi",
    soal: "Tendon dan ligamen tersusun oleh jaringan ikat dengan serat kolagen yang tersusun padat dan sejajar, disebut jaringan ikat...",
    pilihan: { A: "Longgar (areolar)", B: "Padat teratur (dense regular)", C: "Adiposa", D: "Retikuler", E: "Kartilago elastis" },
    kunci: "B",
    pembahasan: {
      A: "Salah, jaringan ikat longgar memiliki serat yang tersusun renggang dan acak, bukan padat sejajar seperti tendon/ligamen.",
      B: "Benar, tendon dan ligamen tersusun oleh jaringan ikat padat teratur, dengan berkas serat kolagen tebal yang sejajar searah tarikan, memberikan kekuatan tarik tinggi.",
      C: "Salah, jaringan adiposa didominasi sel lemak untuk cadangan energi, bukan serat kolagen padat.",
      D: "Salah, jaringan retikuler tersusun oleh serat retikuler halus, khas pada organ limfoid, bukan struktur padat seperti tendon.",
      E: "Salah, kartilago elastis mengandung banyak serat elastin dan ditemukan misalnya di daun telinga, bukan pada tendon/ligamen."
    }
  },
  {
    no: 86,
    subject: "Histologi",
    soal: "Sel utama yang mensintesis serat kolagen dan komponen matriks ekstraseluler pada jaringan ikat adalah...",
    pilihan: { A: "Osteosit", B: "Kondrosit", C: "Fibroblas", D: "Eritrosit", E: "Adiposit" },
    kunci: "C",
    pembahasan: {
      A: "Salah, osteosit adalah sel matang pada jaringan tulang, bukan sel utama pensintesis kolagen pada jaringan ikat secara umum.",
      B: "Salah, kondrosit adalah sel matang pada jaringan tulang rawan (kartilago), bukan sel utama jaringan ikat pada umumnya.",
      C: "Benar, fibroblas adalah sel utama jaringan ikat yang mensintesis serat kolagen, elastin, serta komponen matriks ekstraseluler lainnya.",
      D: "Salah, eritrosit adalah sel darah merah yang berfungsi mengangkut oksigen, bukan mensintesis matriks jaringan ikat.",
      E: "Salah, adiposit adalah sel lemak yang menyimpan trigliserida, bukan sel utama pensintesis kolagen."
    }
  },
  {
    no: 87,
    subject: "Histologi",
    soal: "Serat pada jaringan ikat yang bersifat sangat elastis dan dapat kembali ke bentuk semula setelah diregangkan, banyak ditemukan pada dinding pembuluh darah besar, adalah serat...",
    pilihan: { A: "Kolagen", B: "Elastin", C: "Retikuler", D: "Aktin", E: "Miosin" },
    kunci: "B",
    pembahasan: {
      A: "Salah, serat kolagen bersifat kuat namun relatif TIDAK elastis, lebih berfungsi menahan tarikan bukan meregang-kembali.",
      B: "Benar, serat elastin memiliki sifat sangat elastis dan mampu kembali ke bentuk semula setelah diregangkan, penting pada dinding pembuluh darah besar seperti aorta.",
      C: "Salah, serat retikuler membentuk kerangka halus penyokong organ (seperti limpa/hati), bukan struktur elastis dinding pembuluh darah besar.",
      D: "Salah, aktin adalah protein kontraktil pada sel otot, bukan serat jaringan ikat ekstraseluler.",
      E: "Salah, miosin juga protein kontraktil otot, bukan serat jaringan ikat ekstraseluler."
    }
  },
  {
    no: 88,
    subject: "Histologi",
    soal: "Ciri khas jaringan otot rangka yang membedakannya dari otot polos adalah...",
    pilihan: { A: "Tidak memiliki lurik dan bekerja secara volunter", B: "Memiliki lurik (garis melintang) dan bekerja secara volunter (sadar)", C: "Berinti tunggal di tengah sel dan bekerja involunter", D: "Hanya ditemukan pada dinding pembuluh darah", E: "Tidak mengandung protein aktin-miosin" },
    kunci: "B",
    pembahasan: {
      A: "Salah, otot rangka JUSTRU memiliki lurik, bukan tanpa lurik.",
      B: "Benar, otot rangka memiliki lurik/garis melintang (akibat susunan teratur aktin-miosin) dan berada di bawah kendali sadar (volunter).",
      C: "Salah, ciri berinti tunggal di tengah dan bekerja involunter justru menggambarkan otot POLOS, bukan otot rangka yang berinti banyak di tepi sel.",
      D: "Salah, otot rangka melekat pada tulang untuk pergerakan tubuh, bukan khas dinding pembuluh darah (itu ciri otot polos).",
      E: "Salah, otot rangka justru kaya protein kontraktil aktin dan miosin yang tersusun teratur membentuk lurik."
    }
  },
  {
    no: 89,
    subject: "Histologi",
    soal: "Otot polos memiliki ciri khas berupa...",
    pilihan: { A: "Berinti banyak di tepi sel dan bekerja volunter", B: "Tidak memiliki lurik, berinti tunggal di tengah sel, bekerja involunter", C: "Memiliki diskus interkalatus", D: "Hanya ditemukan pada jantung", E: "Berkontraksi hanya atas perintah sadar" },
    kunci: "B",
    pembahasan: {
      A: "Salah, ciri berinti banyak di tepi dan volunter justru menggambarkan otot RANGKA, bukan otot polos.",
      B: "Benar, otot polos tidak memiliki lurik, umumnya berinti tunggal terletak di tengah sel berbentuk gelendong, dan bekerja di luar kendali sadar (involunter), misalnya pada dinding usus dan pembuluh darah.",
      C: "Salah, diskus interkalatus adalah ciri khas otot JANTUNG, bukan otot polos.",
      D: "Salah, otot polos ditemukan pada berbagai organ berongga seperti usus, pembuluh darah, dan kandung kemih, bukan hanya jantung (bahkan otot jantung berbeda jenis dari otot polos).",
      E: "Salah, otot polos justru bekerja secara involunter (tidak di bawah kendali sadar)."
    }
  },
  {
    no: 90,
    subject: "Histologi",
    soal: "Struktur diskus interkalatus yang menghubungkan sel-sel otot jantung secara khas ditemukan pada jaringan otot...",
    pilihan: { A: "Otot rangka", B: "Otot polos", C: "Otot jantung", D: "Otot polos multiunit", E: "Otot polos unitari" },
    kunci: "C",
    pembahasan: {
      A: "Salah, otot rangka tidak memiliki diskus interkalatus; sel-selnya berbentuk serat panjang multinuklear tanpa struktur ini.",
      B: "Salah, otot polos (baik unitari maupun multiunit) tidak memiliki diskus interkalatus.",
      C: "Benar, diskus interkalatus adalah struktur taut sel khas pada otot jantung yang menghubungkan ujung-ujung sel otot jantung yang bercabang, memungkinkan penyebaran impuls listrik cepat.",
      D: "Salah, otot polos multiunit tidak memiliki diskus interkalatus; sel-selnya cenderung bekerja independen.",
      E: "Salah, meski otot polos unitari memiliki gap junction, struktur khusus bernama 'diskus interkalatus' hanya digunakan untuk otot jantung."
    }
  },
  {
    no: 91,
    subject: "Histologi",
    soal: "Bagian sel saraf (neuron) yang berfungsi menghantarkan impuls listrik MENJAUHI badan sel menuju sel target adalah...",
    pilihan: { A: "Dendrit", B: "Badan sel (soma)", C: "Akson", D: "Nukleus", E: "Sinaps saja" },
    kunci: "C",
    pembahasan: {
      A: "Salah, dendrit justru berfungsi menerima impuls dan menghantarkannya MENUJU badan sel, kebalikan dari yang dimaksud.",
      B: "Salah, badan sel (soma) adalah pusat metabolik neuron yang berisi inti sel dan organel, bukan struktur penghantar impuls keluar.",
      C: "Benar, akson adalah penjuluran panjang neuron yang menghantarkan impuls listrik dari badan sel menuju terminal akson/sel target.",
      D: "Salah, nukleus adalah organel penyimpan materi genetik, bukan struktur penghantar impuls.",
      E: "Salah, sinaps adalah titik pertemuan/komunikasi antar neuron, bukan struktur penghantar impuls sepanjang neuron itu sendiri."
    }
  },
  {
    no: 92,
    subject: "Histologi",
    soal: "Bagian sel saraf (neuron) yang berfungsi menerima impuls dari neuron lain dan menghantarkannya MENUJU badan sel adalah...",
    pilihan: { A: "Akson", B: "Dendrit", C: "Selubung mielin", D: "Nodus Ranvier", E: "Terminal akson" },
    kunci: "B",
    pembahasan: {
      A: "Salah, akson justru menghantarkan impuls MENJAUHI badan sel, kebalikan dari yang dimaksud.",
      B: "Benar, dendrit adalah penjuluran pendek dan bercabang pada neuron yang menerima sinyal dari neuron lain dan menghantarkannya menuju badan sel.",
      C: "Salah, selubung mielin berfungsi mengisolasi akson untuk mempercepat konduksi impuls, bukan menerima impuls.",
      D: "Salah, nodus Ranvier adalah celah pada selubung mielin sepanjang akson, tempat terjadinya konduksi saltatorik, bukan struktur penerima impuls.",
      E: "Salah, terminal akson adalah ujung akson tempat pelepasan neurotransmitter ke sel target, bukan struktur penerima impuls dari neuron lain."
    }
  },
  {
    no: 93,
    subject: "Histologi",
    soal: "Sel glia yang berfungsi memberikan dukungan struktural bagi neuron dan turut membentuk sawar darah otak (blood-brain barrier) adalah...",
    pilihan: { A: "Oligodendrosit", B: "Sel Schwann", C: "Astrosit", D: "Mikroglia", E: "Sel ependim saja" },
    kunci: "C",
    pembahasan: {
      A: "Salah, oligodendrosit berfungsi membentuk selubung mielin di sistem saraf pusat, bukan pembentuk sawar darah otak.",
      B: "Salah, sel Schwann berfungsi membentuk selubung mielin di sistem saraf TEPI, bukan sawar darah otak.",
      C: "Benar, astrosit memberikan dukungan struktural dan metabolik bagi neuron di sistem saraf pusat, serta perluasan kakinya (perivascular feet) berperan penting membentuk sawar darah otak.",
      D: "Salah, mikroglia berfungsi sebagai sel imun/fagosit di sistem saraf pusat, bukan pembentuk sawar darah otak secara langsung.",
      E: "Salah, sel ependim melapisi ventrikel otak dan kanal sentral, bukan pembentuk utama sawar darah otak."
    }
  },
  {
    no: 94,
    subject: "Histologi",
    soal: "Sel glia yang berfungsi membentuk selubung mielin pada akson neuron di SISTEM SARAF PUSAT (otak dan medula spinalis) adalah...",
    pilihan: { A: "Sel Schwann", B: "Oligodendrosit", C: "Astrosit", D: "Mikroglia", E: "Sel satelit" },
    kunci: "B",
    pembahasan: {
      A: "Salah, sel Schwann membentuk mielin di sistem saraf TEPI, bukan sistem saraf pusat.",
      B: "Benar, oligodendrosit adalah sel glia yang membentuk selubung mielin pada akson di sistem saraf pusat, dan satu oligodendrosit dapat memielinasi beberapa akson sekaligus.",
      C: "Salah, astrosit berfungsi dukungan struktural/metabolik dan sawar darah otak, bukan pembentuk mielin.",
      D: "Salah, mikroglia berfungsi sebagai sel imun/fagosit di sistem saraf pusat, bukan pembentuk mielin.",
      E: "Salah, sel satelit mengelilingi badan sel neuron di ganglion sistem saraf tepi, bukan pembentuk mielin di sistem saraf pusat."
    }
  },
  {
    no: 95,
    subject: "Histologi",
    soal: "Sel glia yang berfungsi membentuk selubung mielin pada akson neuron di SISTEM SARAF TEPI adalah...",
    pilihan: { A: "Oligodendrosit", B: "Astrosit", C: "Sel Schwann", D: "Mikroglia", E: "Sel ependim" },
    kunci: "C",
    pembahasan: {
      A: "Salah, oligodendrosit membentuk mielin di sistem saraf PUSAT, bukan sistem saraf tepi.",
      B: "Salah, astrosit berfungsi dukungan struktural/metabolik di sistem saraf pusat, bukan pembentuk mielin di saraf tepi.",
      C: "Benar, sel Schwann adalah sel glia yang membentuk selubung mielin pada akson di sistem saraf tepi, dengan satu sel Schwann memielinasi satu segmen akson.",
      D: "Salah, mikroglia berfungsi sebagai sel imun/fagosit di sistem saraf pusat, bukan pembentuk mielin di saraf tepi.",
      E: "Salah, sel ependim melapisi ventrikel otak, tidak berkaitan dengan mielinasi saraf tepi."
    }
  },
  {
    no: 96,
    subject: "Histologi",
    soal: "Sel glia yang berfungsi sebagai sel imun/fagosit di dalam sistem saraf pusat, membersihkan sel rusak dan patogen, adalah...",
    pilihan: { A: "Astrosit", B: "Oligodendrosit", C: "Sel Schwann", D: "Mikroglia", E: "Sel satelit" },
    kunci: "D",
    pembahasan: {
      A: "Salah, astrosit lebih berfungsi dukungan struktural/metabolik dan sawar darah otak, bukan fungsi imun utama.",
      B: "Salah, oligodendrosit berfungsi membentuk mielin, bukan sel imun/fagosit.",
      C: "Salah, sel Schwann berfungsi membentuk mielin di saraf tepi, bukan sel imun sistem saraf pusat.",
      D: "Benar, mikroglia adalah sel glia khusus yang berperan sebagai sel imun bawaan (fagosit) di sistem saraf pusat, membersihkan sel rusak, debris, dan patogen.",
      E: "Salah, sel satelit mengelilingi badan sel neuron di ganglion saraf tepi untuk dukungan, bukan fungsi imun utama sistem saraf pusat."
    }
  },
  {
    no: 97,
    subject: "Histologi",
    soal: "Sel tulang matang yang terletak di dalam lakuna dan berfungsi mempertahankan matriks tulang di sekitarnya disebut...",
    pilihan: { A: "Osteoblas", B: "Osteoklas", C: "Osteosit", D: "Kondrosit", E: "Fibroblas" },
    kunci: "C",
    pembahasan: {
      A: "Salah, osteoblas adalah sel PEMBENTUK matriks tulang baru, belum terjebak di dalam lakuna sebagai sel matang.",
      B: "Salah, osteoklas adalah sel yang berfungsi MEROMBAK/resorpsi matriks tulang, bukan sel matang di lakuna yang mempertahankan matriks.",
      C: "Benar, osteosit adalah sel tulang matang yang terperangkap di dalam lakuna pada matriks tulang, berfungsi mempertahankan dan memelihara matriks tulang di sekitarnya.",
      D: "Salah, kondrosit adalah sel matang pada jaringan tulang RAWAN (kartilago), bukan jaringan tulang keras.",
      E: "Salah, fibroblas adalah sel utama jaringan ikat pada umumnya, bukan sel khas tulang matang di dalam lakuna."
    }
  },
  {
    no: 98,
    subject: "Histologi",
    soal: "Sel yang bertanggung jawab MEMBENTUK matriks tulang baru (osteoid) adalah...",
    pilihan: { A: "Osteosit", B: "Osteoblas", C: "Osteoklas", D: "Kondroblas", E: "Adiposit" },
    kunci: "B",
    pembahasan: {
      A: "Salah, osteosit adalah sel tulang matang yang sudah terperangkap dalam lakuna, berfungsi mempertahankan (bukan membentuk baru) matriks.",
      B: "Benar, osteoblas adalah sel yang aktif mensintesis dan mensekresikan matriks tulang baru (osteoid), yang kemudian akan mengalami mineralisasi.",
      C: "Salah, osteoklas justru berfungsi MEROMBAK/resorpsi matriks tulang, kebalikan dari membentuk matriks baru.",
      D: "Salah, kondroblas adalah sel pembentuk matriks tulang RAWAN (kartilago), bukan matriks tulang keras.",
      E: "Salah, adiposit adalah sel lemak, tidak berkaitan dengan pembentukan matriks tulang."
    }
  },
  {
    no: 99,
    subject: "Histologi",
    soal: "Sel besar berinti banyak (multinuklear) yang berfungsi merombak/resorpsi matriks tulang, penting dalam proses remodeling tulang, adalah...",
    pilihan: { A: "Osteoblas", B: "Osteosit", C: "Osteoklas", D: "Kondrosit", E: "Fibroblas" },
    kunci: "C",
    pembahasan: {
      A: "Salah, osteoblas justru berfungsi MEMBENTUK matriks tulang baru, bukan merombaknya.",
      B: "Salah, osteosit berfungsi mempertahankan matriks tulang yang sudah ada, bukan merombaknya secara aktif.",
      C: "Benar, osteoklas adalah sel besar berinti banyak (berasal dari fusi sel prekursor monosit/makrofag) yang berfungsi merombak (resorpsi) matriks tulang, penting dalam proses remodeling dan perbaikan tulang.",
      D: "Salah, kondrosit adalah sel matang jaringan tulang rawan, bukan sel perombak tulang keras.",
      E: "Salah, fibroblas adalah sel utama jaringan ikat pada umumnya, bukan sel perombak matriks tulang."
    }
  },
  {
    no: 100,
    subject: "Histologi",
    soal: "Struktur lamela konsentris yang mengelilingi saluran Havers pada tulang kompak, membentuk satu kesatuan disebut...",
    pilihan: { A: "Lakuna", B: "Kanalikuli", C: "Sistem Havers (osteon)", D: "Periosteum", E: "Endosteum" },
    kunci: "C",
    pembahasan: {
      A: "Salah, lakuna adalah rongga kecil tempat osteosit berada di dalam matriks tulang, bukan struktur konsentris lamela itu sendiri.",
      B: "Salah, kanalikuli adalah saluran kecil yang menghubungkan lakuna satu dengan lainnya, bukan struktur lamela konsentris secara keseluruhan.",
      C: "Benar, sistem Havers (osteon) adalah unit struktural tulang kompak yang terdiri dari lamela-lamela konsentris yang tersusun mengelilingi saluran Havers (berisi pembuluh darah dan saraf).",
      D: "Salah, periosteum adalah membran jaringan ikat yang membungkus permukaan LUAR tulang, bukan struktur lamela konsentris internal.",
      E: "Salah, endosteum adalah membran tipis yang melapisi permukaan DALAM rongga tulang (misalnya rongga sumsum), bukan struktur lamela konsentris sistem Havers."
    }
  }
];
