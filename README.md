<div align="center">

# Sol Ethio Coder — Books

**A premium author website to showcase and promote the published books of Solomon Ashagre.**

[**Live site**](https://YOUR-SITE.vercel.app) · [Ye-Buna store](https://ye-buna.com/solethiocoder) · [Ye-Shay store](https://ye-shay.com/stcaacademy) · [Portfolio](https://sol-ethio-coder.netlify.app/)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-animations-black)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

</div>

<!-- Replace https://YOUR-SITE.vercel.app (above) with your real Vercel or custom-domain address. -->

## Overview

A fast, responsive, single-page website where readers can discover books by Sol Ethio Coder, read about each one, and buy it on Ye-Buna. It is built as a premium editorial experience: cinematic hero, 3D book covers, smooth scroll animations and light/dark themes. All content lives in simple data files, so adding a book takes minutes.

## Features

- Cinematic hero with animated background and 3D, cursor-reactive book cover
- Searchable, filterable book library with elegant hover effects
- Dedicated page per book (`/books/your-book`) with description, "what you'll learn", expandable table of contents and related books
- Book posters and buttons that link straight to the Ye-Buna book pages
- Author section, quote, reading journey timeline, reader reviews and animated statistics
- Upcoming books with a progress tracker and a "Notify me" popup
- Contact form, newsletter signup and notify form delivered to your email (no backend needed)
- Light and dark themes (saved in the browser), scroll progress bar, back-to-top button and page transitions
- Privacy Policy and Terms of Use pages
- Mobile-first, accessible (semantic HTML, keyboard focus, reduced-motion support) and SEO-ready (meta tags, Open Graph, structured data)

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18, React Router 6 |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Motion (Framer Motion) |
| Icons | Lucide React |
| Forms | FormSubmit (email delivery) |
| Hosting | Vercel |

## Getting started

**Requirements:** Node.js 20 or newer.

```bash
git clone https://github.com/Sol-Ethio-Coder/sol-books.git
cd sol-books
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
sol-books/
├── public/                 Images and static files (covers, logo, favicon, robots.txt)
│   └── books/              Book cover images (.webp)
├── src/
│   ├── components/         Reusable UI (Navbar, Hero, BookCard, BookCover, Footer, ...)
│   ├── data/
│   │   ├── books.js        Book content (title, description, chapters, ...)
│   │   ├── links.js        Poster images and Ye-Buna links for each book
│   │   ├── site.js         Author, socials, stores, timeline, reviews, stats, upcoming books
│   │   └── legal.js        Privacy Policy and Terms text
│   ├── lib/                SEO helper and form-sending hook
│   ├── pages/              Home, BookDetail, Legal
│   ├── App.jsx             Routes, page transitions
│   └── index.css           Theme colors and fonts
├── index.html
├── vercel.json             Makes /books/... links work on Vercel
└── vite.config.js
```

## Customize

### Add a new book
1. Copy a book object in `src/data/books.js`. Give it a unique `id` and `slug` (the slug becomes the URL).
2. Put the cover image in `public/books/` (`.webp` recommended, 2:3 ratio).
3. In `src/data/links.js`, add an entry with the same slug: the `poster` path and the `buna` link.

### Poster and store links
Edit `src/data/links.js`. `poster` is the cover image, `posterLink` optionally overrides where the poster click goes, and `buna` is the direct Ye-Buna book link.

### Author, socials and stores
Edit `src/data/site.js`: your bio, photo, social links, store profiles, quote, timeline, reviews, statistics and upcoming books. Replace `public/author.webp` and `public/logo.webp` to change the photos.

### Colors and fonts
Change the theme variables at the top of `src/index.css` (`:root` for light, `.dark` for dark) and the Google Fonts link in `index.html`.

### Titles and descriptions (SEO)
Page titles and descriptions are set in `src/pages/Home.jsx`, `BookDetail.jsx` and `Legal.jsx`. Keep `index.html` in sync with the home page.

### Receive messages by email
Set `email` in `src/data/site.js`. Send one test message from the live site, then click the activation link FormSubmit emails you (one time only).

## Deployment (Vercel)

1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repository.
3. Keep the Vite preset (build command `npm run build`, output directory `dist`) and click **Deploy**.

Every push to `main` redeploys automatically. Add a custom domain under **Project → Settings → Domains**.

## Author

**Solomon Ashagre** (Sol Ethio Coder): computing teacher, MERN stack developer and author, based in Addis Ababa, Ethiopia.

[Portfolio](https://sol-ethio-coder.netlify.app/) · [GitHub](https://github.com/Sol-Ethio-Coder) · [LinkedIn](https://linkedin.com/in/Sol-Ethio-Coder) · [Telegram](https://t.me/Sol_Ethio_Coder) · [YouTube](https://www.youtube.com/@stcaAcademy)

## License and copyright

© Solomon Ashagre. All rights reserved. The books, cover designs, photographs, logo and written content may not be copied, redistributed or resold without written permission.
