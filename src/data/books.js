// POSTERS & STORE LINKS live in links.js (keyed by slug). Everything else about a book lives here.
// ADD A BOOK: copy one object below, give it a unique id + slug, then add the same slug in links.js.
// Anything in [BRACKETS] is a placeholder to replace. `pages: 0` hides the page count.
import { stores } from "./site.js";
import { assets } from "./links.js";

const placeholderLearn = [
  { title: "Practical lessons", text: "[WHAT READERS LEARN #1]" },
  { title: "Key concepts", text: "[WHAT READERS LEARN #2]" },
  { title: "Real-world examples", text: "[WHAT READERS LEARN #3]" },
  { title: "Exercises & projects", text: "[WHAT READERS LEARN #4]" },
];

const rawBooks = [
  {
    id: 1, slug: "kelal-nur-betilqet-nur",
    title: "ቀላል ኑር፣ በጥልቀት ኑር",
    subtitle: "ትንንሽ ልማዶች • ግልጽ አስተሳሰብ • የተረጋጋ ሕይወት",
    author: "Solomon Ashagre",
    description: "ትንንሽ ልማዶች፣ ግልጽ አስተሳሰብና የተረጋጋ ሕይወት ላይ የሚያተኩር መጽሐፍ። [EDIT DESCRIPTION]",
    theme: ["#7a1f1f", "#e8a45a"],
    category: "Personal Development", publicationDate: "2026", pages: 0, language: "Amharic",
    status: "Published", featured: false, previewUrl: "#", learn: placeholderLearn,
    chapters: [{ title: "[CHAPTER 1 TITLE]", summary: "[CHAPTER SUMMARY]" }],
  },
  {
    id: 2, slug: "computer-basics-for-beginners",
    title: "Computer Basics for Beginners",
    subtitle: "A Simple, Practical Guide to Build Your Computer Skills Step by Step",
    author: "Solomon Ashagre",
    description: "From zero to confident: a practical guide to computer fundamentals, everyday skills, internet and email, security, and troubleshooting, with practical projects and a 30-day practice plan.",
    theme: ["#0b3a8f", "#f5c518"],
    category: "Technology", publicationDate: "2026", pages: 0, language: "English",
    status: "Published", featured: false, previewUrl: "#",
    learn: [
      { title: "Computer fundamentals", text: "Hardware, software and operating systems explained from zero." },
      { title: "Everyday skills", text: "Keyboard and mouse skills, files and folders." },
      { title: "Online & safe", text: "Internet and web browsing, email and communication, security and cybersecurity." },
      { title: "Practice", text: "Practical projects, a safety checklist and a 30-day practice plan." },
    ],
    chapters: [
      { title: "Computer fundamentals", summary: "What a computer is and how it works." },
      { title: "Hardware & software", summary: "The parts you can touch and the programs that run on them." },
      { title: "Keyboard & mouse skills", summary: "Confident everyday input." },
      { title: "Operating systems", summary: "Getting around your computer." },
      { title: "Files & folders", summary: "Organising and finding your work." },
      { title: "Internet & web browsing", summary: "Using the web effectively." },
      { title: "Email & communication", summary: "Staying in touch online." },
      { title: "Security & cybersecurity", summary: "Protecting yourself and your data." },
      { title: "Networks & connectivity", summary: "How devices connect." },
      { title: "Troubleshooting & maintenance", summary: "Fixing common problems and keeping things running." },
      { title: "Projects, glossary, safety checklist & 30-day plan", summary: "Put your skills into practice." },
    ],
  },
  {
    id: 3, slug: "coding-vs-programming",
    title: "Coding vs Programming",
    subtitle: "Understanding the Difference and Building Real Programming Skills",
    author: "Solomon Ashagre",
    description: "A beginner-friendly guide to the difference between coding and programming, with detailed explanations, examples and beginner projects. [CONFIRM / EDIT DESCRIPTION]",
    theme: ["#1b2a5a", "#0e8aa8"],
    category: "Programming", publicationDate: "2026", pages: 102, language: "English",
    status: "Published", featured: true, previewUrl: "#", learn: placeholderLearn,
    chapters: [
      { title: "[CHAPTER 1 TITLE]", summary: "[CHAPTER SUMMARY]" },
      { title: "[CHAPTER 2 TITLE]", summary: "[CHAPTER SUMMARY]" },
      { title: "[CHAPTER 3 TITLE]", summary: "[CHAPTER SUMMARY]" },
      { title: "Career paths", summary: "Where programming skills can take you." },
      { title: "Roadmap", summary: "A step-by-step plan for what to learn next." },
      { title: "Seven beginner projects", summary: "Build real things to practise what you learned." },
      { title: "Glossary", summary: "Key terms in plain language." },
    ],
  },
];

// Poster + links are merged in from links.js so they can be edited separately from book content.
export const books = rawBooks.map((b) => {
  const a = assets[b.slug] ?? {};
  return { ...b, cover: a.poster ?? "", posterLink: a.posterLink ?? "", storeLinks: { buna: a.buna ?? "", shay: a.shay ?? "" } };
});
export const getBook = (slug) => books.find((b) => b.slug === slug);
export const featuredBook = () => books.find((b) => b.featured) ?? books[0];

// [{ id, name, url }] for every store; the first store is where the cover/poster links to.
export const storeLinks = (book) => stores.map((s) => ({ ...s, url: book.storeLinks?.[s.id] || s.home }));
export const primaryUrl = (book) => book.posterLink || storeLinks(book)[0].url;
