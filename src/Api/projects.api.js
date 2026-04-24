// src/Api/projects.api.js

let projects = [
  {
    id: 1,
    title: 'IoT Weather Station',
    desc: 'Building an IoT-based weather monitoring system',
    createdAt: new Date().toLocaleDateString('fr-FR'),
    members: 2,
  },
  {
    id: 2,
    title: 'Robotics Arm Control',
    desc: 'Design and control of a 6-DOF robotic arm',
    createdAt: new Date().toLocaleDateString('fr-FR'),
    members: 3,
  },
];

export const fetchProjects = () => {
  return [...projects];
};

export const addProject = (newProject) => {
  const newId = projects.length + 1;
  const projectWithId = {
    id: newId,
    ...newProject,
    createdAt: new Date().toLocaleDateString('fr-FR'),
  };
  projects.push(projectWithId);
  return projectWithId;
};

export const deleteProject = (id) => {
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
    return true;
  }
  return false;
};