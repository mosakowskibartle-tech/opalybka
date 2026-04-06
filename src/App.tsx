import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Quiz from './components/Quiz';
import Catalog from './components/Catalog';
import Advantages from './components/Advantages';
import FormworkScheme from './components/FormworkScheme';
import Calculator from './components/Calculator';
import Trust from './components/Trust';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import Popup from './components/Popup';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Quiz />
      <Catalog />
      <Advantages />
      <FormworkScheme />
      <Calculator />
      <Trust />
      <Contacts />
      <Footer />
      <StickyButton />
      <Popup />
    </div>
  );
}
