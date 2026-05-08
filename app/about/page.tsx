import Image from "next/image";
import SectionHeading from "../../components/section-heading";

export const metadata = {
  title: "About | Prashant Jewellers",
  description: "Learn about Prashant Jewellers, our craftsmanship, trust and local heritage.",
};

const values = [
  {
    icon: "💎",
    title: "Premium Quality",
    description: "Only the finest gold and diamonds, certified for purity and authenticity.",
  },
  {
    icon: "🏪",
    title: "Local Expertise",
    description: "Deep knowledge of local preferences and traditional designs.",
  },
  {
    icon: "🤝",
    title: "Personal Service",
    description: "Individual attention and guidance for every customer.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">

        {/* Logo + tagline */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full p-[3px] bg-gradient-to-br from-[#d4af37] to-[#c49650] shadow-lg">
              <div className="rounded-full bg-white p-[3px]">
                <Image
                  src="/logo.png.png"
                  alt="Prashant Jewellers"
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-serif text-black">Prashant Jewellers</h1>
          <p className="mt-2 text-gold text-lg font-semibold">Purity is our Priority Since 1957</p>
        </div>

        {/* Story + map */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-serif text-black">Your trusted local jeweller</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over two decades, Prashant Jewellers has been serving the Rawatbhata community with premium gold and diamond jewellery. Our commitment to quality, authenticity, and personalised service has made us the preferred choice for generations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the heart of Anu Kiran Colony, we offer expert craftsmanship, competitive pricing, and the peace of mind that comes with dealing with a trusted local establishment.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <iframe
                title="Prashant Jewellers location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d75.6071379!3d24.9392277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396587cfddbc1af3%3A0x664a4a2b98d63681!2sPrashant%20Jewellers!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="300"
                loading="lazy"
                className="border-0 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?auto=format&fit=crop&w=800&q=80"
                  alt="Jewellery store"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80"
                  alt="Jewellery showcase"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {values.map((val) => (
            <div key={val.title} className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{val.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{val.title}</h3>
              <p className="text-gray-600">{val.description}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
