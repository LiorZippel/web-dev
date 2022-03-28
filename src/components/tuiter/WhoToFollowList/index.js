import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "../data/who.json";
import React from 'react';
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
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
