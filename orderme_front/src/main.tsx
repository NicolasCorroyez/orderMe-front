import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Dashboard/Profile';
import Calendar from './pages/Dashboard/Calendar';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import HomeClient from './pages/Homeclient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen bg-primary">
      <div className="max-w-screen-xl mx-auto w-full">
        <Router>
          <Routes>
            <Route path="/" element={<HomeClient />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/calendar" element={<Calendar />} />
          </Routes>
        </Router>
      </div>
    </div>
  </React.StrictMode>,
);
