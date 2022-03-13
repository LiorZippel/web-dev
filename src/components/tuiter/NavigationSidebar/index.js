import React from "react";

const NavigationSidebar = (
    {active='explore'}
) => {
  return (
      <>
        <div className="container m-0 p-0">
          <div className="list-group">
            <a href="#"
               className="list-group-item list-group-item-action">
              <i className="fab fa-twitter"/>
            </a>
            <a href="../home.html"
               className={`list-group-item list-group-item-action
                 ${active === 'home' ? 'active' : ''}`}>
              <i className="fa-solid fa-house"/><span
                className="d-none d-xl-inline"> Home</span>
            </a>
            <a href="#"
               className={`list-group-item list-group-item-action
                ${active === 'explore' ? 'active' : ''}`}
               aria-current="true">
              # <span className="d-none d-xl-inline"> Explore</span>
            </a>
            <a href="../notifications.html"
               className={`list-group-item list-group-item-action
                ${active === 'notifications' ? 'active' : ''}`}>
              <i className="fa-solid fa-bell"/> <span
                className="d-none d-xl-inline"> Notifications</span>
            </a>
            <a href="../messages.html"
               className={`list-group-item list-group-item-action
                ${active === 'messages' ? 'active' : ''}`}>
              <i className="fa-solid fa-envelope"/> <span
                className="d-none d-xl-inline"> Messages</span></a>
            <a href="../bookmarks.html"
               className={`list-group-item list-group-item-action
                ${active === 'bookmarks' ? 'active' : ''}`}>
              <i className="fa-solid fa-bookmark"/> <span
                className="d-none d-xl-inline"> Bookmarks</span></a>
            <a href="../lists.html"
               className={`list-group-item list-group-item-action
                ${active === 'lists' ? 'active' : ''}`}>
              <i className="fa-solid fa-list"/> <span
                className="d-none d-xl-inline"> Lists</span></a>
            <a href="../profile.html"
               className={`list-group-item list-group-item-action
                ${active === 'profile' ? 'active' : ''}`}>
              <i className="fa-solid fa-user"/> <span
                className="d-none d-xl-inline"> Profile</span></a>
            <a href="../more.html"
               className={`list-group-item list-group-item-action
                ${active === 'more' ? 'active' : ''}`}>
              <i className="fa-solid fa-circle-chevron-up"/> <span
                className="d-none d-xl-inline"> More</span></a>
          </div>
        </div>
        <button className="btn btn-primary override-tweet-btn">
          Tuit
        </button>
      </>
  );
}
export default NavigationSidebar;
