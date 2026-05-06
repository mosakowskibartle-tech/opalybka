import { Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { SITE } from '../config';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-accent rounded-sm flex items-center justify-center"><span className="font-heading text-white text-sm">О</span></div>
              <span className="font-heading text-lg tracking-wider text-white">ОПАЛУБКА<span className="text-accent">ПРО</span></span>
            </div>
            <p className="text-xs text-muted leading-relaxed">{SITE.deliveryArea}. {SITE.rentalArea}. Склад: {SITE.addressShort}.</p>
          </div>
          <div>
            <h4 className="font-heading text-sm text-white mb-3">КАТАЛОГ</h4>
            <ul className="space-y-1.5">
              {['Стеновая опалубка', 'Перекрытия', 'Аренда', 'Комплектующие'].map(i => (<li key={i}><a href="#catalog" className="text-xs text-muted hover:text-accent transition-colors">{i}</a></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm text-white mb-3">ДОКУМЕНТЫ</h4>
            <ul className="space-y-1.5">
              <li><a href="/privacy" className="text-xs text-muted hover:text-accent transition-colors">Политика конфиденциальности</a></li>
              <li><a href="/offer" className="text-xs text-muted hover:text-accent transition-colors">Публичная оферта</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm text-white mb-3">КОНТАКТЫ</h4>
            <div className="space-y-1.5">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"><Phone size={12} /> {SITE.phone}</a>
              <a href={SITE.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"><MessageCircle size={12} /> {SITE.telegram}</a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"><Mail size={12} /> {SITE.email}</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-muted text-center md:text-left">
            <p>© {new Date().getFullYear()} {SITE.name}. {SITE.legal.name}. Все права защищены.</p>
            <p className="mt-0.5">Адрес: {SITE.address}. Тел.: {SITE.phone}. Режим работы: {SITE.workHoursFull}.</p>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors"><ArrowUp size={12} /> Наверх</button>
        </div>
      </div>
    </footer>
  );
}
