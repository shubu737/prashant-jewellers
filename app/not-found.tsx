import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center rounded-[2rem] bg-white p-12 shadow-soft">
        <p className="text-sm uppercase tracking-[0.36em] text-gold">404</p>
        <h1 className="mt-4 text-4xl font-serif text-midnight">Page not found</h1>
        <p className="mt-6 text-slate-600">The page you are looking for does not exist. Return to the store and continue exploring our collections.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
