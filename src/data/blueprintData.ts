import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Kelas 4 Mata Pelajaran Informatika (Sistem Komputer)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Informatika (Sistem Komputer)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Komponen Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi tiga bagian utama pembentuk sistem komputer (Hardware, Software, dan Brainware).',
    indikatorSoal:
      'Disajikan gambar tiga kelompok komponen sistem komputer, peserta didik dapat menentukan nama ketiga bagian utama tersebut secara berurutan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Komponen Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian perangkat keras (Hardware) beserta ciri fisiknya.',
    indikatorSoal:
      'Disajikan deskripsi ciri-ciri komponen komputer yang berbentuk fisik, dapat dilihat, dan disentuh, peserta didik dapat menentukan istilah yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Komponen Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh perangkat lunak (Software) dalam kegiatan belajar sehari-hari.',
    indikatorSoal:
      'Disajikan ilustrasi siswa yang menggunakan pengolah kata dan sistem operasi Windows, peserta didik dapat mengelompokkan keduanya ke dalam komponen Software.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Komponen Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peran Brainware sebagai pengguna dalam sistem komputer.',
    indikatorSoal:
      'Disajikan situasi pembelajaran di laboratorium komputer, peserta didik dapat menentukan peran manusia yang mengoperasikan komputer sebagai Brainware.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Cara Kerja Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan alur cara kerja sistem komputer (Input - Proses - Output) beserta hubungannya dengan penyimpanan.',
    indikatorSoal:
      'Disajikan gambar diagram alur kerja komputer, peserta didik dapat mengurutkan tahapan kerja sistem komputer dari kiri ke kanan secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Cara Kerja Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan kerja sama antara Hardware, Software, dan Brainware agar komputer dapat berfungsi.',
    indikatorSoal:
      'Disajikan kasus komputer yang lengkap secara fisik namun belum memiliki sistem operasi atau aplikasi, peserta didik dapat menyimpulkan dampaknya terhadap pengoperasian komputer.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: '4 Fungsi Perangkat Keras',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan empat fungsi utama perangkat keras komputer (Input, Proses, Storage, Output).',
    indikatorSoal:
      'Disajikan pernyataan tentang pengelompokan fungsi perangkat keras komputer, peserta didik dapat memilih keempat kategori fungsi utama secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Perangkat Keras Input',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi kelompok perangkat keras Input beserta contoh perangkatnya.',
    indikatorSoal:
      'Disajikan gambar empat perangkat keras (keyboard, mouse, mikrofon, scanner), peserta didik dapat menentukan kelompok fungsi keempat perangkat tersebut sebagai perangkat Input.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Perangkat Keras Input',
    tujuanPembelajaran:
      'Peserta didik dapat memilih contoh perangkat Input yang sesuai dengan kebutuhan tugas tertentu.',
    indikatorSoal:
      'Disajikan kasus siswa yang ingin menyalin gambar kertas ke dalam komputer secara digital, peserta didik dapat memilih perangkat input Scanner dengan tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Perangkat Keras Proses & Storage',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi utama CPU/Prosesor sebagai perangkat pemroses ("otak komputer").',
    indikatorSoal:
      'Disajikan deskripsi peran pengolah instruksi dan perhitungan utama komputer, peserta didik dapat menentukan nama perangkat keras CPU/Prosesor.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Perangkat Keras Proses & Storage',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan perangkat Proses dan perangkat Storage melalui identifikasi komponen fisik.',
    indikatorSoal:
      'Disajikan gambar empat komponen internal dan penyimpanan (CPU, RAM, SSD, Flashdisk), peserta didik dapat menentukan kesamaan fungsi komponen SSD dan Flashdisk sebagai perangkat Storage.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Perangkat Keras Proses & Storage',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan contoh perangkat penyimpanan (Storage) portabel yang sesuai untuk memindahkan file.',
    indikatorSoal:
      'Disajikan cerita siswa yang ingin membawa file tugas dari sekolah ke rumah, peserta didik dapat memilih perangkat penyimpanan eksternal yang tepat (Flashdisk).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Perangkat Keras Proses & Storage',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perbedaan sifat penyimpanan permanen (SSD/HDD) dengan memori sementara (RAM).',
    indikatorSoal:
      'Disajikan kasus padamnya listrik saat mengetik sebelum menekan tombol Save, peserta didik dapat menganalisis alasan data di SSD aman sedangkan di RAM hilang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Perangkat Keras Output',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi utama perangkat keras Output pada sistem komputer.',
    indikatorSoal:
      'Disajikan pertanyaan mengenai fungsi perangkat keluaran, peserta didik dapat memilih penjelasan yang tepat mengenai penyajian hasil olahan data.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Perangkat Keras Output',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh perangkat keras Output yang sesuai dengan konteks penggunaan di kelas.',
    indikatorSoal:
      'Disajikan gambar empat perangkat output (monitor, printer, speaker, proyektor LCD), peserta didik dapat memilih perangkat Proyektor LCD untuk menampilkan presentasi ke layar lebar kelas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Perangkat Keras Output',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan perangkat Output dan perangkat Input dari daftar perangkat keras campuran.',
    indikatorSoal:
      'Disajikan lima nama perangkat keras campuran, peserta didik dapat mengelompokkan pasangan perangkat yang seluruhnya berfungsi sebagai perangkat Output.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Cara Kerja Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis urutan perangkat Input, Proses, Storage, dan Output dalam aktivitas nyata.',
    indikatorSoal:
      'Disajikan kasus siswa yang merekam, menyunting, menyimpan, dan memutar ulang suara puisi, peserta didik dapat mengurutkan perangkat keras sesuai fungsinya secara runtut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Cara Kerja Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi dampak kerusakan salah satu perangkat Output terhadap fungsi bagian sistem komputer lainnya.',
    indikatorSoal:
      'Disajikan daftar perangkat komputer dengan kondisi Printer rusak, peserta didik dapat menyimpulkan aktivitas komputasi yang masih dapat berjalan normal.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Komponen Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan peran Hardware, Software, dan Brainware melalui pilihan ganda kompleks.',
    indikatorSoal:
      'Disajikan gambar tiga komponen utama sistem komputer dan 3 pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang hubungan ketiganya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Perangkat Keras Input',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi beberapa contoh perangkat keras Input melalui pilihan ganda kompleks.',
    indikatorSoal:
      'Disajikan tiga opsi perangkat keras beserta fungsinya, peserta didik dapat memilih seluruh perangkat yang termasuk perangkat Input.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Perangkat Keras Proses & Storage',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebenaran fungsi perangkat Proses dan Storage melalui pilihan ganda kompleks.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang CPU, Hard Disk/SSD, dan Printer, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Cara Kerja Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi alur Input, Proses, Storage dua arah, dan Output pada diagram kerja komputer.',
    indikatorSoal:
      'Disajikan gambar diagram alur cara kerja sistem komputer, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) pada 3 pernyataan alur data.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Komponen Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan objek nyata di ruang komputer ke dalam kelompok Hardware, Software, atau Brainware.',
    indikatorSoal:
      'Disajikan konteks lomba menggambar poster digital, peserta didik dapat menentukan Benar/Salah pada 3 pernyataan klasifikasi komponen sistem komputer.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Komponen Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan karakteristik dan jenis-jenis Software (sistem operasi dan aplikasi).',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai sifat dan contoh Software, peserta didik dapat menilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Perangkat Keras Input',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi fungsi berbagai perangkat keras Input dan membedakannya dengan perangkat Output.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang fungsi Mouse, Webcam, dan Speaker, peserta didik dapat menentukan Benar/Salah pada tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Perangkat Keras Input',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi fungsi perangkat Input secara spesifik berdasarkan gambar perangkat.',
    indikatorSoal:
      'Disajikan gambar empat perangkat input (keyboard, mouse, mikrofon, scanner), peserta didik dapat menentukan Benar/Salah pada 3 deskripsi fungsi perangkat tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Perangkat Keras Proses & Storage',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi fungsi CPU, RAM, dan SSD berdasarkan gambar komponen komputer.',
    indikatorSoal:
      'Disajikan gambar empat komponen proses dan storage, peserta didik dapat menilai Benar/Salah pada 3 pernyataan fungsi komponen CPU, RAM, dan SATA SSD.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Perangkat Keras Proses & Storage',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis sifat permanen dan portabilitas berbagai perangkat penyimpanan (Storage).',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang HDD/SSD, SD Card/Flashdisk, dan sifat ketahanan data, peserta didik dapat menentukan Benar/Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Perangkat Keras Output',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi jenis keluaran dari berbagai perangkat Output berdasarkan gambar.',
    indikatorSoal:
      'Disajikan gambar empat perangkat output (monitor, printer, speaker, proyektor), peserta didik dapat menentukan Benar/Salah pada 3 pernyataan jenis keluaran perangkat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Cara Kerja Sistem Komputer',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penerapan siklus Input, Proses, Storage, dan Output dalam proyek pembuatan karya digital.',
    indikatorSoal:
      'Disajikan studi kasus pembuatan kartu ucapan digital hingga dicetak, peserta didik dapat menentukan Benar/Salah pada 3 pernyataan tahapan kerja komputer.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan materi ${q.topic} pada sistem komputer.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('input')) {
    return 'Perangkat Keras Input';
  }
  if (t.includes('output')) {
    return 'Perangkat Keras Output';
  }
  if (t.includes('proses') || t.includes('storage') || t.includes('penyimpanan') || t.includes('memori')) {
    return 'Perangkat Keras Proses & Storage';
  }
  if (t.includes('cara kerja') || t.includes('studi kasus')) {
    return 'Cara Kerja Sistem Komputer';
  }
  if (t.includes('fungsi perangkat keras')) {
    return '4 Fungsi Perangkat Keras';
  }
  return 'Komponen Sistem Komputer';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
