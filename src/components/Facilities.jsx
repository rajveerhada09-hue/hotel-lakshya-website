import { useEffect, useRef, useState } from 'react';

const facilities = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Luxury Suites',
    description: 'Spacious rooms adorned with premium furnishings, marble bathrooms, and panoramic city views.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Fine Dining',
    description: 'Multi-cuisine restaurants serving authentic Indian flavors and international delicacies.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Spa & Wellness',
    description: 'Rejuvenating spa treatments, steam rooms, and a state-of-the-art fitness center.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Event Halls',
    description: 'Grand banquet halls and conference rooms for weddings, corporate events, and celebrations.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'High-Speed WiFi',
    description: 'Complimentary ultra-fast internet throughout the property for seamless connectivity.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Prime Location',
    description: 'Centrally located in Indore with easy access to airports, markets, and landmarks.',
  },
];

function Facilities() {
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
    <section id="facilities" ref={sectionRef} className="section-padding bg-navy-900">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">
            Our Amenities
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
            World-Class Facilities
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold-500" />
          <p className="mt-6 text-base leading-relaxed text-white/60">
            Every detail has been curated to ensure your stay exceeds expectations,
            blending royal heritage with contemporary luxury.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <article
              key={facility.title}
              className={`group rounded-sm border border-white/5 bg-navy-800/50 p-8 transition-all duration-700 hover:-translate-y-2 hover:border-gold-500/30 hover:bg-navy-800 hover:shadow-xl hover:shadow-gold-500/5 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex rounded-sm bg-gold-500/10 p-4 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                {facility.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">{facility.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{facility.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
