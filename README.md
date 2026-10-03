# Sol Ethio Coder — Books site
npm install && npm run dev   |   npm run build
Books are sold on Ye-Buna: set each book's store URLs in src/data/links.js. Posters and "Get on ..." buttons open them in a new tab.
Edit: src/data/books.js (books) · src/data/site.js (author, stores, quote, timeline, reviews, stats) · src/index.css (colors/fonts)
Deploy: push to GitHub → Vercel → Import → Vite preset (vercel.json handles /books/slug routes).
Contact & newsletter forms email you via FormSubmit: set `author.email` in src/data/site.js. The first submission sends an activation email to that address; click the link once.
Logo = public/logo.webp · favicon = public/favicon.svg + apple-touch-icon.png
