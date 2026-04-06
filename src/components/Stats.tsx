import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: 200, suffix: '+', label: 'Проектов реализовано' },
  { number: 12000, suffix: ' м²', label: 'Опалубки на складе' },
  { number: 8, suffix: ' лет', label: 'На рынке' },
  { number: 98, suffix: '%', label: 'Клиентов рекомендуют' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              <div className="w-8 h-0.5 bg-accent mx-auto my-3" />
              <p className="text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
