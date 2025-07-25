import { Outlet, NavLink } from "react-router-dom";
import { Menu, Package, LineChart } from "lucide-react";
import { users } from "../data/users";

const currentUserId = 2;
const currentUser = users.find((user) => user.id === currentUserId);
console.log("Current User in Layout:", currentUser);

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6 hidden md:block">
        <div className="text-xl font-bold mb-6  ">Acme Portal</div>
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-600" : ""
            }
          >
            <div className="flex items-center gap-2">
              <Menu size={18} /> Dashboard
            </div>
          </NavLink>
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-600" : ""
            }
          >
            <div className="flex items-center gap-2">
              <LineChart size={18} /> Progress
            </div>
          </NavLink>
          <NavLink
            to="/shipments"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-600" : ""
            }
          >
            <div className="flex items-center gap-2">
              <Package size={18} /> Shipments
            </div>
          </NavLink>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Navbar */}
        <header className="flex items-center justify-end px-6 py-4 border-b bg-white">
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700 text-sm truncate w-full">
              Welcome back,{" "} 
               { currentUser?.fullName || "User"}
            </span>
            <img
              src={currentUser.avatar}
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
