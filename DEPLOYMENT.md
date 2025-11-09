# 🚀 Vercel Deployment Rehberi

## 📋 Hızlı Başlangıç

### 1️⃣ Vercel CLI (En Hızlı - 3 Dakika)

```bash
# 1. Vercel CLI yükle
npm i -g vercel

# 2. Proje dizinine git
cd /Users/YedekHesap/Desktop/projects/gurbetci-landing-mainline

# 3. Deploy!
vercel

# İlk deployment için:
# - Email/GitHub ile giriş yap
# - "Set up and deploy?" → YES  
# - Project name: gurbetci-landing
# - Diğer ayarlar → ENTER (default)

# Production deploy
vercel --prod
```

✅ **Deploy tamamlandı!** URL'nizi alacaksınız: `https://gurbetci-landing-xxx.vercel.app`

---

### 2️⃣ Vercel Dashboard (5 Dakika)

#### a) GitHub'a Push

```bash
cd /Users/YedekHesap/Desktop/projects/gurbetci-landing-mainline

# Git init
git init
git add .
git commit -m "🚀 Gurbetci Landing Page"

# GitHub'da yeni repo oluştur, sonra:
git remote add origin https://github.com/KULLANICI_ADINIZ/gurbetci-landing.git
git branch -M main
git push -u origin main
```

#### b) Vercel'de Import

1. 🌐 [vercel.com/new](https://vercel.com/new) - Vercel'e git
2. ➕ "Import Git Repository"
3. 🔗 GitHub bağla
4. 📁 Repository'i seç
5. ⚙️ Settings otomatik (Next.js 15)
6. 🚀 "Deploy"

**✅ 2-3 dakika içinde hazır!**

---

## 🔧 Custom Domain

### Vercel Dashboard'dan:

1. Project → Settings → Domains
2. "Add Domain"
3. Domain gir: `gurbetci.app`
4. DNS ayarları:

```
A Record:
Name: @
Value: 76.76.21.21

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

5. ✅ 30 dakika - 24 saat içinde aktif
6. 🔒 SSL otomatik

---

## 📱 App Store / Play Store Linkleri

### Güncelleme Yerleri:

1. **CTA Section**: `src/components/blocks/cta-gurbetci.tsx`
   - Satır 22: `<a href="#">` → `<a href="https://apps.apple.com/...">`
   - Satır 37: `<a href="#">` → `<a href="https://play.google.com/...">`

2. **Navbar Mobile Menu**: `src/components/blocks/navbar-gurbetci.tsx`
   - Satır 137: App Store link
   - Satır 143: Google Play link

3. **Hero Section**: `src/components/blocks/hero-gurbetci.tsx`
   - Satır 52: App Store CTA
   - Satır 64: Google Play CTA

### Environment Variables (Opsiyonel)

Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/gurbetci/id...
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.gurbetci
```

Sonra kodda `process.env.NEXT_PUBLIC_APP_STORE_URL` kullan.

---

## 🎨 İçerik Özelleştirme

### Logo Değiştirme

**Navbar**: `src/components/blocks/navbar-gurbetci.tsx` (Satır 60-66)
**Footer**: `src/components/blocks/footer-gurbetci.tsx` (Satır 36-45)

### Renk Paleti

`src/styles/globals.css` - Satır 8-102

```css
:root {
  --primary: oklch(...);
  --secondary: oklch(...);
}
```

### Meta Tags

`src/app/layout.tsx` - Satır 64-124

```typescript
export const metadata: Metadata = {
  title: "Gurbetci SuperApp...",
  description: "...",
}
```

---

## 📊 Analytics Ekleme

### Vercel Analytics (Ücretsiz)

```bash
npm i @vercel/analytics
```

`src/app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

Environment Variables:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🐛 Sorun Giderme

### Build Hatası

```bash
# Cache temizle
rm -rf .next
npm run build
```

### Vercel CLI Login

```bash
vercel logout
vercel login
```

### Domain SSL

- DNS kayıtlarını kontrol et
- 24 saat bekle
- Vercel support'a ticket aç

---

## 📝 Deployment Checklist

- [ ] Local'de test (`npm run dev`)
- [ ] Build başarılı (`npm run build`)
- [ ] Git repository oluşturdum
- [ ] Vercel'e deploy ettim
- [ ] Site açılıyor
- [ ] Custom domain ekledim (opsiyonel)
- [ ] App Store/Play Store linkleri güncelledim
- [ ] Analytics ekledim (opsiyonel)
- [ ] Meta tags/SEO kontrol ettim

---

## 🎯 Proje Konumu

```
/Users/YedekHesap/Desktop/projects/gurbetci-landing-mainline
```

**Komutlar:**
```bash
npm run dev    # Development (localhost:3000)
npm run build  # Production build
npm start      # Production server
npm run lint   # Code quality
```

**Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 💰 Maliyetler

### Hobby Plan (Ücretsiz)
- 100 GB bandwidth/ay
- Sınırsız deployment
- SSL sertifikası
- Otomatik HTTPS

### Pro Plan ($20/ay)
- 1TB bandwidth
- Team collaboration
- Advanced analytics
- Password protection

---

## 📚 Kaynaklar

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Mainline Template](https://github.com/shadcnblocks/mainline-nextjs-template)
- [shadcn/ui](https://ui.shadcn.com)

---

**🚀 Happy Deploying!**

Hazırlayan: Gurbetci SuperApp Team

