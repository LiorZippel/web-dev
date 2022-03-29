import postSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
  <container>
  <div class="row">
      <div class="col-11">
        <div class="input-group mb-3">
      <span class="input-group-text override-search-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
          <input type="text" class="form-control override-search" placeholder="Search Tuiter">

        </div>
      </div>
      <div class="col-1">
        <a href="#" class="gear"><i class="fa-solid fa-gear"></i></a>
      </div>
    </div>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
    </div>
    <div>
      <div class="card">
        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
        <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
          <h1 class="card-text text-overlay">SpaceX's Starship</h1>
        </div>
      </div>
    </div>
    ${postSummaryList()}
    </container>
`)
}
export default ExploreComponent;