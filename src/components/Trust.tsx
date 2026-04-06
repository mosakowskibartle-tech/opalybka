import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    name: 'Артём',
    role: 'SaaS на Next.js',
    text: 'Нужно было задеплоить Next.js приложение с PostgreSQL. Сам ковырялся два дня — ничего не получалось. Написал этому чуваку — через 3 часа всё работало. Ещё и CI/CD настроил, теперь пушу в main и всё само деплоится. Кайф.',
    rating: 5,
    date: 'неделю назад',
  },
  {
    name: 'Лена',
    role: 'Интернет-магазин',
    text: 'Переезжали с Heroku после того как они убрали бесплатный план. Всё перенёс за день, даже базу мигрировал без потери данных. Объяснил как Railway работает, чтобы я сама могла потом разобраться. Очень круто!',
    rating: 5,
    date: '2 недели назад',
  },
  {
    name: 'Максим',
    role: 'Telegram-бот на Python',
    text: 'Бот крутился на домашнем компе и постоянно падал)) Попросил перенести на Railway — теперь работает 24/7, есть логи, бэкапы базы. И стоит копейки. Жалею что раньше не сделал.',
    rating: 5,
    date: 'месяц назад',
  },
  {
    name: 'Даниил',
    role: 'REST API на Go',
    text: 'Первый раз пользовался Railway, было страшновато. Но мне всё разжевали, настроили и показали как самому потом менять переменные и смотреть логи. Поддержка 7 дней — реально отвечал на все вопросы.',
    rating: 5,
    date: '3 недели назад',
  },
  {
    name: 'Аня',
    role: 'Портфолио-сайт на Astro',
    text: 'Маленький проект, думала откажут или цену задерут. Нет — сделали за 3000, привязали мой домен, всё летает. Ответили в Telegram за 15 минут. Буду обращаться ещё.',
    rating: 5,
    date: '2 недели назад',
  },
  {
    name: 'Игорь',
    role: 'Микросервисы на Node.js',
    text: 'У меня 4 сервиса + Redis + Postgres. Думал будет сложно и дорого. По факту — 10к за всё, включая CI/CD и мониторинг. Работает стабильно уже 2 месяца, ни одного падения.',
    rating: 4,
    date: 'месяц назад',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium font-mono">// отзывы</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">Что говорят клиенты</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">Реальные отзывы от разработчиков и предпринимателей</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-accent/20 transition-all duration-500 flex flex-col"
            >
              <Quote size={20} className="text-accent/30 mb-3 shrink-0" />
              <p className="text-sm text-white/80 leading-relaxed mb-5 flex-1">{review.text}</p>
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} className={j < review.rating ? 'text-accent fill-accent' : 'text-graphite-light'} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted font-mono">{review.role}</p>
                  </div>
                  <span className="text-[11px] text-muted/60">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border border-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
              <ThumbsUp size={24} className="text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold text-white">5.0</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted">Средняя оценка клиентов</p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-center">
            <div>
              <p className="font-heading text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-muted">Обращаются повторно</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <p className="font-heading text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-muted">Проектов задеплоено</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <p className="font-heading text-2xl font-bold text-white">30мин</p>
              <p className="text-xs text-muted">Среднее время ответа</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
