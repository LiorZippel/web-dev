import React from 'react';

const NavTabs = () => {
  return (<div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button className="nav-link active">For you</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Trending</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">News</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Sports</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Entertainment</button>
      </li>
    </ul>
  </div>);
}
export default NavTabs;