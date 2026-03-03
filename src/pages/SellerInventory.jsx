const inventory = [
  { item: "Morning Milk", stock: "180 L", threshold: "120 L", status: "Healthy" },
  { item: "Evening Milk", stock: "96 L", threshold: "100 L", status: "Low" },
  { item: "Bottles", stock: "420", threshold: "250", status: "Healthy" },
];

function SellerInventory() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900">Inventory</h2>
      <p className="text-gray-600 mt-2">Track milk and packaging stock for daily operations.</p>

      <div className="mt-6 grid gap-4">
        {inventory.map((row) => (
          <article key={row.item} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="font-semibold text-gray-800">{row.item}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  row.status === "Low" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                }`}
              >
                {row.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Current Stock: {row.stock}</p>
            <p className="text-sm text-gray-600">Minimum Threshold: {row.threshold}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SellerInventory;
