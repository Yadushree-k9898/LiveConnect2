// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import Profile from "./pages/Profile";
import MyEvents from "./pages/MyEvents";
import RegisteredEvents from "./pages/RegisteredEvents";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <ThemeToggle/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/registered-events" element={<RegisteredEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;