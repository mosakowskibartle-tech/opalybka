import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Train } from 'lucide-react';
import { useStore } from '../store/useStore';

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Отзывы', href: '#trust' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Navbar() {
  const { isMenuOpen, toggleMenu } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 z-50">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-accent rounded-lg flex items-center justify-center">
              <Train size={18} className="text-white" />
            </div>
            <span className="font-heading text-lg md:text-xl font-bold text-white tracking-tight">Railway<span className="text-accent">Host</span></span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/railwayhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-white transition-colors text-sm font-medium"
            >
              <MessageCircle size={16} />
              Telegram
            </a>
            <a
              href="#contacts"
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              Начать проект
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 w-10 h-10 flex items-center justify-center text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 }}
                className="font-heading text-3xl font-bold text-white hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4 mt-8"
            >
              <a
                href="https://t.me/railwayhost"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold"
              >
                <MessageCircle size={20} />
                Написать в Telegram
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
