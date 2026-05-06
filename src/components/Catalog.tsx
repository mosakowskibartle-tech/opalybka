import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Ruler, Package } from 'lucide-react';
import { useStore } from '../store/useStore';
import { SITE } from '../config';

const products = [
  {
    title: 'Стеновая опалубка',
    image: '/images/catalog1.jpg',
    description: 'Для возведения стен, фундаментов, колонн. Щитовая и рамная системы разных размеров.',
    features: ['Щиты 300–1200 мм', 'Сталь 3 мм', 'Клиновые замки'],
    icon: Layers, tag: 'Продажа + Аренда',
    note: `Продажа — ${SITE.deliveryArea}. ${SITE.rentalArea}.`,
  },
  {
    title: 'Опалубка перекрытий',
    image: '/images/catalog2.jpg',
    description: 'Телескопические стойки, двутавровые балки, фанера. Для монолитных перекрытий любой сложности.',
    features: ['Стойки до 5.2 м', 'Балки двутавровые', 'Фанера 18 мм'],
    icon: Ruler, tag: 'В наличии',
    note: `Продажа — ${SITE.deliveryArea}. ${SITE.rentalArea}.`,
  },
  {
    title: 'Аренда опалубки',
    image: '/images/catalog3.jpg',
    description: 'Выгодная аренда от 30 дней. Полный комплект с доставкой и монтажом. Только по Москве и МО.',
    features: ['Минимум 30 дней', 'Доставка + монтаж', 'Техподдержка'],
    icon: Package, tag: 'Только МСК и МО',
    note: SITE.rentalArea,
  },
];

export default function Catalog() {
  const { setPopupOpen } = useStore();
  return (
    <section id="catalog" className="py-16 md:py-28 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">Каталог</span>
            <h2 className="font-heading text-3xl md:text-6xl text-white mt-2">НАША ПРОДУКЦИЯ</h2>
          </div>
          <p className="text-muted max-w-md text-sm md:text-base">Полный ассортимент опалубочных систем. Стоимость рассчитываем индивидуально под ваш объект.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="group bg-surface border border-border rounded-sm overflow-hidden hover:border-accent/30 transition-all duration-500">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute top-3 left-3"><span className="bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">{p.tag}</span></div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2"><p.icon size={18} className="text-accent" /><h3 className="font-heading text-xl md:text-2xl text-white">{p.title}</h3></div>
                  <ArrowUpRight size={16} className="text-muted group-hover:text-accent transition-colors mt-1" />
                </div>
                <p className="text-sm text-muted mb-3">{p.description}</p>
                <div className="space-y-1.5 mb-4">
                  {p.features.map((f) => (<div key={f} className="flex items-center gap-2 text-xs text-white/70"><span className="w-1 h-1 bg-accent rounded-full" />{f}</div>))}
                </div>
                <p className="text-[11px] text-accent/80 mb-4">{p.note}</p>
                <button onClick={() => setPopupOpen(true)} className="w-full text-sm text-white bg-graphite hover:bg-accent py-2.5 rounded-sm transition-all duration-300 font-medium">Узнать стоимость</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
