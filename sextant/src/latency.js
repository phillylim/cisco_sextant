import React, { useState, useEffect } from 'react';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:55455');

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
    console.log(event.data)
      try {
        const data = event.data
        
        const currentTime = new Date().getTime();
        const packetLatency = currentTime - data;
        setLatency(packetLatency);
        
      } catch (err) {
        setError(err.message);
      }
    };

    ws.onerror = (err) => {
      setError(err.message);
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {<p>Packet Latency: {latency}ms</p>}
    </div>
  );
};

export default PacketLatency;