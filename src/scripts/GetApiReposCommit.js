
/* global fetch */

const getApiGithubReposCommit = (query, user) => 
	fetch(`https://api.github.com/repos/${user}/${query}/commits?client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510`)
		.then(data => data.json());

export default getApiGithubReposCommit;
