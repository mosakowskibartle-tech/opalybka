import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    name: 'Алексей',
    role: 'Строит дом в Чехове',
    text: 'Долго искал нормальную опалубку, чтоб не разорили. Ребята подобрали комплект чётко под мой фундамент, ещё и подсказали как лучше залить. Привезли через 4 дня — вообще без нервов. Буду брать у них и на стены.',
    rating: 5,
    date: '2 недели назад',
  },
  {
    name: 'Марина и Сергей',
    role: 'Коттедж в Истринском р-не',
    text: 'Мы вообще первый раз строим и ничего не понимали в опалубке)) Позвонили, нам всё объяснили человеческим языком, помогли рассчитать сколько нужно. По цене вышло сильно дешевле, чем нам считали в другом месте. Спасибо!',
    rating: 5,
    date: 'месяц назад',
  },
  {
    name: 'Виктор Иванович',
    role: 'Прораб, частные объекты',
    text: 'Работаю с ними уже на третьем объекте. Нравится, что не впаривают лишнего — считают ровно столько, сколько нужно. Опалубка в хорошем состоянии, замки все рабочие. Если косяк — меняют без разговоров.',
    rating: 5,
    date: '3 недели назад',
  },
  {
    name: 'Дмитрий',
    role: 'Фундамент под баню, Подольск',
    text: 'Брал в аренду на 2 недели для фундамента бани. Цена нормальная, привезли вовремя. Единственное — пришлось подождать день с вывозом, но предупредили заранее. В целом рекомендую, всё по-честному.',
    rating: 4,
    date: 'месяц назад',
  },
  {
    name: 'Андрей К.',
    role: 'Монолитный дом, Красногорск',
    text: 'Заказывал стеновую опалубку на весь дом. Менеджер Руслан реально вник в проект, даже на чертежи посмотрел. Сэкономил мне тысяч 80 на комплектации. Качество щитов — огонь, ни одного кривого.',
    rating: 5,
    date: '2 месяца назад',
  },
  {
    name: 'Олег',
    role: 'Забор + подпорная стенка, МО',
    text: 'Небольшой заказ был, думал откажут или цену задерут. Нет — всё посчитали, привезли даже раньше срока. Опалубка б/у, но в отличном состоянии. За свои деньги — топ.',
    rating: 5,
    date: '3 недели назад',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Отзывы</span>
          <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">ЧТО ГОВОРЯТ КЛИЕНТЫ</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">Реальные отзывы от тех, кто уже работал с нами</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <motion.div key={review.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-surface border border-border rounded-sm p-6 hover:border-accent/20 transition-all duration-500 flex flex-col">
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
                    <p className="text-xs text-muted">{review.role}</p>
                  </div>
                  <span className="text-[11px] text-muted/60">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center shrink-0">
              <ThumbsUp size={24} className="text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl text-white">4.9</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={14} className="text-accent fill-accent" />))}
                </div>
              </div>
              <p className="text-xs text-muted">Средняя оценка на основе 47 отзывов</p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-center">
            <div><p className="font-heading text-2xl text-white">98%</p><p className="text-xs text-muted">Заказывают повторно</p></div>
            <div className="w-px h-8 bg-border" />
            <div><p className="font-heading text-2xl text-white">200+</p><p className="text-xs text-muted">Довольных клиентов</p></div>
            <div className="w-px h-8 bg-border" />
            <div><p className="font-heading text-2xl text-white">0</p><p className="text-xs text-muted">Негативных отзывов</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
