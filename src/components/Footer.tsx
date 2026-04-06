import { Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center"><span className="font-heading text-white text-lg">О</span></div>
              <span className="font-heading text-xl tracking-wider text-white">ОПАЛУБКА<span className="text-accent">ПРО</span></span>
            </div>
            <p className="text-sm text-muted leading-relaxed">Продажа и аренда опалубки в Москве и по всей России. Работаем с 2016 года.</p>
          </div>
          <div>
            <h4 className="font-heading text-lg text-white mb-4">КАТАЛОГ</h4>
            <ul className="space-y-2">
              {['Стеновая опалубка', 'Перекрытия', 'Колонны', 'Аренда', 'Комплектующие'].map((item) => (
                <li key={item}><a href="#catalog" className="text-sm text-muted hover:text-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg text-white mb-4">КОМПАНИЯ</h4>
            <ul className="space-y-2">
              {['О нас', 'Отзывы', 'Калькулятор', 'Доставка'].map((item) => (
                <li key={item}><a href="#" className="text-sm text-muted hover:text-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg text-white mb-4">КОНТАКТЫ</h4>
            <div className="space-y-3">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"><Phone size={14} /> +7 (495) 123-45-67</a>
              <a href="https://t.me/opalubkapro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"><MessageCircle size={14} /> @opalubkapro</a>
              <a href="mailto:info@opalubkapro.ru" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"><Mail size={14} /> info@opalubkapro.ru</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">© 2024 ОпалубкаПро. Все права защищены. ИНН 7726123456</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"><ArrowUp size={14} /> Наверх</button>
        </div>
      </div>
    </footer>
  );
}
