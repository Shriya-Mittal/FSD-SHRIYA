import React, { useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    company: "",
    designation: "",
    address: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...formData, id: editingId } : user
        )
      );
      setEditingId(null);
    } else {
      setUsers((prev) => [...prev, formData]);
    }

    setFormData({
      name: "",
      id: "",
      email: "",
      company: "",
      designation: "",
      address: "",
    });
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditingId(user.id);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        {}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          User Management Dashboard
        </h1>

        {}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {editingId ? "Edit User" : "Add New User"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.keys(formData).map((key) => (
                <input
                  key={key}
                  type={key === "email" ? "email" : "text"}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    name: "",
                    id: "",
                    email: "",
                    company: "",
                    designation: "",
                    address: "",
                  })
                }
                className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Clear
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
              >
                {editingId ? "Update User" : "Save User"}
              </button>
            </div>
          </form>
        </div>

        {}
        <div className="mb-4">
          <input
            type="text"
            placeholder="🔍 Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white shadow-sm border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-600 text-white text-xs uppercase">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Designation</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-400"
                  >
                    🚫 No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {user.name}
                    </td>
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.company}</td>
                    <td className="px-6 py-4">{user.designation}</td>
                    <td className="px-6 py-4">{user.address}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleEdit(user)}
                        className="px-4 py-1 text-xs bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition shadow-sm"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}