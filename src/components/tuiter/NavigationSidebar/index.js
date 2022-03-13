import React from "react";

const NavigationSidebar = (
    {active='explore'}
) => {
  return (
      <>
        <div className="container m-0 p-0">
          <div className="list-group">
            <button
               className="list-group-item list-group-item-action">
              <i className="fab fa-twitter"/>
            </button>
            <button
               className={`list-group-item list-group-item-action
                 ${active === 'home' ? 'active' : ''}`}>
              <i className="fa-solid fa-house"/><span
                className="d-none d-xl-inline"> Home</span>
            </button>
            <button
               className={`list-group-item list-group-item-action
                ${active === 'explore' ? 'active' : ''}`}
               aria-current="true">
              # <span className="d-none d-xl-inline"> Explore</span>
            </button>
            <button
               className={`list-group-item list-group-item-action
                ${active === 'notifications' ? 'active' : ''}`}>
              <i className="fa-solid fa-bell"/> <span
                className="d-none d-xl-inline"> Notifications</span>
            </button>
            <button
               className={`list-group-item list-group-item-action
                ${active === 'messages' ? 'active' : ''}`}>
              <i className="fa-solid fa-envelope"/> <span
                className="d-none d-xl-inline"> Messages</span></button>
            <button
               className={`list-group-item list-group-item-action
                ${active === 'bookmarks' ? 'active' : ''}`}>
              <i className="fa-solid fa-bookmark"/> <span
                className="d-none d-xl-inline"> Bookmarks</span></button>
            <button
               className={`list-group-item list-group-item-action
                ${active === 'lists' ? 'active' : ''}`}>
              <i className="fa-solid fa-list"/> <span
                className="d-none d-xl-inline"> Lists</span></button>
            <button
               className={`list-group-item list-group-item-action
                ${active === 'profile' ? 'active' : ''}`}>
              <i className="fa-solid fa-user"/> <span
                className="d-none d-xl-inline"> Profile</span></button>
            <button
               className={`list-group-item list-group-item-action
                ${active === 'more' ? 'active' : ''}`}>
              <i className="fa-solid fa-circle-chevron-up"/> <span
                className="d-none d-xl-inline"> More</span></button>
          </div>
        </div>
        <button className="btn btn-primary override-tweet-btn">
          Tuit
        </button>
      </>
  );
}
export default NavigationSidebar;
