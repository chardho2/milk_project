const updates = [
  { time: "6:30 AM", note: "Milk packed at dairy" },
  { time: "6:55 AM", note: "Left delivery center" },
  { time: "7:20 AM", note: "Reached ward 3 route" },
  { time: "7:35 AM", note: "Expected at your location" },
];

function LocationTracker() {
  const latitude = 13.8281;
  const longitude = 77.4914;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;
  const mapExternalUrl = `https://maps.google.com/?q=${latitude},${longitude}`;

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900">Location Tracker</h2>
      <p className="text-gray-600 mt-2">Live route visibility for your active delivery.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:col-span-2">
          <h3 className="font-semibold text-gray-800">Current Delivery Location</h3>
          <p className="text-sm text-gray-600 mt-1">Driver: Narasimha (Vehicle AP 02 XX 2211)</p>

          <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              title="Delivery location map"
              src={mapEmbedUrl}
              className="w-full h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-4 rounded-lg border border-dashed border-green-300 bg-green-50 p-4">
            <p className="text-sm text-green-800">
              Lat: {latitude}, Lng: {longitude}
            </p>
            <a
              href={mapExternalUrl}
              className="inline-block mt-3 text-sm font-semibold text-blue-700 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-800">ETA</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">12 min</p>
          <p className="text-sm text-gray-600 mt-2">Estimated arrival: 7:35 AM</p>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <h3 className="font-semibold text-gray-800">Route Updates</h3>
        <ul className="mt-3 space-y-2">
          {updates.map((item) => (
            <li key={item.time} className="flex items-start gap-3 text-sm">
              <span className="font-semibold text-gray-700 w-16">{item.time}</span>
              <span className="text-gray-600">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LocationTracker;
