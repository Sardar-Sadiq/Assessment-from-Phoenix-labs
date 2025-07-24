import { Outlet, NavLink } from "react-router-dom";
import { Menu, Package, LineChart } from "lucide-react";

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6 hidden md:block">
        <div className="text-xl font-bold mb-6">Acme Portal</div>
        <nav className="space-y-4">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>
            <div className="flex items-center gap-2">
              <Menu size={18} /> Dashboard
            </div>
          </NavLink>
          <NavLink to="/progress" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>
            <div className="flex items-center gap-2">
              <LineChart size={18} /> Progress
            </div>
          </NavLink>
          <NavLink to="/shipments" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>
            <div className="flex items-center gap-2">
              <Package size={18} /> Shipments
            </div>
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
