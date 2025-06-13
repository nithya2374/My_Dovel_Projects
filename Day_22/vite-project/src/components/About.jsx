// src/components/About.jsx
import React from "react";

const About = React.memo(() => {
  return (
    <div className="page">
      <h1> About Page</h1>
      <p>This app demonstrates React performance optimizations like memoization, lazy loading, and routing.</p>
    </div>
  );
});

export default About;
