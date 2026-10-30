/**
 * GLOWFIT - MODERN FITNESS PLATFORM
 * Pure Vanilla JavaScript Client Interactions
 * Zero backend, Zero database. Academic Project.
 */

// --- 12 Structured Training Programs Dataset ---
const PROGRAMS_DATA = {
  p1: {
    id: 'p1',
    title: '4 Haftalık Başlangıç Kondisyonu',
    goal: 'kondisyon',
    goalLabel: 'Kondisyon',
    diff: '1',
    diffLabel: '🔥 Başlangıç',
    duration: '40 dk / seans',
    desc: 'Düzenli egzersiz alışkanlığı kazanmak ve aerobik dayanıklılığı temelden inşa etmek isteyenler için eklemleri koruyan dengeli başlangıç planı.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Aerobik Temel & Alt Gövde',
        exercises: [
          { name: 'Tempolu Yürüyüş / Hafif Koşu', setsReps: '15 dk ısınma' },
          { name: 'Vücut Ağırlığı Squat', setsReps: '3 set x 12 tekrar' },
          { name: 'Glute Bridge (Kalça Aktivasyonu)', setsReps: '3 set x 15 tekrar' },
          { name: 'Ön Plank', setsReps: '3 set x 30 sn' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Düşük Darbeli Kondisyon & Üst Gövde',
        exercises: [
          { name: 'Sabit Hızlı Kürek veya Yatay Bisiklet', setsReps: '20 dk sabit tempo' },
          { name: 'Eğimli Şınav (Incline Push-Up)', setsReps: '3 set x 10 tekrar' },
          { name: 'Dumbbell Seated Row', setsReps: '3 set x 12 tekrar' },
          { name: 'Dead Bug (Merkez Bölge Aktivasyonu)', setsReps: '3 set x 10 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Tüm Vücut Dayanıklılık & Soğuma',
        exercises: [
          { name: 'Eliptik Bisiklet', setsReps: '15 dk ritmik tempo' },
          { name: 'Step-Up (Basamak Çıkma)', setsReps: '3 set x 12 tekrar' },
          { name: 'Hafif Mountain Climbers', setsReps: '3 set x 20 sn' },
          { name: 'Tüm Vücut Statik Esneme', setsReps: '10 dk' }
        ]
      }
    ]
  },
  p2: {
    id: 'p2',
    title: 'Fonksiyonel HIIT & Dayanıklılık',
    goal: 'kondisyon',
    goalLabel: 'Kondisyon',
    diff: '2',
    diffLabel: '🔥🔥 Orta',
    duration: '50 dk / seans',
    desc: 'Kalp ritmini yükselten dinamik intervaller ve fonksiyonel hareket dizilimleri ile yüksek kalori harcaması ve dayanıklılık artışı.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'HIIT & Çeviklik İntervaller',
        exercises: [
          { name: 'Kettlebell Swing', setsReps: '4 tur x 45 sn (15 sn dinlenme)' },
          { name: 'Burpee to Box Step', setsReps: '4 set x 12 tekrar' },
          { name: 'İp Atlama / Hızlı Step', setsReps: '4 set x 45 sn' },
          { name: 'Plank to Push-up', setsReps: '3 set x 10 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Fonksiyonel Kuvvet Dayanıklılığı',
        exercises: [
          { name: 'Dumbbell Thruster', setsReps: '4 set x 10 tekrar' },
          { name: 'Box Jump / Step-Up', setsReps: '4 set x 15 tekrar' },
          { name: 'Battle Rope (Dalgalandırma)', setsReps: '4 set x 30 sn' },
          { name: 'Russian Twist (Ağırlıklı)', setsReps: '3 set x 20 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Kondisyon & Metabolik Tamamlama',
        exercises: [
          { name: 'Kürek Ergometresi Sürat Etabı', setsReps: '5 tur x 250 metre' },
          { name: 'Dumbbell Snatch (Tek Kol)', setsReps: '4 set x 10 tekrar (her kol)' },
          { name: 'Walking Lunge', setsReps: '3 set x 20 adım' },
          { name: 'Hollow Body Hold', setsReps: '3 set x 40 sn' }
        ]
      }
    ]
  },
  p3: {
    id: 'p3',
    title: 'Elit Seviye Kardiyo Pro',
    goal: 'kondisyon',
    goalLabel: 'Kondisyon',
    diff: '3',
    diffLabel: '🔥🔥🔥 İleri',
    duration: '60 dk / seans',
    desc: 'Maksimal VO2 kapasitesini ve yüksek yoğunluklu aerobik dayanıklılık sınırlarını zorlayan ileri düzey kondisyon protokolü.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Laktat Eşiği İntervaller',
        exercises: [
          { name: 'Koşu Bandı Eğimli Isınma', setsReps: '10 dk' },
          { name: '800 Metre Hızlı İnterval', setsReps: '6 tekrar (90 sn aktif dinlenme)' },
          { name: 'Kettlebell Clean & Push Press', setsReps: '4 set x 12 tekrar' },
          { name: 'Asılı Bacak Kaldırma (Hanging Leg Raise)', setsReps: '4 set x 12 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Metabolik Kondisyon Devreleri',
        exercises: [
          { name: '500m Kürek + 20 Kettlebell Swing', setsReps: '4 tur aralıksız' },
          { name: 'AirBike Maksimum Watt Sprint', setsReps: '6 set x 30 sn sprint / 30 sn rölanti' },
          { name: 'Barfiks (Pull-Up)', setsReps: '4 set x 10 tekrar' },
          { name: 'Farmer Walk (Ağır Dumbbell Taşıma)', setsReps: '4 set x 40 metre' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Yüksek Yoğunluklu Dayanıklılık Bloku',
        exercises: [
          { name: 'Kombine Triatlon Simülasyonu (Koşu+Kürek+Bisiklet)', setsReps: '35 dk tempolu' },
          { name: 'Dumbbell Manmaker', setsReps: '4 set x 8 tekrar' },
          { name: 'Ab Wheel Rollout', setsReps: '4 set x 12 tekrar' },
          { name: 'Derin Solunum ve Miyofasiyal Gevşeme', setsReps: '10 dk' }
        ]
      }
    ]
  },
  p4: {
    id: 'p4',
    title: 'Temel Ağırlık ve Form Eğitimi',
    goal: 'kas-gelistirme',
    goalLabel: 'Kas Geliştirme',
    diff: '1',
    diffLabel: '🔥 Başlangıç',
    duration: '45 dk / seans',
    desc: 'Serbest ağırlıklarla temel bileşik hareket mekaniğini, doğru omurga postürünü ve güvenli kas aktivasyonunu öğreten temel program.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Üst Gövde İtiş ve Çekiş Mekaniği',
        exercises: [
          { name: 'Dumbbell Flat Bench Press', setsReps: '3 set x 10 tekrar' },
          { name: 'Lat Pulldown (Geniş Tutuş)', setsReps: '3 set x 12 tekrar' },
          { name: 'Oturarak Dumbbell Omuz Presi', setsReps: '3 set x 10 tekrar' },
          { name: 'Dumbbell Biceps Curl', setsReps: '3 set x 12 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Alt Gövde Temelleri',
        exercises: [
          { name: 'Goblet Squat (Dumbbell ile)', setsReps: '3 set x 10 tekrar' },
          { name: 'Dumbbell Romanian Deadlift (RDL)', setsReps: '3 set x 10 tekrar' },
          { name: 'Lying Leg Curl (Arka Bacak)', setsReps: '3 set x 12 tekrar' },
          { name: 'Standing Calf Raise', setsReps: '3 set x 15 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Tüm Vücut Denge & Stabilite',
        exercises: [
          { name: 'Seated Cable Row (Kürek)', setsReps: '3 set x 12 tekrar' },
          { name: 'Push-Up (Şınav Form Çalışması)', setsReps: '3 set x 8-10 tekrar' },
          { name: 'Dumbbell Lateral Raise (Yan Omuz)', setsReps: '3 set x 12 tekrar' },
          { name: 'Plank Hold', setsReps: '3 set x 35 sn' }
        ]
      }
    ]
  },
  p5: {
    id: 'p5',
    title: 'Hipertrofi ve Güç İnşası',
    goal: 'kas-gelistirme',
    goalLabel: 'Kas Geliştirme',
    diff: '2',
    diffLabel: '🔥🔥 Orta',
    duration: '55 dk / seans',
    desc: 'Aşamalı aşırı yükleme (progressive overload) prensipleriyle kas kütlesini ve temel kuvveti büyütmeye odaklanan split program.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'İtiş Günü (Göğüs, Omuz, Triceps)',
        exercises: [
          { name: 'Barbell Bench Press', setsReps: '4 set x 8-10 tekrar' },
          { name: 'Incline Dumbbell Press', setsReps: '3 set x 10-12 tekrar' },
          { name: 'Dumbbell Lateral Raise', setsReps: '4 set x 12-15 tekrar' },
          { name: 'Triceps Cable Rope Pushdown', setsReps: '3 set x 12 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Çekiş Günü (Sırt, Arka Omuz, Biceps)',
        exercises: [
          { name: 'Barbell Bent-Over Row', setsReps: '4 set x 8 tekrar' },
          { name: 'Neutral-Grip Lat Pulldown', setsReps: '3 set x 10 tekrar' },
          { name: 'Face Pull (Arka Omuz & Trapez)', setsReps: '4 set x 15 tekrar' },
          { name: 'Incline Dumbbell Curl', setsReps: '3 set x 10 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Alt Gövde & Core (Bacak ve Karın)',
        exercises: [
          { name: 'Barbell Back Squat', setsReps: '4 set x 8 tekrar' },
          { name: 'Leg Press', setsReps: '3 set x 10-12 tekrar' },
          { name: 'Dumbbell Bulgarian Split Squat', setsReps: '3 set x 10 tekrar (her bacak)' },
          { name: 'Hanging Knee Raise', setsReps: '3 set x 15 tekrar' }
        ]
      }
    ]
  },
  p6: {
    id: 'p6',
    title: 'İleri Güç ve Kuvvet Yüklemesi',
    goal: 'kas-gelistirme',
    goalLabel: 'Kas Geliştirme',
    diff: '3',
    diffLabel: '🔥🔥🔥 İleri',
    duration: '70 dk / seans',
    desc: 'Maksimal sinir-kas koordinasyonunu ve ana bileşik kaldırışlarda (Squat, Bench, Deadlift) saf kuvveti artıran periyotlu çalışma.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Maksimal Üst Gövde Kuvveti',
        exercises: [
          { name: 'Barbell Bench Press (%80-85 1RM)', setsReps: '5 set x 5 tekrar' },
          { name: 'Pendlay Row (Yerden Çekiş)', setsReps: '4 set x 6 tekrar' },
          { name: 'Ağırlıklı Dips', setsReps: '3 set x 8 tekrar' },
          { name: 'Overhead Barbell Military Press', setsReps: '4 set x 6 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Maksimal Alt Gövde & Posterior Chain',
        exercises: [
          { name: 'Barbell Back Squat (%80 1RM)', setsReps: '5 set x 5 tekrar' },
          { name: 'Conventional Deadlift', setsReps: '4 set x 4 tekrar' },
          { name: 'Barbell Hip Thrust', setsReps: '3 set x 8 tekrar' },
          { name: 'Standing Heavy Calf Raise', setsReps: '4 set x 10 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Aksesuar Güç & Dinamik Stabilizasyon',
        exercises: [
          { name: 'Ağırlıklı Barfiks (Weighted Pull-Up)', setsReps: '4 set x 6 tekrar' },
          { name: 'Close-Grip Bench Press', setsReps: '3 set x 8 tekrar' },
          { name: 'Suitcase Carry (Tek Taraflı Ağır Yürüyüş)', setsReps: '4 set x 40 metre' },
          { name: 'Ab Wheel Rollout (Ayaktan veya Dizden)', setsReps: '4 set x 10 tekrar' }
        ]
      }
    ]
  },
  p7: {
    id: 'p7',
    title: 'Aktif Başlangıç Yağ Yakımı',
    goal: 'kilo-verme',
    goalLabel: 'Kilo Verme',
    diff: '1',
    diffLabel: '🔥 Başlangıç',
    duration: '45 dk / seans',
    desc: 'Metabolizmayı hızlandırırken eklemleri aşırı yükten koruyan, sürekli kalori harcaması ve hareketlilik odaklı başlangıç planı.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Düşük Tempolu Devre Antrenmanı',
        exercises: [
          { name: 'Dinamik Eklem Isınması', setsReps: '8 dk' },
          { name: 'Vücut Ağırlığı Squat + Knee Push-up', setsReps: '3 tur x 12 tekrar' },
          { name: 'Dumbbell Romanian Deadlift (Hafif)', setsReps: '3 set x 12 tekrar' },
          { name: 'Yatay Bisiklet Kardiyo', setsReps: '15 dk sabit nabız' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Direnç & Hareketlilik',
        exercises: [
          { name: 'Dumbbell Seated Shoulder Press', setsReps: '3 set x 12 tekrar' },
          { name: 'Cable Lat Pulldown', setsReps: '3 set x 12 tekrar' },
          { name: 'Farmer Walk (Hafif Ağırlıkla Yürüyüş)', setsReps: '3 set x 45 sn' },
          { name: 'Bird-Dog (Çapraz Kol-Bacak Uzatma)', setsReps: '3 set x 12 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Eğimli Yürüyüş & Merkez Bölge',
        exercises: [
          { name: 'Koşu Bandı Eğimli Yürüyüş (%6 eğim, 5 km/s)', setsReps: '20 dk tempolu' },
          { name: 'Glute Bridge Hold', setsReps: '3 set x 40 sn' },
          { name: 'Yan Plank (Diz Üstü veya Tam)', setsReps: '3 set x 20 sn (her yön)' },
          { name: 'Bacak ve Kalça Rahatlatma Esnemesi', setsReps: '8 dk' }
        ]
      }
    ]
  },
  p8: {
    id: 'p8',
    title: 'Metabolik Ateşleme & Güç',
    goal: 'kilo-verme',
    goalLabel: 'Kilo Verme',
    diff: '2',
    diffLabel: '🔥🔥 Orta',
    duration: '50 dk / seans',
    desc: 'Bileşik direnç hareketleri ile tempolu aralıklı kondisyonun birleştiği, yağ yakımını maksimize eden dengeli antrenman serisi.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Süperset Yağ Yakım Protokolü',
        exercises: [
          { name: 'Dumbbell Goblet Squat + Dumbbell Row', setsReps: '4 süperset x 10 tekrar' },
          { name: 'Dumbbell Push Press + Mountain Climbers', setsReps: '4 süperset x 12 tekrar / 30 sn' },
          { name: 'Kettlebell Deadlift', setsReps: '3 set x 12 tekrar' },
          { name: 'Hızlı İp Atlama', setsReps: '4 set x 45 sn' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Metabolik Kondisyon & Core',
        exercises: [
          { name: 'Kettlebell Russian Swing', setsReps: '4 set x 15 tekrar' },
          { name: 'Dumbbell Lunge to Biceps Curl', setsReps: '3 set x 10 tekrar (her bacak)' },
          { name: 'Russian Twist (Sağlık Topu ile)', setsReps: '4 set x 25 tekrar' },
          { name: 'Yüksek Eğimli Koşu Bandı Temposu', setsReps: '15 dk' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Tüm Vücut Kompleks Devre',
        exercises: [
          { name: 'Dumbbell Clean to Thruster', setsReps: '4 tur x 10 tekrar' },
          { name: 'Box Jump veya Yüksek Step-Up', setsReps: '4 tur x 12 tekrar' },
          { name: 'Kürek Ergometresi Sprint', setsReps: '4 tur x 250m' },
          { name: 'Plank Saw (İleri-Geri Plank)', setsReps: '3 set x 40 sn' }
        ]
      }
    ]
  },
  p9: {
    id: 'p9',
    title: 'Yüksek Yoğunluklu Shred',
    goal: 'kilo-verme',
    goalLabel: 'Kilo Verme',
    diff: '3',
    diffLabel: '🔥🔥🔥 İleri',
    duration: '60 dk / seans',
    desc: 'Yüksek antrenman hacmi, Tabata ve EMOM blokları ile kas kütlesini korurken maksimum kalori ve enerji tüketimi sağlayan ileri program.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Tabata & Yüksek Hızlı Devre',
        exercises: [
          { name: 'AirBike Tabata (20 sn sprint / 10 sn dinlenme)', setsReps: '8 tur' },
          { name: 'Dumbbell Devil Press', setsReps: '4 set x 10 tekrar' },
          { name: 'Barfiks veya Chest-to-Bar', setsReps: '4 set x 10 tekrar' },
          { name: 'Burpee Over Dumbbell', setsReps: '4 set x 15 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Metabolik Direnç Yüklemesi',
        exercises: [
          { name: 'Barbell Front Squat (%70 1RM)', setsReps: '5 set x 8 tekrar' },
          { name: 'Barbell Bent-Over Row', setsReps: '4 set x 10 tekrar' },
          { name: '400 Metre Koşu + 30 sn Plank Devresi', setsReps: '4 tur' },
          { name: 'Toes-to-Bar (Ayaklar Bara)', setsReps: '4 set x 12 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: '20 Dakikalık EMOM Protokolü',
        exercises: [
          { name: 'Tek Dakikalar: 12 Dumbbell Snatch (Alternatif)', setsReps: '10 tur' },
          { name: 'Çift Dakikalar: 15 Kalori Kürek Çekme', setsReps: '10 tur' },
          { name: 'Sonlandırma: Ağır Sled Push (Kızak İtme)', setsReps: '4 set x 25 metre' },
          { name: 'Statik ve Dinamik Soğuma', setsReps: '10 dk' }
        ]
      }
    ]
  },
  p10: {
    id: 'p10',
    title: 'Mobilite & Duruş Dengeleme',
    goal: 'esneklik',
    goalLabel: 'Esneklik',
    diff: '1',
    diffLabel: '🔥 Başlangıç',
    duration: '40 dk / seans',
    desc: 'Masa başı çalışma ve hareketsizliğin oluşturduğu postüral gerginlikleri hafifleten, omurga ve kalça açıcı temel esneklik programı.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Omurga & Göğüs Bölgesi Açıcı',
        exercises: [
          { name: 'Kedi-Deve Esnemesi (Cat-Cow)', setsReps: '3 set x 12 tekrar' },
          { name: 'Torasik Omurga Rotasyonu', setsReps: '3 set x 10 tekrar (her iki yön)' },
          { name: 'Çocuk Duruşu (Child’s Pose)', setsReps: '3 set x 45 sn' },
          { name: 'Kapı Çerçevesi Göğüs Esnetme', setsReps: '3 set x 30 sn' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Kalça ve Hamstring Esnekliği',
        exercises: [
          { name: '90/90 Kalça Mobilite Geçişleri', setsReps: '3 set x 10 tekrar' },
          { name: 'World’s Greatest Stretch', setsReps: '3 set x 8 tekrar (her bacak)' },
          { name: 'Bant Yardımıyla Yatarak Hamstring Esnetme', setsReps: '3 set x 40 sn' },
          { name: 'Glute Bridge (Kontrollü Kaldırma)', setsReps: '3 set x 12 tekrar' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Postür & Boyun Rahatlatma',
        exercises: [
          { name: 'Y-T-W Sırt Aktivasyonu (Yüzüstü)', setsReps: '3 set x 10 tekrar' },
          { name: 'Üst Trapez ve Boyun Yan Esnetme', setsReps: '3 set x 30 sn' },
          { name: 'Kobra Duruşu (Hafif Bel Açıcı)', setsReps: '3 set x 30 sn' },
          { name: 'Derin Diyafram Nefesi & Gevşeme', setsReps: '7 dk' }
        ]
      }
    ]
  },
  p11: {
    id: 'p11',
    title: 'Dinamik Esneme & Eklem Sağlığı',
    goal: 'esneklik',
    goalLabel: 'Esneklik',
    diff: '2',
    diffLabel: '🔥🔥 Orta',
    duration: '45 dk / seans',
    desc: 'Aktif hareket açıklığını artıran, tendon ve bağ dokuyu güçlendiren akıcı germe ve eklem kontrol protokolü.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Alt Gövde Dinamik Açılma',
        exercises: [
          { name: 'Cossack Squat (Yan Hamle Açılışı)', setsReps: '3 set x 10 tekrar (her bacak)' },
          { name: 'Derin Squat Oturuşu ve Torasik Uzama', setsReps: '3 set x 45 sn bekleme' },
          { name: 'Güvercin Duruşu (Pigeon Pose)', setsReps: '3 set x 45 sn (her yön)' },
          { name: 'Ayak Bileği Mobilite Duvar Egzersizi', setsReps: '3 set x 15 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Omuz Kapsülü ve Üst Gövde Esnekliği',
        exercises: [
          { name: 'Direnç Bandı ile Shoulder Dislocates', setsReps: '3 set x 15 tekrar' },
          { name: 'Aşağı Bakan Köpekten Kobraya Geçiş', setsReps: '3 set x 10 tekrar' },
          { name: 'Akrep Esnemesi (Scorpion Stretch)', setsReps: '3 set x 8 tekrar' },
          { name: 'Prone Blackburn Duruşları', setsReps: '3 set x 30 sn' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Tüm Gövde Entegrasyon Akışı',
        exercises: [
          { name: 'Inchworm to Spider Lunge', setsReps: '3 tur x 8 tekrar' },
          { name: 'Kurbağa Duruşu (Frog Pose Kalça Açıcı)', setsReps: '3 set x 50 sn' },
          { name: 'Köprü (Bridge) Kaldırma & Göğüs Açma', setsReps: '3 set x 10 tekrar' },
          { name: 'Ritmik Nefes Eşliğinde Soğuma', setsReps: '8 dk' }
        ]
      }
    ]
  },
  p12: {
    id: 'p12',
    title: 'İleri Seviye Vinyasa & Core Esneklik',
    goal: 'esneklik',
    goalLabel: 'Esneklik',
    diff: '3',
    diffLabel: '🔥🔥🔥 İleri',
    duration: '55 dk / seans',
    desc: 'Yüksek merkez bölge kuvveti, denge ve derin esneklik gerektiren ileri dinamik akış dizilimleri.',
    plan: [
      {
        day: 'Pazartesi',
        focus: 'Kuvvet Temelli Vinyasa Akışı',
        exercises: [
          { name: 'Güneşe Selam Akışı (Sun Salutation A & B)', setsReps: '5 tam tur' },
          { name: 'Savaşçı III (Warrior III) Denge Tutuşu', setsReps: '3 set x 45 sn (her bacak)' },
          { name: 'Yan Plank Varyasyonları (Ağaç / Bacak Kaldırma)', setsReps: '3 set x 40 sn' },
          { name: 'Chaturanga Dandasana Kontrolü', setsReps: '4 set x 8 tekrar' }
        ]
      },
      {
        day: 'Çarşamba',
        focus: 'Derin Kalça & Omurga Açılışları',
        exercises: [
          { name: 'Kertenkele Duruşu (Lizard Pose) Derinleşmesi', setsReps: '3 set x 60 sn' },
          { name: 'Tekerlek / Tam Köprü Duruşu (Wheel Pose)', setsReps: '3 set x 20-30 sn' },
          { name: 'Deve Duruşu (Camel Pose)', setsReps: '3 set x 40 sn' },
          { name: 'Yarım Spagatsı Bacak Açma Esnemesi', setsReps: '3 set x 45 sn' }
        ]
      },
      {
        day: 'Cuma',
        focus: 'Kol Dengesi & Core Esneklik',
        exercises: [
          { name: 'Karga Duruşu (Crow Pose) Denge Çalışması', setsReps: '4 set x 25 sn' },
          { name: 'Hollow Body to Arch Body Rulo Geçişleri', setsReps: '3 set x 12 tekrar' },
          { name: 'Öne Katlanma (Paschimottanasana)', setsReps: '3 set x 60 sn pasif esneme' },
          { name: 'Rejenerasyon ve Zihinsel Odaklanma', setsReps: '10 dk' }
        ]
      }
    ]
  }
};

// --- Video Library Dataset ---
const VIDEO_DATA = [
  {
    id: 'v7AYKMP6rOE',
    title: 'Yeni Başlayanlar İçin 20 Dakikalık Yoga',
    channel: 'Yoga With Adriene',
    category: 'yoga'
  },
  {
    id: 'sTANio_2E0Q',
    title: 'Stres ve Kaygı İçin 20 Dakikalık Tüm Vücut Esneme',
    channel: 'MadFit',
    category: 'yoga'
  },
  {
    id: 'gC_L9qAHVJ8',
    title: 'Yeni Başlayanlar İçin 30 Dakikalık Düşük Etkili Antrenman',
    channel: 'Body Project',
    category: 'kardiyo'
  },
  {
    id: 'cbKkB3POqaY',
    title: 'Yeni Başlayanlar İçin Kardiyo Antrenmanı',
    channel: '',
    category: 'kardiyo'
  },
  {
    id: '0yYiErHenzs',
    title: 'Yeni Başlayanlar İçin Tüm Vücut Dambıl Antrenmanı',
    channel: 'growwithjo',
    category: 'serbest-agirlik'
  },
  {
    id: 'L3eImBAXT7I',
    title: 'Yeni Başlayanlar İçin 15 Dakikalık Dambıl Antrenmanı',
    channel: 'BodyFit By Amy',
    category: 'serbest-agirlik'
  }
];

// Program goal → video category mapping
const GOAL_VIDEO_CATEGORY = {
  'kas-gelistirme': 'serbest-agirlik',
  'kondisyon': 'kardiyo',
  'esneklik': 'yoga',
  'kilo-verme': 'kardiyo'
};

// Category display labels
const CATEGORY_LABELS = {
  'yoga': 'Yoga',
  'kardiyo': 'Kardiyo',
  'serbest-agirlik': 'Serbest Ağırlık'
};

// --- Main Initialization on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initHeroVideo();
  initProgramFilters();
  initCinemaModal();
  initVideoLibrary();
  initProgramModal();
  initMemberModal();
  initContactForm();
  initCurrentYear();
});

/**
 * 1) Header: Transparent at top, turns dark and sticky after scrolling
 */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger initial check
}

/**
 * 2) Mobile Navigation Drawer & Hamburger Toggle
 */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('primaryNav');
  const navLinks = document.querySelectorAll('.nav-link, .btn-outline-nav');

  if (!navToggle || !navMenu) return;

  function toggleMenu(forceState) {
    const isCurrentlyOpen = navMenu.classList.contains('open');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    navMenu.classList.toggle('open', shouldOpen);
    navToggle.classList.toggle('open', shouldOpen);
    navToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');

    if (shouldOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  navToggle.addEventListener('click', () => {
    toggleMenu();
  });

  // Close when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
      navToggle.focus();
    }
  });

  // Close when clicking outside header
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/**
 * 3) Hero: Video handling & fallback
 * If /public/hero.mp4 is available, play it; otherwise fall back to gym-1.jpg
 * Respect prefers-reduced-motion
 */
function initHeroVideo() {
  const video = document.getElementById('heroVideo');
  if (!video) return;

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    video.pause();
    video.classList.add('video-hidden');
    return;
  }

  // Handle missing video or playback errors gracefully
  video.addEventListener('error', () => {
    video.classList.add('video-hidden');
  }, true);

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Auto-play was prevented or hero.mp4 not found
      video.classList.add('video-hidden');
    });
  }
}

/**
 * 4) Programs Filtering Logic (Hedef & Zorluk)
 */
function initProgramFilters() {
  const goalButtons = document.querySelectorAll('[data-filter-goal]');
  const diffButtons = document.querySelectorAll('[data-filter-diff]');
  const programCards = document.querySelectorAll('.program-card');
  const filterCountEl = document.getElementById('filterCount');
  const emptyStateEl = document.getElementById('emptyState');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  let activeGoal = 'all';
  let activeDiff = 'all';

  function applyFilters() {
    let visibleCount = 0;

    programCards.forEach(card => {
      const cardGoal = card.getAttribute('data-goal');
      const cardDiff = card.getAttribute('data-diff');

      const matchesGoal = activeGoal === 'all' || cardGoal === activeGoal;
      const matchesDiff = activeDiff === 'all' || cardDiff === activeDiff;

      if (matchesGoal && matchesDiff) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Update count message
    if (filterCountEl) {
      if (visibleCount === 0) {
        filterCountEl.textContent = '0 program listeleniyor';
      } else if (visibleCount === programCards.length) {
        filterCountEl.textContent = `Toplam ${visibleCount} program listeleniyor`;
      } else {
        filterCountEl.textContent = `${visibleCount} program bulundu`;
      }
    }

    // Toggle Empty State
    if (emptyStateEl) {
      emptyStateEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    // Show/hide clear filters link
    const isFiltered = activeGoal !== 'all' || activeDiff !== 'all';
    if (resetBtn) {
      resetBtn.style.display = isFiltered ? 'inline-block' : 'none';
    }
  }

  // Goal filter buttons
  goalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goalButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      activeGoal = btn.getAttribute('data-filter-goal');
      applyFilters();
    });
  });

  // Diff filter buttons
  diffButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      diffButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      activeDiff = btn.getAttribute('data-filter-diff');
      applyFilters();
    });
  });

  // Reset function
  function resetAllFilters() {
    activeGoal = 'all';
    activeDiff = 'all';

    goalButtons.forEach(b => {
      const isAll = b.getAttribute('data-filter-goal') === 'all';
      b.classList.toggle('active', isAll);
      b.setAttribute('aria-pressed', isAll ? 'true' : 'false');
    });

    diffButtons.forEach(b => {
      const isAll = b.getAttribute('data-filter-diff') === 'all';
      b.classList.toggle('active', isAll);
      b.setAttribute('aria-pressed', isAll ? 'true' : 'false');
    });

    applyFilters();
  }

  if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);
}

/**
 * 5) Program Detail Modal (Generic Weekly Plan)
 */
function initProgramModal() {
  const backdrop = document.getElementById('programModalBackdrop');
  const modal = document.getElementById('programModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const closeFooterBtn = document.getElementById('modalCloseFooterBtn');
  const enrollBtn = document.getElementById('modalEnrollBtn');

  const titleEl = document.getElementById('modalProgramTitle');
  const descEl = document.getElementById('modalProgramDesc');
  const goalEl = document.getElementById('modalProgramGoal');
  const diffEl = document.getElementById('modalProgramDiff');
  const durationEl = document.getElementById('modalProgramDuration');
  const weeklyPlanEl = document.getElementById('modalWeeklyPlan');

  let lastActiveElement = null;

  if (!backdrop || !modal) return;

  function openModal(programId) {
    const data = PROGRAMS_DATA[programId];
    if (!data) return;

    lastActiveElement = document.activeElement;

    // Populate modal content
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (goalEl) goalEl.textContent = data.goalLabel;
    if (diffEl) diffEl.textContent = data.diffLabel;
    if (durationEl) durationEl.textContent = data.duration;

    // Build weekly plan schedule
    if (weeklyPlanEl) {
      weeklyPlanEl.innerHTML = '';
      data.plan.forEach(dayPlan => {
        const dayCard = document.createElement('div');
        dayCard.className = 'plan-day-card';

        let exercisesHtml = '';
        dayPlan.exercises.forEach(ex => {
          exercisesHtml += `
            <li class="plan-exercise-item">
              <span class="exercise-name">${escapeHtml(ex.name)}</span>
              <span class="exercise-sets-reps">${escapeHtml(ex.setsReps)}</span>
            </li>
          `;
        });

        dayCard.innerHTML = `
          <div class="plan-day-header">
            <span class="plan-day-name">${escapeHtml(dayPlan.day)}</span>
            <span class="plan-day-focus">${escapeHtml(dayPlan.focus)}</span>
          </div>
          <ul class="plan-exercise-list">
            ${exercisesHtml}
          </ul>
        `;
        weeklyPlanEl.appendChild(dayCard);
      });
    }

    // Connect enrollment button to prefill contact form
    if (enrollBtn) {
      enrollBtn.onclick = () => {
        closeModal();
        const programSelect = document.getElementById('programSelect');
        if (programSelect) {
          programSelect.value = data.goal;
        }
      };
    }

    // --- Video suggestions block ---
    const modalBody = modal.querySelector('.modal-body');
    // Remove any old block first
    const oldBlock = modal.querySelector('.modal-videos-block');
    if (oldBlock) oldBlock.remove();

    const videoCategory = GOAL_VIDEO_CATEGORY[data.goal];
    if (videoCategory && modalBody) {
      const relatedVideos = VIDEO_DATA.filter(v => v.category === videoCategory).slice(0, 2);
      if (relatedVideos.length > 0) {
        const block = document.createElement('div');
        block.className = 'modal-videos-block';

        const blockTitle = document.createElement('p');
        blockTitle.className = 'modal-videos-title';
        blockTitle.textContent = 'Bu programa uygun videolar';
        block.appendChild(blockTitle);

        const miniGrid = document.createElement('div');
        miniGrid.className = 'modal-video-mini-grid';
        relatedVideos.forEach(video => {
          miniGrid.appendChild(buildMiniVideoCard(video));
        });
        block.appendChild(miniGrid);
        modalBody.appendChild(block);
      }
    }

    backdrop.style.display = 'flex';
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.focus();
  }

  function closeModal() {
    backdrop.style.display = 'none';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  // Attach card click handlers
  const cards = document.querySelectorAll('.program-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      const programId = card.getAttribute('data-program-id');
      if (programId) openModal(programId);
    });

    // Enter or Space key navigation
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const programId = card.getAttribute('data-program-id');
        if (programId) openModal(programId);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);

  // Close on backdrop click outside dialog
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.style.display === 'flex') {
      closeModal();
    }
  });
}

/**
 * 6) Member Login Demo Modal
 */
function initMemberModal() {
  const loginBtn = document.getElementById('memberLoginBtn');
  const backdrop = document.getElementById('memberModalBackdrop');
  const modal = document.getElementById('memberModal');
  const closeBtn = document.getElementById('memberModalCloseBtn');
  const closeFooterBtn = document.getElementById('memberModalCloseFooterBtn');
  const loginForm = document.getElementById('loginDemoForm');
  const submitBtn = document.getElementById('memberSubmitBtn');
  const feedback = document.getElementById('loginFeedback');

  let lastActive = null;

  if (!backdrop || !loginBtn) return;

  function openLogin() {
    lastActive = document.activeElement;
    backdrop.style.display = 'flex';
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (feedback) feedback.style.display = 'none';
    const emailInput = document.getElementById('memberEmail');
    if (emailInput) setTimeout(() => emailInput.focus(), 50);
  }

  function closeLogin() {
    backdrop.style.display = 'none';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActive && typeof lastActive.focus === 'function') {
      lastActive.focus();
    }
  }

  loginBtn.addEventListener('click', openLogin);
  if (closeBtn) closeBtn.addEventListener('click', closeLogin);
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeLogin);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeLogin();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.style.display === 'flex') {
      closeLogin();
    }
  });

  if (loginForm && submitBtn) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (feedback) {
        feedback.style.display = 'block';
      }
    });
  }
}

