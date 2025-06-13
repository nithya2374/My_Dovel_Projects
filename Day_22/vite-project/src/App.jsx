// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const Home = lazy(() => import("./components/Home.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
