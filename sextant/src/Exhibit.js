import React from 'react';
import './Exhibit.css';

// Define a function component called Exhibit
function Exhibit(props) {
    // Destructure the props into variables
    const { title, children } = props;
  
    // Return JSX elements
    return (
      // Use parentheses to wrap multiple lines of JSX
      <div className="exhibit">
        <h1>{title}</h1>
        <div className="panel-container">
          {children}
        </div>
      </div>
    );
  }
  
  // Export the Exhibit component
  export default Exhibit