/**
 * 7) Contact & Trial Booking Form with Turkish Validation
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const feedbackMessage = document.getElementById('feedbackMessage');

  if (!form) return;

  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddress');
  const programInput = document.getElementById('programSelect');
  const timeInput = document.getElementById('preferredTime');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const programError = document.getElementById('programError');
  const timeError = document.getElementById('timeError');

  const fields = [
    { input: fullNameInput, errorEl: nameError },
    { input: emailInput, errorEl: emailError },
    { input: programInput, errorEl: programError },
    { input: timeInput, errorEl: timeError }
  ];

  function clearError(input, errorEl) {
    if (input) {
      input.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
    }
    if (errorEl) {
      errorEl.textContent = '';
    }
  }

  function clearAllErrors() {
    fields.forEach(({ input, errorEl }) => clearError(input, errorEl));
  }

  // Clear errors dynamically on input or change
  fields.forEach(({ input, errorEl }) => {
    if (!input) return;
    ['input', 'change'].forEach(ev => {
      input.addEventListener(ev, () => {
        clearError(input, errorEl);
        if (feedback && feedback.style.display !== 'none') {
          feedback.style.display = 'none';
        }
      });
    });
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearAllErrors();

    let hasError = false;
    let firstInvalidInput = null;

    // Full name check
    const nameVal = fullNameInput.value.trim();
    if (!nameVal) {
      fullNameInput.classList.add('has-error');
      fullNameInput.setAttribute('aria-invalid', 'true');
      nameError.textContent = 'Lütfen adınızı ve soyadınızı giriniz.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = fullNameInput;
    }

    // Email check
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      emailInput.classList.add('has-error');
      emailInput.setAttribute('aria-invalid', 'true');
      emailError.textContent = 'Lütfen e-posta adresinizi giriniz.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else if (!isValidEmail(emailVal)) {
      emailInput.classList.add('has-error');
      emailInput.setAttribute('aria-invalid', 'true');
      emailError.textContent = 'Lütfen geçerli bir e-posta adresi giriniz (örnek: ad@ornek.com).';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    }

    // Program check
    if (!programInput.value) {
      programInput.classList.add('has-error');
      programInput.setAttribute('aria-invalid', 'true');
      programError.textContent = 'Lütfen ilgilendiğiniz bir program alanını seçiniz.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = programInput;
    }

    // Time check
    if (!timeInput.value) {
      timeInput.classList.add('has-error');
      timeInput.setAttribute('aria-invalid', 'true');
      timeError.textContent = 'Lütfen tercih ettiğiniz saat dilimini seçiniz.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = timeInput;
    }

    if (hasError) {
      if (firstInvalidInput) firstInvalidInput.focus();
      return;
    }

    // Success response simulation
    const programText = programInput.options[programInput.selectedIndex].text;
    const timeText = timeInput.options[timeInput.selectedIndex].text;

    feedbackMessage.innerHTML = `
      Sayın <strong>${escapeHtml(nameVal)}</strong>, <em>${escapeHtml(programText)}</em> alanı için tercih ettiğiniz <em>${escapeHtml(timeText)}</em> saat diliminde deneme dersi başvurunuz başarıyla simüle edildi.<br />
      <small style="color: #94a3b8; display: inline-block; margin-top: 0.35rem;">
        * GLOWFIT bir üniversite ders projesidir; hiçbir gerçek veri kaydedilmez veya saklanmaz.
      </small>
    `;

    feedback.style.display = 'flex';
    form.reset();
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/**
 * 8) Dynamic Footer Year
 */
function initCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * CINEMA MODAL — shared by video library cards and program modal suggestions
 * Creates iframe on open, destroys it on close so video stops.
 */
function initCinemaModal() {
  const backdrop = document.getElementById('cinemaModalBackdrop');
  const dialog   = document.getElementById('cinemaModal');
  const closeBtn = document.getElementById('cinemaCloseBtn');
  const titleEl  = document.getElementById('cinemaModalTitle');
  const ytLinkEl = document.getElementById('cinemaYtLink');
  const playerEl = document.getElementById('cinemaPlayer');

  if (!backdrop || !dialog) return;

  let lastActive = null;

  function openCinema(videoId, videoTitle) {
    lastActive = document.activeElement;

    if (titleEl) titleEl.textContent = videoTitle;
    if (ytLinkEl) ytLinkEl.href = `https://www.youtube.com/watch?v=${videoId}`;

    // Create iframe only on click
    if (playerEl) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
      iframe.title = videoTitle;
      iframe.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      iframe.allowFullscreen = true;
      playerEl.innerHTML = '';
      playerEl.appendChild(iframe);
    }

    backdrop.style.display = 'flex';
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
  }

  function closeCinema() {
    backdrop.style.display = 'none';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Remove iframe so video stops
    if (playerEl) playerEl.innerHTML = '';
    if (lastActive && typeof lastActive.focus === 'function') {
      lastActive.focus();
    }
  }

  // Expose openCinema globally so other functions can call it
  window.openCinemaModal = openCinema;

  if (closeBtn) closeBtn.addEventListener('click', closeCinema);

  // Close on outside click
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeCinema();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.style.display === 'flex') {
      closeCinema();
    }
  });
}

