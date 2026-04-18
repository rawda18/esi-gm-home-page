import { useState } from "react";
import { Icon } from '../components/Icon'; 
import ThemeToggel from '../components/ThemToggel';
import { ArrowRight } from 'lucide-react';
import Sidebare3 from '../components/Sidebare3';

export default function Maintenance({ maintenanceList = [] }){
  const stats = [
    { label: "Needs Attention", value: 0,desc: "Materials requiring maintenance or damaged", icon:Icon.overdue,iconColor:"#FF6467",iconBg: "#FB2C3633",bgb:"#f8555d33",scal:1.5 },
    { label: "Upcoming (30 days)",value: 0,desc: "Scheduled maintenance in the next 30 days", icon:Icon.bk,iconColor:"#FDC700",iconBg: "var(--bk)",bgb:"#f0b00027",scal:1.2}
  ]

  return(
    <div className="flex dynamic-bg transition-colors duration-300" style={{ fontFamily: "Inter" }}>
        <Sidebare3 activeLabel="Maintenance"/>
        <main className="flex-1 relative overflow-y-auto p-8">
          <div className="absolute top-6 right-8 z-60 ">
            <ThemeToggel/>
          </div>
          {/* Page header */}
          <div className="w-full mt-[45px] border-t border-solid border-[var(--card-border)]"></div>
          <div className="w-full mb-5">
            <div className="flex items-center justify-between w-full">
              <div className="whitespace-nowrap">
                <h2 className="text-title-custom text-[30px] mt-3">Maintenance Management</h2>
                <p className="text-small-custom text-sm mt-[-9px]">Monitor equipment condition and track maintenance schedules</p>
              </div>
            </div>
              {/* ── Stat Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 ">
              {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-4  border-1 border-[#1E40AF4D]"style={{ background: s.bgb}}>
                <div className=" flex items-center gap-3 ">
                  <div className="p-1.5 rounded-lg mt-[-11px] scale-[1.3]" style={{ background: s.iconBg, color: s.iconColor,scale: s.scal }}>
                    {s.icon}
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-xs text-small-custom mb-1">{s.label}</p>
                    <p className="text-3xl font-bold text-title-custom" >{s.value}</p>
                  </div>  
                </div>
                <div className="text-xs text-small-custom">
                   {s.desc}
                </div>
              </div>
             ))}
            </div>
            {/* Maintenance History */}
            <div className="rounded-xl border-1 border-[var(--br)] bg-[var(--card)]">
            {/* Table header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E40AF4D]">
              <div className="flex items-center gap-2">
                <span className="text-title-custom mt-[-8px]">{Icon.maintenance}</span>
                <h3 className="text-base font-semibold text-title-custom">Maintenance History</h3>
              </div>           
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="">
                    {["Material", "Category", "Last Maintenance", "Next Maintenance", "Type", "Status"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-medium text-small-custom uppercase tracking-wide whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
  {maintenanceList.length === 0 ? (
    <tr>
      <td colSpan={6} className="px-4 py-8 text-center text-small-custom text-xs">
        No maintenance records yet.
      </td>
    </tr>
  ) : (
    maintenanceList.map((row) => (
      <tr key={row.id} className="border-t border-[#1E40AF4D] hover:bg-black/5 transition-all">
        <td className="px-4 py-3 text-title-custom text-sm font-medium">{row.material}</td>
        <td className="px-4 py-3 text-small-custom text-sm">—</td>
        <td className="px-4 py-3 text-small-custom text-sm">{row.date}</td>
        <td className="px-4 py-3 text-small-custom text-sm">—</td>
        <td className="px-4 py-3 text-small-custom text-sm">{row.issue}</td>
        <td className="px-4 py-3">
          <span className={`text-xs px-2 py-1 rounded-full font-medium
            ${row.priority === "Critical" ? "bg-red-100 text-red-600" :
              row.priority === "High"     ? "bg-orange-100 text-orange-600" :
              row.priority === "Medium"   ? "bg-yellow-100 text-yellow-600" :
                                            "bg-green-100 text-green-600"}`}>
            {row.priority}
          </span>
        </td>
      </tr>
    ))
  )}
</tbody>
              </table>
            </div>
          </div>
          </div>
        </main>
    </div>    
  )
}