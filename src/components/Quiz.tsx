import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Server, ArrowRight, ArrowLeft, CheckCircle2, Clock, Send } from 'lucide-react';

const steps = [
  {
    title: 'Тип проекта',
    subtitle: 'Что нужно задеплоить?',
    options: [
      { label: 'Веб-приложение', icon: Globe, desc: 'Next.js, React, Vue, Nuxt и т.д.' },
      { label: 'API / Бэкенд', icon: Server, desc: 'Node.js, Python, Go, Rust' },
      { label: 'Бот / Сервис', icon: Smartphone, desc: 'Telegram-бот, cron-задачи, воркеры' },
    ],
  },
  {
    title: 'Что нужно настроить',
    subtitle: 'Выберите необходимые сервисы',
    options: [
      { label: 'Только деплой', desc: 'Развернуть и настроить домен' },
      { label: 'Деплой + БД', desc: 'PostgreSQL, MySQL, Redis, MongoDB' },
      { label: 'Полная настройка', desc: 'CI/CD, мониторинг, бэкапы, домен' },
      { label: 'Не знаю, нужна консультация', desc: 'Помогу разобраться' },
    ],
  },
  {
    title: 'Сроки',
    subtitle: 'Когда нужно запустить?',
    options: [
      { label: 'Срочно (сегодня-завтра)', desc: 'Экспресс-настройка' },
      { label: 'В течение недели', desc: 'Стандартный срок' },
      { label: 'Не горит', desc: 'Планирую заранее' },
      { label: 'Нужна оценка', desc: 'Сначала обсудим' },
    ],
  },
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectOption = (label: string) => {
    setAnswers({ ...answers, [currentStep]: label });
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setIsComplete(true), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const progress = isComplete ? 100 : ((currentStep + (answers[currentStep] ? 1 : 0)) / steps.length) * 100;

  return (
    <section id="quiz" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium font-mono">// быстрый расчёт</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">Узнайте стоимость за 1 минуту</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">Ответьте на 3 вопроса — получите точную оценку</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-surface border border-border rounded-xl overflow-hidden">
            <div className="h-1 bg-graphite">
              <motion.div className="h-full bg-accent" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
            </div>

            <div className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                    <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                    <p className="text-muted">Отвечу в течение часа</p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-accent">
                      <Clock size={16} />
                      <span className="text-sm font-medium">Обычно отвечаю за 30 минут</span>
                    </div>
                  </motion.div>
                ) : isComplete ? (
                  <motion.div key="contact" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <div className="text-center mb-6">
                      <h3 className="font-heading text-2xl font-bold text-white">Оставьте контакт</h3>
                      <p className="text-muted text-sm mt-1">Пришлю оценку стоимости и сроков</p>
                    </div>
                    <div className="bg-graphite/30 rounded-lg p-4 mb-6">
                      <p className="text-xs text-muted mb-2">Ваш выбор:</p>
                      {Object.entries(answers).map(([step, answer]) => (
                        <div key={step} className="flex items-center gap-2 text-sm text-white/80">
                          <CheckCircle2 size={14} className="text-accent" />
                          <span>{answer}</span>
                        </div>
                      ))}
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-graphite border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors" />
                      <input type="text" placeholder="Telegram или email" value={contact} onChange={(e) => setContact(e.target.value)} required className="w-full bg-graphite border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors" />
                      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-lg font-bold transition-all duration-300">
                        <Send size={18} />
                        Получить оценку
                      </button>
                    </form>
                    <button onClick={() => { setIsComplete(false); setCurrentStep(0); setAnswers({}); }} className="flex items-center gap-1 text-muted hover:text-white text-sm mt-4 mx-auto transition-colors">
                      <ArrowLeft size={14} /> Пройти заново
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key={currentStep} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xs text-accent font-mono">Шаг {currentStep + 1} из {steps.length}</p>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-1">{steps[currentStep].title}</h3>
                        <p className="text-sm text-muted mt-1">{steps[currentStep].subtitle}</p>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      {steps[currentStep].options.map((option) => (
                        <button
                          key={option.label}
                          onClick={() => selectOption(option.label)}
                          className={`group flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 text-left ${
                            answers[currentStep] === option.label
                              ? 'bg-accent/10 border-accent'
                              : 'bg-graphite/30 border-border hover:border-accent/40 hover:bg-graphite/50'
                          }`}
                        >
                          {'icon' in option && option.icon && (
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                              <option.icon size={20} className="text-accent" />
                            </div>
                          )}
                          <div className="flex-1">
                            <span className="text-white font-semibold">{option.label}</span>
                            <p className="text-xs text-muted mt-0.5">{option.desc}</p>
                          </div>
                          <ArrowRight size={16} className="text-muted group-hover:text-accent transition-colors" />
                        </button>
                      ))}
                    </div>
                    {currentStep > 0 && (
                      <button onClick={() => setCurrentStep(currentStep - 1)} className="flex items-center gap-1 text-muted hover:text-white text-sm mt-4 transition-colors">
                        <ArrowLeft size={14} /> Назад
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
