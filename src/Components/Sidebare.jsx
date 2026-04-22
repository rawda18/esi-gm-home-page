import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Icon } from './Icon'; 
import ThemeToggle from './ThemToggel';
import { LogOut, X } from 'lucide-react'; // زدت هادو باش يجي الستايل كامل

// الـ NavItem المطور بستايل الـ Admin اللي عجبك
const NavItem = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-[12px] transition-all duration-300 ${
      active
        ? 'bg-[#2B4C9F] text-white shadow-lg ' 
        : 'text-[var(--title-custom)] hover:bg-[var(--hover-bg)] hover:text-[var(--title-custom)] font-[var(--font-family)]'
    }`}
  >
    <span className={`${active ? 'text-white' : 'text-[var(--small-custom)]'}`} style={{ transform: 'scale(1.4)'}}>
      {icon}
    </span>
    <span className="text-[14px]">{label}</span>
  </button>
);

export default function Sidebar({ activeLabel }) {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard",       icon: Icon.dashboard, path: "/dashboard/student" },
    { label: "My Projects",     icon: Icon.projects,  path: "/projects" },
    { label: "My Requests",     icon: Icon.requests,  path: "/requests" },
    { label: "Browse Materials", icon: Icon.browse,    path: "/materials/browse" },
  ];

  return (
    <aside
      className="hidden md:flex w-[260px] h-screen sticky top-0 flex-col border-r border-[var(--card-border)] bg-[var(--background)] transition-all"
      style={{ fontFamily: "Inter" }}
    >
      {/* Header / Logo - الارتفاع 100px كيما الـ Admin */}
      <div className="h-[100px] px-6 flex items-center border-b border-[var(--card-border)]">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-[48px] h-[48px]">
            <img src="/logo.png" alt="logo" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[var(--title-custom)] font-inter text-[16px] sm:text-[18px] font-semibold leading-[20px] sm:leading-[22.5px]">ESI-GM</span>
            <span className="font-inter text-[10px] sm:text-[12px] font-normal leading-[12px] sm:leading-[14px] mt-1 text-[var(--small-custom)]">ESI 8 Mai 1945</span>
          </div>
        </div>
      </div>

      {/* Navigation - التباعد الدقيق [3.3px] */}
      <nav className="flex flex-col p-3 gap-[7px] flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={activeLabel === item.label}
            onClick={() => navigate(item.path)}
          />
        ))}
      </nav>

      {/* User Info & Logout Section */}
      <div className="flex flex-col items-start w-full sm:w-[255px] h-auto sm:h-[120px] pt-[16.667px] px-4 gap-3 flex-shrink-0 border-t border-[var(--card-border)] ">
        <div className="flex gap-3 mb-1 ml-1 ">
          {/* Avatar الطالبة */}
        
          <div className="flex flex-col items-start h-[36px] px-3 flex-shrink-0 self-stretch">
            <div className="text-sm font-bold text-[var(--title-custom)] leading-tight">
              Sarah Student
            </div>
            <div className="text-xs text-small-custom ">Student</div>
          </div>
        </div>

        <div className="flex justify-center items-start gap-8 sm:gap-16 self-stretch">
          <ThemeToggle />
          <button
            onClick={() => {
              localStorage.clear();
              navigate('/login');
            }}
            className="flex items-center bg-transparent gap-2 text-[var(--small-custom)] "
          >
            <LogOut size={18} className="group-hover:scale-110 transition-transform" /> 
            Logout
          </button>
        </div>
      </div>

      {/* Bottom Close Button - نفس ستايل الـ Admin تماماً */}
      <div className="h-16 flex items-center justify-center border-t border-[var(--card-border)]">
        <button 
          onClick={() => navigate('/StudentDashboard')} 
          className="text-[var(--small-custom)] hover:text-[var(--title-custom)] transition-all transform hover:scale-110"
        >
          <X size={23} strokeWidth={2.5} />
        </button>
      </div>
    </aside>
  );
}