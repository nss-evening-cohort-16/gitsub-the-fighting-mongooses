import { repoArray } from "./data.js";
const repoFormString = `<div><h3>Add a Repository<h3></div><form id="addRepoForm">
    <div class="mb-3">
      <label for="addRepo" class="form-label">Repository Name<span>*</span></label>
      <input required type="text" class="form-control" id="addRepo">
    </div>
    <div class="mb-3">
      <label for="addRepoDescription" class="form-label">Description(optional)</label>
      <textarea rows="5" cols="80" class="form-control" id="addRepoDescription"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" id="addRepoBtn">Create Repository</button>
  </form>`;

const repoCardString = (obj, index) => {
  return `<div class="repo-list-item"id="repo-${index}">
            <div class="added-repo"><a href="#">${obj.name}</a><p>${obj.description}</p></div>
            <div class="favorite-repo"><button class="favorite-btn"><img id="favoriteBtn-${index}" src="${repoArray[index].favorite}"></button></div>
          </div>`;
};

const favCardString = (obj, index, arr) => {
  return `<div class="repo-list-item"id="repo-${index}">
            <div class="added-repo"><a href="#">${obj.name}</a><p>${obj.description}</p></div>
            <div class="favorite-repo"><button class="favorite-btn"><img id="favoriteBtn-${index}" src="${arr[index].favorite}"></button></div>
          </div>`;
};

export { repoCardString, repoFormString, favCardString };
