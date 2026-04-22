import axios from 'axios';

const API_URL = 'http://localhost:5000/api/dashboard/stats';

export const getDashboardStats = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching stats:', error);
    return [];
  }
};
export const getRoles = async () => {
  try {
    // هاد الرابط يرجعلك مثلاً: [{id: 1, label: 'Students', count: 150}, ...]
    const response = await axios.get(`${API_BASE_URL}/roles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching roles:', error);
    return [];
  }
};
