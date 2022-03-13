import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const tuiter = () => {
  return (
      <>
        <h1>Tuiter</h1>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/">
          Labs
        </Link>
        {/*<NavigationSidebar active="home"/>*/}
        {/*<WhoToFollowListItem/>*/}
        {/*<WhoToFollowListItem who={{avatarIcon: "https://i.redd.it/hvp9emyogsq11.jpg",*/}
        {/*  userName: 'Tesla',*/}
        {/*  handle:'@tesla'}}/>*/}
        {/*<WhoToFollowList/>*/}
        {/*<PostSummaryItem/>*/}
        {/*<PostSummaryList/>*/}
        {/*<ExploreComponent/>*/}

        <ExploreScreen/>

      </>
  )
};

export default tuiter;