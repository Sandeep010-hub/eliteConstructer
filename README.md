# 🏗️ Elite Construction & Design

[![Website](https://img.shields.io/website?url=https%3A%2F%2Feliteconstruct.netlify.app&label=Live%20Demo&style=for-the-badge)](https://eliteconstruct.netlify.app)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06b6d4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

> A world-class responsive website for a modern construction & design company, built with **React 18 + TypeScript + Vite + Tailwind CSS**, featuring animations, accessibility, SEO optimization, and a multi-step quote form.

---

## 🚀 Demo

🔗 Live Website: **[eliteconstruct.netlify.app](https://eliteconstruct.netlify.app)**

---

## ✨ Features

- ⚡ **React 18 + Vite** for lightning-fast builds & HMR.
- 🎨 **Tailwind CSS + custom theme** for scalable design.
- 🎬 **Framer Motion** animations for smooth UI transitions.
- 🧩 **Headless UI** accessible components.
- 📝 **Multi-step quote form** with validation (React Hook Form + Yup).
- 🖼️ **Project gallery with filtering** & lazy-loaded images.
- 📱 100% **responsive & mobile-first** design.
- ♿ **Accessibility-first** (ARIA labels, keyboard nav, focus states).
- 🔍 SEO-ready: meta tags, OpenGraph, structured data placeholders.
- ✅ Configured with **ESLint + Prettier + TypeScript strict mode**.
- 🔧 Ready for **Netlify/Vercel deployment** with CI/CD pipeline.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite  
- **Styling**: Tailwind CSS, Headless UI, custom design tokens  
- **Animations**: Framer Motion  
- **Forms**: React Hook Form + Yup  
- **Routing**: React Router  
- **Testing**: Vitest + React Testing Library  
- **CI/CD**: GitHub Actions (example)  
- **Hosting**: Netlify  

---

## 📂 Project Structure

/src
/assets # images, svgs, icons
/components # reusable UI components
/layouts # layout wrappers
/pages # route components (Home, Projects, Contact)
/hooks # custom hooks
/lib # helpers, constants
/services # api / form services
/styles # global styles, tailwind config
App.tsx
main.tsx
tailwind.config.ts
vite.config.ts
tsconfig.json

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Sandeep010-hub/eliteConstructer.git
cd eliteConstructer
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Run development server

```bash
npm run dev
```
App will run on http://localhost:5173.

### 4️⃣ Build for production

```bash
npm run build
```

### 5️⃣ Preview production build

```bash
npm run preview
```

---

## 🌍 Environment Variables

Create a .env file in project root:

```bash
VITE_API_BASE_URL=https://api.example.com
VITE_FORM_ENDPOINT=/api/contact
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXX
```

---

## 🧪 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext .ts,.tsx",
  "format": "prettier --write .",
  "test": "vitest run",
  "typecheck": "tsc --noEmit"
}
```

---

## 📈 Lighthouse Targets

- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 90

---

## 🤝 Contributing

- Fork repo & create a feature branch
- Commit changes with clear messages
- Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👤 Author

**Yaswanth Sai Sandeep Kalagatla**  
📧 saisandeepkalagatla@gmail.com  
🔗 [GitHub](https://github.com/Sandeep010-hub) | [LinkedIn](https://linkedin.com/in/saisandeepkalagatla)