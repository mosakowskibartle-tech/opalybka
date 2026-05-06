import { SITE } from '../config';
import { ArrowLeft } from 'lucide-react';

export default function Offer() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[900px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <a href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} /> На главную
        </a>

        <h1 className="font-heading text-3xl md:text-5xl text-white mb-8">ПУБЛИЧНАЯ ОФЕРТА</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p className="text-white/80">Дата публикации: 15.01.2025</p>

          <h2 className="font-heading text-xl text-white pt-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
          <p>Настоящий документ является официальным предложением (офертой) {SITE.legal.name} (далее — «Продавец») в адрес любого физического или юридического лица (далее — «Покупатель») заключить договор купли-продажи/аренды опалубочного оборудования.</p>

          <h2 className="font-heading text-xl text-white pt-4">2. ПРЕДМЕТ ОФЕРТЫ</h2>
          <p>Продавец осуществляет продажу и аренду опалубочного оборудования. Продажа с доставкой по всей России. Аренда осуществляется только по Москве и Московской области.</p>

          <h2 className="font-heading text-xl text-white pt-4">3. ОФОРМЛЕНИЕ ЗАКАЗА</h2>
          <p>Заказ оформляется путём отправки заявки через форму на сайте, по телефону {SITE.phone} или через Telegram {SITE.telegram}. Акцептом оферты является отправка заявки.</p>

          <h2 className="font-heading text-xl text-white pt-4">4. ДОСТАВКА</h2>
          <p>Доставка осуществляется по всей территории Российской Федерации. Сроки и стоимость доставки согласовываются индивидуально.</p>

          <h2 className="font-heading text-xl text-white pt-4">5. ОПЛАТА</h2>
          <p>Оплата производится по согласованию сторон: наличными, банковским переводом, по счёту для юридических лиц.</p>

          <h2 className="font-heading text-xl text-white pt-4">6. ОТВЕТСТВЕННОСТЬ</h2>
          <p>Продавец несёт ответственность за качество продукции в соответствии с законодательством РФ. Споры решаются путём переговоров.</p>

          <h2 className="font-heading text-xl text-white pt-4">7. РЕКВИЗИТЫ</h2>
          <p>{SITE.legal.name}<br />Телефон: {SITE.legal.phone}<br />Email: {SITE.legal.email}<br />Адрес: {SITE.legal.address}</p>
        </div>
      </div>
    </div>
  );
}
