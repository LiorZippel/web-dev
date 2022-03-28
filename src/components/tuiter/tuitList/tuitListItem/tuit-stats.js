import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
      <>
        <div className="row">
          <div className="col-3">
        <span>
          <i className="fa-regular fa-comment"/>
          { tuit.stats.comments}
        </span></div>
          <div className="col-3">
        <span>
          <i className="fa-solid fa-retweet"/>
          { tuit.stats.retuits}
        </span>
          </div>
          <div className="col-3">
        <span onClick={likeTuit}>
    {
        tuit.liked &&
        <i className="fas fa-heart me-1"
           style={{color: 'red'}}/>
    }
          {
              !tuit.liked &&
              <i className="far fa-heart me-1"/>
          }
          {tuit.stats && tuit.stats.likes}
        </span>
          </div>
          <div className="col-3">
            <i className="fa-solid fa-share"/>
          </div>
        </div>
      </>
  );
}
export default TuitStats;