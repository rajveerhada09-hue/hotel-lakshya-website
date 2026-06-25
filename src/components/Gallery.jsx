import { useEffect, useRef, useState } from 'react';
import { galleryImages } from '../data/images.js';

function Gallery() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null);
    };

    if (activeImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-500">
            Visual Tour
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-navy-900 sm:text-5xl">
            Hotel Gallery
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold-500" />
          <p className="mt-6 text-base leading-relaxed text-navy-900/70">
            Explore our rooms, balconies, and welcoming spaces — all captured at
            Hotel Lakshya Sheesh Mahal Indore.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`group relative overflow-hidden rounded-sm ${image.span} ${
                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full border border-white/50 p-3 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveImage(null)}
            className="absolute right-6 top-6 text-white/70 transition-colors hover:text-gold-400"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[85vh] max-w-full rounded-sm object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
