import { useState } from "react";
import { Icon } from '../components/Icon'; 
import ThemeToggel from '../components/ThemToggel';
import { ArrowRight } from 'lucide-react';
import Sidebare from '../components/Sidebare';

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: 1, title: "IoT Weather Station",  desc: "Building an IoT-based weather monitoring system with sensors", members: 3, createdAt: "2/10/2026" },
  { id: 2, title: "Robotics Arm Control", desc: "Design and control of a 6-DOF robotic arm",                     members: 2, createdAt: "1/25/2026" },
];

const REQUESTS = [
  { id: 1, project: "Robotics Arm Control", items: 2, createdAt: "2/20/2026", updatedAt: "2/20/2026", status: "Pending"   },
  { id: 2, project: "IoT Weather Station",  items: 2, createdAt: "2/15/2026", updatedAt: "2/16/2026", status: "Approved"  },
  { id: 3, project: "IoT Weather Station",  items: 1, createdAt: "2/5/2026",  updatedAt: "2/18/2026", status: "Completed" },
];
// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (d) => {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
};
const today = () => new Date().toISOString().split("T")[0];
const STATUS_STYLE = {
  Pending:   "bg-yellow-500/20 text-yellow-400 border-1 border-yellow-500/40",
  Approved:  "bg-green-500/20  text-green-400  border-1 border-green-500/40",
  Completed: "bg-blue-500/20   text-blue-400   border-1 border-blue-500/40",
};


// ─── Main StudentDashboard ────────────────────────────────────────────────────
export default function StudentDashboard() {
  const [active, setActive] = useState("Dashboard");

  // توحيد مسميات الأيقونات من ملف Icon.js
  
  const stats = [
    { label: "My Projects",    value: 2, icon: Icon.projects,      iconColor: "#6366F1", iconBg: "rgba(99,102,241,0.15)"  },
    { label: "Total Requests", value: 3, icon: Icon.requests, iconColor: "#A855F7", iconBg: "rgba(168,85,247,0.15)"  },
    { label: "Approved",       value: 1, icon: Icon.check,    iconColor: "#22C55E", iconBg: "rgba(34,197,94,0.15)"   },
    { label: "Pending",        value: 1, icon: Icon.clock,    iconColor: "#EAB308", iconBg: "rgba(234,179,8,0.15)"   },
  ];

  return (
    <div className="flex h-screen dynamic-bg transition-colors duration-300" style={{ fontFamily: "Inter" }}>
      
      {/* ── Sidebar ── */}
      <Sidebare activeLabel="Dashboard" />

      {/* ── Main Content ── */}
      <main className="flex-1 overflow-y-auto p-7">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-title-custom">Student Dashboard</h1>
            <p className="text-sm text-small-custom">Manage your projects and material requests</p>
          </div>

          {/* ── Stat Cards ── */}
          <div className="grid grid-cols-4 gap-4 mb-8  ">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-4 glass-card border-1 border-[#1E40AF4D] w-[200px] h-[109px]">
                <div className="flex items-center justify-between mb-3 ">
                  <p className="text-xs text-title-custom ">{s.label}</p>
                  <div className="p-1.5 rounded-lg" style={{ background: s.iconBg, color: s.iconColor }}>
                    {s.icon}
                  </div>
                </div>
                <p className="text-3xl font-bold text-title-custom mt-[-20px]">{s.value}</p>
              </div>
            ))}
          </div>
         {/* ── Action Cards  ── */}
          <div className="grid grid-cols-2 gap-4 mb-8 h-[224px]">
           {/* Manage Projects Card */}
           <div className="rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01]" 
             style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, transparent 100%)", border: "1px solid #2B7FFF33" }}>
             <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-indigo-500/10 text-[#51A2FF]">
             <div className="scale-[3]">
               {Icon.projects}
             </div>  
             </div>
             <h3 className="font-bold text-lg mb-2 text-title-custom">Manage Projects</h3>
             <p className="text-sm text-small-custom mb-4">Create new projects, add team members, and organize your work.</p>
             <span className="text-sm font-inter text-[#51A2FF] flex items-center gap-2">View Projects <ArrowRight size={20} /> </span>
           </div>

           {/* Request Materials Card */}
           <div className="rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01] font-inter" 
             style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.1) 0%, transparent 100%)", border: "1px solid #AD46FF33" }}>
             <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-purple-500/10 text-purple-500">
             <div className="scale-[3]">
               {Icon.requests}
              </div>
             </div>
             <h3 className="font-bold text-lg mb-2 text-title-custom">Request Materials</h3>
             <p className="text-sm text-small-custom mb-4">Browse available materials and submit requests for your projects.</p>
             <span className="text-sm font-inter text-purple-500">Browse Materials →</span>
           </div>
        </div>
         
                
{/* ── My Projects Section ── */}
<div className="rounded-2xl p-6 mb-8 bg-[var(--card)] border-1 border-[var(--card-border)] shadow-sm ">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-2 text-title-custom font-inter font-bold text-lg"> 
      {Icon.projects} My Projects
    </div>
    <button className="text-sm font-inter font-bord text-[var(--primary)] hover:underline">View All</button>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-2 gap-4">
    {PROJECTS.map((p) => (
      <div 
        key={p.id} 
        className="p-3.5 rounded-xl border-1 border-[var(--card-border)] hover:bg-black/5 transition-all cursor-pointer flex flex-col min-h-[100px]"
      >
        {/* الجزء العلوي: نخلوا العنوان والوصف يبداو من أعلى نقطة */}
        <div className="flex-1 text-left">
          <h4 className="font-inter text-[15px] text-title-custom mb-1">
            {p.title}
          </h4>
          <p className="text-[11px] text-small-custom leading-snug opacity-80 line-clamp-2">
            {p.desc}
          </p>
        </div>
        
        {/* الجزء السفلي: المعلومات الإضافية */}
        <div className="mt-0 pt-0  flex items-center justify-between">
          <span className="text-[9px] text-small-custom font-inter uppercase tracking-tight">
            {p.members} team member(s)
          </span>
          <span className="text-[10px] text-small-custom opacity-50">
            {p.createdAt}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
          {/* ── Recent Requests ── */}
          <div className="rounded-2xl overflow-hidden py-3" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
            <div className="flex items-center justify-between px-6 py-3.5 ">
              <div className="flex items-center gap-2 text-title-custom font-inter font-bold text-lg">
                {Icon.requests} Recent Requests
              </div>
              <button className="text-sm font-inter font-bord text-[var(--primary)] hover:underline">View All</button>
            </div>
           <div className="flex flex-col gap-4 mx-auto max-w-[95%]" >
            {REQUESTS.map((r) => (
              <div key={r.id} className="flex items-center justify-between px-6 py-3 rounded-xl border-1 border-[var(--card-border)] last:border-0 hover:bg-black/5 transition-all cursor-pointer">
                <div className="">
                  <p className="font-inter text-sm text-title-custom  ">{r.project}</p>
                  <p className="text-xs text-small-custom mt-1">{r.items} item(s) • Updated: {r.updatedAt}</p>
                </div>
                <span className={`text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full ${STATUS_STYLE[r.status]}`}>
                  {r.status}
                </span>
              </div>
            ))}
           </div>  
          </div>
        </div>
      </main>
    </div>
  );
}