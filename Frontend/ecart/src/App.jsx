import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      {/* Navbar visible on all pages */}
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected route (later we’ll add auth logic) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
