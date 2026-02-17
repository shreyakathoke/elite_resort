import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminSidebar from "../../components/common/AdminSidebar";
import AdminTopbar from "../../components/common/AdminTopbar";

import "../../styles/admin.css";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Close sidebar on route change for mobile (basic)
  useEffect(() => {
    const close = () => setSidebarOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <div className={`admin-shell ${collapsed ? "is-collapsed" : ""}`}>
      <AdminSidebar
        collapsed={collapsed}
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="admin-main">
        <AdminTopbar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((p) => !p)}
          onOpenSidebar={() => setSidebarOpen(true)}
        />

        <main className="admin-content">
          <div className="admin-page animate-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
