import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, ArrowRight, Info } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Calculator() {
  const { setPopupOpen } = useStore();
  const [type, setType] = useState('wall');
  const [area, setArea] = useState(100);
  const [duration, setDuration] = useState(30);
  const [mode, setMode] = useState<'buy' | 'rent'>('buy');

  const prices: Record<string, { buy: number; rent: number }> = {
    wall: { buy: 1200, rent: 45 },
    slab: { buy: 890, rent: 35 },
    column: { buy: 1500, rent: 55 },
  };

  const typeLabels: Record<string, string> = { wall: 'Стеновая', slab: 'Перекрытия', column: 'Колонны' };

  const total = mode === 'buy' ? prices[type].buy * area : prices[type].rent * area * duration;

  return (
    <section id="calculator" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-surface" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Калькулятор</span>
          <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">ОНЛАЙН-РАСЧЁТ СТОИМОСТИ</h2>
          <p className="text-muted mt-3">Предварительный расчёт. Точную стоимость уточнит менеджер.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-background border border-border rounded-sm p-6 md:p-10">
          <div className="flex gap-2 mb-8 bg-graphite rounded-sm p-1">
            {(['buy', 'rent'] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`flex-1 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 ${mode === m ? 'bg-accent text-white' : 'text-muted hover:text-white'}`}>
                {m === 'buy' ? 'Покупка' : 'Аренда'}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="text-sm text-muted mb-2 block">Тип опалубки</label>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(typeLabels).map(([key, label]) => (
                <button key={key} onClick={() => setType(key)} className={`py-3 rounded-sm text-sm font-semibold border transition-all duration-300 ${type === key ? 'border-accent bg-accent/10 text-accent' : 'border-border text-muted hover:border-accent/30'}`}>{label}</button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-muted">Площадь, м²</label>
              <span className="font-heading text-xl text-accent">{area.toLocaleString()} м²</span>
            </div>
            <input type="range" min={10} max={5000} step={10} value={area} onChange={(e) => setArea(Number(e.target.value))} className="w-full h-2 bg-graphite rounded-sm appearance-none cursor-pointer accent-accent" />
            <div className="flex justify-between text-xs text-muted mt-1"><span>10 м²</span><span>5 000 м²</span></div>
          </div>

          {mode === 'rent' && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-muted">Срок аренды, дней</label>
                <span className="font-heading text-xl text-accent">{duration} дней</span>
              </div>
              <input type="range" min={30} max={365} step={5} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-2 bg-graphite rounded-sm appearance-none cursor-pointer accent-accent" />
              <div className="flex justify-between text-xs text-muted mt-1"><span>30 дней</span><span>365 дней</span></div>
            </div>
          )}

          <div className="bg-graphite/50 border border-border rounded-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">Предварительная стоимость</p>
                <p className="font-heading text-4xl md:text-5xl text-white mt-1">{total.toLocaleString()} <span className="text-xl text-muted">₽</span></p>
              </div>
              <CalcIcon size={40} className="text-accent/20" />
            </div>
            <div className="flex items-center gap-1 mt-2 text-xs text-muted">
              <Info size={12} />
              <span>Цена указана без учёта доставки. Возможна скидка при большом объёме.</span>
            </div>
          </div>

          <button onClick={() => setPopupOpen(true)} className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 glow-accent">
            Получить точный расчёт <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
