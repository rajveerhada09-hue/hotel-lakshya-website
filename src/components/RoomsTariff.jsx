import { useEffect, useRef, useState } from 'react';

const roomTariffs = [
  {
    type: 'Double Bed Room',
    price: '₹1,300',
    beds: '2 Guests',
  },
  {
    type: 'Double Deluxe Room',
    price: '₹1,600',
    beds: '2 Guests',
  },
  {
    type: 'Triple Bed Room',
    price: '₹2,200',
    beds: '3 Guests',
  },
  {
    type: 'Four Bed Room',
    price: '₹2,600',
    beds: '4 Guests',
  },
  {
    type: 'Five Bed Room',
    price: '₹3,200',
    beds: '5 Guests',
  },
];

function RoomIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 11V7a3 3 0 013-3h10a3 3 0 013 3v4M4 11h16M4 11v7m16-7v7M4 18h16M7 11V9a2 2 0 012-2h2a2 2 0 012 2v2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v2"
      />
    </svg>
  );
}

function RoomsTariff() {
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
    <section id="rooms-tariff" ref={sectionRef} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-500">
            Stay Tariff
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-navy-900 sm:text-5xl">
            Rooms & Tariff
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold-500" />
          <p className="mt-6 text-base leading-relaxed text-navy-900/70">
            Premium comfort, transparent pricing, and welcoming rooms for families,
            groups, and business travelers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roomTariffs.map((room, index) => (
            <article
              key={room.type}
              className={`group rounded-sm border border-navy-900/10 bg-cream p-7 shadow-lg shadow-navy-900/5 transition-all duration-700 hover:-translate-y-2 hover:border-gold-500/40 hover:bg-white hover:shadow-xl hover:shadow-navy-900/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-sm bg-navy-900 p-4 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                  <RoomIcon />
                </div>
                <span className="rounded-sm border border-gold-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-600">
                  {room.beds}
                </span>
              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-navy-900">
                {room.type}
              </h3>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-serif text-4xl font-semibold text-navy-900">
                  {room.price}
                </span>
                <span className="pb-2 text-sm font-medium uppercase tracking-widest text-navy-900/55">
                  / Night
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl rounded-sm border border-gold-500/25 bg-navy-900 px-5 py-4 text-center text-sm leading-relaxed text-white/75">
          Rates may vary during festivals, holidays and peak seasons. Please contact
          us for current pricing and availability.
        </p>
      </div>
    </section>
  );
}

export default RoomsTariff;
