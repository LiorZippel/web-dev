import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";

import React from 'react';

const PostSummaryList = () => {
  return (
      <ul className="list-group"> {posts.map(postIter => {
        return (<PostSummaryItem post={postIter}/>);
      })}
      </ul>)
}
export default PostSummaryList