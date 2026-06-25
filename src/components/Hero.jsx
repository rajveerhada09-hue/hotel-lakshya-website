import { heroImage } from '../data/images.js';

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-navy-950/80 via-navy-900/70 to-navy-950/90" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-3">
          <span className="h-px w-12 bg-gold-500/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">
            Luxury Redefined
          </span>
          <span className="h-px w-12 bg-gold-500/60" />
        </div>

        <h1 className="animate-fade-up-delay-1 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Hotel Lakshya
          <span className="mt-2 block text-gradient-gold">Sheesh Mahal</span>
        </h1>

        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
          Experience regal hospitality in the heart of Indore. Where timeless elegance
          meets modern comfort in a palace-inspired sanctuary.
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-sm bg-gold-500 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Reserve Your Stay
          </a>
          <a
            href="#about"
            className="rounded-sm border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:border-gold-400 hover:text-gold-400"
          >
            Discover More
          </a>
        </div>

        <div className="animate-fade-up-delay-3 mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10 sm:gap-16">
          {[
            { value: '5★', label: 'Luxury Rating' },
            { value: '50+', label: 'Premium Rooms' },
            { value: '24/7', label: 'Concierge' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl font-semibold text-gold-400 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 transition-colors hover:text-gold-400"
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
