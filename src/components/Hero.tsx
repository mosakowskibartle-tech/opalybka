import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown, Zap, Server, Globe } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Hero() {
  const { setPopupOpen } = useStore();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Server room"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-accent font-medium font-mono">Деплой на Railway за минуты</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6"
          >
            Разверну ваш проект
            <br />
            <span className="gradient-text">на Railway за 24 часа</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Настрою хостинг, базы данных, CI/CD и домен.
            <br className="hidden md:block" />
            Вы пишете код — я забочусь об инфраструктуре.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => setPopupOpen(true)}
              className="group flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 glow-accent"
            >
              Обсудить проект
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://t.me/railwayhost"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300"
            >
              <MessageCircle size={18} />
              Написать в Telegram
            </a>
          </motion.div>

          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="max-w-lg mx-auto bg-surface border border-border rounded-xl overflow-hidden mb-16"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted ml-2 font-mono">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm text-left space-y-1">
              <p><span className="text-accent">$</span> <span className="text-white">railway up</span></p>
              <p className="text-muted">Uploading... ████████████████ 100%</p>
              <p className="text-green-400">✓ Build successful</p>
              <p className="text-green-400">✓ Deployment live at <span className="text-accent-secondary underline">your-app.up.railway.app</span></p>
              <p className="text-muted cursor-blink"> </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="grid grid-cols-3 gap-6 md:gap-12 max-w-lg mx-auto"
          >
            {[
              { icon: Zap, number: '24ч', label: 'Среднее время деплоя' },
              { icon: Server, number: '50+', label: 'Проектов развёрнуто' },
              { icon: Globe, number: '99.9%', label: 'Аптайм серверов' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon size={20} className="text-accent mb-2 mx-auto" />
                <div className="font-heading text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted">Листайте</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
