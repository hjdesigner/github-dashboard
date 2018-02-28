
/* global fetch */

const getApiGithubContributions = query =>
  fetch(`https://api.github.com/search/issues?q=type:pr+author:${query}&per_page=100&client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510`)
    .then(data => data.json());

export default getApiGithubContributions;

