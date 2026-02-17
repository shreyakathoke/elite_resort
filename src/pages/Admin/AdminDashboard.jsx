export default function AdminDashboard() {
  const stats = [
    { label: "Total Bookings", value: "1,248", icon: "bi-calendar2-check", hint: "This month" },
    { label: "Occupied Rooms", value: "78%", icon: "bi-door-closed", hint: "Today" },
    { label: "Revenue", value: "₹ 6.8L", icon: "bi-currency-rupee", hint: "Last 30 days" },
    { label: "New Reviews", value: "96", icon: "bi-star", hint: "This week" },
  ];

  const rows = [
    { id: "BK-1021", guest: "Aarav Mehta", room: "Deluxe Suite", checkin: "14 Feb", status: "Confirmed" },
    { id: "BK-1022", guest: "Neha Sharma", room: "Sea View", checkin: "15 Feb", status: "Pending" },
    { id: "BK-1023", guest: "Rahul Verma", room: "Executive", checkin: "16 Feb", status: "Checked-in" },
    { id: "BK-1024", guest: "Priya Singh", room: "Standard", checkin: "17 Feb", status: "Cancelled" },
  ];

  const badge = (s) => {
    if (s === "Confirmed") return "bg-success";
    if (s === "Pending") return "bg-warning text-dark";
    if (s === "Checked-in") return "bg-primary";
    return "bg-danger";
  };

  return (
    <>
      <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-4">
        <div>
          <h2 className="admin-h2 mb-1">Dashboard</h2>
          <div className="text-muted">Quick overview of resort performance.</div>
        </div>

        <button className="btn btn-primary admin-btn">
          <i className="bi bi-plus-lg me-2" />
          New Booking
        </button>
      </div>

      {/* Stat cards */}
      <div className="row g-3 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="col-12 col-sm-6 col-xl-3">
            <div className="stat-card">
              <div className="stat-icon">
                <i className={`bi ${s.icon}`} />
              </div>
              <div className="stat-body">
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-hint">{s.hint}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card admin-card">
        <div className="card-header admin-card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <div className="fw-bold">Recent Bookings</div>
              <div className="small text-muted">Latest guest check-ins and reservations</div>
            </div>
            <button className="btn btn-outline-dark btn-sm">
              View all <i className="bi bi-arrow-right ms-1" />
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th>Booking ID</th>
                <th>Guest</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="fw-semibold">{r.id}</td>
                  <td>{r.guest}</td>
                  <td>{r.room}</td>
                  <td>{r.checkin}</td>
                  <td>
                    <span className={`badge ${badge(r.status)} badge-pill`}>{r.status}</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-dark">
                      Manage <i className="bi bi-chevron-right ms-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
