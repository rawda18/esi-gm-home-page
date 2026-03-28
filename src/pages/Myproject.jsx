import { useState } from "react";
import { Icon } from '../components/Icon'; 
import ThemeToggel from '../components/ThemToggel';
import { ArrowRight } from 'lucide-react';
import Sidebare from '../components/Sidebare';
import CreateProjectModal from './CreateProjectModal';

const INIT_PROJECTS =[
  {
    id:1,
    title:"IoT Weather Station",
    desc: "Building an IoT-based weather monitoring system",
    createdAt:new Date().toLocaleDateString('fr-FR'),
    members:2,
  },
  {
    id:2,
    title:"Robotics Arm Control",
    desc:"Design and control of a 6-DOF robotic arm",
    createdAt:new Date().toLocaleDateString('fr-FR'),
    members:3,
  },
]
const ProjectCard = ({project})=>(
  <div className="flex flex-col flex-wrap gap-2 transition-all hover:scale-[1] bg-[var(--card)] border-1 border-[var(--card-border)] p-6 rounded-xl max-w-[310px] ">
    <div className="flex items-start justify-between">
      <div className="w-8 h-8 scale-[1.6] rounded-xl flex items-center justify-center bg-[var(--icon-bg)] "style={{color:"#51A2FF" }}>
        {Icon.projects}
      </div>
      <div className="flex items-center gap-1 text-xs text-small-custom opacity-70 ">
        <span className="w-3 h-3 scale-[0.7] mt-[-6px]">{Icon.calendar}</span>
        <span>{project.createdAt}</span>
      </div>
    </div>
    {/* Title + desc */}
    <div className="">
      <h3 className="text-xl text-title-custom ">{project.title}</h3>
      <p className="text-sm text-small-custom">{project.desc}</p>
    </div>
    {/*Divider*/}
    <div className="border-t border-[var(--card-border)]"/>
    {/* Bottom: members + view details */}
    <div className="flex items-center justify-between">
      <div className=" flex items-center text-small-custom text-sm gap-2 flex-row">
       <span className="w-2 h-2 mt-[-5px]">{Icon.users}</span>
       <span>{project.members} members</span>
      </div>
      <button className="text-sm  hover:opacity-80 transition-all text-[#2B4C9F]" >
        View Details
      </button>
    </div>
  </div>
)
export default function MyProject(){
   const [projects, setProjects] = useState(INIT_PROJECTS);
   const [showModal, setShowModal] = useState(false);
   const handleCreate = (newProject) => {setProjects((prev) => [...prev, { ...newProject, id: prev.length + 1 }]);};
  return(
    <main className="flex h-screen  overflow-hidden "style={{ background: "var(--background)" ,fontFamily: "Inter"}}>
       {/*SIdebare*/}
       <Sidebare activeLabel="My Projects" />
       {/* Header */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex items-start justify-between mb-10 w" >
            <div className="flex flex-col">
             <h1 className="text-3xl font-bold font-inter text-title-custom ">
               My Project
             </h1>
             <p className="text-small-custom text-sm">
               Manage your laboratory projects and teams
             </p>
            </div>
             <button onClick={()=>setShowModal(true)} className="flex item-center gap-2 px-3 py-3 text-sm text-white bg-[#2B4C9F] rounded-xl transition-all hover:opacity-90 ">
               <span className="text-[16px]">+</span>
                Create Project
             </button>
          </div>
         <div className="flex flex-row flex-wrap md:grid-cols-2 xl:grid-cols-3 gap-4 ">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        </main>
     {showModal && ( <CreateProjectModal onClose={() => setShowModal(false)}onCreate={handleCreate}/>)}
    </main>

  )
}