const stats = [
  { label: "Active Customers", value: "1,248" },
  { label: "Daily Orders", value: "312" },
  { label: "Sellers Online", value: "14" },
  { label: "Open Issues", value: "5" },
];

const actions = [
  "Approve new seller registrations",
  "Review delayed delivery reports",
  "Adjust area-wise pricing",
  "Export daily reconciliation",
];

function AdminPortal() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900">Admin Portal</h2>
      <p className="text-gray-600 mt-2">Control center for platform health and team operations.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{item.value}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-800">Admin Actions</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {actions.map((action) => (
              <li key={action} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-800">System Status</h3>
          <p className="text-sm text-gray-600 mt-2">Payments: Healthy</p>
          <p className="text-sm text-gray-600 mt-1">WhatsApp Alerts: Operational</p>
          <p className="text-sm text-gray-600 mt-1">Location Services: Stable</p>
          <p className="text-sm text-gray-600 mt-1">Last Sync: 03 Mar 2026, 11:40 AM</p>
        </div>
      </div>
    </section>
  );
}

export default AdminPortal;
