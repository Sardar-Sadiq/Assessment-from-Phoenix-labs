import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Menu, Package, LineChart, LogOut } from "lucide-react";
import { users } from "../data/users";

export default function Layout() {
  const currentUserId = Number(localStorage.getItem("currentUserId")) || 1;
  const user = users.find((u) => u.id === currentUserId);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("currentUserId");
    navigate("/", { replace: true });
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6 hidden md:flex flex-col justify-between">
        <div>
          <div className="text-[1.8rem] font-bold text-blue-600 mb-8">ACME Health</div>
          <nav className="space-y-8">
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>
              <div className="flex items-center gap-5 rounded-lg p-2 hover:bg-blue-200 hover:text-blue-400">
                <Menu size={18} /> Dashboard
              </div>
            </NavLink>
            <NavLink to="/progress" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>
              <div className="flex items-center gap-5 rounded-lg p-2 hover:bg-blue-200 hover:text-blue-400">
                <LineChart size={18} /> Progress
              </div>
            </NavLink>
            <NavLink to="/shipments" className={({ isActive }) => isActive ? "font-semibold text-blue-600" : ""}>
              <div className="flex items-center gap-5 rounded-lg p-2 hover:bg-blue-200 hover:text-blue-400">
                <Package size={18} /> Shipments
              </div>
            </NavLink>
          </nav>
        </div>
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-red-300 text-red-600 rounded-lg px-4 py-2 hover:bg-red-50 transition-colors mt-8"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Navbar */}
        <header className="flex items-center justify-end px-6 py-4 border-b bg-white">
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700 text-sm truncate w-full">
              Welcome back, {user?.fullName || "User"}
            </span>
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
