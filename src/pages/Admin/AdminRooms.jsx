import { useMemo, useState } from "react";

export default function AdminRooms() {
  const [q, setQ] = useState("");

  const rooms = useMemo(
    () => [
      { id: 1, name: "Deluxe Suite", price: 9500, status: "Available" },
      { id: 2, name: "Sea View Room", price: 7200, status: "Occupied" },
      { id: 3, name: "Executive Room", price: 6100, status: "Available" },
      { id: 4, name: "Standard Room", price: 4200, status: "Maintenance" },
    ],
    []
  );

  const filtered = rooms.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));

  const pill = (s) => {
    if (s === "Available") return "bg-success";
    if (s === "Occupied") return "bg-primary";
    return "bg-warning text-dark";
  };

  return (
    <>
      <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-4">
        <div>
          <h2 className="admin-h2 mb-1">Rooms</h2>
          <div className="text-muted">Manage room pricing, availability, and status.</div>
        </div>

        <button className="btn btn-primary admin-btn">
          <i className="bi bi-plus-lg me-2" />
          Add Room
        </button>
      </div>

      <div className="card admin-card mb-3">
        <div className="card-body d-flex flex-wrap gap-2 align-items-center justify-content-between">
          <div className="admin-search">
            <i className="bi bi-search" />
            <input
              className="form-control"
              placeholder="Search rooms..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-dark">
              <i className="bi bi-funnel me-2" /> Filter
            </button>
            <button className="btn btn-dark">
              <i className="bi bi-download me-2" /> Export
            </button>
          </div>
        </div>
      </div>

      <div className="card admin-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th>Room</th>
                <th>Price / night</th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id}>
                  <td className="fw-semibold">{r.name}</td>
                  <td>₹ {r.price.toLocaleString("en-IN")}</td>
                  <td>
                    <span className={`badge ${pill(r.status)} badge-pill`}>{r.status}</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-dark">Edit</button>
                      <button className="btn btn-sm btn-dark">View</button>
                    </div>
                  </td>
                </tr>
              ))}
              {!filtered.length && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-muted">
                    No rooms found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
