// src/pages/Register.jsx
import React from "react";
import RegisterForm from "../components/ui/RegisterForm";
// import authService from "../services/authService";

const Register = () => {
  const handleRegister = async (userData) => {
    await authService.register(userData);
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
