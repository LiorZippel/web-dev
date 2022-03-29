
// {
//   "topic": "Web Development",    "userName": "ReactJS",    "time": "2h",    "image": "../../images/react-blue.png",
//     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
// },


const PostSummaryItem = (post) => {
  return (` 
      
    <div class="list-item">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-10">
              <h6 class="card-subtitle mb-2 text-muted">${post.topic}</h6>
              <h5 class="card-title">${post.userName}
                <i class="fa-solid fa-circle-check"></i>
                <span class="header-text"> - ${post.time}</span>
              </h5>
              <p class="card-text">${post.title}</p>
            </div>
            <div class="col-2 text-right">
              <img class="img-fluid tweet-img" height="100px"
                   src="${post.image}">
            </div>
          </div>
        </div>
      </div>
    </div>`);
}

export default PostSummaryItem;