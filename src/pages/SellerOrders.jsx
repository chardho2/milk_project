const queue = [
  { id: "S-401", customer: "Ramesh", liters: 2, route: "Ward 1", status: "Packed" },
  { id: "S-402", customer: "Keerthi", liters: 1, route: "Ward 4", status: "Dispatching" },
  { id: "S-403", customer: "Mahesh", liters: 3, route: "Ward 2", status: "Pending" },
];

function SellerOrders() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900">Seller Orders</h2>
      <p className="text-gray-600 mt-2">Manage order fulfillment for your active route.</p>

      <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Liters</th>
              <th className="p-3">Route</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item) => (
              <tr key={item.id} className="border-b last:border-0">
                <td className="p-3 font-medium text-gray-800">{item.id}</td>
                <td className="p-3 text-gray-700">{item.customer}</td>
                <td className="p-3 text-gray-700">{item.liters}</td>
                <td className="p-3 text-gray-700">{item.route}</td>
                <td className="p-3 text-gray-700">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default SellerOrders;
