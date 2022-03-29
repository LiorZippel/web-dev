import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return (`
      <ul class="list-group">
      <li class="list-group-item">
        <h5>Who to follow</h5>
      </li>
      ${who.map(whos => {return (WhoToFollowListItem(whos));}).join('')}
     </ul>
`);
}
export default WhoToFollowList;
