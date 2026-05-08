import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../../components/section-heading";
import { getProductBySlug, products } from "../../../lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  return {
    title: product ? `${product.name} | Prashant Jewellers` : "Product | Prashant Jewellers",
    description: product ? product.description : "Discover luxury jewellery."
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return <div className="p-20 text-center text-slate-600">Product not found.</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr] items-start">
        <div className="space-y-8">
          <div className="grid gap-4 lg:grid-cols-[1.5fr_0.8fr]">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              {product.images.slice(1).map((src) => (
                <div key={src} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                  <Image
                    src={src}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-56 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-10 shadow-soft">
            <SectionHeading title={product.name} subtitle={product.category} />
            <p className="mt-6 text-3xl font-semibold text-midnight">{product.price}</p>
            <p className="mt-6 text-slate-600 leading-8">{product.description}</p>
            <div className="mt-8 grid gap-3">
              {product.details.map((detail) => (
                <div key={detail} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                  <span className="inline-flex h-3 w-3 rounded-full bg-gold" />
                  <span className="text-sm text-gray-600">{detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/917597441777?text=Hi,+I+am+interested+in+this+jewellery+item:+${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#a6793b]"
              >
                Contact on WhatsApp
              </a>
              <a
                href="tel:+917597441777"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-black bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="sticky top-24 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.36em] text-slate-500 font-semibold">Jewellery details</p>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>Crafted with precision for premium shine and comfort.</p>
              <p>Available to view in-store on request. Contact us for custom fitting options.</p>
            </div>
            <div className="mt-8 rounded-[1.75rem] bg-slate-50 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Fast response</p>
              <p className="mt-3 text-lg font-semibold text-midnight">WhatsApp enquiries within minutes.</p>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
              alt="Jewellery detail"
              width={640}
              height={480}
              className="w-full h-full object-cover"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
