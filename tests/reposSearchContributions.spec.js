import 'jsdom-global/register';
import chai, { expect } from 'chai';

import reposSearchContributions from '../src/scripts/components/reposSearchContributions';

describe('Repository Search Contributions', () => {
	describe('some tests', () => {
		it('should repoSearchContributions', () => {
			expect(reposSearchContributions).to.exist;
		});
		it('should reposSearchContributions is a function', () => {
			expect(reposSearchContributions).to.be.a('function');
		});
	});

	const markup = `
		<li class="hot__desktop-4">
			<a href="https://api.github.com/repos/grippado/store">
				<div class="repos-per-contributions-item">
					<h3>grippado/store</h3>
					<i><svg class="icon-account_balance"><use xlink:href="#icon-read-more" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>
				</div>
			</a>
		</li>`;
	const markup2 = `
		<li class="hot__desktop-4">
			<a href="https://api.github.com/repos/grippado/store">
				<div class="repos-per-contributions-item">
					<h3>grippado/store</h3>
					<i><svg class="icon-account_balance"><use xlink:href="#icon-read-more" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>
				</div>
			</a>
		</li>
		<li class="hot__desktop-4">
			<a href="https://api.github.com/repos/willianjusten/volta-mozao">
				<div class="repos-per-contributions-item">
					<h3>willianjusten/volta-mozao</h3>
					<i><svg class="icon-account_balance"><use xlink:href="#icon-read-more" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>
				</div>
			</a>
		</li>`;

	const data = [
		{
    	"url": "https://api.github.com/repos/grippado/store/issues/3",
      "repository_url": "https://api.github.com/repos/grippado/store",
      "labels_url": "https://api.github.com/repos/grippado/store/issues/3/labels{/name}",
      "comments_url": "https://api.github.com/repos/grippado/store/issues/3/comments",
      "events_url": "https://api.github.com/repos/grippado/store/issues/3/events",
      "html_url": "https://github.com/grippado/store/pull/3",
      "id": 282236024,
      "number": 3,
      "title": "Coloquei um espaçamento entre o R$ e o valor para ficar legível.",
      "user": {
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
        "site_admin": false
      },
      "labels": [],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [],
      "milestone": null,
      "comments": 0,
      "created_at": "2017-12-14T20:55:38Z",
      "updated_at": "2017-12-14T21:03:46Z",
      "closed_at": "2017-12-14T21:03:46Z",
      "author_association": "CONTRIBUTOR",
      "pull_request": {
      	"url": "https://api.github.com/repos/grippado/store/pulls/3",
      	"html_url": "https://github.com/grippado/store/pull/3",
      	"diff_url": "https://github.com/grippado/store/pull/3.diff",
      	"patch_url": "https://github.com/grippado/store/pull/3.patch"
    	},
    	"body": "",
    	"score": 1
  	}
	];
	const data2 = [
		{
    	"url": "https://api.github.com/repos/grippado/store/issues/3",
      "repository_url": "https://api.github.com/repos/grippado/store",
      "labels_url": "https://api.github.com/repos/grippado/store/issues/3/labels{/name}",
      "comments_url": "https://api.github.com/repos/grippado/store/issues/3/comments",
      "events_url": "https://api.github.com/repos/grippado/store/issues/3/events",
      "html_url": "https://github.com/grippado/store/pull/3",
      "id": 282236024,
      "number": 3,
      "title": "Coloquei um espaçamento entre o R$ e o valor para ficar legível.",
      "user": {
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
        "site_admin": false
      },
      "labels": [],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [],
      "milestone": null,
      "comments": 0,
      "created_at": "2017-12-14T20:55:38Z",
      "updated_at": "2017-12-14T21:03:46Z",
      "closed_at": "2017-12-14T21:03:46Z",
      "author_association": "CONTRIBUTOR",
      "pull_request": {
      	"url": "https://api.github.com/repos/grippado/store/pulls/3",
      	"html_url": "https://github.com/grippado/store/pull/3",
      	"diff_url": "https://github.com/grippado/store/pull/3.diff",
      	"patch_url": "https://github.com/grippado/store/pull/3.patch"
    	},
    	"body": "",
    	"score": 1
		},
		{
    	"url": "https://api.github.com/repos/willianjusten/volta-mozao/issues/9",
      "repository_url": "https://api.github.com/repos/willianjusten/volta-mozao",
      "labels_url": "https://api.github.com/repos/willianjusten/volta-mozao/issues/9/labels{/name}",
      "comments_url": "https://api.github.com/repos/willianjusten/volta-mozao/issues/9/comments",
      "events_url": "https://api.github.com/repos/willianjusten/volta-mozao/issues/9/events",
      "html_url": "https://github.com/willianjusten/volta-mozao/pull/9",
      "id": 269274804,
      "number": 9,
      "title": "Aesthetic improvements",
      "user": {
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
        "site_admin": false
      },
      "labels": [],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [],
      "milestone": null,
      "comments": 3,
      "created_at": "2017-10-28T01:48:24Z",
      "updated_at": "2017-10-31T22:29:35Z",
      "closed_at": "2017-10-31T22:29:35Z",
      "author_association": "CONTRIBUTOR",
      "pull_request": {
      	"url": "https://api.github.com/repos/willianjusten/volta-mozao/pulls/9",
        "html_url": "https://github.com/willianjusten/volta-mozao/pull/9",
        "diff_url": "https://github.com/willianjusten/volta-mozao/pull/9.diff",
        "patch_url": "https://github.com/willianjusten/volta-mozao/pull/9.patch"
      },
      "body": "I put a friendlier button on the buttons and put a fade-in-out animation on the buttons",
      "score": 1
    },
	];

	it('should create and append the markup give a correct data', () => {
		const element = document.createElement('div');
		reposSearchContributions(data, element);
		expect(element.innerHTML).to.be.eql(markup);
	});

	it('should create an append whe more than 1 contribution', () => {
		const element2 = document.createElement('div');
		reposSearchContributions(data2, element2);
		expect(element2.innerHTML).to.be.eql(markup2);
	});

});
