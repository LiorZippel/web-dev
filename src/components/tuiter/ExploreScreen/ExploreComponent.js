import PostSummaryList from "../PostSummaryList/index";
import NavTabs from "./navTabs/navTabs";

import React from 'react';

const ExploreComponent = () => {
  return(
  <container>
  <div className="row">
      <div className="col-11">
        <div className="input-group mb-3">
      <span className="input-group-text override-search-icon">
        <i className="fa-solid fa-magnifying-glass"/>
      </span>
          <input type="text" className="form-control override-search" placeholder="Search Tuiter"/>
        </div>
      </div>
      <div className="col-1">
        <a href="#" className="gear"><i className="fa-solid fa-gear"/></a>
      </div>
    </div>
    <NavTabs/>
    <div>
      <div className="card">
        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
          <h1 className="card-text text-overlay">SpaceX's Starship</h1>
        </div>
      </div>
    </div>
    <PostSummaryList/>
    </container>
)
}
export default ExploreComponent;