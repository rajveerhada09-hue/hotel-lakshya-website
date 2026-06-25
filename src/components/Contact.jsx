import { useEffect, useRef, useState } from 'react';

function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const message = `
  Hotel Booking Inquiry
  
  Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}
  
  Message:
  ${formData.message}
  `;
  
    window.open(
      `https://wa.me/918817149028?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  
    setSubmitted(true);
  
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  
    setTimeout(() => setSubmitted(false), 4000);
  };
  
  const contactInfo = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Address',
      value: '7, Naliya Bakhal, Bharat Marg, Behind Kanch Mandir, Indore, Madhya Pradesh 452002',
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 88171 49028',
      href: 'tel:+918817149028',
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'lakshyasheeshmahal@gmail.com',
      href: 'mailto:lakshyasheeshmahal@gmail.com',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-500">
            Get In Touch
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-navy-900 sm:text-5xl">
            Contact Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold-500" />
          <p className="mt-6 text-base leading-relaxed text-navy-900/70">
            Ready to experience royal hospitality? Reach out to reserve your stay or
            inquire about our services.
          </p>
        </div>

        <div
          className={`mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 block text-sm text-navy-900/80 transition-colors hover:text-gold-500"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-navy-900/80">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-sm">
            <iframe
            title="Hotel Lakshya Sheesh Mahal location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3086314528514!2d75.8464234761591!3d22.716767227669422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd00476dd505%3A0xc23f53bb9c24cbc8!2sHotel%20Lakshya%20Sheesh%20Mahal%20Indore!5e0!3m2!1sen!2sin!4v1782380670973!5m2!1sen!2sin"
            className="h-64 w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-navy-900/5 bg-cream p-8 shadow-xl shadow-navy-900/5 lg:col-span-3"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-900/60">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-sm border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-900/60">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-sm border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-900/60">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-sm border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-900/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-sm border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                placeholder="Tell us about your stay requirements..."
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-sm bg-navy-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/20 sm:w-auto"
            >
              Send via WhatsApp
            </button>

            {submitted && (
              <p className="mt-4 text-sm font-medium text-gold-600 animate-fade-up">
              Redirecting you to WhatsApp...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
