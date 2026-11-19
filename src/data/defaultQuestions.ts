import { Question } from '../types';
import tigaKomponenImg from '../assets/images/tiga_komponen_komputer_1795060168479.jpg';
import diagramAlurImg from '../assets/images/diagram_alur_komputer_1795060167607.jpg';
import perangkatInputImg from '../assets/images/kumpulan_perangkat_input_1795060166844.jpg';
import perangkatOutputImg from '../assets/images/kumpulan_perangkat_output_1795060168477.jpg';
import perangkatProsesPenyimpananImg from '../assets/images/perangkat_proses_penyimpanan_1795060168125.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // PILIHAN GANDA (18 SOAL)
  // ==========================================
  {
    id: 1,
    type: 'pg',
    topic: 'Bagian Utama Sistem Komputer',
    difficulty: 'Mudah',
    imageUrl: tigaKomponenImg,
    imageCaption: 'Ilustrasi tiga bagian utama yang saling terhubung membentuk sistem komputer.',
    text: 'Perhatikan gambar sistem komputer di atas! Gambar tersebut menunjukkan tiga bagian utama sistem komputer yang saling bekerja sama, yaitu perangkat fisik (kiri atas), program/aplikasi (kanan atas), dan pengguna komputer (bawah). Secara berurutan, ketiga bagian utama sistem komputer tersebut dinamakan...',
    options: [
      { id: 'A', text: 'Hardware, Software, dan Brainware' },
      { id: 'B', text: 'Input, Proses, dan Output' },
      { id: 'C', text: 'Monitor, Keyboard, dan Mouse' },
      { id: 'D', text: 'Storage, CPU, dan Printer' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sistem komputer terdiri atas 3 bagian utama yang saling melengkapi:\n1. Hardware (perangkat keras/fisik seperti monitor, CPU, keyboard, mouse).\n2. Software (perangkat lunak/program aplikasi dan sistem operasi).\n3. Brainware (pengguna manusia yang mengoperasikan komputer).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Komponen Hardware',
    difficulty: 'Mudah',
    text: 'Bagian sistem komputer yang berbentuk fisik, dapat dilihat bentuknya secara langsung, dan dapat disentuh dengan tangan disebut...',
    options: [
      { id: 'A', text: 'Software (Perangkat Lunak)' },
      { id: 'B', text: 'Hardware (Perangkat Keras)' },
      { id: 'C', text: 'Brainware (Pengguna)' },
      { id: 'D', text: 'Sistem Operasi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hardware atau perangkat keras adalah seluruh komponen fisik komputer yang berwujud nyata, dapat dilihat, dan dapat disentuh secara langsung, seperti monitor, keyboard, mouse, CPU, dan printer.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Komponen Software',
    difficulty: 'Mudah',
    text: 'Lani sedang mengetik tugas laporan IPA menggunakan program pengolah kata (Microsoft Word) di laptop yang memakai sistem operasi Windows. Program Microsoft Word dan sistem operasi Windows termasuk bagian sistem komputer yang disebut...',
    options: [
      { id: 'A', text: 'Hardware' },
      { id: 'B', text: 'Brainware' },
      { id: 'C', text: 'Software' },
      { id: 'D', text: 'Storage' },
    ],
    correctAnswer: 'C',
    explanation:
      'Software (perangkat lunak) adalah sekumpulan program, perintah, atau aplikasi digital yang tidak berwujud fisik untuk disentuh, tetapi berfungsi mengendalikan perangkat keras agar bisa digunakan, contohnya Windows, Microsoft Word, dan peramban web.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Komponen Brainware',
    difficulty: 'Mudah',
    text: 'Di laboratorium komputer sekolah, Pak Guru membimbing siswa kelas 4 cara menggambar di komputer. Dalam sistem komputer, siswa dan Pak Guru yang mengoperasikan serta mengendalikan komputer berperan sebagai...',
    options: [
      { id: 'A', text: 'Hardware' },
      { id: 'B', text: 'Software' },
      { id: 'C', text: 'Brainware' },
      { id: 'D', text: 'Prosesor' },
    ],
    correctAnswer: 'C',
    explanation:
      'Brainware adalah manusia atau pengguna yang mengoperasikan, merancang, atau mengendalikan sistem komputer. Tanpa brainware, komputer tidak dapat bekerja sendiri sesuai tujuan manusia.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Cara Kerja Sistem Komputer',
    difficulty: 'Sedang',
    imageUrl: diagramAlurImg,
    imageCaption: 'Diagram alur kerja sistem komputer dari kiri ke kanan serta hubungan ke media simpan.',
    text: 'Perhatikan diagram alur cara kerja sistem komputer pada gambar di atas! Urutan langkah kerja sistem komputer yang ditunjukkan oleh tanda panah dari kiri ke kanan (melalui bagian tengah) secara tepat adalah...',
    options: [
      { id: 'A', text: 'Output → Proses → Input' },
      { id: 'B', text: 'Input → Proses → Output' },
      { id: 'C', text: 'Storage → Output → Input' },
      { id: 'D', text: 'Proses → Input → Storage' },
    ],
    correctAnswer: 'B',
    explanation:
      'Cara kerja sistem komputer mengikuti siklus IPO:\n1. Input (kiri): Data/perintah dimasukkan melalui keyboard dan mouse.\n2. Proses (tengah): Data diolah oleh CPU, dan dapat disimpan/diambil ke perangkat Storage (bawah) melalui panah dua arah.\n3. Output (kanan): Hasil pengolahan ditampilkan melalui monitor atau dicetak printer.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Cara Kerja Sistem Komputer',
    difficulty: 'Sedang',
    text: 'Sebuah komputer di kelas memiliki monitor, CPU, keyboard, dan mouse yang masih baru, serta sudah terpasang listrik. Namun, di dalam komputer tersebut belum terpasang sistem operasi maupun aplikasi apa pun. Apa yang akan terjadi ketika siswa menyalakan komputer itu?',
    options: [
      { id: 'A', text: 'Komputer tidak dapat digunakan untuk menjalankan tugas karena tidak ada software yang mengatur hardware' },
      { id: 'B', text: 'Komputer tetap bisa dipakai mengetik surat karena keyboard sudah tersambung' },
      { id: 'C', text: 'Printer otomatis mencetak dokumen tanpa perintah pengguna' },
      { id: 'D', text: 'Brainware dapat menggantikan fungsi monitor secara langsung' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sistem komputer baru dapat bekerja dengan baik jika ketiga unsur (Hardware, Software, dan Brainware) ada dan saling terhubung. Jika tidak ada Software (sistem operasi/aplikasi), perangkat keras (Hardware) tidak memiliki instruksi untuk bekerja.',
  },
  {
    id: 7,
    type: 'pg',
    topic: '4 Fungsi Perangkat Keras',
    difficulty: 'Mudah',
    text: 'Perangkat keras komputer (hardware) dikelompokkan menjadi 4 fungsi utama dalam mengolah data. Keempat fungsi perangkat keras tersebut adalah...',
    options: [
      { id: 'A', text: 'Input, Proses, Storage, dan Output' },
      { id: 'B', text: 'Hardware, Software, Brainware, dan Internet' },
      { id: 'C', text: 'Mengetik, Menggambar, Bermain, dan Menyimpan' },
      { id: 'D', text: 'Monitor, Printer, Speaker, dan Proyektor' },
    ],
    correctAnswer: 'A',
    explanation:
      'Empat fungsi utama perangkat keras komputer adalah:\n1. Input (masukan data)\n2. Proses (pengolahan data)\n3. Storage (penyimpanan data)\n4. Output (keluaran hasil olahan).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Perangkat Keras Input',
    difficulty: 'Mudah',
    imageUrl: perangkatInputImg,
    imageCaption: 'Empat contoh perangkat keras komputer yang ditata dalam kotak.',
    text: 'Amatilah keempat perangkat keras pada gambar di atas (keyboard, mouse, mikrofon, dan scanner)! Berdasarkan fungsinya dalam sistem komputer, keempat perangkat tersebut termasuk dalam kelompok perangkat...',
    options: [
      { id: 'A', text: 'Perangkat Output (Keluaran)' },
      { id: 'B', text: 'Perangkat Storage (Penyimpanan)' },
      { id: 'C', text: 'Perangkat Proses (Pengolahan)' },
      { id: 'D', text: 'Perangkat Input (Masukan)' },
    ],
    correctAnswer: 'D',
    explanation:
      'Keyboard (memasukkan huruf/angka), Mouse (memasukkan perintah klik/gerakan kursor), Mikrofon (memasukkan suara), dan Scanner (memasukkan gambar/dokumen kertas ke bentuk digital) semuanya berfungsi memasukkan data ke komputer, sehingga disebut Perangkat Input.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Contoh & Fungsi Perangkat Input',
    difficulty: 'Sedang',
    text: 'Beni ingin menyalin gambar hasil lukisannya di kertas ke dalam komputer agar bisa diwarnai ulang menggunakan aplikasi Paint. Perangkat input yang paling tepat digunakan Beni untuk mengubah gambar di kertas menjadi data digital di komputer adalah...',
    options: [
      { id: 'A', text: 'Printer' },
      { id: 'B', text: 'Scanner' },
      { id: 'C', text: 'Speaker' },
      { id: 'D', text: 'Proyektor LCD' },
    ],
    correctAnswer: 'B',
    explanation:
      'Scanner (pemindai) berfungsi memindai dokumen atau gambar dari kertas untuk dimasukkan ke dalam komputer sebagai data digital. Printer kebalikannya (mencetak dari komputer ke kertas = Output).',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Perangkat Keras Proses',
    difficulty: 'Mudah',
    text: 'Perangkat keras yang dijuluki sebagai "otak komputer" karena bertugas melakukan perhitungan, mengendalikan alur data, dan memproses seluruh perintah dari pengguna adalah...',
    options: [
      { id: 'A', text: 'CPU (Central Processing Unit) / Prosesor' },
      { id: 'B', text: 'Flashdisk USB' },
      { id: 'C', text: 'Monitor LED' },
      { id: 'D', text: 'Mouse Optik' },
    ],
    correctAnswer: 'A',
    explanation:
      'CPU (Central Processing Unit) atau Prosesor adalah perangkat keras pemroses utama yang bertugas mengolah data dan menjalankan seluruh instruksi program sehingga sering disebut sebagai otak komputer.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Perangkat Proses dan Storage',
    difficulty: 'Sedang',
    imageUrl: perangkatProsesPenyimpananImg,
    imageCaption: 'Empat komponen internal dan penyimpanan komputer.',
    text: 'Perhatikan gambar empat komponen komputer di atas! Komponen pada kotak kiri bawah (SATA SSD) dan kotak kanan bawah (USB Flashdisk) memiliki kesamaan fungsi sebagai perangkat...',
    options: [
      { id: 'A', text: 'Input (memasukkan perintah ketikan)' },
      { id: 'B', text: 'Output (menampilkan suara dan gambar)' },
      { id: 'C', text: 'Storage (menyimpan data dan file secara permanen)' },
      { id: 'D', text: 'Brainware (mengendalikan sistem komputer)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada gambar: kiri atas adalah Prosesor/CPU (Perangkat Proses), kanan atas adalah RAM (memori kerja sementara saat proses), sedangkan kiri bawah (SATA SSD) dan kanan bawah (USB Flashdisk) adalah Perangkat Storage (media penyimpanan data permanen).',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Perangkat Keras Storage',
    difficulty: 'Sedang',
    text: 'Sinta mengetik cerita di komputer sekolah, lalu menyimpannya agar file cerita tersebut bisa dibawa pulang dan dibuka kembali di komputer rumahnya. Perangkat keras penyimpanan (storage) yang paling praktis dibawa Sinta di dalam tas sekolah adalah...',
    options: [
      { id: 'A', text: 'Flashdisk' },
      { id: 'B', text: 'Prosesor' },
      { id: 'C', text: 'Monitor' },
      { id: 'D', text: 'Mikrofon' },
    ],
    correctAnswer: 'A',
    explanation:
      'Flashdisk adalah media penyimpanan (storage) eksternal berukuran kecil dan ringan yang mudah dibawa berpindah-pindah dan dihubungkan melalui port USB.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Perbandingan Storage dan Memori',
    difficulty: 'Sukar',
    text: 'Saat Edo sedang membuka banyak aplikasi sekaligus di komputer, tiba-tiba aliran listrik padam sebelum ia menekan tombol "Save". Data dokumen yang sudah disimpan sebelumnya di SSD tetap aman, sedangkan pekerjaan yang belum disimpan hilang. Mengapa hal tersebut terjadi?',
    options: [
      { id: 'A', text: 'SSD menyimpan data secara permanen meskipun listrik mati, sedangkan RAM hanya menyimpan data sementara saat komputer menyala' },
      { id: 'B', text: 'Monitor menghapus semua file yang ada di dalam komputer ketika layar mati' },
      { id: 'C', text: 'Keyboard tidak mengirimkan huruf ke dalam prosesor sebelum komputer dimatikan' },
      { id: 'D', text: 'CPU hanya bekerja jika printer terhubung dengan kabel USB' },
    ],
    correctAnswer: 'A',
    explanation:
      'RAM bersifat sementara (volatile) sehingga isinya hilang saat listrik padam. Sebaliknya, SSD atau Hard Disk adalah perangkat Storage permanen (non-volatile) yang tetap menjaga file meskipun komputer dimatikan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Perangkat Keras Output',
    difficulty: 'Mudah',
    text: 'Fungsi utama perangkat keras Output pada sistem komputer adalah...',
    options: [
      { id: 'A', text: 'Mengirimkan huruf dan angka ke dalam CPU' },
      { id: 'B', text: 'Menyajikan atau menampilkan hasil pengolahan data kepada pengguna dalam bentuk gambar, tulisan, cetakan, atau suara' },
      { id: 'C', text: 'Menyimpan seluruh file foto dan video secara permanen di dalam komputer' },
      { id: 'D', text: 'Mengoperasikan aplikasi pengolah kata menggantikan manusia' },
    ],
    correctAnswer: 'B',
    explanation:
      'Perangkat Output (keluaran) bertugas menampilkan atau mengeluarkan hasil data yang sudah diproses oleh CPU agar dapat dilihat, dibaca, atau didengar oleh pengguna (brainware).',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Contoh Perangkat Output',
    difficulty: 'Mudah',
    imageUrl: perangkatOutputImg,
    imageCaption: 'Empat contoh perangkat keras keluaran pada sistem komputer.',
    text: 'Perhatikan gambar empat perangkat output di atas! Jika Bu Guru ingin menampilkan materi presentasi agar dapat dilihat bersama oleh seluruh siswa di dinding layar kelas yang besar, perangkat pada gambar yang paling tepat digunakan terletak pada posisi...',
    options: [
      { id: 'A', text: 'Kiri atas (Monitor)' },
      { id: 'B', text: 'Kanan atas (Printer)' },
      { id: 'C', text: 'Kiri bawah (Speaker)' },
      { id: 'D', text: 'Kanan bawah (Proyektor LCD)' },
    ],
    correctAnswer: 'D',
    explanation:
      'Proyektor LCD (kotak kanan bawah) adalah perangkat output yang memancarkan tampilan gambar/presentasi dari komputer ke layar lebar atau dinding agar dapat dilihat banyak orang sekaligus di dalam kelas.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Perbedaan Fungsi Perangkat Keras',
    difficulty: 'Sedang',
    text: 'Perhatikan daftar perangkat keras berikut:\n(1) Mouse\n(2) Speaker\n(3) Keyboard\n(4) Printer\n(5) Mikrofon\nManakah pasangan perangkat keras yang seluruhnya berfungsi sebagai perangkat OUTPUT?',
    options: [
      { id: 'A', text: '(1) dan (3)' },
      { id: 'B', text: '(2) dan (4)' },
      { id: 'C', text: '(3) dan (5)' },
      { id: 'D', text: '(1) dan (5)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Speaker (2) menghasilkan keluaran suara dan Printer (4) menghasilkan keluaran cetakan kertas, sehingga keduanya adalah perangkat Output.\nSedangkan Mouse (1), Keyboard (3), dan Mikrofon (5) adalah perangkat Input.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Cara Kerja Sistem Komputer',
    difficulty: 'Sukar',
    text: 'Rafa merekam suaranya membaca puisi dengan mikrofon, mengedit suaranya dengan aplikasi audio di komputer, menyimpannya ke hard disk, lalu memutar ulang suaranya agar terdengar seisi ruang kelas. Urutan perangkat keras yang berperan dalam kegiatan Rafa dari awal hingga akhir adalah...',
    options: [
      { id: 'A', text: 'Mikrofon (Input) → CPU (Proses) → Hard Disk (Storage) → Speaker (Output)' },
      { id: 'B', text: 'Speaker (Input) → Hard Disk (Proses) → CPU (Storage) → Mikrofon (Output)' },
      { id: 'C', text: 'Mikrofon (Output) → Printer (Proses) → RAM (Input) → Speaker (Storage)' },
      { id: 'D', text: 'Keyboard (Output) → CPU (Storage) → Flashdisk (Input) → Monitor (Proses)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Alur kerja komputer pada kasus Rafa:\n1. Mikrofon merekam suara ke komputer (Input).\n2. CPU memproses penyuntingan audio bersama aplikasi (Proses).\n3. Hard Disk menyimpan file audio secara permanen (Storage).\n4. Speaker memutar hasil suara untuk didengar (Output).',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Analisis Fungsi Perangkat Keras',
    difficulty: 'Sukar',
    text: 'Di meja komputer kelas terdapat: Keyboard, Mouse, CPU, Hard Disk, Monitor, dan Printer. Apabila komponen Printer rusak, kegiatan apakah yang tetap dapat berjalan normal di komputer tersebut?',
    options: [
      { id: 'A', text: 'Mengetik tugas, mengolahnya di CPU, melihat tampilan di monitor, dan menyimpan file ke hard disk' },
      { id: 'B', text: 'Mencetak tugas ke atas kertas berwarna putih secara langsung' },
      { id: 'C', text: 'Mengeluarkan suara musik keras tanpa memasang speaker' },
      { id: 'D', text: 'Memindai lembar jawaban kertas ke dalam bentuk gambar digital' },
    ],
    correctAnswer: 'A',
    explanation:
      'Printer hanya bertugas sebagai perangkat output cetak kertas. Jika printer rusak, perangkat input (keyboard, mouse), proses (CPU), storage (hard disk), dan output visual (monitor) tetap bekerja normal untuk mengetik, melihat layar, dan menyimpan file.',
  },

  // ==========================================
  // PILIHAN GANDA KOMPLEKS - 3 OPSI (3 SOAL)
  // ==========================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Bagian Utama Sistem Komputer',
    difficulty: 'Sedang',
    imageUrl: tigaKomponenImg,
    imageCaption: 'Tiga komponen utama pembentuk sistem komputer.',
    text: 'Berdasarkan gambar tiga komponen utama sistem komputer di atas, pilihlah DUA pernyataan yang BENAR mengenai kerja sama ketiganya!',
    options: [
      { id: 'A', text: 'Siswa pada gambar (Brainware) memberi perintah kepada komputer melalui perangkat keras dan perangkat lunak' },
      { id: 'B', text: 'Perangkat keras (kiri atas) dapat bekerja membuat gambar sendiri walaupun tanpa ada pengguna dan tanpa aplikasi' },
      { id: 'C', text: 'Perangkat lunak (kanan atas) berisi program dan sistem operasi yang menjembatani perintah pengguna ke perangkat keras' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Pernyataan A benar karena brainware (pengguna) memberikan instruksi pada komputer.\nPernyataan C benar karena software menjadi penghubung perintah pengguna kepada hardware.\nPernyataan B salah karena hardware tidak dapat menjalankan tugas secara mandiri tanpa software dan brainware.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Contoh Perangkat Keras Input',
    difficulty: 'Mudah',
    text: 'Dari ketiga perangkat keras di bawah ini, pilihlah seluruh perangkat yang berfungsi sebagai PERANGKAT INPUT (memasukkan data ke dalam komputer)!',
    options: [
      { id: 'A', text: 'Mikrofon (memasukkan data suara ke dalam komputer)' },
      { id: 'B', text: 'Proyektor LCD (memancarkan tampilan layar ke dinding kelas)' },
      { id: 'C', text: 'Keyboard (memasukkan karakter huruf, angka, dan simbol)' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Mikrofon (A) memasukkan data suara dan Keyboard (C) memasukkan data teks/perintah ke komputer, sehingga keduanya adalah Perangkat Input.\nProyektor LCD (B) termasuk Perangkat Output karena menampilkan hasil olahan ke luar.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Perangkat Proses dan Storage',
    difficulty: 'Sukar',
    text: 'Analisislah ketiga pernyataan berikut tentang fungsi perangkat Proses dan Storage pada komputer, lalu pilihlah seluruh pernyataan yang BENAR!',
    options: [
      { id: 'A', text: 'CPU bertindak sebagai pusat pengolahan seluruh instruksi perhitungan dan logika di dalam komputer' },
      { id: 'B', text: 'Hard Disk dan SSD termasuk perangkat Storage yang digunakan untuk menyimpan data secara permanen' },
      { id: 'C', text: 'Printer merupakan perangkat Storage utama yang menyimpan sistem operasi Windows di dalam komputer' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A benar: CPU adalah perangkat proses utama komputer.\nPernyataan B benar: Hard Disk dan SSD adalah perangkat storage permanen.\nPernyataan C salah: Printer adalah perangkat output cetak, bukan perangkat penyimpanan (storage).',
  },

  // ==========================================
  // PILIHAN GANDA KOMPLEKS KATEGORI - BENAR/SALAH (9 SOAL)
  // ==========================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Cara Kerja Sistem Komputer',
    difficulty: 'Sedang',
    imageUrl: diagramAlurImg,
    imageCaption: 'Alur kerja pengolahan data pada sistem komputer.',
    text: 'Amati diagram alur cara kerja sistem komputer pada gambar di atas! Tentukan nilai kebenaran (Benar atau Salah) untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Tahap awal cara kerja komputer dimulai dari perangkat Input (kiri) yang mengirimkan data ke CPU untuk diproses.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Panah dua arah antara CPU (tengah) dan Hard Disk/Flashdisk (bawah) menunjukkan data dapat disimpan maupun diambil kembali.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Monitor dan printer di sebelah kanan berfungsi sebagai perangkat Input sebelum data masuk ke CPU.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Siklus kerja selalu berawal dari Input menuju Proses (CPU).\nPernyataan 2 (Benar): CPU dapat menyimpan hasil olahan ke Storage dan membaca ulang data dari Storage (panah dua arah).\nPernyataan 3 (Salah): Monitor dan printer di sebelah kanan adalah perangkat Output (hasil akhir), bukan Input.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Identifikasi Hardware, Software, Brainware',
    difficulty: 'Mudah',
    text: 'Sebuah sekolah mengadakan lomba menggambar poster digital menggunakan komputer. Tentukan Benar atau Salah pengelompokan komponen sistem komputer di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Mouse dan layar monitor yang digunakan peserta lomba termasuk ke dalam komponen Hardware.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Aplikasi menggambar seperti Paint atau Canva yang dibuka peserta termasuk ke dalam komponen Software.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kabel listrik yang tersambung ke stopkontak merupakan komponen Brainware karena memberi tenaga pada komputer.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Mouse dan monitor berwujud fisik sehingga termasuk Hardware.\nPernyataan 2 (Benar): Aplikasi Paint/Canva adalah program digital sehingga termasuk Software.\nPernyataan 3 (Salah): Brainware adalah pengguna manusia, bukan kabel listrik.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Fungsi Software dalam Sistem Komputer',
    difficulty: 'Sedang',
    text: 'Tentukan apakah setiap pernyataan mengenai peran Software (perangkat lunak) dalam sistem komputer berikut bernilai Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Sistem operasi (seperti Windows atau macOS) termasuk jenis Software yang mengatur jalannya seluruh perangkat keras.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Software dapat dipegang secara fisik dan diletakkan di atas meja seperti mouse dan keyboard.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Aplikasi pemutar video, pengolah kata, dan game edukasi merupakan contoh perangkat lunak aplikasi.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Sistem operasi adalah software utama pengelola hardware dan aplikasi.\nPernyataan 2 (Salah): Software berbentuk program digital tak kasat mata secara fisik, tidak bisa dipegang tangan.\nPernyataan 3 (Benar): Pemutar video, pengolah kata, dan game adalah software aplikasi.',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Fungsi & Contoh Perangkat Input',
    difficulty: 'Sedang',
    text: 'Evaluasilah kebenaran fungsi beberapa perangkat keras Input berikut ini dengan memilih Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Mouse digunakan untuk menggerakkan penunjuk (kursor), memilih ikon, serta melakukan klik pada layar komputer.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Webcam berfungsi menangkap gambar wajah atau video pengguna untuk dimasukkan ke dalam komputer saat panggilan video.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Speaker berfungsi memasukkan suara musik dari luar ruangan ke dalam memori komputer.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Mouse adalah perangkat penunjuk (pointing device) untuk menginput klik dan gerakan kursor.\nPernyataan 2 (Benar): Webcam adalah perangkat input visual/video.\nPernyataan 3 (Salah): Speaker adalah perangkat Output yang mengeluarkan suara dari komputer, bukan memasukkan suara.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Identifikasi Gambar Perangkat Input',
    difficulty: 'Mudah',
    imageUrl: perangkatInputImg,
    imageCaption: 'Empat jenis perangkat input komputer.',
    text: 'Perhatikan keempat perangkat keras pada gambar di atas! Tentukan apakah pernyataan mengenai perangkat pada gambar tersebut Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Perangkat di kotak kiri atas adalah Keyboard yang berfungsi memasukkan huruf, angka, dan tanda baca.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Perangkat di kotak kiri bawah adalah Mikrofon yang berfungsi mengeluarkan suara musik dengan volume keras.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Perangkat di kotak kanan bawah adalah Scanner yang berfungsi memindai dokumen kertas menjadi file gambar digital.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Kiri atas adalah keyboard untuk mengetik input teks/angka.\nPernyataan 2 (Salah): Kiri bawah adalah mikrofon untuk merekam/memasukkan suara (Input), bukan mengeluarkan suara.\nPernyataan 3 (Benar): Kanan bawah adalah scanner flatbed untuk memindai kertas ke bentuk digital.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Perangkat Keras Proses & Storage',
    difficulty: 'Sedang',
    imageUrl: perangkatProsesPenyimpananImg,
    imageCaption: 'Komponen Proses (CPU, RAM) dan Storage (SSD, Flashdisk).',
    text: 'Perhatikan gambar empat komponen proses dan penyimpanan di atas! Tentukan Benar atau Salah setiap pernyataan di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Komponen di kotak kiri atas adalah prosesor (CPU) yang bertugas mengolah data dan menjalankan perintah program.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Komponen di kotak kanan atas adalah RAM yang berfungsi sebagai tempat penyimpanan data sementara saat program sedang berjalan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Komponen di kotak kiri bawah (SATA SSD) berfungsi sebagai perangkat output untuk mencetak gambar berwarna.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Kiri atas adalah CPU/Prosesor sebagai otak pemroses komputer.\nPernyataan 2 (Benar): Kanan atas adalah modul memori RAM untuk penyimpanan sementara saat proses.\nPernyataan 3 (Salah): Kiri bawah adalah SATA SSD yang berfungsi sebagai media penyimpanan data permanen (Storage).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Perangkat Storage (Penyimpanan)',
    difficulty: 'Sukar',
    text: 'Siswa kelas 4 belajar membedakan berbagai media penyimpanan data (Storage). Tentukan Benar atau Salah setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Hard Disk Drive (HDD) dan Solid State Drive (SSD) menyimpan sistem operasi, aplikasi, serta dokumen pengguna secara permanen.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kartu memori (SD Card) dan USB Flashdisk termasuk media penyimpanan eksternal yang dapat dilepas dan dipindahkan ke komputer lain.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Semua file yang disimpan ke dalam Flashdisk akan langsung terhapus otomatis setiap kali Flashdisk dicabut dari laptop.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): HDD/SSD adalah penyimpanan permanen utama di dalam komputer.\nPernyataan 2 (Benar): SD Card dan Flashdisk adalah perangkat storage portabel yang mudah dipindahkan.\nPernyataan 3 (Salah): Flashdisk bersifat non-volatile (permanen), sehingga file tetap tersimpan saat dicabut.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Perangkat Keras Output',
    difficulty: 'Mudah',
    imageUrl: perangkatOutputImg,
    imageCaption: 'Empat jenis perangkat output komputer.',
    text: 'Perhatikan gambar empat perangkat output di atas! Tentukan Benar atau Salah mengenai jenis keluaran yang dihasilkan masing-masing perangkat!',
    statements: [
      {
        id: 's1',
        text: 'Monitor (kiri atas) menampilkan keluaran berupa gambar, teks, dan video secara visual di layar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Printer (kanan atas) menghasilkan keluaran berupa salinan fisik dokumen atau gambar di atas kertas (hardcopy).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Speaker (kiri bawah) menghasilkan keluaran berupa dokumen cetak agar bisa dibaca tanpa menyalakan layar.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Monitor menghasilkan output visual di layar.\nPernyataan 2 (Benar): Printer mencetak hasil olahan komputer ke atas kertas.\nPernyataan 3 (Salah): Speaker menghasilkan output berupa suara/audio, bukan dokumen cetak.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Studi Kasus Cara Kerja Sistem Komputer',
    difficulty: 'Sukar',
    text: 'Dalam praktik Informatika, siswa diminta membuat kartu ucapan ulang tahun digital, menyimpannya ke folder komputer, lalu mencetaknya untuk ditempel di mading kelas. Tentukan Benar atau Salah pernyataan analisis sistem komputer berikut!',
    statements: [
      {
        id: 's1',
        text: 'Kegiatan mengetik ucapan dan memilih warna dengan mouse termasuk tahap Input pada sistem komputer.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Saat siswa menekan tombol Simpan (Save), data kartu ucapan disimpan oleh perangkat Storage seperti SSD atau Hard Disk.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tahap pencetakan kartu ucapan ke kertas melalui Printer merupakan contoh proses kerja perangkat Input.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 (Benar): Mengetik dengan keyboard dan klik mouse adalah tahap Input.\nPernyataan 2 (Benar): Menyimpan file ke folder memanfaatkan perangkat Storage (SSD/HDD).\nPernyataan 3 (Salah): Mencetak hasil karya ke kertas melalui Printer merupakan tahap Output, bukan Input.',
  },
];
