import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-900/95 py-3 shadow-2xl shadow-navy-950/40 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex flex-col">
          <span className="font-serif text-xl font-semibold tracking-wide text-white transition-colors group-hover:text-gold-400 sm:text-2xl">
            Lakshya Sheesh Mahal
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold-400/80 sm:text-xs">
            Indore
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium uppercase tracking-widest text-white/90 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all hover:text-gold-400 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-sm border border-gold-500/60 bg-gold-500/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold-400 transition-all hover:border-gold-400 hover:bg-gold-500 hover:text-navy-900 lg:inline-block"
        >
          Book Now
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s`, opacity: isMobileOpen ? undefined : 0 }}
            >
              <a
                href={link.href}
                onClick={handleNavClick}
                className="font-serif text-3xl text-white transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-4 inline-block rounded-sm border border-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-gold-400 transition-all hover:bg-gold-500 hover:text-navy-900"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
