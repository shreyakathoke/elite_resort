export default function AdminBookings() {
  return (
    <>
      <div className="mb-4">
        <h2 className="admin-h2 mb-1">Bookings</h2>
        <div className="text-muted">Track reservations, check-ins, and payment status.</div>
      </div>

      <div className="card admin-card">
        <div className="card-body">
          <div className="empty-state">
            <div className="empty-icon">
              <i className="bi bi-calendar2-week" />
            </div>
            <h5 className="mb-1">Bookings screen ready</h5>
            <p className="text-muted mb-3">
              Connect your backend API to load real bookings here.
            </p>
            <button className="btn btn-primary admin-btn">
              <i className="bi bi-plug me-2" />
              Connect API
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
