# 🚀 Round-1-Task: The Floating Hero Section

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock" alt="GSAP" />
</div>

## 📌 Objective
Replicate the **"Legal Work Platform"** hero section shown in the design screenshot as closely as possible using Next.js. The goal is to build a responsive, visually polished, and highly interactive landing page focusing on pixel-perfect replication, robust component architecture, and advanced animations.

---

## 🎨 Design Assets & Decisions
- **Reference Design**: Chota Landing Page aesthetic.
- **Icons**: High-quality SVG assets structured to mimic the provided design layout (Matters, Documents, Tasks, Billing, Portal).
- **Typography**: Utilizing standard geometric sans-serif fonts natively via Next.js `next/font` for high performance and sleek readability.

---

## 🛠️ Core Requirements & Implementation

### 1. The Layout (CSS Mastery)
- **Split View Architecture**: Precisely engineered a split layout with the core value proposition text on the left and the dynamic "floating elements" visualization on the right.
- **Chaotic but Organized Aesthetic**: The pill cards (Billing, Matters, Tasks, etc.) are exactly positioned and rotated using Tailwind's arbitrary values (e.g., `rotate-[12deg]`, `top-[120px]`).
- **Responsive Constraints**: The layout is fully responsive. On mobile devices, the layout gracefully transforms—floating elements are precisely scaled and stacked to prevent overflow while maintaining the core visual experience without cluttering the screen.

### 2. Component Architecture
- **Reusable `FloatingCard` Component**: Built a modular `<FloatingCard />` that dynamically accepts props for:
  - `color` (Background color)
  - `textColor`
  - `rotation` (Angle of the card)
  - `iconSrc` & `label`
  - `animDelay` (For staggered entrance animations)
- **Special Variant Handling**: The "Vansh Aggarwal - Portal" card requires a fundamentally different layout (incorporating an avatar, an accent bar, and multi-line text). This was elegantly handled using a specific `variant="portal"` slot within the `FloatingCard` component structure to maintain a clean API while supporting complex UI deviations.

### 3. Visual Polish
- **Blurred Background Shapes**: Implemented the subtle, blurred decorative blobs (light blue/dark themed blobs) strategically absolute-positioned behind the content to add depth.
- **Typography Hierarchy**: Meticulously matched the `H1` and subtext contrast, font weights, and tracking to the original design reference.

---

## ⭐ Bonus Features (Extra Marks)

We went above and beyond the core requirements to deliver a premium user experience:

- **🌙 Dark Mode Support**: Fully implemented manual Dark/Light mode toggling using `next-themes` and custom Tailwind v4 variants. The color palette seamlessly shifts to a sleek dark aesthetic, including updating all shadow colors, background blobs, and text gradients.
- **✨ Subtle Animations**: Implemented continuous, buttery-smooth floating/yoyo motion for all elements, alongside interactive hover scale effects that react smoothly to the user's cursor.
- **⚡ Smooth Entrance Animations**: Utilized **GSAP (GreenSock Animation Platform)** to orchestrate complex staggered entrance animations. The hero headline, subtext, and floating cards animate into view seamlessly on mount.

---

## 💻 Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4 (utilizing advanced CSS-in-JS patterns, arbitrary values, and deep responsive media queries).
- **Animation Engine**: GSAP (GreenSock) for high-performance timeline orchestration and physics-based floating motion.
- **Theme Management**: `next-themes` for robust, flicker-free dark mode support.

---

<p align="center">
  <i>Developed with ❤️ for the Round-1 Assessment</i>
</p>
