import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown, Package, Clock, Shield } from 'lucide-react';
import { useStore } from '../store/useStore';
import { SITE } from '../config';

export default function Hero() {
  const { setPopupOpen } = useStore();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="Опалубка на строительном объекте" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="absolute top-20 right-4 md:top-28 md:right-12 bg-accent/10 border border-accent/30 backdrop-blur-sm rounded-sm px-3 py-2 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-accent font-medium">На складе: ограниченное кол-во</span>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full pt-20 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-sm px-3 py-1.5 mb-5">
            <Package size={14} className="text-accent" />
            <span className="text-xs uppercase tracking-widest text-accent font-medium">{SITE.deliveryArea} • {SITE.rentalArea}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white mb-5">
            ОПАЛУБКА В МОСКВЕ<br /><span className="gradient-text">С ПОСТАВКОЙ ОТ 3 ДНЕЙ</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-base md:text-xl text-muted max-w-xl mb-8 leading-relaxed">
            Подберём опалубку под ваш объект. Стеновая, перекрытия, колонны — всё в наличии. Продажа с доставкой по России, аренда по Москве и МО.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-3 mb-12">
            <button onClick={() => setPopupOpen(true)} className="group flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 md:px-8 md:py-4 rounded-sm text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 glow-accent">
              Рассчитать стоимость <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href={SITE.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-sm text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300">
              <MessageCircle size={18} /> Написать в Telegram
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="grid grid-cols-3 gap-4 md:gap-12">
            {[
              { icon: Clock, number: '3 дня', label: 'Мин. срок поставки' },
              { icon: Package, number: '12 000+', label: 'м² на складе' },
              { icon: Shield, number: '8 лет', label: 'Гарантия' },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <s.icon size={18} className="text-accent mb-1.5 mx-auto md:mx-0" />
                <div className="font-heading text-xl md:text-3xl text-white">{s.number}</div>
                <div className="text-[11px] md:text-sm text-muted mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-[10px] text-muted uppercase tracking-widest">Листайте</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ChevronDown size={18} className="text-accent" /></motion.div>
      </motion.div>
    </section>
  );
}
