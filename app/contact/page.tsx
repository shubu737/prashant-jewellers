"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "../../components/contact-form";

export default function ContactPage() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
      <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
        {children}
      </motion.div>
    );
  }

  const contactCards = [
    {
      icon: "📞",
      label: "Call Us",
      value: "+91 75974 41777",
      href: "tel:+917597441777",
      cta: "Call now",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "Chat instantly",
      href: "https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection",
      cta: "Open WhatsApp",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "info@prashantjewellers.com",
      href: "mailto:info@prashantjewellers.com",
      cta: "Send email",
    },
    {
      icon: "📍",
      label: "Visit Us",
      value: "Anu Kiran Colony, Rawatbhata",
      href: "https://maps.google.com/?q=Prashant+Jewellers+Rawatbhata",
      cta: "Get directions",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* ── Dark Hero ── */}
      <section className="relative bg-[#0a0a0a] py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/diamond-rings/diamond-rings-9.jpg" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Get in Touch</span>
              <span className="gold-line" />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight max-w-3xl">
              We'd Love to <br /><span className="text-gradient-gold">Hear From You</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/60 max-w-xl leading-7 sm:leading-8">
              Visit our store, call us, or send a message for personalised jewellery support and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="bg-[#faf6f0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => (
              <Section key={card.label}>
                <motion.a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col items-start rounded-2xl border border-gold/15 bg-white p-5 sm:p-7 shadow-soft hover:border-gold/50 hover:shadow-premium transition-all duration-300 h-full"
                >
                  <div className="text-2xl mb-4">{card.icon}</div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-1">{card.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-black leading-tight mb-4">{card.value}</p>
                  <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-2.5 transition-all">
                    {card.cta} <span>→</span>
                  </div>
                </motion.a>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Store info + map */}
            <Section className="space-y-6">
              <span className="gold-line block" />
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Location</p>
              <h2 className="text-3xl sm:text-4xl font-serif text-black">Visit Our Store</h2>

              <div className="rounded-2xl border border-gold/15 bg-[#faf6f0] p-6 sm:p-8 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Address</p>
                  <p className="text-sm text-gray-600 leading-6">Shop No. 2, Shopping Complex, Near Axis Bank Branch,<br />Anu Kiran Colony, Rawatbhata, Rajasthan</p>
                </div>
                <div className="h-px bg-gold/15" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Phone",    value: "+91 75974 41777",               href: "tel:+917597441777" },
                    { label: "WhatsApp", value: "Chat with us",                   href: "https://wa.me/917597441777" },
                    { label: "Email",    value: "info@prashantjewellers.com",     href: "mailto:info@prashantjewellers.com" },
                    { label: "Hours",    value: "Mon–Sat: 10am – 8pm",           href: undefined },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-gray-700 hover:text-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-gray-700">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-soft">
                <iframe
                  title="Prashant Jewellers location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d75.6071379!3d24.9392277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396587cfddbc1af3%3A0x664a4a2b98d63681!2sPrashant%20Jewellers!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="280" loading="lazy" className="border-0 w-full block"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Section>

            {/* Form */}
            <Section>
              <span className="gold-line block mb-4" />
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3">Send a Message</p>
              <h2 className="text-3xl sm:text-4xl font-serif text-black mb-8">Let's Talk Jewellery</h2>
              <ContactForm />
            </Section>

          </div>
        </div>
      </section>

      {/* ── Dark CTA ── */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,150,80,0.1),transparent_60%)]" />
        <Section className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <span className="gold-line mx-auto mb-5 block" />
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Prefer to visit?</p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-5">Come See Us in Store</h2>
          <p className="text-sm sm:text-base text-white/50 mb-8 leading-7">
            Experience our jewellery collection in person. Our experts are ready to guide you to the perfect piece.
          </p>
          <a
            href="https://wa.me/917597441777?text=Hi,+I+would+like+to+visit+your+store"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#a07030] hover:shadow-[0_0_30px_rgba(196,150,80,0.4)] transition-all duration-300"
          >
            Book a Visit via WhatsApp →
          </a>
        </Section>
      </section>

    </div>
  );
}
