# Bilge Beauty — Claude Code Kılavuzu

Bu dosya, Claude Code ile projeyi yönetmek için kapsamlı bir rehberdir.

## Proje Özeti

**Bilge Beauty** — İzmir merkezli lüks güzellik salonu web sitesi.
- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **GitHub:** https://github.com/emincanaktepe02-byte/bilgebeuty
- **Vercel:** https://bilge-beauty.vercel.app
- **Instagram:** https://www.instagram.com/bilge_beautyy/
- **Tel:** 0534 417 83 70

---

## Proje Yapısı

```
bilge-beauty/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Ana sayfa (tüm bölümleri compose eder)
│   │   ├── layout.tsx            # Root layout, Cormorant + DM Sans fontları
│   │   ├── globals.css           # Design token'lar, CSS animasyonları
│   │   └── api/
│   │       └── appointment/
│   │           └── route.ts      # Randevu API endpoint'i (POST)
│   └── components/
│       ├── Navbar.tsx            # Sabit üst navbar, scroll-aware
│       ├── Hero.tsx              # Tam ekran hero, video + CSS orb animasyonu
│       ├── Services.tsx          # 6 hizmet kartı (grid)
│       ├── About.tsx             # Hakkımızda + istatistikler
│       ├── Appointment.tsx       # Randevu formu (form state + API çağrısı)
│       ├── Reviews.tsx           # Müşteri yorumları
│       ├── Location.tsx          # Google Maps embed + çalışma saatleri
│       ├── Footer.tsx            # Footer
│       └── InstagramFloat.tsx    # Sağ alt köşe Instagram butonu
├── scripts/
│   └── generate-media.mjs       # FAL AI görsel + video üretim scripti
├── public/
│   ├── videos/                   # hero-video-1.mp4, hero-video-2.mp4, hero-video-3.mp4
│   └── images/                   # hero-frame-1.png, hero-frame-2.png, hero-frame-3.png
├── .env.local                    # FAL_KEY (git'e dahil edilmez)
└── .env.example                  # Örnek env dosyası
```

---

## Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start

# FAL AI ile medya üret (bakiye gerektirir)
npm run generate:media

# Vercel'a deploy et
npx vercel --prod

# TypeScript kontrolü
npx tsc --noEmit
```

---

## Ortam Değişkenleri

`.env.local` dosyasına ekle (git'e dahil edilmez):

```env
FAL_KEY=your_fal_key_here
NEXT_PUBLIC_FAL_KEY=your_fal_key_here
```

> Gerçek key `.env.local` dosyasında saklıdır ve git'e dahil edilmez.

Vercel'da env değişkenlerini kontrol et:
```bash
npx vercel env ls
```

---

## FAL AI Medya Üretimi

### Durum
FAL AI hesabı bakiyesi tükenmiş durumda. [fal.ai/dashboard/billing](https://fal.ai/dashboard/billing) adresinden bakiye yükledikten sonra:

```bash
FAL_KEY=your_key npm run generate:media
```

### Kullanılan Modeller
- **Görsel üretimi:** `fal-ai/nano-banana-2` (2K çözünürlük, 16:9)
- **Video dönüşümü:** `fal-ai/kling-video/v3/pro/image-to-video` (5 saniye, 16:9)

### Görsel Prompt
```
Luxury beauty laboratory of the future, transparent glass architecture floating in a white infinite space, liquid gold and pearl essence suspended in mid-air, ultra minimal luxury skincare branding aesthetic, soft sunlight, premium cosmetic advertisement, Dior and Chanel inspired elegance, pristine environment, cinematic lighting, luxury editorial photography, photorealistic, 8K
```

### Video Motion Prompt
```
The camera slowly glides through the floating luxury environment. Liquid gold and pearl essence gracefully orbit and merge. Light rays softly travel through transparent glass structures. Everything moves with refined elegance and precision. Premium luxury skincare commercial, sophisticated cinematic motion, slow camera dolly, mesmerizing atmosphere, high-end beauty campaign, luxury brand reveal.
```

### Üretilen dosyalar nereye gider?
```
public/images/hero-frame-1.png  (Nano Banana 2 çıktısı)
public/images/hero-frame-2.png
public/images/hero-frame-3.png
public/videos/hero-video-1.mp4  (Kling 3.0 Pro çıktısı)
public/videos/hero-video-2.mp4
public/videos/hero-video-3.mp4
```

Hero component (`src/components/Hero.tsx`) bu dosyaları otomatik olarak kullanır. Videolar yokken güzel CSS animasyonu gösterir.

---

## Hero Section Mantığı

`Hero.tsx` üç katmandan oluşur:

1. **CSS Orb Animasyonu** (her zaman gösterilir) — Dört adet yüzen altın/inci/gül rengi ışık topu
2. **Video Katmanı** (video dosyaları varsa) — `public/videos/hero-video-*.mp4` oynatılır, yüklenince smooth fade-in
3. **İçe Maskeleme** — Alt kenar sitenin arka planına (`#FAF8F5 cream`) doğru fade ederek çakışmayı önler

