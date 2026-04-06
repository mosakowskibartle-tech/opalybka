import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown, Package, Clock, Shield } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Hero() {
  const { setPopupOpen } = useStore();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="Construction" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-24 right-4 md:top-28 md:right-12 bg-accent/10 border border-accent/30 backdrop-blur-sm rounded-sm px-4 py-2 z-10"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs md:text-sm text-accent font-medium">На складе: ограниченное количество</span>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-sm px-4 py-1.5 mb-6"
          >
            <Package size={14} className="text-accent" />
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Москва и вся Россия</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white mb-6"
          >
            ОПАЛУБКА В МОСКВЕ
            <br />
            <span className="gradient-text">С ПОСТАВКОЙ ОТ 3 ДНЕЙ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed"
          >
            Подберём под ваш объект. Без переплат и задержек.
            <br className="hidden md:block" />
            Стеновая, перекрытия, колонны — всё в наличии.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => setPopupOpen(true)}
              className="group flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-sm text-base font-bold uppercase tracking-wider transition-all duration-300 glow-accent"
            >
              Рассчитать стоимость
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://t.me/opalubkapro"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white px-8 py-4 rounded-sm text-base font-bold uppercase tracking-wider transition-all duration-300"
            >
              <MessageCircle size={18} />
              Написать в Telegram
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-3 gap-6 md:gap-12"
          >
            {[
              { icon: Clock, number: '3 дня', label: 'Минимальный срок поставки' },
              { icon: Package, number: '12 000+', label: 'м² опалубки на складе' },
              { icon: Shield, number: '8 лет', label: 'Гарантия на продукцию' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <stat.icon size={20} className="text-accent mb-2 mx-auto md:mx-0" />
                <div className="font-heading text-2xl md:text-3xl text-white">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted uppercase tracking-widest">Листайте</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
