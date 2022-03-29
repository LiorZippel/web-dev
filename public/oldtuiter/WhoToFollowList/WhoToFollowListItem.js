const WhoToFollowListItem = (who) => {
  return(`
        <li class="list-group-item">
        <div class="row">
          <div class="col-2">
            <img
                src="${who.avatarIcon}"
                class="circle-img">
          </div>
          <div class="col-7">
            <h5>${who.userName}
              <i class="fa-solid fa-circle-check"></i>
            </h5>
            <span>${who.handle}</span>
          </div>
          <div class="col-3">
            <button class="btn btn-primary rounded-btn">
              Follow
            </button>
          </div>
        </div>
      </li>`);
}
export default WhoToFollowListItem;
