import { useState } from 'react';
import { motion } from 'framer-motion';

const parts = [
  { id: 'panel', label: 'Щит опалубки', x: 10, y: 15, w: 15, h: 65, color: '#ff6b00', desc: 'Стальной щит 3мм, ширина 300–1200мм' },
  { id: 'clamp', label: 'Замок клиновой', x: 27, y: 30, w: 8, h: 12, color: '#ff8533', desc: 'Быстрозажимной замок для соединения щитов' },
  { id: 'support', label: 'Подкос', x: 38, y: 20, w: 5, h: 55, color: '#cc5500', desc: 'Телескопический подкос для выравнивания' },
  { id: 'base', label: 'Основание', x: 5, y: 82, w: 45, h: 8, color: '#888', desc: 'Опорная плита для установки на грунт' },
  { id: 'tie', label: 'Стяжка', x: 50, y: 40, w: 20, h: 5, color: '#ff6b00', desc: 'Стяжной болт для фиксации двух щитов' },
  { id: 'waler', label: 'Ригель', x: 50, y: 20, w: 20, h: 6, color: '#ff8533', desc: 'Горизонтальная балка жёсткости' },
  { id: 'waler2', label: 'Ригель нижний', x: 50, y: 60, w: 20, h: 6, color: '#ff8533', desc: 'Нижняя балка жёсткости' },
];

export default function FormworkScheme() {
  const [activePart, setActivePart] = useState<string | null>(null);
  const activeData = parts.find(p => p.id === activePart);

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Интерактив</span>
          <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">СХЕМА ОПАЛУБКИ</h2>
          <p className="text-muted mt-3">Нажмите на элемент для подробной информации</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-sm p-6 md:p-10">
            <div className="relative aspect-[4/3] bg-graphite/30 rounded-sm overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="rgba(255,107,0,0.05)" strokeWidth="0.2" />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="rgba(255,107,0,0.05)" strokeWidth="0.2" />
                ))}
              </svg>
              {parts.map((part) => (
                <motion.div
                  key={part.id}
                  onClick={() => setActivePart(activePart === part.id ? null : part.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute cursor-pointer rounded-sm transition-all duration-300 flex items-center justify-center ${activePart === part.id ? 'ring-2 ring-white z-10' : 'hover:ring-1 hover:ring-accent/50'}`}
                  style={{ left: `${part.x}%`, top: `${part.y}%`, width: `${part.w}%`, height: `${part.h}%`, backgroundColor: activePart === part.id ? part.color : `${part.color}66` }}
                >
                  <span className="text-white text-[8px] md:text-xs font-bold text-center leading-tight px-1 drop-shadow-lg">{part.label}</span>
                </motion.div>
              ))}
              <div className="absolute right-4 top-4 text-xs text-muted">
                <div className="flex items-center gap-1"><span className="w-2 h-2 bg-accent/40 rounded-full" /> Элемент</div>
              </div>
            </div>
            <div className="mt-6 min-h-[60px]">
              {activeData ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-graphite/50 rounded-sm p-4 border-l-2 border-accent">
                  <h4 className="font-heading text-xl text-white">{activeData.label}</h4>
                  <p className="text-sm text-muted mt-1">{activeData.desc}</p>
                </motion.div>
              ) : (
                <p className="text-sm text-muted text-center">← Выберите элемент на схеме для подробностей →</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
