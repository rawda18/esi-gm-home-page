import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getItems = async () => {
  try {
    const response = await API.get('/items');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getCategories = () => API.get('/categories').then((res) => res.data);
