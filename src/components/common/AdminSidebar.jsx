import { NavLink } from "react-router-dom";

export default function AdminSidebar({ collapsed, sidebarOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`admin-backdrop d-lg-none ${sidebarOpen ? "show" : ""}`}
        onClick={onClose}
      />

      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="admin-brand">
          <div className="brand-badge">
            <i className="bi bi-gem" />
          </div>
          <div className="brand-text">
            <div className="brand-title">Elite Resort</div>
            <div className="brand-sub">Admin Panel</div>
          </div>

          <button
            className="btn btn-sm btn-outline-light d-lg-none ms-auto"
            onClick={onClose}
            type="button"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="admin-nav">
          <div className="admin-nav-section">Management</div>

          <NavLink end to="/admin" className="admin-link">
            <i className="bi bi-speedometer2" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/bookings" className="admin-link">
            <i className="bi bi-calendar-check" />
            <span>Bookings</span>
          </NavLink>

          <NavLink to="/admin/rooms" className="admin-link">
            <i className="bi bi-door-open" />
            <span>Rooms</span>
          </NavLink>

          <div className="admin-nav-section mt-3">Settings</div>

          <button className="admin-link admin-link-btn" type="button">
            <i className="bi bi-gear" />
            <span>Settings</span>
          </button>

          <button className="admin-link admin-link-btn text-danger" type="button">
            <i className="bi bi-box-arrow-right" />
            <span>Logout</span>
          </button>
        </div>

        <div className="admin-sidebar-footer">
          <div className="small text-white-50">© {new Date().getFullYear()} Elite Resort</div>
        </div>
      </aside>
    </>
  );
}
