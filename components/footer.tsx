import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Brand info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="rounded-full p-[2px] bg-gradient-to-br from-[#d4af37] to-[#c49650] shadow-md">
                <div className="rounded-full bg-white p-[2px]">
                  <Image
                    src="/logo.png.png"
                    alt="Prashant Jewellers"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-gold">Prashant Jewellers</p>
                <p className="text-xs text-gray-500">Since 1957</p>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-gray-600">
              Purity is our priority. Serving Rawatbhata and Chittorgarh with premium gold and diamond jewellery since 1957.
            </p>
            <div className="mt-5 space-y-1 text-sm text-gray-500">
              <p>Shop No. 2, Shopping Complex</p>
              <p>Near Axis Bank, Anu Kiran Colony</p>
              <p>Rawatbhata, Rajasthan</p>
            </div>
          </div>

          {/* Get to know us */}
          <div className="space-y-4">
            <p className="font-medium text-black">Get to know us</p>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/about" className="hover:text-black transition">About Us</Link>
              <Link href="/shop" className="hover:text-black transition">Collections</Link>
              <Link href="/shop" className="hover:text-black transition">Bridal Collections</Link>
            </div>
          </div>

          {/* Our policies */}
          <div className="space-y-4">
            <p className="font-medium text-black">Our policies</p>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/privacy-policy" className="hover:text-black transition">Privacy Policy</Link>
              <Link href="/shipping-policy" className="hover:text-black transition">Shipping Policy</Link>
              <Link href="/payment-terms" className="hover:text-black transition">Payment Methods & T&C</Link>
              <Link href="/refund-policy" className="hover:text-black transition">Refund, Cancellation & Exchange</Link>
            </div>
          </div>

          {/* Let us help you */}
          <div className="space-y-4">
            <p className="font-medium text-black">Let us help you</p>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/contact" className="hover:text-black transition">Contact Us</Link>
              <Link href="/terms" className="hover:text-black transition">Terms & Condition</Link>
              <Link href="/faq" className="hover:text-black transition">FAQ</Link>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Prashant Jewellers. All rights reserved.
      </div>
    </footer>
  );
}
