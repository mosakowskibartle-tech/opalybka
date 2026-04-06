import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Database, Globe, GitBranch, Shield, Activity } from 'lucide-react';

const layers = [
  { id: 'app', label: 'Ваше приложение', icon: Box, color: '#a855f7', desc: 'Next.js, Node.js, Python, Go — любой стек. Railway автоматически определит язык и соберёт проект.', row: 0 },
  { id: 'github', label: 'GitHub CI/CD', icon: GitBranch, color: '#c084fc', desc: 'Автоматический деплой при пуше в main. Preview-окружения для pull-реквестов.', row: 1 },
  { id: 'db', label: 'База данных', icon: Database, color: '#06b6d4', desc: 'PostgreSQL, MySQL, Redis, MongoDB — управляемые базы с автоматическими бэкапами.', row: 2 },
  { id: 'domain', label: 'Домен + SSL', icon: Globe, color: '#22d3ee', desc: 'Привязка вашего домена с бесплатным SSL-сертификатом. Настройка DNS за 5 минут.', row: 2 },
  { id: 'monitoring', label: 'Мониторинг', icon: Activity, color: '#a855f7', desc: 'Логи, метрики CPU/RAM, алерты при падениях. Всё в одном дашборде Railway.', row: 3 },
  { id: 'security', label: 'Безопасность', icon: Shield, color: '#c084fc', desc: 'Изолированные контейнеры, приватная сеть между сервисами, переменные окружения.', row: 3 },
];

export default function FormworkScheme() {
  const [active, setActive] = useState<string | null>(null);
  const activeData = layers.find(l => l.id === active);

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium font-mono">// архитектура</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">Как это работает</h2>
          <p className="text-muted mt-3">Нажмите на блок для подробностей</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-surface border border-border rounded-xl p-6 md:p-10">
            {/* Architecture diagram */}
            <div className="space-y-4">
              {[0, 1, 2, 3].map(row => (
                <div key={row} className="flex gap-4 justify-center">
                  {layers.filter(l => l.row === row).map(layer => (
                    <motion.button
                      key={layer.id}
                      onClick={() => setActive(active === layer.id ? null : layer.id)}
                      whileHover={{ scale: 1.03 }}
                      className={`flex-1 max-w-[280px] flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        active === layer.id
                          ? 'border-accent bg-accent/10 shadow-lg shadow-accent/10'
                          : 'border-border hover:border-accent/30 bg-graphite/30'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${layer.color}20` }}>
                        <layer.icon size={20} style={{ color: layer.color }} />
                      </div>
                      <span className="text-sm text-white font-semibold">{layer.label}</span>
                    </motion.button>
                  ))}
                </div>
              ))}

              {/* Connection lines */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-0">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-px h-2 bg-accent/20" />
                  ))}
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className="mt-6 min-h-[70px]">
              {activeData ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-graphite/50 rounded-xl p-4 border-l-2 border-accent"
                >
                  <h4 className="font-heading text-lg font-bold text-white">{activeData.label}</h4>
                  <p className="text-sm text-muted mt-1">{activeData.desc}</p>
                </motion.div>
              ) : (
                <p className="text-sm text-muted text-center">← Выберите компонент для подробностей →</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
