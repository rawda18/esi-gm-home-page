import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon'; 
import ThemeToggle from './ThemToggel'; 

const NavButton = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
    style={{
      background: active ? "#6366F1" : "transparent",
      color: active ? "#fff" : "var(--text-small)",
    }}
  >
    {icon} 
    {label}
  </button>
);

export default function Sidebare2({ activeLabel }){
   const navigate = useNavigate();

   // navItems 
   const navItems = [
    {label:"Dashboard",        icon: Icon.dashboard, path: "/StorekeeperDashboard"},
    {label:"Inventory",        icon: Icon.browse,    path: "/inventory"},
    {label:"QR Scanner",       icon: Icon.qr_scanner, path: "/scanner"},
    {label:"Material Outputs", icon: Icon.trash,      path: "/InputOutput"},
    {label:"Maintenance",      icon: Icon.maintenance, path: "/Maintenance"},
   ];

  return(
    <aside className="w-[256px] h-screen  flex flex-col sticky top-0" style={{ background: "var(--card)", borderRight: "1px solid var(--card-border)" }}>
      {/* Logo Section */}
      <div className="px-4 py-4 flex items-center " style={{ borderBottom: "1px solid var(--card-border)" }}>
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <span className="text-title-custom text-[18px] font-bold">ESI-GM</span>
            <span className="text-xs text-small-custom">Lab Equipment</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 mt-1 ">
        {/* navItems */}
        {navItems.map((item) => (
          <NavButton
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={activeLabel === item.label}
            onClick={() => navigate(item.path || "/")} 
          />
        ))}
      </nav>

      {/* User & Logout Section */}
      <div className="p-3" style={{ borderTop: "1px solid var(--card-border)" }}>
        <div className="flex items-center gap-2.5 mb-4 px-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-indigo-500">
            {Icon.user}
          </div>
          <div>
            <div className="text-sm font-semibold text-title-custom leading-tight">Robotics Lab Admin</div>
            <div className="text-xs text-small-custom">admin</div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 px-1">
          
          <button className="flex items-center gap-2 text-xs text-small-custom hover:text-red-400 transition-all">
            {Icon.logout} Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