/**
 * VIDEO LIBRARY — category tab switching + card rendering
 */
function initVideoLibrary() {
  const grid   = document.getElementById('videoGrid');
  const tabs   = document.querySelectorAll('.video-tab');

  if (!grid || !tabs.length) return;

  let activeCategory = 'yoga'; // default tab

  function renderVideos(category) {
    const filtered = VIDEO_DATA.filter(v => v.category === category);
    grid.innerHTML = '';

    filtered.forEach(video => {
      const card = buildVideoCard(video);
      grid.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeCategory = tab.getAttribute('data-category');
      renderVideos(activeCategory);
    });

    tab.addEventListener('keydown', (e) => {
      // Arrow key navigation between tabs
      const tabArr = Array.from(tabs);
      const idx = tabArr.indexOf(tab);
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = tabArr[(idx + 1) % tabArr.length];
        next.click();
        next.focus();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = tabArr[(idx - 1 + tabArr.length) % tabArr.length];
        prev.click();
        prev.focus();
      }
    });
  });

  // Initial render
  renderVideos(activeCategory);
}

/**
 * Build a video card element for the library grid
 */
function buildVideoCard(video) {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  const ytUrl    = `https://www.youtube.com/watch?v=${video.id}`;
  const catLabel = CATEGORY_LABELS[video.category] || video.category;

  const card = document.createElement('article');
  card.className = 'video-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${escapeHtml(video.title)} videosunu oynat`);
  card.setAttribute('data-video-id', video.id);
  card.setAttribute('data-video-title', video.title);

  card.innerHTML = `
    <div class="video-thumb">
      <img
        src="${thumbUrl}"
        alt="${escapeHtml(video.title)} video küçük resmi"
        loading="lazy"
        width="480"
        height="270"
      />
      <div class="video-thumb-overlay" aria-hidden="true">
        <div class="video-play-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="video-card-body">
      <h3 class="video-card-title">${escapeHtml(video.title)}</h3>
      ${video.channel ? `<p class="video-card-channel">${escapeHtml(video.channel)}</p>` : ''}
      <div class="video-card-footer">
        <span class="video-card-tag">${escapeHtml(catLabel)}</span>
        <a
          href="${ytUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="video-card-yt-link"
          aria-label="${escapeHtml(video.title)} videosunu YouTube'da izle"
          onclick="event.stopPropagation()"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.762 1.766 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>
          YouTube'da izle
        </a>
      </div>
    </div>
  `;

  // Open cinema on card click / keyboard
  function handleOpen(e) {
    if (e.target.closest('.video-card-yt-link')) return; // let link through
    if (window.openCinemaModal) {
      window.openCinemaModal(video.id, video.title);
    }
  }

  card.addEventListener('click', handleOpen);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen(e);
    }
  });

  return card;
}

