import { useEffect, useRef, useState } from 'react';
import { rooms } from '../data/images.js';

function Rooms() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="rooms" ref={sectionRef} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-500">
            Accommodations
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-navy-900 sm:text-5xl">
            Our Rooms & Suites
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold-500" />
          <p className="mt-6 text-base leading-relaxed text-navy-900/70">
            Choose from thoughtfully designed rooms equipped with modern amenities,
            comfortable bedding, and warm hospitality for every type of traveler.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <article
              key={room.title}
              className={`group overflow-hidden rounded-sm border border-navy-900/5 bg-cream shadow-lg shadow-navy-900/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy-900/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.src}
                  alt={room.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-serif text-xl font-semibold text-white">
                  {room.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-navy-900/70">{room.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-600 transition-colors hover:text-gold-500"
                >
                  Book This Room
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
