"use client";

import SectionHeading from "../../components/section-heading";
import ContactForm from "../../components/contact-form";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <SectionHeading
          title="Contact Prashant Jewellers"
          subtitle="Visit our store or send a message for personalised jewellery support."
        />

        <div className="grid gap-12 lg:grid-cols-2 mt-14">

          {/* Store info + map */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-10 shadow-soft border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Visit Our Store</h3>
              <p className="mt-4 text-gray-600 leading-8">
                Shop No. 2, Shopping Complex, Near Axis Bank Branch,
                Anu Kiran Colony, Rawatbhata, Rajasthan
              </p>
              <div className="mt-8 space-y-4">
                <div>
                  <p className="font-semibold text-black text-sm">Phone</p>
                  <a href="tel:+917597441777" className="text-gold hover:text-black transition">
                    +91 75974 41777
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
                    className="text-gold hover:text-black transition"
                  >
                    Chat via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Prashant Jewellers location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d75.6071379!3d24.9392277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396587cfddbc1af3%3A0x664a4a2b98d63681!2sPrashant%20Jewellers!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="360"
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
