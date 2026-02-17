import { Routes, Route } from "react-router-dom";

import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AdminBookings from "./AdminBookings";
/*import AddRoom from "./AddRoom";*/

export default function AdminPage() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        
        <Route path="bookings" element={<AdminBookings />} />
      </Route>
    </Routes>
  );
}
