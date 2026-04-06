import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Clock, Zap } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Popup() {
  const { isPopupOpen, setPopupOpen } = useStore();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [autoShown, setAutoShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!autoShown && !isPopupOpen) {
        setPopupOpen(true);
        setAutoShown(true);
      }
    }, 12000);
    return () => clearTimeout(timer);
  }, [autoShown, isPopupOpen, setPopupOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setPopupOpen(false);
      setSubmitted(false);
      setName('');
      setContact('');
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setPopupOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative bg-surface border border-border rounded-xl p-6 md:p-8 max-w-md w-full shadow-2xl"
          >
            <button onClick={() => setPopupOpen(false)} className="absolute top-4 right-4 text-muted hover:text-white transition-colors">
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-white mb-2">Заявка принята!</h3>
                <p className="text-muted text-sm">Отвечу в течение часа</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={20} className="text-accent" />
                  <span className="text-xs text-accent font-bold font-mono">Быстрый старт</span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                  Задеплою ваш проект
                  <br />
                  <span className="gradient-text">на Railway за 24 часа</span>
                </h3>
                <p className="text-sm text-muted mb-6">Оставьте контакт — обсудим задачу и дам точную оценку</p>

                <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-lg px-3 py-2 mb-6">
                  <Clock size={14} className="text-accent" />
                  <span className="text-xs text-accent font-medium">Отвечаю обычно за 30 минут</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-graphite border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" />
                  <input type="text" placeholder="Telegram или email" value={contact} onChange={(e) => setContact(e.target.value)} required className="w-full bg-graphite border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-all duration-300">
                    <Send size={18} />
                    Обсудить проект
                  </button>
                </form>
                <p className="text-xs text-muted text-center mt-3">Бесплатная консультация, без обязательств</p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
