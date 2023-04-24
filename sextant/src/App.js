
import './App.css';

import Banner from "./Banner"; 
import Exhibit from "./Exhibit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Banner title="Sextant" />
      <Exhibit title="INFO">
        <p>Hello WOrld!</p>
      </Exhibit>
      </header>
    </div>
  );
}

export default App;
