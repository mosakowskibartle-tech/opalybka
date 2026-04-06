import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, ArrowRight, Info } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Calculator() {
  const { setPopupOpen } = useStore();
  const [services, setServices] = useState<string[]>(['deploy']);
  const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');

  const toggleService = (s: string) => {
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const serviceItems = [
    { id: 'deploy', label: 'Деплой приложения', price: 3000 },
    { id: 'db', label: 'База данных', price: 2000 },
    { id: 'domain', label: 'Домен + SSL', price: 1000 },
    { id: 'cicd', label: 'CI/CD (авто-деплой)', price: 2000 },
    { id: 'monitoring', label: 'Мониторинг', price: 2000 },
    { id: 'backup', label: 'Настройка бэкапов', price: 1500 },
  ];

  const baseTotal = serviceItems.filter(s => services.includes(s.id)).reduce((sum, s) => sum + s.price, 0);
  const total = urgency === 'urgent' ? Math.round(baseTotal * 1.5) : baseTotal;

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-surface" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium font-mono">// калькулятор</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">Рассчитайте стоимость</h2>
          <p className="text-muted mt-3">Выберите нужные услуги — цена обновится автоматически</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-background border border-border rounded-xl p-6 md:p-10"
        >
          {/* Services checkboxes */}
          <div className="mb-8">
            <label className="text-sm text-muted mb-3 block">Выберите услуги</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleService(item.id)}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 text-left ${
                    services.includes(item.id)
                      ? 'border-accent bg-accent/10'
                      : 'border-border hover:border-accent/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      services.includes(item.id) ? 'border-accent bg-accent' : 'border-muted'
                    }`}>
                      {services.includes(item.id) && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span className="text-sm text-white font-medium">{item.label}</span>
                  </div>
                  <span className="text-xs text-accent font-mono">{item.price.toLocaleString()} ₽</span>
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div className="mb-8">
            <label className="text-sm text-muted mb-3 block">Срочность</label>
            <div className="flex gap-3">
              {(['normal', 'urgent'] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setUrgency(u)}
                  className={`flex-1 py-3 rounded-lg text-sm font-semibold border transition-all duration-300 ${
                    urgency === u ? 'border-accent bg-accent/10 text-accent' : 'border-border text-muted hover:border-accent/30'
                  }`}
                >
                  {u === 'normal' ? 'Стандартно (1–3 дня)' : 'Срочно (сегодня) ×1.5'}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="bg-graphite/50 border border-border rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">Итого</p>
                <p className="font-heading text-4xl md:text-5xl font-bold text-white mt-1">
                  {total.toLocaleString()} <span className="text-xl text-muted">₽</span>
                </p>
              </div>
              <CalcIcon size={40} className="text-accent/20" />
            </div>
            {urgency === 'urgent' && (
              <div className="flex items-center gap-1 mt-2 text-xs text-accent">
                <Info size={12} />
                <span>Включена наценка ×1.5 за срочность</span>
              </div>
            )}
          </div>

          <button
            onClick={() => setPopupOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-all duration-300 glow-accent"
          >
            Заказать настройку
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
