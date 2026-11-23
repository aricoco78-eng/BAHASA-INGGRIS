import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Bahasa Inggris
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Bahasa Inggris (25 PG, 5 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik memahami bentuk positif Simple Past Tense dengan kata kerja bentuk kedua (Verb 2).',
    indikatorSoal:
      'Disajikan kalimat rumpang berpenanda waktu lampau (Last Sunday), peserta didik dapat melengkapi dengan bentuk kata kerja lampau irregular (went) secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik memahami struktur kalimat negatif pada Simple Past Tense (did not + Verb 1).',
    indikatorSoal:
      'Disajikan kalimat rumpang bentuk negatif berpenanda waktu yesterday/last night, peserta didik dapat menentukan frasa did not watch dengan tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu mengubah kalimat positif Simple Past Tense menjadi bentuk negatif yang benar.',
    indikatorSoal:
      'Disajikan satu kalimat positif Simple Past Tense, peserta didik dapat memilih bentuk kalimat negatif yang benar (did not + V1).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik menggunakan Simple Past Tense dalam kalimat verbal untuk menceritakan aktivitas lampau.',
    indikatorSoal:
      'Disajikan gambar ilustrasi anak laki-laki bermain sepak bola di lapangan, peserta didik dapat menentukan kalimat verbal lampau yang sesuai gambar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menerapkan kata kerja beraturan (regular verb) dalam kalimat verbal Simple Past Tense.',
    indikatorSoal:
      'Disajikan kalimat rumpang mengenai aktivitas ibu di dapur pada pagi hari (this morning), peserta didik dapat memilih kata kerja lampau cooked.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menerapkan kata kerja tidak beraturan (irregular verb) dalam kalimat verbal Simple Past Tense.',
    indikatorSoal:
      'Disajikan kalimat rumpang aktivitas minum setelah berlari kemarin sore, peserta didik dapat memilih bentuk lampau drank dengan tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik menganalisis ketepatan tata bahasa kalimat verbal Simple Past Tense.',
    indikatorSoal:
      'Disajikan empat pilihan kalimat bahasa Inggris berpenanda waktu lampau, peserta didik dapat mengidentifikasi kalimat verbal Simple Past Tense yang tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik menggunakan to be lampau (was/were) untuk menyatakan keberadaan atau aktivitas lampau.',
    indikatorSoal:
      'Disajikan gambar dua siswa mengunjungi kebun binatang, peserta didik dapat melengkapi kalimat dengan to be were sesuai subjek jamak.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menggunakan was sesuai subjek tunggal (I/He/She/It) untuk menyatakan keberadaan lampau.',
    indikatorSoal:
      'Disajikan kalimat rumpang bersubjek "I" dengan keterangan waktu an hour ago, peserta didik dapat menentukan penggunaan was.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menggunakan bentuk negatif was not / were not dalam konteks aktivitas dan lokasi lampau.',
    indikatorSoal:
      'Disajikan kalimat kontras lokasi siswa kemarin saat jam istirahat, peserta didik dapat melengkapi dengan bentuk negatif were not.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi kalimat yang menggunakan was dan were secara tepat.',
    indikatorSoal:
      'Disajikan empat kalimat dengan kombinasi subjek dan was/were, peserta didik dapat mengidentifikasi satu kalimat yang benar secara tata bahasa.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik membedakan penggunaan were pada kalimat nominal lampau dengan kalimat verbal.',
    indikatorSoal:
      'Disajikan empat kalimat menggunakan kata were, peserta didik dapat mengidentifikasi penggunaan were yang tepat sesuai subjek dan predikat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi ketepatan struktur kalimat nominal menggunakan was/were.',
    indikatorSoal:
      'Disajikan empat variasi kalimat negatif dan positif dengan was/were, peserta didik dapat memilih kalimat yang benar secara gramatikal.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik menggunakan was/were yang berkaitan dengan ungkapan perasaan (feelings) di masa lampau.',
    indikatorSoal:
      'Disajikan gambar anak perempuan tersenyum gembira membawa kado ulang tahun, peserta didik dapat menentukan pasangan was dan kata sifat happy.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menerapkan was/were sesuai subjek jamak untuk menyatakan perasaan masa lampau.',
    indikatorSoal:
      'Disajikan kalimat tentang perasaan anak-anak setelah memenangkan lomba minggu lalu, peserta didik dapat melengkapi dengan were.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik menghubungkan konteks kejadian lampau dengan ungkapan perasaan menggunakan was/were.',
    indikatorSoal:
      'Disajikan situasi berjalan sendirian di jalan gelap malam hari, peserta didik dapat memilih kombinasi was dan kata sifat scared.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menyusun atau memilih kalimat menggunakan was/were terkait perasaan dan kondisi fisik.',
    indikatorSoal:
      'Disajikan gambar anak laki-laki terbaring sakit di tempat tidur, peserta didik dapat memilih kalimat yang tepat mendeskripsikan keadaannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu membuat kalimat utuh menggunakan was/were terkait perasaan dari kata acak.',
    indikatorSoal:
      'Disajikan enam kata acak bertema perasaan mengantuk (sleepy), peserta didik dapat menyusunnya menjadi kalimat bahasa Inggris yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menyusun kalimat perasaan menggunakan was/were berdasarkan situasi kontekstual.',
    indikatorSoal:
      'Disajikan situasi siswa kehilangan kotak pensil kesayangan kemarin, peserta didik dapat memilih kalimat ekspresi perasaan sedih dengan was.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Menyimak - Berbicara',
    tujuanPembelajaran:
      'Peserta didik menggunakan kata tanya WH-Question yang tepat untuk menanyakan aktivitas lampau.',
    indikatorSoal:
      'Disajikan dialog singkat dengan jawaban berupa nama tempat liburan, peserta didik dapat menentukan kata tanya Where.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik membuat kalimat tanya WH-Question Simple Past Tense dengan pola yang benar.',
    indikatorSoal:
      'Disajikan empat pilihan pertanyaan lampau, peserta didik dapat mengidentifikasi struktur WH-question yang benar (What did you do last night?).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Menyimak - Berbicara',
    tujuanPembelajaran:
      'Peserta didik menjawab pertanyaan WH-Question tentang aktivitas lampau sesuai kata tanya yang digunakan.',
    indikatorSoal:
      'Disajikan pertanyaan guru menggunakan kata tanya When di masa lampau, peserta didik dapat memilih jawaban yang memuat keterangan waktu lampau.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Menyimak - Berbicara',
    tujuanPembelajaran:
      'Peserta didik mampu berbicara dan merespons dialog tentang aktivitas masa lampau (past activities).',
    indikatorSoal:
      'Disajikan dialog tanya jawab tentang kegiatan hari Minggu lalu, peserta didik dapat memilih respons yang menggunakan kalimat lampau secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik memahami informasi rinci dalam teks pendek bertema aktivitas masa lampau.',
    indikatorSoal:
      'Disajikan paragraf pendek kegiatan Kevin pada hari Sabtu lalu, peserta didik dapat menentukan kegiatan yang dilakukan pada sore hari.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik melengkapi cerita pendek tentang aktivitas masa lampau menggunakan kata kerja lampau yang tepat.',
    indikatorSoal:
      'Disajikan dua bagian rumpang pada cerita pengalaman kemarin pagi, peserta didik dapat melengkapinya dengan pasangan irregular verb had dan went.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi kaidah kalimat positif dan negatif dalam Simple Past Tense.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai aturan kalimat positif dan negatif Simple Past Tense, peserta didik dapat menentukan nilai Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik membedakan penggunaan was dan were berdasarkan subjek pada aktivitas lampau.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang pasangan subjek dan contoh kalimat was/were, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik menilai ketepatan kalimat ungkapan perasaan lampau menggunakan was/were.',
    indikatorSoal:
      'Disajikan tiga kalimat ungkapan perasaan (happy, hungry, nervous) menggunakan was/were, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Menulis - Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik menganalisis struktur pembuatan serta kesesuaian jawaban WH-Question Simple Past Tense.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai pola WH-Question lampau dan cara menjawabnya, peserta didik dapat menentukan Benar/Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Membaca - Memirsa',
    tujuanPembelajaran:
      'Peserta didik memahami informasi gambar dan teks recount pendek tentang aktivitas keluarga di masa lampau.',
    indikatorSoal:
      'Disajikan gambar realistis keluarga memasak bersama di dapur beserta cerita singkat dan tiga pernyataan, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L2',
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
      : `Peserta didik mampu menerapkan konsep ${q.topic} dalam berkomunikasi menggunakan Bahasa Inggris.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

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
  if (t.includes('wh-question') || t.includes('talk')) {
    return 'Menyimak - Berbicara';
  }
  if (t.includes('make') || t.includes('positive')) {
    return 'Menulis - Mempresentasikan';
  }
  return 'Membaca - Memirsa';
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

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
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

  const allTypes = [
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

  const typeDistribution = allTypes.filter((t) => t.count > 0);

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
