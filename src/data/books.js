// POSTERS & STORE LINKS live in links.js (keyed by slug). Everything else about a book lives here.
// ADD A BOOK: copy one object below, give it a unique id + slug, then add the same slug in links.js.
// Chapters and learning cards marked SAMPLE should be matched to the real books. Anything in [BRACKETS] is a placeholder. `pages: 0` hides the page count.
import { stores } from "./site.js";
import { assets } from "./links.js";

const rawBooks = [
  {
    id: 1, slug: "kelal-nur-betilqet-nur",
    title: "ቀላል ኑር፣ በጥልቀት ኑር",
    subtitle: "ትንንሽ ልማዶች • ግልጽ አስተሳሰብ • የተረጋጋ ሕይወት",
    author: "Solomon Ashagre",
    description: "ቀላል ኑሮን በጥልቀት ለመኖር የሚረዱ ትንንሽ ልማዶች፣ ግልጽ አስተሳሰብና የተረጋጋ ሕይወት ላይ የሚያተኩር መጽሐፍ።",
    theme: ["#7a1f1f", "#e8a45a"],
    category: "Personal Development", publicationDate: "2026", pages: 0, language: "Amharic",
    status: "Published", featured: false, previewUrl: "#",
    learn: [ // SAMPLE: based on the cover's three themes; adjust to match the book
      { title: "ትንንሽ ልማዶች", text: "ዕለት ተዕለት ሕይወትን የሚቀይሩ ቀላል ልማዶችን መገንባት።" },
      { title: "ግልጽ አስተሳሰብ", text: "ሐሳብን ማጥራትና ውሳኔዎችን በግልጽ መወሰን።" },
      { title: "የተረጋጋ ሕይወት", text: "ውጥረትን ቀንሶ ሰላም ያለው አኗኗር መምራት።" },
    ],
    chapters: [ // SAMPLE: replace with the real contents of the book
      { title: "ትንንሽ ልማዶች", summary: "ዕለታዊ ሕይወትን በሚቀይሩ ቀላል ልማዶች መጀመር።" },
      { title: "ግልጽ አስተሳሰብ", summary: "ሐሳብን ማጥራትና በግልጽ ማሰብ።" },
      { title: "የተረጋጋ ሕይወት", summary: "ውስጣዊ ሰላምና የተረጋጋ አኗኗር።" },
    ],
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
    description: "A beginner-friendly guide that explains the difference between coding and programming, then takes you from problem to algorithm to working code, with clear examples, practice at the end of each chapter, a learning roadmap and seven beginner projects.",
    theme: ["#1b2a5a", "#0e8aa8"],
    category: "Programming", publicationDate: "2026", pages: 102, language: "English",
    status: "Published", featured: true, previewUrl: "#",
    learn: [
      { title: "The real difference", text: "Understand what coding and programming mean, and how they relate." },
      { title: "Think like a programmer", text: "Turn problems into algorithms, then into working code." },
      { title: "Build real projects", text: "Practise with seven beginner projects." },
      { title: "Plan your path", text: "Explore career options and follow a clear learning roadmap." },
    ],
    chapters: [ // SAMPLE chapter titles (Career, Roadmap, Projects and Glossary are real): match the rest to your ebook
      { title: "What is coding?", summary: "Writing instructions a computer can follow, and where it fits." },
      { title: "What is programming?", summary: "The bigger picture: solving problems with software." },
      { title: "Coding vs programming: the real difference", summary: "Where the two overlap, where they don't, and why it matters." },
      { title: "From problem to algorithm", summary: "Breaking a problem down into clear, ordered steps." },
      { title: "From algorithm to code to program", summary: "Turning your steps into code and your code into a working solution." },
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