---

## Tasarım Sistemi

### Renk Paleti (globals.css CSS variables)
```
--gold:         #C9A96E  (birincil altın)
--gold-light:   #E8D5B0
--gold-dark:    #A07840
--cream:        #FAF8F5  (arka plan)
--cream-dark:   #F0EDE8
--rose:         #E8B4A0
--charcoal:     #1A1A1A  (ana metin)
```

### Tipografi
- **Başlıklar:** Cormorant Garamond (`var(--font-cormorant)`) — luxury editorial
- **Gövde:** DM Sans (`var(--font-dm-sans)`) — modern, okunabilir

### Taste-Skill Dial Değerleri (Anti-Slop Design)
- `DESIGN_VARIANCE: 7` — Premium consumer luxury
- `MOTION_INTENSITY: 6` — Zarif, sinematik hareket
- `VISUAL_DENSITY: 3` — Nefes alan, temiz düzen

---

## Bölümler ve Düzenleme

### Hizmetleri Güncelleme
`src/components/Services.tsx` — `services` dizisini düzenle (satır ~1-40)

### Yeni Müşteri Yorumu Ekle
`src/components/Reviews.tsx` — `reviews` dizisine nesne ekle

### Randevu Bildirimi
`src/app/api/appointment/route.ts` — Şu anda konsola log atıyor. E-posta entegrasyonu için:
```bash
npm install resend
```
Sonra route.ts'de yorum satırlarını aç.

### Çalışma Saatlerini Değiştir
`src/components/Location.tsx` — satır ~80-90 arası dizi

### Google Maps Yerini Güncelle
`src/components/Location.tsx` — iframe `src` attribute'u

---

## Deployment

### GitHub'a push
```bash
git add -A
git commit -m "değişiklik açıklaması"
git push origin master
```

Push sonrası Vercel otomatik deploy yapar (GitHub entegrasyonu bağlı).

### Manuel Vercel deploy
```bash
npx vercel --prod
```

### Vercel env değişkeni ekle
```bash
npx vercel env add FAL_KEY production --value "your_key" --yes
```

---

## Sık Yapılan Değişiklikler

### Telefon numarasını değiştir
`src/components/Appointment.tsx` ve `src/components/Location.tsx` ve `src/components/Footer.tsx`'da ara — `0534 417 83 70`

### Instagram linkini değiştir
Tüm dosyalarda `bilge_beautyy` ifadesini ara:
```bash
grep -r "bilge_beautyy" src/
```

### Yeni hizmet ekle
1. `src/components/Services.tsx` → `services` dizisine nesne ekle
2. `src/components/Appointment.tsx` → `services` listesine ekle

### Hero animasyon renklerini değiştir
`src/app/globals.css` — `@keyframes float-orb-*` bölümleri

---

## Notlar

- `.env.local` git'e **dahil edilmez** (gitignore'da)
- `public/videos/*.mp4` git'e **dahil edilmez** (FAL AI ile üretilir)
- Vercel'da FAL_KEY production ortam değişkeni olarak ayarlı
- Google Maps embed koordinatları: `38.2276638, 27.9814248`
