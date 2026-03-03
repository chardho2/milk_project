const reports = [
  { title: "Daily Delivery Report", generated: "03 Mar 2026 09:30 AM", status: "Ready" },
  { title: "Area Revenue Summary", generated: "03 Mar 2026 09:10 AM", status: "Ready" },
  { title: "Failed Delivery Log", generated: "03 Mar 2026 08:45 AM", status: "Review" },
];

function AdminReports() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900">Reports</h2>
      <p className="text-gray-600 mt-2">Access operational and financial reports for decisions.</p>

      <div className="mt-6 grid gap-4">
        {reports.map((report) => (
          <article key={report.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <h3 className="font-semibold text-gray-800">{report.title}</h3>
            <p className="text-sm text-gray-600 mt-1">Generated: {report.generated}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-gray-700">Status: {report.status}</span>
              <button className="px-3 py-1.5 rounded-md bg-indigo-800 text-white text-sm hover:bg-indigo-900">
                View
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdminReports;
