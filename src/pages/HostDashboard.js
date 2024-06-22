// src/pages/HostDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HostDashboard = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // Fetch inquiries from the backend
    axios.get('/api/inquiries')
      .then(response => setInquiries(response.data))
      .catch(error => console.error('Error fetching inquiries:', error));
  }, []);

  return (
    <div>
      <h2>Host Dashboard</h2>
      <ul>
        {inquiries.map(inquiry => (
          <li key={inquiry.id}>
            {inquiry.destination} - {inquiry.budget} - {inquiry.duration} days
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostDashboard;
