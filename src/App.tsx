import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Quiz from './components/Quiz';
import Catalog from './components/Catalog';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Trust from './components/Trust';
import SeoBlock from './components/SeoBlock';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import Popup from './components/Popup';
import CookieBanner from './components/CookieBanner';
import Privacy from './pages/Privacy';
import Offer from './pages/Offer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Quiz />
      <Catalog />
      <Advantages />
      <Gallery />
      <Trust />
      <SeoBlock />
      <Contacts />
      <Footer />
      <StickyButton />
      <Popup />
      <CookieBanner />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <div className="noise-overlay" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
