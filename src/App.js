import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TripDetailsPage from './pages/TripDetailsPage';
import LoginPage from './pages/LoginPage';
import HostDashboard from './pages/HostDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trip-details" element={<TripDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/host-dashboard" element={<ProtectedRoute component={HostDashboard} />} />
      </Routes>
    </div>
  );
}

export default App;
