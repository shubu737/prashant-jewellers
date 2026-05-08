export default function MobileCta() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto flex max-w-sm justify-center px-4 sm:hidden">
      <div className="flex w-full gap-3 rounded-full bg-white/95 p-2 shadow-soft backdrop-blur-xl">
        <a
          href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
          className="flex-1 rounded-full bg-green-600 py-3 text-center text-sm font-semibold text-white hover:bg-green-700 transition"
        >
          WhatsApp
        </a>
        <a
          href="tel:+917597441777"
          className="flex-1 rounded-full border border-gray-200 bg-white py-3 text-center text-sm font-semibold text-black hover:bg-gray-50 transition"
        >
          Call
        </a>
      </div>
    </div>
  );
}
