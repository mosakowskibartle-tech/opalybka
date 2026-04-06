import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Clock, Gift } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Popup() {
  const { isPopupOpen, setPopupOpen } = useStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [autoShown, setAutoShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!autoShown && !isPopupOpen) { setPopupOpen(true); setAutoShown(true); }
    }, 10000);
    return () => clearTimeout(timer);
  }, [autoShown, isPopupOpen, setPopupOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setPopupOpen(false); setSubmitted(false); setName(''); setPhone(''); }, 3000);
  };

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setPopupOpen(false)} />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }} transition={{ type: 'spring', damping: 25 }} className="relative bg-surface border border-border rounded-sm p-6 md:p-8 max-w-md w-full shadow-2xl">
            <button onClick={() => setPopupOpen(false)} className="absolute top-4 right-4 text-muted hover:text-white transition-colors"><X size={20} /></button>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-white mb-2">ЗАЯВКА ПРИНЯТА!</h3>
                <p className="text-muted text-sm">Перезвоним через 10 минут</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-4"><Gift size={20} className="text-accent" /><span className="text-xs text-accent font-bold uppercase tracking-wider">Спецпредложение</span></div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-2">ПОЛУЧИТЕ РАСЧЁТ<br /><span className="gradient-text">СО СКИДКОЙ 10%</span></h3>
                <p className="text-sm text-muted mb-6">Оставьте заявку сейчас и получите скидку на первый заказ</p>
                <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-sm px-3 py-2 mb-6"><Clock size={14} className="text-accent" /><span className="text-xs text-accent font-medium">Ответим за 10 минут</span></div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" />
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-300"><Send size={18} /> Получить расчёт со скидкой</button>
                </form>
                <p className="text-xs text-muted text-center mt-3">Нажимая кнопку, вы соглашаетесь с обработкой данных</p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
