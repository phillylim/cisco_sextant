
import './App.css';

import Banner from "./Banner"; 
import Exhibit from "./Exhibit";
import IPAddress from "./getip.js";
import PacketLatency from "./latency.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Banner title="Sextant" />
      <Exhibit title="INFO">
      <div><p> IPv4: </p><IPAddress type = "v4"></IPAddress></div>
      <div><p> IPv6: </p><IPAddress type = "v6"></IPAddress><br></br></div>
      <div><p> Latency: </p><PacketLatency></PacketLatency></div>
      </Exhibit>
      </header>
    </div>
  );
}

export default App;