/**
 * Build a mini video card for the program modal suggestions block
 */
function buildMiniVideoCard(video) {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  const ytUrl    = `https://www.youtube.com/watch?v=${video.id}`;

  const card = document.createElement('div');
  card.className = 'modal-video-mini-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${escapeHtml(video.title)} videosunu oynat`);

  card.innerHTML = `
    <div class="modal-video-mini-thumb">
      <img
        src="${thumbUrl}"
        alt="${escapeHtml(video.title)} video küçük resmi"
        loading="lazy"
        width="320"
        height="180"
      />
      <div class="modal-video-mini-overlay" aria-hidden="true">
        <div class="modal-video-mini-play">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="modal-video-mini-body">
      <p class="modal-video-mini-title">${escapeHtml(video.title)}</p>
      <div class="modal-video-mini-footer">
        <a
          href="${ytUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="modal-video-mini-yt-link"
          aria-label="${escapeHtml(video.title)} videosunu YouTube'da izle"
          onclick="event.stopPropagation()"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.762 1.766 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>
          YouTube'da izle
        </a>
      </div>
    </div>
  `;

  function handleOpen(e) {
    if (e.target.closest('.modal-video-mini-yt-link')) return;
    if (window.openCinemaModal) {
      window.openCinemaModal(video.id, video.title);
    }
  }

  card.addEventListener('click', handleOpen);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen(e);
    }
  });

  return card;
}

/**
 * Utility: HTML Escape helper
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
