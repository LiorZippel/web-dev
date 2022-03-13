import React from 'react';

const NavTabs = () => {
  return (<div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">For you</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Trending</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sports</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
  </div>);
}
export default NavTabs;