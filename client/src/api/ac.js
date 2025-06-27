// src/api/ac.js
import api from './axios'; // or your axios instance

export const getACs = () => api.get('/acs');
export const getACById = (id) => axios.get(`/api/acs/${id}`);
export const addAC = (data) => api.post('/acs', data);
export const deleteAC = (id) => api.delete(`/acs/${id}`);
export const updateAC = (id, data) => api.put(`/acs/${id}`, data);
