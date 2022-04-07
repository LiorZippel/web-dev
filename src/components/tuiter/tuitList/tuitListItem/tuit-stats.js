import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  /*
  <div>
     Likes: {tuit.likes}
     <i onClick={() => updateTuit(dispatch, {
       ...tuit,
       likes: tuit.likes + 1
     })} className="far fa-thumbs-up ms-2"></i>
   </div>
   */

  return (
      <>
        <div className="row">
          <div className="col-3">
        <span>
          <i className="fa-regular fa-comment"/>
          { tuit.comments}
        </span></div>
          <div className="col-3">
        <span>
          <i className="fa-solid fa-retweet"/>
          { tuit.retuits}
        </span>
          </div>
          <div className="col-3">
        <span onClick={() => updateTuit(dispatch, {
          ...tuit,
          likes: tuit.likes + 1
        })}>
    {
        tuit.liked &&
        <i className="fas fa-heart me-1"
           style={{color: 'red'}}/>
    }
          {
              !tuit.liked &&
              <i className="far fa-heart me-1"/>
          }
          {tuit.likes}
        </span>
          </div>
          <div className="col-3">
            <span onClick={() => updateTuit(dispatch, {
              ...tuit,
              dislikes: tuit.dislikes + 1
            })}>
              <i className="fa-solid fa-heart-crack"/>
              {tuit.dislikes}
            </span>
          </div>
        </div>
      </>
  );
}
export default TuitStats;