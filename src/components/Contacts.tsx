import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';
import { SITE } from '../config';

export default function Contacts() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contacts" className="py-16 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Связаться</span>
          <h2 className="font-heading text-3xl md:text-6xl text-white mt-2">КОНТАКТЫ</h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <div className="bg-surface border border-border rounded-sm p-5 md:p-8">
              <h3 className="font-heading text-xl text-white mb-5">СВЯЖИТЕСЬ С НАМИ</h3>
              <div className="space-y-4">
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-4 group"><div className="w-11 h-11 bg-accent/10 rounded-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0"><Phone size={18} className="text-accent" /></div><div><p className="text-xs text-muted">Телефон</p><p className="text-white font-semibold text-base group-hover:text-accent transition-colors">{SITE.phone}</p></div></a>
                <a href={SITE.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group"><div className="w-11 h-11 bg-accent/10 rounded-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0"><MessageCircle size={18} className="text-accent" /></div><div><p className="text-xs text-muted">Telegram</p><p className="text-white font-semibold group-hover:text-accent transition-colors">{SITE.telegram}</p></div></a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group"><div className="w-11 h-11 bg-accent/10 rounded-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0"><Mail size={18} className="text-accent" /></div><div><p className="text-xs text-muted">Email</p><p className="text-white font-semibold group-hover:text-accent transition-colors">{SITE.email}</p></div></a>
                <div className="flex items-center gap-4"><div className="w-11 h-11 bg-accent/10 rounded-sm flex items-center justify-center shrink-0"><MapPin size={18} className="text-accent" /></div><div><p className="text-xs text-muted">Адрес склада</p><p className="text-white font-semibold text-sm">{SITE.address}</p></div></div>
                <div className="flex items-center gap-4"><div className="w-11 h-11 bg-accent/10 rounded-sm flex items-center justify-center shrink-0"><Clock size={18} className="text-accent" /></div><div><p className="text-xs text-muted">Режим работы</p><p className="text-white font-semibold text-sm">{SITE.workHoursFull}</p></div></div>
              </div>
            </div>
            <a href={SITE.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#229ED9] hover:bg-[#1a8bc2] text-white py-3.5 px-8 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 w-full text-sm">
              <MessageCircle size={18} /> Написать в Telegram
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface border border-border rounded-sm p-5 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10">
                <CheckCircle2 size={56} className="text-green-500 mb-4" />
                <h3 className="font-heading text-2xl text-white mb-2">ЗАЯВКА ОТПРАВЛЕНА!</h3>
                <p className="text-muted text-center text-sm">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl text-white mb-1">ОСТАВИТЬ ЗАЯВКУ</h3>
                <p className="text-sm text-muted mb-5">Заполните форму и мы перезвоним</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors text-sm" />
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors text-sm" />
                  <textarea placeholder="Опишите вашу задачу..." value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none text-sm" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-3.5 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 glow-accent text-sm"><Send size={16} /> Отправить</button>
                  <p className="text-[11px] text-muted text-center">Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="text-accent hover:underline">политикой конфиденциальности</a></p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
