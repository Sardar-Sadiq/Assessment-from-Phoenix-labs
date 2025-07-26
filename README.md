
# 🩺 ACME Patient Dashboard

A responsive, interactive **patient portal dashboard** built for Acme Corp’s GLP-1-based weight-loss platform. This web-based solution enables users to securely log in, track weight-loss progress, view BMI trends, and monitor upcoming medication shipments.

---

## 🚀 Features

- 🔐 **Secure Login:** Simple username/password-based authentication using local data (mock).
- 📊 **Dashboard Overview:** Summary cards for current weight, goal progress, and next shipment.
- 📈 **Progress Tracking:** Line charts for weight & BMI history using Recharts.
- 💊 **Medication Shipments:** Full shipment history with medication, dosage, and tracking.
- 🧑‍⚕️ **Personalization:** User avatar, full name, and progress displayed dynamically per user.

---

## 🛠️ Tech Stack

Built using modern frontend tooling:

- ⚡ **Vite** — Lightning-fast development build tool
- ⚛️ **React** — Component-based UI library
- 🧩 **shadcn/ui** — Reusable and accessible component library (stored in `@/components/ui`)
- 🎨 **Tailwind CSS** — Utility-first CSS for styling
- 📦 **Lucide React** — Icon library for UI
- 💬 **Sonner** — Toast notifications for feedback
- 📉 **Recharts** — Charting library for progress visualization
- 🗂️ **LocalStorage** — Used for storing current logged-in user info

---

## 🧱 Folder Structure

```
src/
├── components/
│   └── ui/         # All shadcn-ui components
├── data/           # Mock users and patient data
├── pages/          # Page components (Dashboard, Login, Progress, etc.)
├── routes/         # Route definitions using React Router
├── lib/            # Utility functions
├── App.jsx         # Main app wrapper
└── index.css       # Global Tailwind styles
```

---

## 🧑‍💻 Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### 🚀 Start Dev Server

```bash
npm run dev
```

### 🛠️ Build for Production

```bash
npm run build
```

---

## ✨ Notes

- The path alias `@/` points to the `src/` directory.
- The login is based on mock credentials located in `src/data/users.js`.
- No backend or real authentication is implemented—this is a **prototype** only.

---

## 📁 System Design & Figma

- **Figma Mockups:** Login, Dashboard, Progress & Shipments views
- **Architecture Plan:** Tech choices and justifications (frontend, mock API, storage, charts)
- [✔️ Include system design doc and Figma link separately in submission]

---

## 📬 Submission Guidelines (Per Assessment)

1. ✅ Submit the GitHub repo link with this README.
2. ✅ Share your Figma file link.
3. ✅ Attach system design document or link.
4. ✅ Optionally demonstrate the prototype running locally during the interview.

---

## 💡 Tip

This prototype focuses on usability, clean design, and clarity. While mock data is used, the architecture is designed with **scalability and real-world use cases** in mind.
# ACME Patient Dashboard

A modern frontend patient portal built using React, Vite, Tailwind CSS, and ShadCN UI. This project simulates a real-world weight tracking and medication shipment dashboard for patients.

---

## 📌 Project Overview

This dashboard enables users (patients) to:
- Track weight and BMI progress
- Visualize their journey with charts
- Monitor upcoming and past shipments
- View personalized data and progress insights

The application currently runs with mock data and localStorage-based login for demo purposes.

---

## 🧰 Technology Stack

This project is built with:

- React (JavaScript)
- Vite
- Tailwind CSS
- ShadCN UI (Radix + Tailwind-based components)
- Recharts (Charts & Graphs)
- React Router DOM
- Lucide React (Icons)
- Sonner (Toasts)

---

## 📁 Folder Structure

```
src/
├── assets/              → Images, logos, etc.
├── components/          → Custom + ShadCN UI components
├── data/                → Mock data (users, patientData)
├── lib/                 → Utilities, helpers
├── pages/               → Route-based pages (Dashboard, Progress, etc.)
├── routes/              → All route declarations
├── App.jsx              → Main app layout
├── main.jsx             → Entry point
└── index.css            → Global styles (Tailwind)
```

---

## 🚀 Getting Started

### 1. Clone and install dependencies:
```bash
npm install
```

### 2. Start the development server:
```bash
npm run dev
```

### 3. To build for production:
```bash
npm run build
```

---

## ✨ Features

- 🔒 Login simulation using localStorage
- 📊 Weight & BMI progress visualized using charts
- 🚚 Shipment tracker
- 📁 Clean and modular file structure
- 📱 Fully responsive layout (mobile-friendly)
- 🎨 Fully styled with Tailwind + ShadCN components

---

## 🧠 Mock Data

All mock data is located in `src/data/`
- `users.js`: login credentials and user profile
- `patientData.js`: health and progress records

---

## 📦 Components

All reusable UI components from ShadCN are located in:
```js
@/components/ui/
```
Import them like:
```js
import { Button } from "@/components/ui/button"
```

---

## 📝 Notes

- The alias `@/` points to the `src/` directory
- All charts are powered by Recharts
- BMI color indicators follow WHO guidelines

---

## 🧱 System Design Reference

Refer to the [System Design Document](#) for a complete breakdown of:
- App architecture
- Data flow
- UI structure
- Security considerations
- Future plans

---

## 📌 License
This project is intended for demo and educational purposes only.

---

Feel free to fork, modify, and build upon it!
