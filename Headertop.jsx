import React from 'react';
import './Headertop.css'; // Import your Headertop styles

const Headertop = () => {
  return (
    <div className="Headertop">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      <button className="Headertop-button">Post</button>
      <button className="Headertop-button">Login</button>
    </div>
  );
}

export default Headertop;
