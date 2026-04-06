import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Send } from 'lucide-react';

export default function StickyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute bottom-16 right-0 bg-surface border border-border rounded-xl p-4 w-64 shadow-2xl mb-2"
              >
                <p className="text-sm text-white font-semibold mb-3">Связаться</p>
                <div className="space-y-2">
                  <a href="https://t.me/railwayhost" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-graphite rounded-lg hover:bg-accent/20 transition-colors">
                    <MessageCircle size={16} className="text-accent" />
                    <span className="text-sm text-white">Telegram</span>
                  </a>
                  <a href="mailto:hello@railwayhost.ru" className="flex items-center gap-3 p-3 bg-graphite rounded-lg hover:bg-accent/20 transition-colors">
                    <Mail size={16} className="text-accent" />
                    <span className="text-sm text-white">Email</span>
                  </a>
                  <a href="#contacts" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 bg-graphite rounded-lg hover:bg-accent/20 transition-colors">
                    <Send size={16} className="text-accent" />
                    <span className="text-sm text-white">Оставить заявку</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isOpen ? 'bg-graphite-light' : 'bg-accent hover:bg-accent-hover glow-accent'
            }`}
          >
            {isOpen ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
