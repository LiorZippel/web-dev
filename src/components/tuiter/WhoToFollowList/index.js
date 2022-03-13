import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
import React from 'react';

const WhoToFollowList = () => {
  return (
      <ul className="list-group">
        <li className="list-group-item">
          <h5>Who to follow</h5>
        </li>
        {who.map(whos => {
          return (<WhoToFollowListItem who={whos}/>);
        })}
      </ul>
  );
}
export default WhoToFollowList;
