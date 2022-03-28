import tuits from "../data/tuits.json"


const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case 'like-tuit':
      return state.map(tuit => {
        if(tuit._id === action.tuit._id) {
          if(tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      })
    case 'delete-tuit':
      return state.filter(
          tuit => tuit._id !== action.tuit._id);
    case 'create-tuit':
      const newTuit = {
        tuit: action.tuit,
        _id: (new Date()).getTime() + '',
        verified : true,
        handle:"liorzippel",
        logoImage:"https://pbs.twimg.com/profile_images/1490862109797793792/4EsEb62G_400x400.jpg",
        avatarImage:"https://pbs.twimg.com/profile_images/1490862109797793792/4EsEb62G_400x400.jpg",
        postedBy: {
          "username": "Lior 'Eeyore' Zippel"
        },
        stats: {
          retuits: 111,
          likes: 222,
          replies: 333
        }
      }
      return [
        newTuit,
        ...state,
      ];
    default:
      return tuits
  }
};

export default tuitsReducer;