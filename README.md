# GLOWFIT

GLOWFIT, YZO 205 Operasyonel Yapay Zeka dersi Assignment-1 kapsamında hazırlanmış **kurgusal** bir spor salonu üyelik platformu web sitesidir. Gerçek bir marka veya hizmet değildir.

## Canlı Site (Production)

https://fitness-site-roan-six.vercel.app

## Amaç

Yeni başlayanların ve orta seviyedeki sporcuların hedeflerine ve zorluk derecelerine göre antrenman programı bulabildiği, programları inceleyip deneme dersi için iletişime geçebildiği modern bir tanıtım ve üyelik sitesi tasarlamak.

## Hedef Kullanıcı

18-35 yaş arası, düzenli spora yeni başlayan veya spora geri dönen kişiler.

## Özellikler

- Hero alanı ve "Hemen Üye Ol" çağrı butonu
- Hedefe (kilo verme, kas geliştirme, esneklik, kondisyon) ve zorluk derecesine göre filtrelenebilir 12 program kartı
- Program detay penceresi: haftalık plan, hareketler, set ve tekrar sayıları
- Doğrulamalı iletişim formu (yalnızca ön yüz, veri gönderilmez ve saklanmaz)
- Üye Girişi penceresi (demo, gerçek hesap sistemi yoktur)
- Mobil uyumlu tasarım, sabit menü, erişilebilirlik ve temel SEO

## Kullanılan AI Coding Agent

Google Antigravity (Gemini modeli). Depodaki `.agents/skills/vercel-web-deployment/SKILL.md` dosyası agent'a deployment kurallarını verir.

## Teknoloji

- Vite
- HTML, CSS, vanilla JavaScript
- Git ve GitHub (sürüm kontrolü)
- Vercel (build ve hosting)

Arka uç (backend) veya veritabanı kullanılmamıştır.

## Bilgisayarda Çalıştırma

    npm install
    npm run dev

Tarayıcıda terminalin verdiği adresi açın (genellikle http://localhost:5173/). Production build için:

    npm run build

## Yayın Süreci

Kod Git ile sürümlenir, GitHub'a push edilir. Vercel, `main` dalını izler ve her push'ta otomatik olarak build alıp canlıya yayınlar.

## Not

GLOWFIT, üniversite dersi ödevi için hazırlanmış kurgusal bir markadır. Program içerikleri genel bilgi amaçlıdır, tıbbi tavsiye değildir. Fotoğraflar Unsplash ve Pexels kaynaklıdır.
