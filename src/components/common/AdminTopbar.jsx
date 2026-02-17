export default function AdminTopbar({ collapsed, onToggleCollapse, onOpenSidebar }) {
  return (
    <header className="admin-topbar">
      <div className="d-flex align-items-center gap-2">
        {/* Mobile hamburger */}
        <button className="btn btn-dark d-lg-none" onClick={onOpenSidebar} type="button">
          <i className="bi bi-list" />
        </button>

        {/* Desktop collapse */}
        <button className="btn btn-dark d-none d-lg-inline-flex" onClick={onToggleCollapse} type="button">
          <i className={`bi ${collapsed ? "bi-layout-sidebar-inset" : "bi-layout-sidebar"}`} />
        </button>

        <div className="topbar-title">
          <div className="title">Admin</div>
          <div className="subtitle">Manage your resort easily</div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <div className="topbar-search d-none d-md-flex">
          <i className="bi bi-search" />
          <input className="form-control form-control-sm" placeholder="Search bookings, rooms..." />
        </div>

        <button className="btn btn-dark position-relative" type="button">
          <i className="bi bi-bell" />
          <span className="notif-dot" />
        </button>

        <div className="topbar-user">
          <div className="avatar">ER</div>
          <div className="d-none d-sm-block">
            <div className="name">Admin</div>
            <div className="role">Manager</div>
          </div>
        </div>
      </div>
    </header>
  );
}
