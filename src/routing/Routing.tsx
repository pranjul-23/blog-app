// src/routes/AppRoutes.tsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const Routing: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="text-center mt-10 text-xl">Page Not Found</div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Routing;
