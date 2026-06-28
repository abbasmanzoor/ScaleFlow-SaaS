````markdown
# 🚀 ScaleFlow – Modern SaaS Platform

<p align="center">
  <img src="./screenshots/landing.png" alt="ScaleFlow Banner" width="100%" />
</p>

<p align="center">
  <strong>A modern, responsive, and feature-rich SaaS platform built with React, TypeScript, Tailwind CSS, and Vite.</strong>
</p>

<p align="center">
  ScaleFlow showcases a professional SaaS landing page, multi-step customer onboarding, an analytics dashboard preview, and various interactive UI components with smooth animations and full responsiveness.
</p>

---

## ✨ Features

### 🌐 Landing Page

The landing page is designed to provide an engaging first impression with modern UI and interactive sections.

- 🚀 Beautiful Hero Section
  - Attractive headline
  - Call-to-Action buttons
  - Trust badges
  - User statistics

- 📊 Product Overview
  - Product highlights
  - Key metrics
  - Visual representation

- ⚡ Interactive Features Section
  - 6 animated feature cards
  - Hover effects
  - Responsive layout

- 💬 Testimonials Slider
  - 8 customer reviews
  - Auto-sliding every 2 seconds
  - Forward & backward loop animation

- 💰 Pricing Plans
  - Starter
  - Professional
  - Enterprise
  - Monthly / Yearly billing toggle

- 🧮 Pricing Calculator
  - Live price estimation
  - User-based pricing
  - Billing cycle support

- ❓ FAQ Section
  - Accordion style
  - 6 frequently asked questions

- 📩 Contact Form
  - Professional design
  - Form validation
  - Toast notifications

- 📌 Footer
  - Dark theme
  - Useful links
  - Copyright

---

## 👤 Customer Onboarding Portal

A complete 5-step onboarding experience.

### Steps

1. Personal Information
2. Company Details
3. Team Setup
4. Select Plan
5. Review & Submit

### Features

- ✅ Multi-step form
- ✅ Progress bar
- ✅ Real-time validation
- ✅ Success page
- ✅ LocalStorage persistence
- ✅ Data recovery after page refresh

---

## 📊 Dashboard Preview

A modern analytics dashboard including:

### Analytics Cards

- Revenue
- Active Users
- New Customers
- Growth Rate

### Recent Activity

- Team activity feed
- User avatars
- Latest updates

### Upcoming Tasks

- High Priority
- Medium Priority
- Low Priority

### User Profile

- Profile information
- Current subscription plan
- Edit profile option

---

## 🎁 Bonus Features

- 🌙 Dark / Light Mode
- 🎨 Theme Customizer
- 🎨 Primary Color Switcher
- 🔤 Font Size Customization
- 📈 Interactive Pricing Calculator
- 🎬 Framer Motion Animations
- 📱 Progressive Web App (PWA)
- ⬆️ Back To Top Button
- 🔔 Toast Notifications
- ⌨️ Keyboard Accessibility
- ♿ Focus Trapping
- 📱 Fully Responsive Design

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| React 18 | UI Library |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router | Routing |
| Framer Motion | Animations |
| Heroicons | Icons |

---

# 📁 Project Structure

```text
src/
│
├── components/
│   ├── dashboard/
│   │   ├── AnalyticsCards.tsx
│   │   ├── RecentActivity.tsx
│   │   ├── UpcomingTasks.tsx
│   │   └── UserProfile.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── onboarding/
│   │   ├── OnboardingLayout.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── Step1_PersonalInfo.tsx
│   │   ├── Step2_CompanyDetails.tsx
│   │   ├── Step3_TeamSetup.tsx
│   │   ├── Step4_SelectPlan.tsx
│   │   ├── Step5_ReviewSubmit.tsx
│   │   └── SuccessPage.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProductOverview.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── PricingCalculator.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── Container.tsx
│       ├── SectionTitle.tsx
│       ├── LoginModal.tsx
│       ├── ThemeCustomizer.tsx
│       └── BackToTop.tsx
│
├── context/
│   ├── ThemeContext.tsx
│   └── ToastContext.tsx
│
├── pages/
│   ├── OnboardingPage.tsx
│   ├── DashboardPage.tsx
│   └── ProfilePage.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js (v16 or above)
- npm or yarn

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to project

```bash
cd scaleflow
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open your browser:

```text
http://localhost:5173
```

---

# 📦 Production Build

Build the project

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 📱 Progressive Web App (PWA)

ScaleFlow includes complete Progressive Web App support.

### Build

```bash
npm run build
```

### Serve

```bash
npx serve -s dist
```

Open:

```
http://localhost:3000
```

Then verify:

Chrome DevTools

Application → Manifest

Application → Service Workers

---

# 🎨 Theme Customizer

Users can personalize the application using the Theme Customizer.

### Available Options

- 🌙 Dark / Light Mode
- 🎨 Primary Color

  - Blue
  - Purple
  - Green
  - Red
  - Amber

- 🔤 Font Size

  - Small
  - Medium
  - Large

All preferences are automatically saved in **LocalStorage** and restored on future visits.

---

# 🛣️ Routes

| Route | Description |
|--------|-------------|
| `/` | Landing Page |
| `/onboarding` | Customer Onboarding |
| `/dashboard` | Dashboard Preview |
| `/profile` | Profile Page |

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m "Add Amazing Feature"
```

4. Push to GitHub

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

# 📄 License

This project was developed as part of the **Teyzix Core Internship (June Batch)** — **Task FE-4**.

---

# 👨‍💻 Author

**Abbas Manzoor**

- GitHub URL:https://github.com/abbasmanzoor/ScaleFlow-SaaS.git
- Email : abbasmanzoor277@gmail.com

---

<p align="center">
Made with ❤️ using React, TypeScript, Tailwind CSS & Vite
</p>
````
