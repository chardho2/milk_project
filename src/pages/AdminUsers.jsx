const users = [
  { name: "Narasimha", role: "Seller", state: "Active" },
  { name: "Sujatha", role: "Seller", state: "Pending" },
  { name: "Raju", role: "Delivery", state: "Active" },
  { name: "Praveen", role: "Support", state: "Active" },
];

function AdminUsers() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
      <p className="text-gray-600 mt-2">Review and maintain seller, delivery, and support accounts.</p>

      <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name} className="border-b last:border-0">
                <td className="p-3 text-gray-800">{user.name}</td>
                <td className="p-3 text-gray-700">{user.role}</td>
                <td className="p-3 text-gray-700">{user.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminUsers;
