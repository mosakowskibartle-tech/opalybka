import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SITE } from '../config';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = SITE.gallery;

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % images.length : null);

  return (
    <section id="gallery" className="py-16 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm uppercase tracking-widest font-medium">Фото</span>
          <h2 className="font-heading text-4xl md:text-6xl text-white mt-3">НАШИ РАБОТЫ</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">Реальные фото с объектов наших клиентов</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-graphite cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white z-10">
              <X size={32} />
            </button>
            <button onClick={(e: React.MouseEvent) => { e.stopPropagation(); prev(); }} className="absolute left-2 md:left-6 text-white/70 hover:text-white z-10 p-2">
              <ChevronLeft size={36} />
            </button>
            <button onClick={(e: React.MouseEvent) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-6 text-white/70 hover:text-white z-10 p-2">
              <ChevronRight size={36} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
            <div className="absolute bottom-4 text-center text-white/60 text-sm">
              {lightbox + 1} / {images.length} — {images[lightbox].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
