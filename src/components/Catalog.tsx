import { motion } from 'framer-motion';
import { ArrowUpRight, Rocket, Database, Settings } from 'lucide-react';
import { useStore } from '../store/useStore';

const services = [
  {
    title: 'Деплой приложения',
    image: '/images/catalog1.jpg',
    description: 'Разверну ваш веб-сайт, API или бота на Railway. Настрою домен, SSL, переменные окружения.',
    price: 'от 3 000 ₽',
    features: ['Любой стек (Next.js, Node, Python, Go)', 'Привязка домена + SSL', 'Настройка переменных окружения'],
    icon: Rocket,
    tag: 'Популярное',
  },
  {
    title: 'Деплой + База данных',
    image: '/images/catalog2.jpg',
    description: 'Приложение + PostgreSQL/MySQL/Redis/MongoDB. Настрою подключение, миграции, бэкапы.',
    price: 'от 5 000 ₽',
    features: ['PostgreSQL, MySQL, Redis, MongoDB', 'Автоматические бэкапы', 'Оптимизация запросов'],
    icon: Database,
    tag: 'Оптимально',
  },
  {
    title: 'Полная настройка',
    image: '/images/catalog3.jpg',
    description: 'Деплой + БД + CI/CD + мониторинг + оптимизация. Полностью готовый продакшн.',
    price: 'от 10 000 ₽',
    features: ['CI/CD из GitHub', 'Мониторинг и алерты', 'Документация по инфраструктуре'],
    icon: Settings,
    tag: 'Всё включено',
  },
];

export default function Catalog() {
  const { setPopupOpen } = useStore();

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-accent text-sm font-medium font-mono">// услуги</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">Что я делаю</h2>
          </div>
          <p className="text-muted max-w-md">Настрою Railway под ваш проект — от простого деплоя до полной продакшн-инфраструктуры</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">{service.tag}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <service.icon size={20} className="text-accent" />
                    <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <ArrowUpRight size={18} className="text-muted group-hover:text-accent transition-colors" />
                </div>

                <p className="text-sm text-muted mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-heading text-xl font-bold text-accent">{service.price}</span>
                  <button onClick={() => setPopupOpen(true)} className="text-sm text-white bg-graphite hover:bg-accent px-4 py-2 rounded-lg transition-all duration-300 font-medium">Заказать</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
