import axios from 'axios';

// 1. البيانات تاعك خليناها كيما راهي (هي اللي تولي Plan B)
let outputs = [
  {
    id: 1,
    material: 'Arduino Uno R3',
    desc: 'Microcontrollers • Qty: 3',
    lab: 'Lab A - Electronics',
    student: 'Sarah Student. IoT Weather Station',
    issued: '2026-03-18 John Keeper',
    returned: new Date().toLocaleDateString('fr-FR'),
    condition: 'Excellent',
    status: 'Borrowed',
  },
  {
    id: 2,
    material: 'Raspberry Pi 4',
    desc: 'SBC • Qty: 2',
    lab: 'Lab B - Robotics',
    student: 'Ahmed Mansouri • Drone Project',
    issued: '2026-03-20 Leila Keeper',
    returned: new Date().toLocaleDateString('fr-FR'),
    condition: 'Good',
    status: 'Returned',
  },
  // ... الباقي تاع البيانات تاعك
];

const API_BASE = 'http://localhost:3000'; // رابط السيرفر (json-server)

// 2. الدوال المعدلة باش تولي تخدم بالـ Axios والـ Mock في نفس الوقت

export const fetchOutputs = async (filters = {}) => {
  try {
    // محاولة جلب البيانات من السيرفر الحقيقي/الوهمي الخارجي
    const res = await axios.get(`${API_BASE}/outputs`, { params: filters });
    return res.data;
  } catch (error) {
    console.warn("Server unreachable, using local mock data...");
    
    // إيلا فشل السيرفر، نستعملو الكود تاعك تاع التصفية (Filtering)
    let result = [...outputs];
    if (filters.lab) result = result.filter(o => o.lab.includes(filters.lab));
    if (filters.status) result = result.filter(o => o.status === filters.status);
    if (filters.search) {
      const s = filters.search.toLowerCase();
      result = result.filter(o =>
        o.material.toLowerCase().includes(s) ||
        o.student.toLowerCase().includes(s) ||
        o.lab.toLowerCase().includes(s)
      );
    }
    return result;
  }
};

export const fetchStats = async () => {
  try {
    const res = await axios.get(`${API_BASE}/stats`);
    return res.data;
  } catch (error) {
    // إيلا فشل السيرفر، نحسبو الإحصائيات من الموك داتا تاعك
    const total = outputs.length;
    const borrowed = outputs.filter(o => o.status === 'Borrowed').length;
    const returned = outputs.filter(o => o.status === 'Returned').length;
    const overdue = outputs.filter(o => o.status === 'Overdue').length;
    const transferred = outputs.filter(o => o.status === 'Transferred').length;
    return { total, borrowed, returned, overdue, transferred };
  }
};