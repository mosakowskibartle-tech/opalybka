import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Send } from 'lucide-react';
import { SITE } from '../config';

export default function StickyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { const h = () => setIsVisible(window.scrollY > 400); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h); }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-4 right-4 z-50">
          <AnimatePresence>
            {isOpen && (
              <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} className="absolute bottom-14 right-0 bg-surface border border-border rounded-sm p-3 w-56 shadow-2xl mb-2">
                <p className="text-sm text-white font-semibold mb-2">Свяжитесь</p>
                <div className="space-y-1.5">
                  <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 p-2.5 bg-graphite rounded-sm hover:bg-accent/20 transition-colors"><Phone size={14} className="text-accent" /><span className="text-xs text-white">Позвонить</span></a>
                  <a href={SITE.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 bg-graphite rounded-sm hover:bg-accent/20 transition-colors"><MessageCircle size={14} className="text-accent" /><span className="text-xs text-white">Telegram</span></a>
                  <a href="#contacts" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2.5 bg-graphite rounded-sm hover:bg-accent/20 transition-colors"><Send size={14} className="text-accent" /><span className="text-xs text-white">Заявка</span></a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={() => setIsOpen(!isOpen)} className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isOpen ? 'bg-graphite-light' : 'bg-accent hover:bg-accent-hover glow-accent'}`}>
            {isOpen ? <X size={20} className="text-white" /> : <MessageCircle size={20} className="text-white" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
