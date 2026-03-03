const orders = [
  {
    id: "HM-1024",
    customer: "Ravi Kumar",
    liters: 2,
    amount: 100,
    status: "Delivered",
    date: "03 Mar 2026",
  },
  {
    id: "HM-1025",
    customer: "Anitha",
    liters: 1,
    amount: 50,
    status: "Out for Delivery",
    date: "03 Mar 2026",
  },
  {
    id: "HM-1026",
    customer: "Suresh",
    liters: 3,
    amount: 150,
    status: "Confirmed",
    date: "04 Mar 2026",
  },
];

const statusClass = {
  Delivered: "bg-green-100 text-green-700",
  "Out for Delivery": "bg-blue-100 text-blue-700",
  Confirmed: "bg-amber-100 text-amber-700",
};

function Orders() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900">My Orders</h2>
      <p className="text-gray-600 mt-2">Track your daily milk bookings and delivery status.</p>

      <div className="mt-6 grid gap-4">
        {orders.map((order) => (
          <article key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-semibold text-gray-800">{order.id}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Customer</p>
                <p className="font-medium text-gray-800">{order.customer}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="font-medium text-gray-800">{order.liters} Liter</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium text-gray-800">Rs {order.amount}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Delivery Date</p>
                <p className="font-medium text-gray-800">{order.date}</p>
              </div>

              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusClass[order.status]}`}>
                {order.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Orders;
