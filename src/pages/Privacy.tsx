import { SITE } from '../config';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[900px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <a href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} /> На главную
        </a>

        <h1 className="font-heading text-3xl md:text-5xl text-white mb-8">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p className="text-white/80">Дата последнего обновления: 15.01.2025</p>

          <h2 className="font-heading text-xl text-white pt-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
          <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта {SITE.url} (далее — «Сайт»), принадлежащего {SITE.legal.name}.</p>
          <p>Оператор персональных данных: {SITE.legal.name}, адрес: {SITE.legal.address}, телефон: {SITE.legal.phone}, email: {SITE.legal.email}.</p>

          <h2 className="font-heading text-xl text-white pt-4">2. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h2>
          <p>Мы можем собирать следующие персональные данные: имя, номер телефона, адрес электронной почты, сообщения, направленные через формы обратной связи. Также автоматически собираются: IP-адрес, тип браузера, время доступа, данные cookie-файлов.</p>

          <h2 className="font-heading text-xl text-white pt-4">3. ЦЕЛИ ОБРАБОТКИ</h2>
          <p>Персональные данные обрабатываются в целях: обработки заявок и запросов, связи с пользователем, улучшения качества услуг, статистического анализа посещаемости сайта.</p>

          <h2 className="font-heading text-xl text-white pt-4">4. ПРАВОВЫЕ ОСНОВАНИЯ</h2>
          <p>Обработка персональных данных осуществляется в соответствии с Федеральным законом №152-ФЗ «О персональных данных» на основании согласия субъекта персональных данных.</p>

          <h2 className="font-heading text-xl text-white pt-4">5. ХРАНЕНИЕ И ЗАЩИТА</h2>
          <p>Персональные данные хранятся не дольше, чем этого требуют цели обработки. Мы принимаем необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа.</p>

          <h2 className="font-heading text-xl text-white pt-4">6. ПРАВА ПОЛЬЗОВАТЕЛЯ</h2>
          <p>Вы имеете право: запрашивать информацию об обработке ваших данных, требовать их изменения или удаления, отозвать согласие на обработку. Для этого напишите на {SITE.legal.email}.</p>

          <h2 className="font-heading text-xl text-white pt-4">7. COOKIE-ФАЙЛЫ</h2>
          <p>Сайт использует cookie-файлы для обеспечения корректной работы, аналитики посещаемости и персонализации контента. Вы можете отключить cookie в настройках браузера, но это может повлиять на работу сайта.</p>

          <h2 className="font-heading text-xl text-white pt-4">8. КОНТАКТЫ</h2>
          <p>По всем вопросам обращайтесь:<br />{SITE.legal.name}<br />Телефон: {SITE.legal.phone}<br />Email: {SITE.legal.email}<br />Адрес: {SITE.legal.address}</p>
        </div>
      </div>
    </div>
  );
}
