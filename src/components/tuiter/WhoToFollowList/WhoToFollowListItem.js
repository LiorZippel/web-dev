import React from 'react';

const WhoToFollowListItem = (
    {
        who={
          avatarIcon:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
          userName:"NASA",
          handle:"@NASA"
        }
    }
) => {
  return(
      <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img
                src={who.avatarIcon}
                className="circle-img"/>
          </div>
          <div className="col-7">
            <h5>{who.userName}
              <i className="fa-solid fa-circle-check"/>
            </h5>
            <span>{who.handle}</span>
          </div>
          <div className="col-3">
            <button className="btn btn-primary rounded-btn">
              Follow
            </button>
          </div>
        </div>
      </li>
      </>);
}
export default WhoToFollowListItem;
