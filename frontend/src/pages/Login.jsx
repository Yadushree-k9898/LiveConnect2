// src/pages/Login.jsx
import React from "react";
import { useAuth } from "../hooks/useAuth";
import LoginForm from "../components/ui/LoginForm";

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={login} />
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;