import 'jsdom-global/register';
import chai, { expect } from 'chai';

import renderProfile from '../src/scripts/UserData';

describe('UserData', () => {

  const data = {
    "login": "hjdesigner",
    "id": 2280313,
    "avatar_url": "https://avatars3.githubusercontent.com/u/2280313?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hjdesigner",
    "html_url": "https://github.com/hjdesigner",
    "followers_url": "https://api.github.com/users/hjdesigner/followers",
    "following_url": "https://api.github.com/users/hjdesigner/following{/other_user}",
    "gists_url": "https://api.github.com/users/hjdesigner/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hjdesigner/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hjdesigner/subscriptions",
    "organizations_url": "https://api.github.com/users/hjdesigner/orgs",
    "repos_url": "https://api.github.com/users/hjdesigner/repos",
    "events_url": "https://api.github.com/users/hjdesigner/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hjdesigner/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Henrique Rodrigues",
    "company": "@saraiva",
    "blog": "http://www.henriquemelanda.com.br",
    "location": "São Paulo, Brazil",
    "email": "hjdesigner23@gmail.com",
    "hireable": true,
    "bio": "Um apaixonado por front-end, CSS <3 evangelista, rock, viagens, moto, livros, fotografia e animais.",
    "public_repos": 53,
    "public_gists": 0,
    "followers": 58,
    "following": 45,
    "created_at": "2012-09-04T20:31:09Z",
    "updated_at": "2017-12-23T20:27:57Z"
  }

  const markup = `
    <div class="hot__desktop-4">
      <img src="https://avatars3.githubusercontent.com/u/2280313?v=4" alt="Henrique Rodrigues">
    </div>
    <div class="hot__desktop-8">
      <ul>
        <li><i><svg class="icon-person"><use xlink:href="#icon-person" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>hjdesigner</li>
        <li><i><svg class="icon-files-empty"><use xlink:href="#icon-files-empty" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>53 repositórios</li>
        <li><i><svg class="icon-clock"><use xlink:href="#icon-clock" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>No Github há 6 anos</li>
        <li><i><svg class="icon-mail"><use xlink:href="#icon-mail" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>hjdesigner23@gmail.com</li>
        <li><i><svg class="icon-account_balance"><use xlink:href="#icon-account_balance" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>@saraiva</li>
      </ul>
    </div>
  `;

  it('should exist', () => {
    expect(renderProfile).to.exist;
  });

  it('should create and append the markup given a corret data and markup', () => {
    const element = document.createElement('div');
    renderProfile(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
  
});