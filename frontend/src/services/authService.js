import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/auth";

// Register User
export const registerUser = async (userData) => {
  const formData = new FormData();
  formData.append("name", userData.name);
  formData.append("email", userData.email);
  formData.append("password", userData.password);
  if (userData.avatar) {
    formData.append("avatar", userData.avatar); 
  }

  const response = await axios.post(`${API_URL}/register`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

// Guest Login
export const guestLogin = async () => {
  const response = await axios.post(`${API_URL}/guest-login`);
  return response.data;
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("user");
};
