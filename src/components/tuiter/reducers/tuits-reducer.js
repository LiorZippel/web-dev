// import tuits from "../data/tuits.json"
import {UPDATE_TUIT, CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS}
  from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_TUIT:
      return state.map(
          tuit => tuit._id === action.tuit._id ?
              action.tuit : tuit);
    case CREATE_TUIT:
      return [
        ...state,
        action.newTuit
      ];
    case FIND_ALL_TUITS:
      return action.tuits;
    case DELETE_TUIT:
      return state.filter(
          tuit => tuit._id !== action.tuit._id);
    // case 'like-tuit':
    //   return state.map(tuit => {
    //     if(tuit._id === action.tuit._id) {
    //       if(tuit.liked === true) {
    //         tuit.liked = false;
    //         tuit.stats.likes--;
    //       } else {
    //         tuit.liked = true;
    //         tuit.stats.likes++;
    //       }
    //       return tuit;
    //     } else {
    //       return tuit;
    //     }
    //   })
    // case 'create-tuit':
    //   const newTuit = {
    //     tuit: action.tuit,
    //     _id: (new Date()).getTime() + '',
    //     verified : true,
    //     handle:"liorzippel",
    //     logoImage:"https://pbs.twimg.com/profile_images/1490862109797793792/4EsEb62G_400x400.jpg",
    //     avatarImage:"https://pbs.twimg.com/profile_images/1490862109797793792/4EsEb62G_400x400.jpg",
    //     postedBy: {
    //       "username": "Lior 'Eeyore' Zippel"
    //     },
    //     stats: {
    //       retuits: 111,
    //       likes: 222,
    //       replies: 333
    //     }
    //   }
    //   return [
    //     newTuit,
    //     ...state,
    //   ];
    default:
      return state;
  }
};

export default tuitsReducer;