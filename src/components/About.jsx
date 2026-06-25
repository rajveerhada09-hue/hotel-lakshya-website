import { useEffect, useRef, useState } from 'react';
import { aboutImage } from '../data/images.js';

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-sm border border-gold-500/30 bg-navy-900 px-8 py-6 shadow-2xl sm:-right-8">
              <p className="font-serif text-4xl font-semibold text-gold-400">15+</p>
              <p className="text-xs uppercase tracking-widest text-white/70">Years of Excellence</p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-500">
              About Us
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-navy-900 sm:text-5xl">
              A Palace of
              <span className="text-gradient-gold"> Timeless Grandeur</span>
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold-500" />

            <p className="mt-8 text-base leading-relaxed text-navy-900/70">
              Hotel Lakshya Sheesh Mahal Indore stands as a beacon of luxury hospitality,
              inspired by the opulence of royal Indian architecture. Every corner reflects
              meticulous craftsmanship, from hand-carved details to crystal chandeliers
              that cast a warm, golden glow.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              Nestled in the vibrant city of Indore, we offer an unparalleled retreat for
              discerning travelers — whether you seek a romantic getaway, a business stay,
              or a celebration of life&apos;s finest moments.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Palace-Inspired Architecture',
                'Award-Winning Cuisine',
                'Personalized Butler Service',
                'Prime Indore Location',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/10">
                    <svg className="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
