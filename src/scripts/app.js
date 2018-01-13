/* global fetch */

const user = 'hjdesigner';

const getApiGithub = query =>
  fetch(`https://api.github.com/users/${query}`)
    .then(data => data.json());

export { user, getApiGithub };
