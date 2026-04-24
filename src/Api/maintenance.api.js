// src/Api/maintenance.api.js

let maintenanceItems = [
  {
    id: 1,
    material: 'Conveyor Belt C100',
    category: 'Mechanical',
    last_maintenance: '2026-02-10',
    next_maintenance: '2026-04-15',
    type: 'Preventive',
    status: 'Medium',
    priority: 'Medium',
  },
  {
    id: 2,
    material: 'Motor M200',
    category: 'Electrical',
    last_maintenance: '2026-02-15',
    next_maintenance: '2026-03-20',
    type: 'Corrective',
    status: 'High',
    priority: 'High',
  },
  {
    id: 3,
    material: 'Sensor S300',
    category: 'Electronics',
    last_maintenance: '2026-03-01',
    next_maintenance: '2026-04-01',
    type: 'Sensor',
    status: 'Critical',
    priority: 'Critical',
  },
  
];

// حساب الإحصائيات (Needs Attention = Critical أو High، Upcoming = next_maintenance خلال 30 يوم)
function computeStats() {
  const today = new Date();
  const needsAttention = maintenanceItems.filter(
    (item) => item.priority === 'Critical' || item.priority === 'High'
  ).length;

  const upcoming30 = maintenanceItems.filter((item) => {
    if (!item.next_maintenance) return false;
    const nextDate = new Date(item.next_maintenance);
    const diffDays = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 30;
  }).length;

  return { needsAttention, upcoming30 };
}

// جلب كل عناصر الصيانة (يمكن إضافة فلترة حسب الحاجة)
export const fetchMaintenance = () => {
  return [...maintenanceItems];
};

// جلب الإحصائيات
export const fetchMaintenanceStats = () => {
  return computeStats();
};

// إضافة عنصر صيانة جديد
export const addMaintenanceItem = (newItem) => {
  const newId = maintenanceItems.length + 1;
  const itemWithId = { id: newId, ...newItem };
  maintenanceItems.push(itemWithId);
  return itemWithId;
};

// حذف عنصر صيانة
export const deleteMaintenanceItem = (id) => {
  const index = maintenanceItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    maintenanceItems.splice(index, 1);
    return true;
  }
  return false;
};