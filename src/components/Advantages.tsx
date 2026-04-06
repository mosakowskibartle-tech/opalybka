import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Code2, Headphones, DollarSign } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Быстро',
    desc: 'Деплой за 24 часа. Срочные задачи — в тот же день. Не тяну резину.',
    number: '01',
  },
  {
    icon: Shield,
    title: 'Надёжно',
    desc: 'Railway даёт 99.9% аптайм. Настраиваю бэкапы и мониторинг, чтобы ничего не упало.',
    number: '02',
  },
  {
    icon: Code2,
    title: 'Любой стек',
    desc: 'Next.js, Node.js, Python, Go, Rust, PHP — работаю с любым языком и фреймворком.',
    number: '03',
  },
  {
    icon: DollarSign,
    title: 'Прозрачные цены',
    desc: 'Фиксированная стоимость за работу. Никаких скрытых платежей и доплат.',
    number: '04',
  },
  {
    icon: Clock,
    title: 'Поддержка после',
    desc: '7 дней бесплатной поддержки после деплоя. Если что-то сломается — починю.',
    number: '05',
  },
  {
    icon: Headphones,
    title: 'На связи',
    desc: 'Отвечаю в Telegram. Без менеджеров, секретарей и ожидания на линии.',
    number: '06',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium font-mono">// почему я</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">Преимущества</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-4 right-4 font-mono text-4xl text-white/[0.03] group-hover:text-accent/10 transition-colors duration-500">{adv.number}</div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <adv.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">{adv.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
