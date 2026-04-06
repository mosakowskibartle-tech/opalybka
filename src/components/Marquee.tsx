export default function Marquee() {
  const items = [
    'RAILWAY',
    '•',
    'NEXT.JS',
    '•',
    'POSTGRESQL',
    '•',
    'DOCKER',
    '•',
    'REDIS',
    '•',
    'NODE.JS',
    '•',
    'PYTHON',
    '•',
    'CI/CD',
    '•',
    'SSL',
    '•',
    'ДОМЕНЫ',
    '•',
  ];

  return (
    <div className="bg-accent py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`text-base md:text-lg mx-3 font-mono ${
              item === '•' ? 'text-black/40 text-xl' : 'text-black font-bold tracking-wider'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
