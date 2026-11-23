import { Question } from '../types';
import pastSoccerImg from '../assets/images/past_soccer_activity_1795415672673.jpg';
import happyGirlImg from '../assets/images/happy_birthday_girl_1795415671801.jpg';
import zooVisitImg from '../assets/images/zoo_visit_kids_1795415672624.jpg';
import sickBoyImg from '../assets/images/sick_boy_resting_1795415672848.jpg';
import familyCookingImg from '../assets/images/family_cooking_kitchen_1795415672498.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN A: PILIHAN GANDA (25 SOAL)
  // ============================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Simple Past Tense (Positive & Negative Forms)',
    difficulty: 'Mudah',
    text: 'Choose the correct verb to complete the sentence!\n"Last Sunday, Rani and her family ___ to Bali Safari Park."',
    options: [
      { id: 'A', text: 'went' },
      { id: 'B', text: 'go' },
      { id: 'C', text: 'goes' },
      { id: 'D', text: 'going' },
    ],
    correctAnswer: 'A',
    explanation:
      'Keterangan waktu "Last Sunday" menunjukkan kejadian di masa lampau (Simple Past Tense). Bentuk kata kerja kedua (Verb 2) dari "go" adalah "went".',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Simple Past Tense (Positive & Negative Forms)',
    difficulty: 'Sedang',
    text: 'Complete the negative Simple Past Tense sentence below!\n"Bima was very tired yesterday, so he ___ television last night."',
    options: [
      { id: 'A', text: 'did not watched' },
      { id: 'B', text: 'did not watch' },
      { id: 'C', text: 'does not watch' },
      { id: 'D', text: 'was not watch' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada kalimat negatif Simple Past Tense verbal, polanya adalah: Subject + did not + Verb 1 (kata kerja dasar). Jadi jawaban yang benar adalah "did not watch" (tanpa -ed).',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Simple Past Tense (Positive & Negative Forms)',
    difficulty: 'Sedang',
    text: 'Change this positive sentence into the correct negative form!\n"Sinta visited her grandmother two days ago."',
    options: [
      { id: 'A', text: 'Sinta did not visited her grandmother two days ago.' },
      { id: 'B', text: 'Sinta does not visit her grandmother two days ago.' },
      { id: 'C', text: 'Sinta did not visit her grandmother two days ago.' },
      { id: 'D', text: 'Sinta was not visit her grandmother two days ago.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Saat mengubah kalimat positif "Sinta visited..." menjadi kalimat negatif lampau, gunakan "did not" dan kembalikan kata kerja "visited" (V2) ke bentuk dasar "visit" (V1).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Use Simple Past Tense in Verbal Sentence',
    difficulty: 'Mudah',
    imageUrl: pastSoccerImg,
    imageCaption: 'Andi playing soccer on the green field yesterday afternoon.',
    text: 'Look at the picture! What did Andi do on the school field yesterday afternoon?',
    options: [
      { id: 'A', text: 'He played soccer with his friends.' },
      { id: 'B', text: 'He plays soccer every morning.' },
      { id: 'C', text: 'He is swimming in the pool.' },
      { id: 'D', text: 'He did not go to the field.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gambar menunjukkan anak laki-laki sedang bermain sepak bola. Karena pertanyaan menanyakan kegiatan lampau ("What did Andi do... yesterday afternoon?"), maka jawaban yang tepat menggunakan Verb 2: "He played soccer with his friends."',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Use Simple Past Tense in Verbal Sentence',
    difficulty: 'Sedang',
    text: 'Complete the verbal sentence in Simple Past Tense!\n"Mother ___ delicious fried rice in the kitchen this morning."',
    options: [
      { id: 'A', text: 'cook' },
      { id: 'B', text: 'cooks' },
      { id: 'C', text: 'cooked' },
      { id: 'D', text: 'cooking' },
    ],
    correctAnswer: 'C',
    explanation:
      'Penanda waktu "this morning" (tadi pagi) menunjukkan kegiatan sudah selesai di masa lampau. Kata kerja beraturan (regular verb) bentuk V2 dari "cook" adalah "cooked".',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Use Simple Past Tense in Verbal Sentence',
    difficulty: 'Sedang',
    text: 'Choose the right irregular verb for the sentence!\n"Yesterday afternoon, Edo ___ a glass of cold orange juice after running."',
    options: [
      { id: 'A', text: 'drink' },
      { id: 'B', text: 'drinks' },
      { id: 'C', text: 'drank' },
      { id: 'D', text: 'drinking' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kata kerja "drink" termasuk kata kerja tidak beraturan (irregular verb): drink (V1) → drank (V2) → drunk (V3). Untuk Simple Past Tense kita menggunakan V2 yaitu "drank".',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Use Simple Past Tense in Verbal Sentence',
    difficulty: 'Sukar',
    text: 'Read the four sentences carefully. Which verbal sentence uses the Simple Past Tense CORRECTLY?',
    options: [
      { id: 'A', text: 'Dina studied English and wrote a short story last night.' },
      { id: 'B', text: 'Dina study English and writes a short story last night.' },
      { id: 'C', text: 'Dina studying English and wrote a short story last night.' },
      { id: 'D', text: 'Dina did studied English and write a short story last night.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada opsi A, kedua kata kerja lampau sudah tepat menggunakan Verb 2: "studied" (dari study) dan "wrote" (dari write) sesuai keterangan waktu "last night".',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Use Was/Were for Past Activities',
    difficulty: 'Mudah',
    imageUrl: zooVisitImg,
    imageCaption: 'Made and Putu visiting the elephants at the zoo last Sunday.',
    text: 'Look at the picture! Complete the sentence with "was" or "were".\n"Last Sunday, Made and Putu ___ at the zoo looking at friendly elephants."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'are' },
    ],
    correctAnswer: 'B',
    explanation:
      'Subjek kalimat adalah "Made and Putu" (dua orang / jamak, setara dengan "they"). Untuk subjek jamak di masa lampau, to be yang digunakan adalah "were".',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Use Was/Were for Past Activities',
    difficulty: 'Sedang',
    text: 'Choose the correct to be (past) for the sentence below!\n"I ___ in the school library with my English teacher an hour ago."',
    options: [
      { id: 'A', text: 'am' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'was' },
      { id: 'D', text: 'are' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk subjek tunggal "I" pada masa lampau ("an hour ago"), bentuk past to be yang tepat adalah "was".',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Use Was/Were for Past Activities',
    difficulty: 'Sedang',
    text: 'Complete the sentence about past location!\n"The students ___ in the classroom during the break yesterday; they were in the school canteen."',
    options: [
      { id: 'A', text: 'was not' },
      { id: 'B', text: 'were not' },
      { id: 'C', text: 'did not' },
      { id: 'D', text: 'are not' },
    ],
    correctAnswer: 'B',
    explanation:
      'Subjek "The students" berbentuk jamak (lebih dari satu siswa) dan kalimat tidak memiliki kata kerja aksi (menjelaskan tempat "in the classroom"), sehingga bentuk negatif lampaunya adalah "were not".',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Identify Sentence Using Was/Were',
    difficulty: 'Mudah',
    text: 'Identify the sentence that uses "was" or "were" CORRECTLY!',
    options: [
      { id: 'A', text: 'My uncle was a brave firefighter ten years ago.' },
      { id: 'B', text: 'My uncle were a brave firefighter ten years ago.' },
      { id: 'C', text: 'They was at the beach yesterday afternoon.' },
      { id: 'D', text: 'You was my classmate in Grade 5.' },
    ],
    correctAnswer: 'A',
    explanation:
      '"My uncle" adalah subjek tunggal (he), sehingga pasangan yang benar adalah "was". Opsi B salah karena "my uncle" tunggal, sedangkan opsi C dan D salah karena "they" dan "you" harus memakai "were".',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Identify Sentence Using Was/Were',
    difficulty: 'Sedang',
    text: 'Which of the following sentences correctly uses "were"?',
    options: [
      { id: 'A', text: 'Dewi were at the traditional market yesterday morning.' },
      { id: 'B', text: 'Dewi and Sari were at the traditional market yesterday morning.' },
      { id: 'C', text: 'They were played badminton in the yard last week.' },
      { id: 'D', text: 'He were very busy with his homework last night.' },
    ],
    correctAnswer: 'B',
    explanation:
      '"Dewi and Sari" adalah subjek jamak (they), sehingga tepat memakai "were" sebelum keterangan tempat. Opsi C salah karena "were" tidak boleh langsung diikuti Verb 2 ("played") pada kalimat aktif Simple Past.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Identify Sentence Using Was/Were',
    difficulty: 'Sukar',
    text: 'Read the sentences carefully. Which sentence is GRAMMATICALLY CORRECT?',
    options: [
      { id: 'A', text: 'We was not late for the English class yesterday.' },
      { id: 'B', text: 'She were in Denpasar with her aunt last month.' },
      { id: 'C', text: 'They were go to school by bus yesterday morning.' },
      { id: 'D', text: 'We were not late for the English class yesterday.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Subjek "We" berpasangan dengan "were" dan kata sifat "late" (terlambat). Opsi C salah karena "were" tidak dipasangkan dengan kata kerja dasar "go" (harusnya "They went to school...").',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Use Was/Were in Relation to Feelings',
    difficulty: 'Mudah',
    imageUrl: happyGirlImg,
    imageCaption: 'Lani smiling brightly with balloons and a gift box on her birthday.',
    text: 'Look at the picture! Yesterday was Lani’s birthday. She got a nice gift and colorful balloons. How did she feel?\n"Lani ___ very ___ yesterday."',
    options: [
      { id: 'A', text: 'was / happy' },
      { id: 'B', text: 'were / happy' },
      { id: 'C', text: 'was / sad' },
      { id: 'D', text: 'were / angry' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada gambar, Lani tersenyum gembira (happy) saat menerima kado ulang tahun. Karena "Lani" subjek tunggal (she), gunakan "was" + kata sifat perasaan "happy".',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Use Was/Were in Relation to Feelings',
    difficulty: 'Sedang',
    text: 'Complete the sentence with the right to be (past)!\n"After winning the English storytelling competition last week, the children ___ very excited and proud."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'did' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata benda jamak "the children" (anak-anak) menggunakan "were" pada Simple Past Tense untuk menyatakan perasaan "excited and proud" (sangat bersemangat dan bangga).',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Use Was/Were in Relation to Feelings',
    difficulty: 'Sedang',
    text: 'Read the situation and complete the feeling!\n"Rudi walked alone on a very dark street last night without a flashlight. He ___ very ___."',
    options: [
      { id: 'A', text: 'were / sleepy' },
      { id: 'B', text: 'was / scared' },
      { id: 'C', text: 'was / thirsty' },
      { id: 'D', text: 'were / hungry' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berjalan sendirian di jalan yang gelap membuat seseorang merasa takut ("scared"). Subjek "He" memakai "was", sehingga kalimatnya menjadi "He was very scared."',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Make Sentence Using Was/Were in Relation to Feelings',
    difficulty: 'Mudah',
    imageUrl: sickBoyImg,
    imageCaption: 'A boy resting in bed while his mother checks his forehead.',
    text: 'Look at the picture! Choose the best sentence using "was/were" to describe the boy’s condition yesterday!',
    options: [
      { id: 'A', text: 'The boy was sick and tired in bed yesterday.' },
      { id: 'B', text: 'The boy were strong and active at the park.' },
      { id: 'C', text: 'The boy was excited to play basketball outside.' },
      { id: 'D', text: 'The boy were hungry at the restaurant.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gambar menunjukkan seorang anak laki-laki berbaring sakit di tempat tidur dirawat ibunya. Kalimat yang tepat sesuai subjek tunggal "The boy" dan kondisinya adalah "The boy was sick and tired in bed yesterday."',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Make Sentence Using Was/Were in Relation to Feelings',
    difficulty: 'Sedang',
    text: 'Arrange these jumbled words into a good sentence!\n"yesterday – sleepy – Bagas – very – was – morning"',
    options: [
      { id: 'A', text: 'Bagas was very sleepy yesterday morning.' },
      { id: 'B', text: 'Yesterday morning very sleepy was Bagas.' },
      { id: 'C', text: 'Bagas very was sleepy morning yesterday.' },
      { id: 'D', text: 'Was Bagas very sleepy yesterday morning.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Susunan kalimat positif yang benar adalah: Subject (Bagas) + was + adverb/adjective (very sleepy) + time expression (yesterday morning) → "Bagas was very sleepy yesterday morning."',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Make Sentence Using Was/Were in Relation to Feelings',
    difficulty: 'Sukar',
    text: 'Read this situation:\n"Kadek lost her favorite pencil case at school yesterday."\nWhich sentence best expresses her feeling using "was" or "were"?',
    options: [
      { id: 'A', text: 'Kadek were very cheerful because she lost her pencil case.' },
      { id: 'B', text: 'Kadek was sad because she lost her favorite pencil case.' },
      { id: 'C', text: 'Kadek did sad because she lost her favorite pencil case.' },
      { id: 'D', text: 'Kadek was proud because she lost her favorite pencil case.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kehilangan tempat pensil kesayangan menimbulkan perasaan sedih ("sad"). Dengan subjek tunggal "Kadek", kalimat yang tepat menggunakan "was": "Kadek was sad because she lost her favorite pencil case."',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Make & Answer WH-Question for Past Activities',
    difficulty: 'Mudah',
    text: 'Complete the WH-question below!\nA: "___ did you go during the school holiday last month?"\nB: "I went to my grandfather’s village in Tabanan."',
    options: [
      { id: 'A', text: 'Who' },
      { id: 'B', text: 'When' },
      { id: 'C', text: 'Where' },
      { id: 'D', text: 'Why' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jawaban B menyebutkan tempat ("my grandfather’s village in Tabanan"). Kata tanya WH-Question untuk menanyakan tempat atau lokasi adalah "Where" (Di mana / Ke mana).',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Make & Answer WH-Question for Past Activities',
    difficulty: 'Sedang',
    text: 'Which WH-question is GRAMMATICALLY CORRECT to ask about someone’s activity last night?',
    options: [
      { id: 'A', text: 'What did you did last night?' },
      { id: 'B', text: 'What you do last night?' },
      { id: 'C', text: 'What did you do last night?' },
      { id: 'D', text: 'What were you do last night?' },
    ],
    correctAnswer: 'C',
    explanation:
      'Struktur WH-Question untuk Simple Past Tense verbal adalah: WH-Word + did + Subject + Verb 1. Jadi kalimat yang benar adalah "What did you do last night?".',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Make & Answer WH-Question for Past Activities',
    difficulty: 'Sedang',
    text: 'Choose the best answer to the teacher’s WH-question!\nTeacher: "When did Budi finish his English homework?"\nClassmate: "___"',
    options: [
      { id: 'A', text: 'He finished it yesterday evening.' },
      { id: 'B', text: 'He finished it in the living room.' },
      { id: 'C', text: 'He finished it with his blue pen.' },
      { id: 'D', text: 'Because it was very easy.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata tanya "When" menanyakan waktu. Oleh karena itu, jawaban harus memuat keterangan waktu lampau, yaitu "He finished it yesterday evening."',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Talk About Past Activities',
    difficulty: 'Sedang',
    text: 'Complete the dialogue about past weekend activities!\nNadia: "Hi, Tari! What did you do last Sunday?"\nTari: "___"',
    options: [
      { id: 'A', text: 'I help my mother water the flowers tomorrow.' },
      { id: 'B', text: 'I helped my mother water the flowers in the garden.' },
      { id: 'C', text: 'I am helping my mother right now.' },
      { id: 'D', text: 'I will visit my grandmother next Sunday.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Nadia menanyakan kegiatan hari Minggu lalu ("last Sunday"). Untuk menceritakan pengalaman lampau (talk about past activities), gunakan Simple Past Tense (Verb 2): "I helped my mother water the flowers in the garden."',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Talk About Past Activities',
    difficulty: 'Sedang',
    text: 'Read the short text about Kevin’s past activities:\n"Last Saturday, Kevin woke up early at 6 a.m. First, he cleaned his bedroom. Then, he washed his bicycle in the yard. In the afternoon, he read an interesting comic book."\n\nQuestion: What did Kevin do in the afternoon?',
    options: [
      { id: 'A', text: 'He cleaned his bedroom.' },
      { id: 'B', text: 'He washed his bicycle.' },
      { id: 'C', text: 'He read an interesting comic book.' },
      { id: 'D', text: 'He woke up at 6 a.m.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada kalimat terakhir teks tertulis jelas: "In the afternoon, he read an interesting comic book." (Pada sore hari, ia membaca buku komik yang menarik).',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Talk About Past Activities',
    difficulty: 'Sukar',
    text: 'Complete Rico’s story about his activities yesterday!\n"Yesterday morning, I ___ breakfast with my family at 6:30, and then I ___ to school by bicycle."',
    options: [
      { id: 'A', text: 'have / go' },
      { id: 'B', text: 'had / went' },
      { id: 'C', text: 'has / goes' },
      { id: 'D', text: 'having / going' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk menceritakan rangkaian kegiatan lampau ("Yesterday morning"), kedua kata kerja harus dalam bentuk Verb 2: "have" menjadi "had", dan "go" menjadi "went".',
  },

  // ============================================================================
  // BAGIAN B: PILIHAN GANDA KOMPLEKS KATEGORI (5 SOAL, MASING-MASING 3 PERNYATAAN B/S)
  // ============================================================================
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Simple Past Tense (Positive & Negative Forms)',
    difficulty: 'Sedang',
    text: 'Determine whether each statement about Positive and Negative Simple Past Tense forms is TRUE (Benar) or FALSE (Salah):',
    statements: [
      {
        id: 's1',
        text: 'In a negative Simple Past Tense verbal sentence, we use "did not" followed by Verb 1 (base verb).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'The sentence "She went to the school library yesterday" is a correct positive Simple Past Tense sentence.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'The sentence "He did not played football last afternoon" is grammatically correct.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kalimat negatif verbal lampau menggunakan did not + V1 (BENAR).\n2. "She went to the school library yesterday" memakai V2 "went" untuk kalimat positif lampau (BENAR).\n3. Setelah "did not", kata kerja harus kembali ke bentuk V1 ("play"), bukan "played" (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Use & Identify Was/Were for Past Activities',
    difficulty: 'Sedang',
    text: 'Read each statement about using and identifying "was" and "were" for past activities. Choose BENAR (True) or SALAH (False):',
    statements: [
      {
        id: 's1',
        text: 'We use "was" for subjects I, He, She, It, and we use "were" for subjects You, We, They.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: '"Tino and Raka were at the museum last week" correctly uses "were" for a plural subject.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: '"My mother were in the garden yesterday morning" is a grammatically correct sentence.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Aturan pasangan subjek: I/He/She/It → was; You/We/They → were (BENAR).\n2. "Tino and Raka" adalah subjek jamak sehingga memakai "were" (BENAR).\n3. "My mother" adalah subjek tunggal (she), seharusnya memakai "was", bukan "were" (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Was/Were in Relation to Feelings',
    difficulty: 'Mudah',
    text: 'Check these sentences that express past feelings using "was" and "were". Choose BENAR (True) or SALAH (False) for each statement:',
    statements: [
      {
        id: 's1',
        text: '"The students were happy after the school trip" properly expresses a past feeling.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: '"I were very hungry two hours ago" is the correct way to express your past feeling.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: '"Lina was nervous before the English test yesterday" uses "was" with a feeling adjective.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. "The students" (jamak) + "were" + "happy" tepat (BENAR).\n2. Subjek "I" dalam Simple Past Tense harus memakai "was" ("I was very hungry"), bukan "were" (SALAH).\n3. "Lina" (tunggal) + "was" + "nervous" tepat menggambarkan perasaan cemas di masa lalu (BENAR).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Make & Answer WH-Questions for Past Activities',
    difficulty: 'Sukar',
    text: 'Evaluate each statement about making and answering WH-questions for past activities. Choose BENAR (True) or SALAH (False):',
    statements: [
      {
        id: 's1',
        text: 'In a Simple Past WH-question with "did", the main verb returns to Verb 1, as in "Where did you buy that bag?".',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: '"Who cleaned the whiteboard this morning?" is a WH-question asking about the person who did the activity.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'To answer the question "When did you visit your aunt?", the right answer is "At the traditional market".',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pola WH-question dengan "did" selalu menggunakan Verb 1 seperti "buy" (BENAR).\n2. "Who" digunakan untuk menanyakan orang/pelaku kegiatan (BENAR).\n3. "When" menanyakan waktu (misalnya "Last Sunday"), bukan tempat ("At the traditional market") (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Talk About Past Activities',
    difficulty: 'Sedang',
    imageUrl: familyCookingImg,
    imageCaption: 'Edo and his family cooking healthy vegetables together in the kitchen.',
    text: 'Look at the picture and read the short story:\n"Last Sunday morning, Edo and his family stayed at home. They were in the kitchen and cooked healthy vegetables together. Everyone smiled and felt very joyful."\n\nDetermine whether each statement below is BENAR (True) or SALAH (False):',
    statements: [
      {
        id: 's1',
        text: 'Edo and his parents were in the kitchen last Sunday morning.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'They cooked healthy vegetables together and they were very happy.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Edo did not help his family because he was sleeping in his bedroom.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Berdasarkan gambar dan teks, Edo bersama ayah, ibu, dan adiknya berada di dapur pada Minggu pagi (BENAR).\n2. Mereka memasak sayuran bersama dengan wajah gembira (BENAR).\n3. Edo ikut mengaduk bahan masakan membantu keluarga, bukan tidur di kamar (SALAH).',
  },
];
