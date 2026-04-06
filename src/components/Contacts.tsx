import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Contacts() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contacts" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Связаться</span>
          <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">КОНТАКТЫ</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="bg-surface border border-border rounded-sm p-6 md:p-8">
              <h3 className="font-heading text-2xl text-white mb-6">СВЯЖИТЕСЬ С НАМИ</h3>
              <div className="space-y-5">
                <a href="tel:+74951234567" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors"><Phone size={20} className="text-accent" /></div>
                  <div><p className="text-xs text-muted">Телефон</p><p className="text-white font-semibold text-lg group-hover:text-accent transition-colors">+7 (495) 123-45-67</p></div>
                </a>
                <a href="https://t.me/opalubkapro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors"><MessageCircle size={20} className="text-accent" /></div>
                  <div><p className="text-xs text-muted">Telegram</p><p className="text-white font-semibold group-hover:text-accent transition-colors">@opalubkapro</p></div>
                </a>
                <a href="mailto:info@opalubkapro.ru" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors"><Mail size={20} className="text-accent" /></div>
                  <div><p className="text-xs text-muted">Email</p><p className="text-white font-semibold group-hover:text-accent transition-colors">info@opalubkapro.ru</p></div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center"><MapPin size={20} className="text-accent" /></div>
                  <div><p className="text-xs text-muted">Адрес склада</p><p className="text-white font-semibold">МО, г. Подольск, ул. Промышленная, 12</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center"><Clock size={20} className="text-accent" /></div>
                  <div><p className="text-xs text-muted">Режим работы</p><p className="text-white font-semibold">Пн–Сб: 8:00–20:00, Вс: 9:00–18:00</p></div>
                </div>
              </div>
            </div>
            <a href="https://t.me/opalubkapro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#229ED9] hover:bg-[#1a8bc2] text-white py-4 px-8 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 w-full">
              <MessageCircle size={20} /> Написать в Telegram
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface border border-border rounded-sm p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="font-heading text-3xl text-white mb-2">ЗАЯВКА ОТПРАВЛЕНА!</h3>
                <p className="text-muted text-center">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-white mb-2">ОСТАВИТЬ ЗАЯВКУ</h3>
                <p className="text-sm text-muted mb-6">Заполните форму и мы перезвоним вам за 10 минут</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><label className="text-sm text-muted mb-1 block">Ваше имя *</label><input type="text" placeholder="Иван Иванов" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="text-sm text-muted mb-1 block">Телефон *</label><input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="text-sm text-muted mb-1 block">Сообщение</label><textarea placeholder="Опишите вашу задачу..." value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full bg-graphite border border-border rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none" /></div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 glow-accent"><Send size={18} /> Отправить заявку</button>
                  <p className="text-xs text-muted text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
