# GLOWFIT

A responsive, accessible frontend website for **GLOWFIT**—an elegant, fictional fitness studio designed for beginners and intermediate trainees aged 18–35.

> **Academic Notice**: GLOWFIT is a fictional brand created exclusively for a university course assignment. No real commercial gym services, memberships, or classes are offered.

---

## 🏋️ Features & Sections

- **Single-Page Navigation**: Sticky header with responsive mobile hamburger drawer.
- **Hero**: Clear value proposition tailored to 18–35 beginners/intermediates with primary CTA *"Book a Free Trial Class"* and decorative blurred background (`/public/gym-1.jpg`).
- **Programs**: Strength (Foundations & lifting), Cardio (Interval conditioning), and Yoga/Mobility (Recovery & flexibility) presented on subtle translucent dark glass cards with decorative background (`/public/gym-2.jpg`).
- **Weekly Schedule**: Accessible timetable table covering morning, midday, and evening slots.
- **About the Studio**: Honest, unpretentious philosophy focusing on habit formation and safe progression without fabricated claims, set against a blurred background (`/public/gym-3.jpg`).
- **Contact**: Frontend-only booking form with client-side validation and simulated instant confirmation.
- **Design System**: Elegant, premium and minimal palette of near-black (`#090a0d`), deep graphite tones, translucent dark glass surfaces, crisp white typography (`#ffffff`), and one electric phosphor pink accent (`#ff2d95`) for buttons, active states, small labels, and subtle glows.
- **Photo Credits**: Background photos from Unsplash.

---

## 🛠 Tech Stack

- **Tooling**: [Vite](https://vitejs.dev/)
- **Frontend**: Vanilla JavaScript (ES Modules), Semantic HTML5, Plain CSS3 (CSS Variables, Flexbox, CSS Grid)
- **Zero Backend / Zero Database**: Fully static and secure for Vercel edge deployment.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Vercel Deployment Instructions

1. **Initialize Git repository & commit**:
   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "feat: complete initial GLOWFIT single-page website"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/fitness-site.git
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Select your `fitness-site` repository.
   - Vercel automatically detects the **Vite** framework preset:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click **Deploy**.
