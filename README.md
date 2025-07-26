
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
