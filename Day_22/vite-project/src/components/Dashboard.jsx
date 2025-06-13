// src/components/Dashboard.jsx
import React from "react";

const Dashboard = React.memo(() => {
  return (
    <div className="page">
      <h1> Dashboard</h1>
      <p>Welcome to the dashboard. You can see insights and quick links here.</p>
    </div>
  );
});

export default Dashboard;
