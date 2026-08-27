# ⚡ MentorSphere — Premium Anime-Style College Mentorship & Knowledge Network

<div align="center">
  <h3>"Connect. Learn. Grow Together."</h3>
  <p>A cinematic, privacy-first, topic-channel mentorship ecosystem connecting <strong>Juniors</strong>, <strong>Seniors</strong>, and <strong>Alumni</strong> in engineering colleges.</p>
</div>

---

## 🌟 Key Features

- **🎬 Apple-Style Cinematic Landing Page**: Fluid scroll storytelling, procedural neural particle canvas, ambient AI anime video backgrounds, and interactive video scrubbing dock.
- **🛡️ Privacy-First Public Identity System**: Anonymous cyber codenames (e.g. `KnightRider`, `PixelNinja`, `SolarPriestess`) ensuring anti-bullying and judgment-free discussions. Real student names & emails remain strictly confidential.
- **🎨 Custom Anime Avatar Studio**: 10+ handcrafted SVG anime avatars across diverse cyberpunk and college aesthetics — zero personal photograph uploads required.
- **💬 Topic-Based Channel Networking**: Discussions organized into structured channels (`#dsa`, `#web-dev`, `#ai-ml`, `#placements`, `#internships`, `#cyber-sec`, `#cp`, `#projects`, `#college-life`, `#higher-studies`) rather than noisy feeds.
- **🤖 Pluggable AI Moderation Layer**: Real-time content evaluation service that intercepts abusive or toxic language and prompts respectful peer communication (*"Let's keep MentorSphere respectful. Please rephrase your message."*).
- **👥 Senior & Alumni Mentors Directory**: Multi-skill & role filterable directory (DSA, System Design, ML, Cloud) with ratings, verified company tracks (Google, Microsoft, Atlassian, Amazon), and direct question dispatch.
- **📊 Placement Intelligence Hub**: Transparent placement statistics, package distributions (48.5 LPA highest, 14.2 LPA average), top recruiter directory, and 4-year engineering career roadmap.
- **🧭 Floating Glassmorphic Command Hub**: Collapsible navigation dock with spring animations, dynamic time-based greetings (*"Good Morning / Evening, Bhavini 👋"*), and live metric cards.
- **🌓 Dual Theme Engine**: Seamless toggle between **Dark Cyber Mode** (Deep Navy `#070B14` + Amber/Electric Blue glows) and **Light Crisp Mode** (Clean Pearl Slate + Royal Blue + Sunset Orange).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism & Anime Glow Tokens
- **Animations**: Framer Motion (spring physics, dock layoutId, scroll reveals)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

### Backend
- **Server**: Node.js & Express.js
- **Services**: AI & Pattern-based Content Safety Moderation Engine (`moderationService`)
- **Architecture**: Modular Models, Controllers, Services & Fallback Persistence

---

## 🚀 Quick Start Guide

### 1. Clone or Open the Repository
```bash
git clone <your-repository-url>
cd HelpBar
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 4. (Optional) Run Backend Server
```bash
npm run server
```
The backend API runs on port `5000` with health check at `http://localhost:5000/api/health`.

---

## 📁 Repository Structure

```
HelpBar / mentorsphere/
├── public/
│   ├── media/               # Generated cinematic anime video & still assets
│   │   ├── hero_library.mp4
│   │   ├── career_portal_1.jpeg
│   │   └── career_stepping.jpeg
│   └── favicon.svg
├── server/
│   ├── models/
│   │   └── User.js          # User schema & public codename entity
│   ├── services/
│   │   └── moderationService.js # AI & Rule-based Moderation Engine
│   └── server.js            # Express backend API server
├── src/
│   ├── components/
│   │   ├── auth/            # Login & 5-Step Animated Onboarding Modals
│   │   ├── channels/        # Channel Explorer & Thread Views
│   │   ├── common/          # Anime Avatars, Badges, Toasts & Neural Particle Canvas
│   │   ├── dashboard/       # Dynamic Time Greeting, Metrics, & Snapshot
│   │   ├── discussions/     # Discussion Feed, Modals & AI Moderation Alerts
│   │   ├── landing/         # Apple-Style Cinematic Hero, Scroll Story & Footer
│   │   ├── layout/          # Floating Glassmorphic Sidebar, TopBar & Notifications
│   │   ├── mentors/         # Senior & Alumni Mentors Directory & Doubt Dispatch
│   │   ├── placements/      # Placement Analytics & CTC Trends
│   │   └── profile/         # Student Cyber Profile & Customizer
│   ├── context/
│   │   ├── AuthContext.jsx  # Multi-role Demo Switchers & Auth State
│   │   ├── ThemeContext.jsx # Dark / Light Theme Controller
│   │   └── NotificationContext.jsx
│   ├── data/
│   │   ├── animeAvatars.jsx # 10+ Vector Anime Avatars with SVGs
│   │   ├── codenameGenerator.js # Unique Anonymous Codename Generator
│   │   └── mockData.js      # Seed Channels, Discussions, Mentors & Placements
│   ├── styles/
│   │   └── index.css        # Glassmorphic, glowing, & cyber tokens
│   ├── App.jsx              # Main App Container & Router
│   └── main.jsx             # React Entry Point
├── index.html
├── package.json
└── vite.config.js
```

---

## 📤 How to Push to Your GitHub Account

Run the following commands in this directory:

```bash
# 1. Add your GitHub repository as remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# 2. Set default branch to main
git branch -M main

# 3. Push to GitHub
git push -u origin main
```

---

## 📜 License
MIT License. Developed for college student communities.
