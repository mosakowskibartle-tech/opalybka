import { motion } from 'framer-motion';
import { Calendar, MapPin, Ruler, CheckCircle2 } from 'lucide-react';

const cases = [
  {
    image: '/images/case1.jpg',
    title: 'ЖК «Новые Черёмушки»',
    location: 'Москва, ЮЗАО',
    area: '4 500 м²',
    duration: '14 дней',
    description: 'Поставка стеновой опалубки для монолитного 24-этажного жилого комплекса. Полный комплект с доставкой и шеф-монтажом.',
    results: ['Сэкономили 1.2 млн ₽', 'Поставка за 5 дней', 'Нулевой брак'],
    tag: 'Монолит',
  },
  {
    image: '/images/case2.jpg',
    title: 'Логистический центр «Вайлдберриз»',
    location: 'МО, Подольск',
    area: '12 000 м²',
    duration: '28 дней',
    description: 'Аренда опалубки перекрытий для строительства складского комплекса. Телескопические стойки + балочная система.',
    results: ['Аренда вместо покупки', 'Экономия 40%', 'Техподдержка на объекте'],
    tag: 'Коммерция',
  },
  {
    image: '/images/case3.jpg',
    title: 'Коттеджный посёлок «Лесной»',
    location: 'МО, Истринский р-н',
    area: '800 м²',
    duration: '7 дней',
    description: 'Комплект стеновой опалубки для 12 коттеджей. Фундамент + стены + перекрытия.',
    results: ['12 домов за сезон', 'Повторная аренда', 'Скидка 15%'],
    tag: 'Частное',
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Портфолио</span>
          <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">НАШИ КЕЙСЫ</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">Более 200 успешных проектов по всей России</p>
        </motion.div>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-surface border border-border rounded-sm overflow-hidden hover:border-accent/20 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/50 hidden md:block" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                      {c.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">{c.title}</h3>
                  <p className="text-sm text-muted mb-6">{c.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent shrink-0" />
                      <span className="text-xs text-white/70">{c.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler size={14} className="text-accent shrink-0" />
                      <span className="text-xs text-white/70">{c.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-accent shrink-0" />
                      <span className="text-xs text-white/70">{c.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {c.results.map((r) => (
                      <div key={r} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                        <span className="text-sm text-white/80 font-medium">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
