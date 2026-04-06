import { motion } from 'framer-motion';
import { ArrowUpRight, Ruler, Layers, Package } from 'lucide-react';
import { useStore } from '../store/useStore';

const products = [
  {
    title: 'Стеновая опалубка',
    image: '/images/catalog1.jpg',
    description: 'Для возведения стен, фундаментов, колонн. Щитовая и рамная системы.',
    price: 'от 1 200 ₽/м²',
    features: ['Щиты 300–1200 мм', 'Сталь 3 мм', 'Замки клиновые'],
    icon: Layers,
    tag: 'Хит продаж',
  },
  {
    title: 'Опалубка перекрытий',
    image: '/images/catalog2.jpg',
    description: 'Телескопические стойки, балки, фанера. Для монолитных перекрытий.',
    price: 'от 890 ₽/м²',
    features: ['Стойки до 5.2 м', 'Балки двутавровые', 'Фанера 18 мм'],
    icon: Ruler,
    tag: 'В наличии',
  },
  {
    title: 'Аренда опалубки',
    image: '/images/catalog3.jpg',
    description: 'Выгодная аренда от 30 дней. Полный комплект с доставкой и монтажом.',
    price: 'от 45 ₽/м²/день',
    features: ['Минимум 30 дней', 'Доставка + монтаж', 'Техподдержка 24/7'],
    icon: Package,
    tag: 'Выгодно',
  },
];

export default function Catalog() {
  const { setPopupOpen } = useStore();

  return (
    <section id="catalog" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">Каталог</span>
            <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">НАША ПРОДУКЦИЯ</h2>
          </div>
          <p className="text-muted max-w-md">Полный ассортимент опалубочных систем для любых задач строительства</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div key={product.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group bg-surface border border-border rounded-sm overflow-hidden hover:border-accent/30 transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">{product.tag}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <product.icon size={20} className="text-accent" />
                    <h3 className="font-heading text-2xl text-white">{product.title}</h3>
                  </div>
                  <ArrowUpRight size={18} className="text-muted group-hover:text-accent transition-colors" />
                </div>
                <p className="text-sm text-muted mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="w-1 h-1 bg-accent rounded-full" /> {f}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-heading text-xl text-accent">{product.price}</span>
                  <button onClick={() => setPopupOpen(true)} className="text-sm text-white bg-graphite hover:bg-accent px-4 py-2 rounded-sm transition-all duration-300 font-medium">Заказать</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
