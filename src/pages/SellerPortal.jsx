const summary = [
  { label: "Today Orders", value: "42" },
  { label: "Pending Deliveries", value: "9" },
  { label: "Liters Packed", value: "138" },
  { label: "Revenue Today", value: "Rs 6,900" },
];

const tasks = [
  { customer: "Lakshmi", liters: 2, area: "Ward 2", status: "Ready" },
  { customer: "Harish", liters: 1, area: "Ward 4", status: "Packing" },
  { customer: "Manoj", liters: 3, area: "Ward 1", status: "Ready" },
];

function SellerPortal() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900">Seller Portal</h2>
      <p className="text-gray-600 mt-2">Manage operations, stock flow, and active deliveries.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summary.map((card) => (
          <article key={card.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{card.value}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <h3 className="font-semibold text-gray-800">Packing Queue</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Customer</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Area</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.customer} className="border-b last:border-0">
                  <td className="py-2 text-gray-800">{task.customer}</td>
                  <td className="py-2 text-gray-700">{task.liters} Liter</td>
                  <td className="py-2 text-gray-700">{task.area}</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default SellerPortal;
