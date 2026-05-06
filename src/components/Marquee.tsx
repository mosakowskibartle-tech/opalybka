export default function Marquee() {
  const items = [
    'СТЕНОВАЯ ОПАЛУБКА', '•', 'ПЕРЕКРЫТИЯ', '•', 'КОЛОННЫ', '•',
    'АРЕНДА', '•', 'ПРОДАЖА', '•', 'ДОСТАВКА ПО РФ', '•',
    'МОСКВА И МО', '•', 'ОТ 3 ДНЕЙ', '•',
  ];

  return (
    <div className="bg-accent py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-heading text-lg md:text-xl mx-3 ${
              item === '•' ? 'text-black/40 text-2xl' : 'text-black font-bold tracking-wider'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
