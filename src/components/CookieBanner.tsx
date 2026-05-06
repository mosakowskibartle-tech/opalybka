import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[55] p-4"
        >
          <div className="max-w-[800px] mx-auto bg-surface border border-border rounded-sm p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
            <Cookie size={24} className="text-accent shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-sm text-muted flex-1 leading-relaxed">
              Мы используем файлы cookie для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
              <a href="/privacy" className="text-accent hover:underline">политикой конфиденциальности</a>.
            </p>
            <button
              onClick={accept}
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-all shrink-0 w-full sm:w-auto"
            >
              Принять
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
