import 'jsdom-global/register';
import chai, { expect } from 'chai';
import NameUser from '../src/scripts/components/nameUser.js';


describe('User Name', () => {
	describe('Some tests', () => {
		it('should NameUser exit', () => {
			expect(NameUser).to.exist;
		});
		it('should NameUser is a function', () => {
			expect(NameUser).to.be.a('function');
		});
	});

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

	const markup = `<a href="https://github.com/hjdesigner">Henrique Rodrigues</a>`;

	it('should create and append the markup give a correct data and markup', () => {
		const element = document.createElement('div');
		NameUser(data, element);
		expect(element.innerHTML).to.be.eql(markup);
	});


});
