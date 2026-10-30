# GLOWFIT | Modern Antrenman Platformu

Büyük bir fitness zinciri atmosferinde tasarlanmış, modern ve erişilebilir antrenman platformu web sitesi.

> **Akademik Bildirim**: GLOWFIT, üniversite dersi ödevi için hazırlanmış kurgusal bir markadır. Gerçek ticari spor salonu işletmesi, üyelik satışı veya fiziksel hizmet sunulmamaktadır.

---

## ⚡ Özellikler ve Tasarım Sistemi

- **Tasarım Dili**: Premium grafit ve koyu siyah tonlar (`#08090b`), tek odak noktası fosfor pembe vurgu (`#ff2d95`), Google Fonts Montserrat tipografisi ve yalnızca butonlara uygulanan hafif neon ışıma.
- **Şeffaf ve Yapışkan Başlık (Header)**: Sayfa başında şeffaf, kaydırma sonrası koyu arka planlı ve yapışkan (sticky) navigasyon. Programlar, İletişim bağlantıları, erişilebilir mobil hamburger menü ve demo üye girişi butonu.
- **Tam Ekran Hero**: `/public/hero.mp4` mevcutsa otomatik oynatılan döngüsel video (sessiz, loop, playsinline, `prefers-reduced-motion` destekli), video bulunmadığında `/public/gym-1.jpg` koyulaştırılmış afiş arka planı. "Sınırlarını Yeniden Tanımla." sloganı ve aksiyon butonları.
- **12 Filtrelenebilir Antrenman Kartı**:
  - **Hedef Filtresi**: Tümü, Kilo Verme, Kas Geliştirme, Esneklik, Kondisyon
  - **Zorluk Filtresi**: Tümü, Başlangıç (🔥), Orta (🔥🔥), İleri (🔥🔥🔥)
  - Her kartta görsel (gym-1, gym-2, gym-3 farklı kırpma ve tonlama ile), süre, zorluk seviyesi ve hedef rozeti.
  - Hover / focus durumunda "Programı İncele" butonu.
  - Egzersiz isimleri, günleri, set ve tekrar sayılarını içeren haftalık plan modal penceresi.
  - Filtre eşleşmediğinde kullanıcı dostu "Sonuç bulunamadı" boş durum ekranı.
- **İletişim & Deneme Dersi Formu**: Türkçe etiketler, anlık form doğrulama (validation) ve istemci taraflı başarı bildirimi.
- **Sağlık & Tıbbi Tavsiye Uyarısı**: Programların genel bilgilendirme amaçlı olduğunu belirten tıbbi sorumluluk reddi beyanı.
- **Sıfır Arka Uç / Sıfır Veritabanı**: Tamamen statik, güvenli ve Vercel Edge üzerinde hızla çalışacak şekilde optimize edilmiştir.
- **Erişilebilirlik & Performans**: Semantik HTML5 (`lang="tr"`), ARIA etiketleri, klavye odak halkaları, skip link ve yüksek kontrast.

---

## 🛠 Teknoloji Yığını

- **Geliştirme Aracı**: [Vite](https://vitejs.dev/)
- **Frontend**: Vanilla JavaScript (ES modülleri), Semantik HTML5, CSS3 (CSS Değişkenleri, CSS Grid, Flexbox)
- **Görseller**: Unsplash ve Pexels kaynaklı serbest lisanslı spor salonu fotoğrafları (`/public/gym-1.jpg`, `gym-2.jpg`, `gym-3.jpg`).

---

## 💻 Yerel Geliştirme (Local Development)

1. **Bağımlılıkları yükleyin**:
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın**:
   ```bash
   npm run dev
   ```

3. **Üretim sürümünü derleyin (Production Build)**:
   ```bash
   npm run build
   ```

4. **Derlenmiş sürümü önizleyin**:
   ```bash
   npm run preview
   ```

---

## 🚀 Vercel Dağıtım Adımları (Vercel Web Deployment)

1. **Git Değişikliklerini Kaydedin**:
   ```bash
   git add .
   git commit -m "feat: complete GLOWFIT modern gym platform rebuild"
   ```

2. **GitHub Deposuna Gönderin**:
   ```bash
   git push origin main
   ```

3. **Vercel Üzerinde Yayınlayın**:
   - [vercel.com](https://vercel.com) paneline gidin.
   - GitHub ile bağlı `fitness-site` projesini seçin veya yeni proje olarak bağlayın.
   - Vite çerçevesi otomatik olarak algılanır:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - **Deploy** butonuna tıklayarak yayına alın.
