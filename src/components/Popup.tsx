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
    const t = setTimeout(() => { if (!autoShown && !isPopupOpen) { setPopupOpen(true); setAutoShown(true); } }, 12000);
    return () => clearTimeout(t);
  }, [autoShown, isPopupOpen, setPopupOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setSubmitted(true);
    setTimeout(() => { setPopupOpen(false); setSubmitted(false); setName(''); setPhone(''); }, 3000);
  };

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setPopupOpen(false)} />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }} className="relative bg-surface border border-border rounded-sm p-5 md:p-8 max-w-md w-full shadow-2xl">
            <button onClick={() => setPopupOpen(false)} className="absolute top-3 right-3 text-muted hover:text-white transition-colors"><X size={20} /></button>
            {submitted ? (
              <div className="text-center py-8"><CheckCircle2 size={48} className="text-green-500 mx-auto mb-3" /><h3 className="font-heading text-2xl text-white mb-1">ЗАЯВКА ПРИНЯТА!</h3><p className="text-muted text-sm">Перезвоним в ближайшее время</p></div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-3"><Gift size={18} className="text-accent" /><span className="text-xs text-accent font-bold uppercase tracking-wider">Бесплатный расчёт</span></div>
                <h3 className="font-heading text-2xl text-white mb-1">ПОЛУЧИТЕ РАСЧЁТ<br /><span className="gradient-text">ПОД ВАШ ОБЪЕКТ</span></h3>
                <p className="text-sm text-muted mb-5">Оставьте контакт — подберём опалубку и рассчитаем стоимость</p>
                <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-sm px-3 py-2 mb-5"><Clock size={14} className="text-accent" /><span className="text-xs text-accent font-medium">Ответим в течение 30 минут</span></div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors text-sm" />
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors text-sm" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-3.5 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 text-sm"><Send size={16} /> Получить расчёт</button>
                </form>
                <p className="text-[11px] text-muted text-center mt-3">Нажимая, вы соглашаетесь с <a href="/privacy" className="text-accent hover:underline">политикой обработки данных</a></p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
