import axios from 'axios';

// Base URL (تبدلو حسب backend ديالك)
const API_BASE = 'http://localhost:5000';

// جلب كل requests
export const getRequests = async () => {
  try {
    const res = await axios.get(`${API_BASE}/requests`);
    return res.data;
  } catch (error) {
    console.error('Error fetching requests:', error);
    throw error;
  }
};

// إنشاء request جديدة
export const createRequest = async (requestData) => {
  try {
    const res = await axios.post(`${API_BASE}/requests`, requestData);
    return res.data;
  } catch (error) {
    console.error('Error creating request:', error);
    throw error;
  }
};

// التحقق من stock (اختياري)
export const validateStock = async (materials) => {
  try {
    const res = await axios.post(`${API_BASE}/validate-stock`, { materials });
    return res.data;
  } catch (error) {
    console.error('Error validating stock:', error);
    throw error;
  }
};
