// All site copy lives here. Replace placeholders freely.
export const author = {
  name: "Solomon Ashagre", brand: "Sol Ethio Coder",
  tagline: "Learn • Practice • Build • Share • Grow",
  photo: "/author.webp", // replace public/author.webp to change the photo
  bio: "I'm Solomon Ashagre, writing as Sol Ethio Coder: a computing teacher and MERN stack developer based in Addis Ababa, Ethiopia, with a BSc in Computer Science from Addis Ababa University. My books explain computing and programming in plain language for people starting from zero, and also explore simple, calm living, in English and Amharic.",
  philosophy: "Learn, practice, build, share, grow. A good book explains one idea clearly, gives you something to try, and leaves you able to do it yourself. I write simply, use real examples, and end chapters with practice so the learning sticks.",
  interests: ["Programming", "Computer literacy", "Education", "Web development", "Personal development"],
  email: "solethiocoder@gmail.com", // PUT YOUR EMAIL HERE: contact + newsletter forms are delivered to it
  web3formsKey: "691ad21f-07fc-4530-a7fd-5d1577066f63", // RECOMMENDED: paste your free Web3Forms access key (web3forms.com). When set, it is used instead of FormSubmit.
  formId: "", // OPTIONAL: FormSubmit's random ID. When set, it replaces your email in the page code so spam bots can't find it.
  // Icons show only for entries that have an href. Paste your profile URLs below.
  socials: [
    { id: "website", label: "Portfolio", href: "https://sol-ethio-coder.netlify.app/" },
    { id: "github", label: "GitHub", href: "https://github.com/Sol-Ethio-Coder" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/Sol-Ethio-Coder" },
    { id: "telegram", label: "Telegram", href: "https://t.me/Sol_Ethio_Coder" },
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@stcaAcademy" },
  ],
};
export const nav = [["Home", "/#top"], ["Books", "/#books"], ["About", "/#about"], ["Journey", "/#journey"], ["Upcoming", "/#upcoming"], ["Contact", "/#contact"]];
export const quote = { text: "A book is not simply something we read. It is something that changes the way we see.", by: "[EDIT QUOTE]" };
// SAMPLE CONTENT: edit freely. Years 2025/2027 and the second upcoming book are examples.
export const timeline = [
  { year: "2025", title: "Started writing", text: "Began turning my teaching notes into simple, practical guides." },
  { year: "2026", title: "First ebooks published", text: "Coding vs Programming, Computer Basics for Beginners and ቀላል ኑር፣ በጥልቀት ኑር went live on Ye-Buna." },
  { year: "2026", title: "Amharic edition in progress", text: "Adapting Computer Basics for Beginners into Amharic to reach more readers." },
  { year: "2027", title: "What's next", text: "More guides on programming and everyday computing." },
];
export const upcomingStages = ["Outline", "Writing", "Editing", "Design", "Release"];
// SAMPLE: `stage` is the index in upcomingStages (0 = Outline ... 4 = Release). Edit dates, text and stage freely.
export const upcoming = [
  { title: "Computer Basics for Beginners — Amharic Edition", short: "Computer Basics (አማርኛ)", date: "Expected soon", category: "Technology · Amharic", theme: ["#0b3a8f", "#f5c518"], stage: 1,
    text: "A practical guide to understanding computers from zero, adapted into Amharic for readers who prefer to learn in their own language.",
    highlights: ["From computer fundamentals to troubleshooting, step by step", "Practical projects and a 30-day practice plan", "Written in clear, natural Amharic"] },
  { title: "Programming Projects for Beginners", short: "Programming Projects", date: "Expected 2027", category: "Programming · English", theme: ["#3a1c71", "#b8862b"], stage: 0,
    text: "A hands-on guide to building small, real projects while learning to think like a programmer.",
    highlights: ["Small projects you can finish and show off", "Code explained in plain language", "Challenges to extend every project"] },
];
// SAMPLE REVIEWS: replace with real reader feedback before launch.
export const reviews = [
  { quote: "I finally understand how a computer works. The steps are simple and the 30-day plan kept me practising.", name: "Beginner reader", role: "Computer Basics for Beginners", rating: 5 },
  { quote: "The difference between coding and programming finally clicked, and the beginner projects gave me a place to start.", name: "Student", role: "Coding vs Programming", rating: 5 },
  { quote: "ትንንሽ ልማዶችን ለመጀመር የሚያነሳሳ፣ ቀላልና ግልጽ መጽሐፍ ነው።", name: "Reader", role: "ቀላል ኑር፣ በጥልቀት ኑር", rating: 5 },
];
export const stats = [ // numbers animate; text values show as-is
  { to: 3, suffix: "", label: "Books" }, { to: "[5K+]", label: "Readers" },
  { to: 3, suffix: "", label: "Topics" }, { to: "2026", label: "Latest publication" },
];

// Stores where the books are sold. `home` is your store profile page, used whenever a book has no direct link in links.js.
export const stores = [
  { id: "buna", name: "Ye-Buna", home: "https://ye-buna.com/solethiocoder" },
  // To add another store to the book buttons, add { id, name, home } here and the matching id in links.js.
];

// Store profile pages shown in the footer (book buttons use `stores` above).
export const storeProfiles = [
  { id: "buna", name: "Ye-Buna", home: "https://ye-buna.com/solethiocoder" },
  { id: "shay", name: "Ye-Shay", home: "https://ye-shay.com/stcaacademy" },
];
