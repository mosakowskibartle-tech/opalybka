import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Send, CheckCircle2, Clock, Github } from 'lucide-react';

export default function Contacts() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium font-mono">// контакты</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">Давайте обсудим</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold text-white mb-6">Как связаться</h3>
              <div className="space-y-5">
                <a href="https://t.me/railwayhost" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Telegram (основной)</p>
                    <p className="text-white font-semibold group-hover:text-accent transition-colors">@railwayhost</p>
                  </div>
                </a>

                <a href="mailto:hello@railwayhost.ru" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Email</p>
                    <p className="text-white font-semibold group-hover:text-accent transition-colors">hello@railwayhost.ru</p>
                  </div>
                </a>

                <a href="https://github.com/railwayhost" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Github size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">GitHub</p>
                    <p className="text-white font-semibold group-hover:text-accent transition-colors">github.com/railwayhost</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Время ответа</p>
                    <p className="text-white font-semibold">Обычно в течение 30 минут</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://t.me/railwayhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#229ED9] hover:bg-[#1a8bc2] text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 w-full"
            >
              <MessageCircle size={20} />
              Написать в Telegram
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-xl p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                <p className="text-muted text-center">Отвечу в ближайшее время</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Оставить заявку</h3>
                <p className="text-sm text-muted mb-6">Опишите задачу — отвечу с оценкой стоимости и сроков</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted mb-1 block">Ваше имя *</label>
                    <input type="text" placeholder="Как вас зовут" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-graphite border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm text-muted mb-1 block">Telegram или email *</label>
                    <input type="text" placeholder="@username или email" value={contact} onChange={(e) => setContact(e.target.value)} required className="w-full bg-graphite border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm text-muted mb-1 block">Опишите задачу</label>
                    <textarea placeholder="Что нужно задеплоить, какой стек, есть ли база данных..." value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full bg-graphite border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-all duration-300 glow-accent">
                    <Send size={18} />
                    Отправить
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
