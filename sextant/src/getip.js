import React, { useState, useEffect } from 'react';

const IPAddress = ({ version = 'v4' }) => {
  const [ipAddress, setIPAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIPAddress = async () => {
      try {
        const response = await fetch(`https://api.ipify.org?format=json&${version === 'v6' ? 'ipv6' : ''}`);
        if (response.ok) {
          const data = await response.json();
          setIPAddress(data.ip);
        } else {
          setError('Failed to fetch IP address');
        }
      } catch (err) {
        setError(err.message);
      }
    };
    getIPAddress();
  }, [version]);
  return (
    <div>
      {ipAddress}
    </div>
  );
};

export default IPAddress;