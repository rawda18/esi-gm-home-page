// src/Api/StudentDashboard.api.js

let projects = [
  { id: 1, title: 'IoT Weather Station',   desc: 'Building an IoT-based weather monitoring system with sensors', members: 3, createdAt: '2/10/2026' },
  { id: 2, title: 'Robotics Arm Control',  desc: 'Design and control of a 6-DOF robotic arm',                  members: 2, createdAt: '1/25/2026' },
];

let requests = [
  { id: 1, project: 'Robotics Arm Control', items: 2, createdAt: '2/20/2026', updatedAt: '2/20/2026', status: 'Pending'   },
  { id: 2, project: 'IoT Weather Station',  items: 2, createdAt: '2/15/2026', updatedAt: '2/16/2026', status: 'Approved'  },
  { id: 3, project: 'IoT Weather Station',  items: 1, createdAt: '2/5/2026',  updatedAt: '2/18/2026', status: 'Completed' },
];

// counters مستقلة على حالها — ما تتأثرش بالحذف
let projectIdCounter = projects.length;
let requestIdCounter = requests.length;

export const fetchDashboardProjects = () => [...projects];
export const fetchDashboardRequests = () => [...requests];

export const addDashboardProject = (newProject) => {
  const projectWithId = { id: ++projectIdCounter, ...newProject };
  projects.push(projectWithId);
  return projectWithId;
};

export const addDashboardRequest = (newRequest) => {
  const requestWithId = { id: ++requestIdCounter, ...newRequest };
  requests.push(requestWithId);
  return requestWithId;
};

// bonus: إذا تحتاجهم لاحقاً
export const deleteDashboardProject = (id) => {
  projects = projects.filter((p) => p.id !== id);
};

export const deleteDashboardRequest = (id) => {
  requests = requests.filter((r) => r.id !== id);
};