import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { SITE } from '../config';

const navLinks = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Фото', href: '#gallery' },
  { label: 'Отзывы', href: '#trust' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Navbar() {
  const { isMenuOpen, toggleMenu } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-20">
          <a href="/" className="flex items-center gap-2 z-50 shrink-0">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="font-heading text-white text-lg">О</span>
            </div>
            <span className="font-heading text-lg md:text-2xl tracking-wider text-white">ОПАЛУБКА<span className="text-accent">ПРО</span></span>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted hover:text-accent transition-colors duration-300 uppercase tracking-wider font-medium">{l.label}</a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-white hover:text-accent transition-colors">
              <Phone size={16} /><span className="text-sm font-semibold">{SITE.phone}</span>
            </a>
            <a href={SITE.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-300">
              <MessageCircle size={16} /> Telegram
            </a>
          </div>

          <button onClick={toggleMenu} className="lg:hidden z-50 w-10 h-10 flex items-center justify-center text-white" aria-label="Меню">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-5 px-4">
            {navLinks.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={toggleMenu} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: i * 0.06 }} className="font-heading text-3xl text-white hover:text-accent transition-colors">{l.label}</motion.a>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs">
              <a href={`tel:${SITE.phoneRaw}`} className="text-accent text-xl font-semibold">{SITE.phone}</a>
              <a href={SITE.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-sm font-semibold w-full">
                <MessageCircle size={20} /> Написать в Telegram
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
