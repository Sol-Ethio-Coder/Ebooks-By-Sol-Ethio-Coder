import Hero from "../components/Hero.jsx";
import BookGrid from "../components/BookGrid.jsx";
import { FeaturedBook, AuthorSection, QuoteSection, Timeline, Stats, Testimonials, Newsletter, Contact } from "../components/Sections.jsx";
import UpcomingBooks from "../components/UpcomingBooks.jsx";
import { useSEO } from "../lib/seo.js";
import { author } from "../data/site.js";
export default function Home() {
  useSEO({
    title: `Ebooks by ${author.brand}`,
    description: "Explore the published books of Solomon Ashagre: practical guides on programming, technology and education.",
    jsonLd: { "@context": "https://schema.org", "@type": "Person", name: author.name, alternateName: author.brand, jobTitle: "Author and tech educator" },
  });
  return (<main><Hero /><FeaturedBook /><BookGrid /><Stats /><AuthorSection /><QuoteSection /><Timeline /><UpcomingBooks /><Testimonials /><Newsletter /><Contact /></main>);
}
