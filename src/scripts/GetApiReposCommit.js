
/* global fetch */

const getApiGithubReposCommit = query =>
  fetch(`https://api.github.com/repos/${query}/commits?per_page=100&client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510`)
    .then(data => data.json());

export default getApiGithubReposCommit;
