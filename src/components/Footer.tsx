import { MessageCircle, Mail, Github, ArrowUp, Train } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Train size={16} className="text-white" />
              </div>
              <span className="font-heading text-lg font-bold text-white">Railway<span className="text-accent">Host</span></span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Настройка и деплой проектов на Railway. Быстро, надёжно, без головной боли.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4">Услуги</h4>
            <ul className="space-y-2">
              {['Деплой приложений', 'Настройка БД', 'CI/CD', 'Мониторинг', 'Миграция'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-muted hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4">Стеки</h4>
            <ul className="space-y-2">
              {['Next.js / React', 'Node.js / Express', 'Python / Django', 'Go / Rust', 'Docker'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="https://t.me/railwayhost" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
                <MessageCircle size={14} /> @railwayhost
              </a>
              <a href="mailto:hello@railwayhost.ru" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
                <Mail size={14} /> hello@railwayhost.ru
              </a>
              <a href="https://github.com/railwayhost" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">© 2024 RailwayHost. Не является официальным сервисом Railway.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
            <ArrowUp size={14} /> Наверх
          </button>
        </div>
      </div>
    </footer>
  );
}
