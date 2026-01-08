'use client';
import { useState } from 'react';

export default function UserDetailsModal({ onSuccess }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async  () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError('Please enter a valid mobile number');
      return;
    }

    const userData = { name, mobile };

  await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

    localStorage.setItem('userDetails', JSON.stringify(userData));
    onSuccess();
  };

  return (
    <div className="user-modal-overlay">
      <div className="user-modal">
        <h4>Welcome To Mahakal UPVC</h4>
        <p>Please enter your details to continue</p>

        {error && <span className="error">{error}</span>}

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button onClick={handleSubmit}>Continue</button>
      </div>
    </div>
  );
}
