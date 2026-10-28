# PulseFit Studio

A responsive, accessible frontend website for **PulseFit Studio**—a fictional fitness studio designed for beginners and intermediate trainees aged 18–35.

> **Academic Notice**: PulseFit Studio is a fictional brand created exclusively for a university course assignment. No real commercial gym services, memberships, or classes are offered.

---

## 🏋️ Features & Sections

- **Single-Page Navigation**: Sticky header with responsive mobile hamburger drawer.
- **Hero**: Clear value proposition tailored to 18–35 beginners/intermediates with primary CTA *"Book a Free Trial Class"*.
- **Programs**: Strength (Foundations & lifting), Cardio (Interval conditioning), and Yoga/Mobility (Recovery & flexibility).
- **Weekly Schedule**: Accessible timetable table covering morning, midday, and evening slots.
- **About the Studio**: Honest, unpretentious philosophy focusing on habit formation and safe progression without fabricated claims.
- **Contact**: Frontend-only booking form with client-side validation and simulated instant confirmation.
- **Design System**: Dark charcoal palette (`#0f1013`, `#16181d`), clean white typography (`#ffffff`), and high-voltage electric lime (`#ccff00`).

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
   git commit -m "feat: complete initial PulseFit Studio single-page website"
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
