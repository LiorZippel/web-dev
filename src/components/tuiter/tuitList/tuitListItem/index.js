import {useDispatch} from "react-redux";
import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../../actions/tuits-actions";

const TuitListItem = ({
  tuit = {
    "_id": "123",
    "topic": "Web Development",
    "postedBy": {
      "username": "ReactJS"
    },
    "liked": true,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
      "video": "unKvMC3Y1kI"
    },
    "logoImage": "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
    "avatarImage": "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345
    }

  }
}) => {
  const dispatch = useDispatch();
  return (
      <div className="list-item">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                <img className="img-fluid circle-img" height="40px"
                     src={"avatarImage" in tuit ? tuit.avatarImage :
                         "https://pbs.twimg.com/profile_images/1510643662157488139/U5hzfe7J_400x400.jpg"}
                     alt={""}/>
              </div>
              <div className="col-9 text-right">
                <span className="username">
                  {"postedBy" in tuit ? tuit.postedBy.username :
                      "Lior Zippel"}
                </span>
                <span className="handle"> @ {"handle" in tuit ? tuit.handle : "Lior"} </span>
                {tuit.verified ? <i className="fa-solid fa-circle-check"/> : ''}
                <p>{tuit.tuit}</p>
                {tuit.hasOwnProperty("attachments")
                && "video" in tuit.attachments ?
                    <iframe width="560" height="315" className="video-corners"
                            src={"https://www.youtube.com/embed/"
                                + tuit.attachments.video}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/> :
                    ''}
              {/*  ADD SUPPORT FOR DISPLAYING ATTACHED IMAGES*/}
                <TuitStats tuit={tuit}/>
              </div>
              <div className="col-1">
                <i className="fas fa-remove float-end"
                   onClick={() => deleteTuit(
                       dispatch, tuit)}/>
              </div>
            </div>

          </div>
        </div>
      </div>

      // ...
//   <i onClick={() =>
//       deleteTuit(tuit)}
//      className="fas fa-remove fa-2x
//                   fa-pull-right"></i>
// ...
  );
}
export default TuitListItem;