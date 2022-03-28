// {
//   "topic": "Web Development",    "userName": "ReactJS",    "time": "2h",    "image": "../../images/react-blue.png",
//     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
// },
import React from 'react';
import {useDispatch} from "react-redux";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    image: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs"
  }
}) => {
  const dispatch = useDispatch();
  const deleteTuit = (post) => {
    dispatch({type: 'delete-tuit', post})
  };

  return (

      <div className="list-item">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-10">
                <h6 className="card-subtitle mb-2 text-muted">{post.topic}</h6>
                <h5 className="card-title">{post.userName}
                  <i className="fa-solid fa-circle-check"/>
                  <span className="header-text"> {post.time === "" ? "" : "-"} {post.time}</span>
                </h5>
                {/*vvvvv*/}
                <i onClick={() =>
                    deleteTuit(post)}
                   className="fas fa-remove fa-2x
                  fa-pull-right"/>
                {/*^^^^^^^^^*/}
                <p className="card-text">{post.title}</p>
              </div>
              <div className="col-2 text-right">
                <img className="img-fluid tweet-img" height="100px"
                     src={post.image} alt={""}/>
              </div>
            </div>
          </div>
        </div>
      </div>);
}

export default PostSummaryItem;