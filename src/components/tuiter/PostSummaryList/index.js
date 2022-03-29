import posts from "../data/posts.json";
import PostSummaryItem from "./PostSummaryItem";

import React from 'react';
// import {useSelector} from "react-redux";

const PostSummaryList = () => {
  // const posts = useSelector((state) => state.tuits);
  return (
      <ul className="list-group"> {posts.map(postIter => {
        return (<PostSummaryItem post={postIter}/>);
      })}
      </ul>)
}
export default PostSummaryList