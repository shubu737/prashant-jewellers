export default function Rates() {
  // Sample rates - in real app, fetch from API
  const rates = {
    gold22k: 13995,
    gold18k: 11459,
    silver: 237,
    silver925: 258,
    silver999: 263,
    gold999: 15600
  };

  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">22 KT Gold:</span>
            <span className="text-yellow-400">₹{rates.gold22k.toLocaleString()}</span>
          </div>
          <div className="w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <span className="font-medium">18 KT Gold:</span>
            <span className="text-yellow-400">₹{rates.gold18k.toLocaleString()}</span>
          </div>
          <div className="w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <span className="font-medium">Silver:</span>
            <span className="text-yellow-400">₹{rates.silver.toLocaleString()}</span>
          </div>
          <div className="w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <span className="font-medium">Silver 92.5:</span>
            <span className="text-yellow-400">₹{rates.silver925.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}