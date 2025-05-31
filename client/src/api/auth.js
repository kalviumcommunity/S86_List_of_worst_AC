import axios from './axios';

export const signupUser = async (userData) => {
  const response = await axios.post('/auth/signup', userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post('/auth/signin', userData);
  return response.data;
};
