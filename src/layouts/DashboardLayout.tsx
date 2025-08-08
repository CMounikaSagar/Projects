
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 1. Shared Sidebar */}
      <nav
        style={{
          width: '200px',
          padding: '20px',
          borderRight: '2px solid #eee',
        }}
      >
        <h2>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/superhero">Profile</Link></li>
          <li><Link to="/rq">Settings</Link></li>
        </ul>
        <hr />
        <Link to="/">Back to Home</Link>
      </nav>

      {/* 2. Main Content Area */}
      <main style={{ flex: 1, padding: '20px' }}>
        {/* The child route component will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
}