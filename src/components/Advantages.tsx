import { motion } from 'framer-motion';
import { Warehouse, Truck, Target, Briefcase, ShieldCheck, Headphones } from 'lucide-react';

const advantages = [
  { icon: Warehouse, title: 'Склад в Москве', desc: 'Более 12 000 м² опалубки в наличии. Отгрузка в день заказа.', number: '01' },
  { icon: Truck, title: 'Быстрая доставка', desc: 'От 3 дней по Москве и МО. Доставка по всей России.', number: '02' },
  { icon: Target, title: 'Подбор под задачу', desc: 'Инженеры рассчитают комплект под ваш объект бесплатно.', number: '03' },
  { icon: Briefcase, title: 'Работаем с юр. лицами', desc: 'Полный пакет документов. НДС, договор, акты.', number: '04' },
  { icon: ShieldCheck, title: 'Гарантия качества', desc: '8 лет гарантии. Сертифицированная продукция ГОСТ.', number: '05' },
  { icon: Headphones, title: 'Техподдержка 24/7', desc: 'Консультации по монтажу и эксплуатации круглосуточно.', number: '06' },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Почему мы</span>
          <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">НАШИ ПРЕИМУЩЕСТВА</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div key={adv.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-surface border border-border rounded-sm p-6 md:p-8 hover:border-accent/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-4 right-4 font-heading text-5xl text-white/[0.03] group-hover:text-accent/10 transition-colors duration-500">{adv.number}</div>
              <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <adv.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">{adv.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
