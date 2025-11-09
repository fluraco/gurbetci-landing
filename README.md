# 🚀 Gurbetci SuperApp - Landing Page

Modern ve şık landing page tasarımı. **Mainline Next.js Template** temel alınarak, Gurbetci SuperApp için özelleştirilmiştir.

## ✨ Özellikler

- 🎨 Modern ve minimal tasarım (Mainline template)
- 📱 Tam responsive (mobil odaklı)
- ⚡ Blazing fast performance
- 🎭 Smooth animasyonlar (Framer Motion)
- 🌙 Dark mode desteği
- ♿ Erişilebilir (A11y)
- 🔍 SEO optimize edilmiş
- 💅 Letter spacing -50 (tüm projede)

## 🛠️ Teknolojiler

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - UI component library
- **TypeScript** - Type safety
- **DM Sans & Inter** - Professional fonts
- **Lucide React** - Modern iconlar

## 📦 Kurulum

### 1. Dependencies Kur

```bash
cd gurbetci-landing-mainline
npm install
```

### 2. Development Server Başlat

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Build

Production build oluşturmak için:

```bash
npm run build
npm start
```

## 🌐 Vercel Deployment

### Option 1: Vercel CLI (Önerilen)

```bash
# Vercel CLI kur
npm i -g vercel

# Deploy et
cd gurbetci-landing-mainline
vercel

# Production için
vercel --prod
```

### Option 2: Vercel Dashboard

1. [vercel.com/new](https://vercel.com/new) adresine gidin
2. GitHub repository'nizi bağlayın
3. Projeyi import edin
4. Deploy edin

## 📱 Bölümler

### Hero Section
- Modern başlık ve açıklama
- CTA butonları (App Store & Google Play)
- İstatistikler (10K+ kullanıcı, 5K+ ilan, 1K+ mekan)
- Özellik listesi (Haberler, İlanlar, Mekanlar, Forum)

### Features Section
- 8 özellik kartı (gradient iconlar)
- Hover efektleri
- Responsive grid layout

### App Preview Section
- 4 uygulama ekranı mockup'ı
- Gradient phone mockups
- Hover glow efektleri

### FAQ Section
- Accordion component
- Sık sorulan sorular

### CTA Section
- Download butonları (App Store & Google Play)
- Trust indicators (4.8 rating, 10K+ downloads, 99% satisfaction)

### Footer
- Logo ve açıklama
- İletişim bilgileri
- Link grupları (Ürün, Şirket, Destek)
- E-posta bülteni formu
- Sosyal medya linkleri

## 🎨 Özelleştirme

### Renk Paleti

`src/styles/globals.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
  --primary: oklch(...);
  --secondary: oklch(...);
}
```

### İçerik Değişikliği

- **Hero:** `src/components/blocks/hero-gurbetci.tsx`
- **Features:** `src/components/blocks/features-gurbetci.tsx`
- **App Preview:** `src/components/blocks/app-preview-gurbetci.tsx`
- **CTA:** `src/components/blocks/cta-gurbetci.tsx`
- **Footer:** `src/components/blocks/footer-gurbetci.tsx`
- **Navbar:** `src/components/blocks/navbar-gurbetci.tsx`

### App Store/Google Play Linkleri

`src/components/blocks/cta-gurbetci.tsx` ve `src/components/blocks/navbar-gurbetci.tsx` dosyalarındaki `href="#"` kısımlarını gerçek store linkleriyle değiştirin.

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎯 Core Web Vitals: Excellent
- 📦 Bundle Size: Optimized (121 kB First Load JS)
- 🚀 Static Generation

## 🔧 Komutlar

```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Start production server
npm run lint         # ESLint check
```

## 📝 Template Hakkında

Bu landing page, [Mainline Next.js Template](https://github.com/shadcnblocks/mainline-nextjs-template) temel alınarak oluşturulmuştur.

**Mainline Template Credits:**
- Design: Callum Flack
- Development: Yassine Zaanouni
- Producer: Rob Austin
- From: [shadcnblocks.com](https://www.shadcnblocks.com)

## 📄 Lisans

MIT License

## 👨‍💻 Gurbetci SuperApp Team

**Version 1.0 - Gurbetci Landing Page**

Powered by Next.js 15 & Vercel ⚡

---

## 🆘 Troubleshooting

### Build Hatası

```bash
# Cache'i temizle
rm -rf .next
npm run build
```

### Type Hatası

`tsconfig.json` dosyasında `skipLibCheck: true` olduğundan emin olun.

### Port Çakışması

```bash
# Farklı port kullan
PORT=3001 npm run dev
```

---

**🚀 Deployment başarılar dilerim!**
