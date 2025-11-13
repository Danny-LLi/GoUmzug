
---

# 🌐 **GoUmzug Website**

**GoUmzug** is the official online platform for a **modern moving services company** based in **Munich, Germany** — built to deliver a seamless, lightning-fast, and elegant digital experience.

This **high-performance Single Page Application (SPA)** is fully **responsive**, **SEO-optimized**, and **designed with precision** using **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 **Live Demo & Overview**

Experience a **next-generation moving service website** crafted for both **German clients** and **international visitors**.
It features smooth animations, lightning-fast load times, and a clean, trustworthy design that reflects professionalism and reliability.

---

## 💻 **Desktop Experience**

Enjoy the **full widescreen experience** — smooth navigation, fluid layouts, and elegant components built for large screens.
Perfectly optimized for **4K and HD monitors**, ensuring clarity and refinement at every pixel.

<p align="center">
<video src="https://github.com/user-attachments/assets/e6e336a7-8f56-44b6-94c9-17a6951ed397"
width="800"
controls
poster=""
style="border-radius:14px; box-shadow:0 0 25px rgba(0,0,0,0.45);">
Your browser does not support the video tag.
</video>
</p>

---

## 📱 **Mobile Experience**

The design transitions flawlessly to mobile — fast, touch-friendly, and visually stunning.
From fluid scrolling to responsive grids, the **mobile view** guarantees an exceptional on-the-go experience.

<p align="center">
<video src="https://github.com/user-attachments/assets/61db5c8a-0988-4fe3-9db4-a3be250853ca"
width="350"
controls
poster=""
style="border-radius:12px; box-shadow:0 0 15px rgba(0,0,0,0.35); border:1px solid #ddd;">
Your browser does not support the video tag.
</video>
</p>

---

## ✨ **Key Features**

✅ **Modern 5-Page SPA** — including:

* 🏠 Home
* 🚚 Services (Unsere Leistungen)
* 📦 Packages (Unsere Pakete)
* 💪 Why Us (Warum GoUmzug)
* 📞 Contact (Kontakt)

✅ **SEO Excellence** — integrated with `react-helmet-async` for dynamic meta titles, canonical links, and descriptions.
✅ **Automatic Sitemap Generation** — via `sitemap-generator.js` for enhanced crawlability.
✅ **Clean & Accessible UI** — powered by **Tailwind CSS**, **Radix UI**, and **Lucide React** icons.
✅ **Fully Responsive** — perfectly adapts to mobile, tablet, and desktop viewports.
✅ **Secure Deployment** — hardened `.htaccess` with CSP, HSTS, HTTPS redirect, and SPA routing support.

---

## ⚙️ **Technology Stack**

| Layer         | Technology             |
| ------------- | ---------------------- |
| 🧩 Frontend   | **React (Vite)**       |
| 🎨 Styling    | **Tailwind CSS**       |
| 🧭 Routing    | **React Router**       |
| 🧱 Components | **Radix UI**           |
| 🔖 Icons      | **Lucide React**       |
| 🔍 SEO        | **React Helmet Async** |

---

## 🏁 **Getting Started**

Clone and run the project locally in just a few steps:

```bash
# Clone the repository
git clone [YOUR_REPOSITORY_URL]
cd goumzug-website

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Your app will be live at 👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📜 **Available Scripts**

| Command        | Description                      |
| -------------- | -------------------------------- |
| `pnpm dev`     | Start development server         |
| `pnpm build`   | Build production files           |
| `pnpm preview` | Preview production build locally |
| `pnpm lint`    | Run ESLint for code quality      |

---

## 🌍 **Sitemap Generation**

Easily generate or update your `sitemap.xml` file with:

```bash
node sitemap-generator.js
```

Output: `public/sitemap.xml`

---

## 🛰️ **Deployment & Server Configuration**

Optimized for **Apache** deployment with a robust `.htaccess` setup:

🔒 **Security Enhancements**

* Enforces **HTTPS**
* Includes **Strict-Transport-Security**, **X-Content-Type-Options**, **X-Frame-Options**, and a **CSP**

⚡ **Performance Optimizations**

* SPA fallback to `/index.html`
* **Caching** and **Compression** with `mod_expires` & `mod_deflate`

---

## 🧩 **Summary**

The **GoUmzug Website** is not just a web presence — it’s a **highly optimized, secure, and user-centric platform** tailored to the moving industry.
Its strong technical foundation, clean design, and blazing-fast performance make it a **perfect showcase of modern front-end engineering**.

---
