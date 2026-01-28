import Header from './components/Header';
import Footer from './components/Footer';
import StickyContactButton from './components/StickyContactButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "D.P. Piping",
          "description": "Professional pipefitting and mechanical services for residential, commercial, and industrial clients in Rhode Island.",
          "image": "https://dppiping.com/",
          "@id": "https://dppiping.com/",
          "url": "https://dppiping.com/",
          "telephone": "+14014251778",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rhode Island",
            "addressRegion": "RI",
            "addressCountry": "US"
          },
          "areaServed": "Rhode Island",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.8784",
            "longitude": "-71.3789"
          },
          "openingHours": "Mo-Fr 08:00-18:00",
          "sameAs": [
            "https://www.facebook.com/dppiping",
            "https://www.instagram.com/dppiping"
          ],
          "priceRange": "$$",
          "founder": {
            "@type": "Derek",
            "name": "Paul"
          },
        })}
      </script>

      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <StickyContactButton />
      <Footer />
    </>
  );
}

export default App;
