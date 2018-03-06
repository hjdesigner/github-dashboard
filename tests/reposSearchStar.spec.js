import 'jsdom-global/register';
import chai, { expect } from 'chai';

import reposSearchStar from '../src/scripts/components/reposSearchStar';

describe('Repository Search Star', () => {
	describe('some tests', () => {
		it('should reposSearchStar', () => {
			expect(reposSearchStar).to.exist;
		});
		it('should reposSearchStar is a function', () => {
			expect(reposSearchStar).to.be.a('function');
		});
	});

	const markup = `
		<li class="hot__mobile-12 hot__tablet-6 hot__desktop-4">
			<a href="https://github.com/hjdesigner/vibration-api">
				<div class="repos-per-star-item">
					<h3>vibration-api</h3>
					<p></p>
					<i><svg class="icon-account_balance"><use xlink:href="#icon-read-more" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>
				</div>
			</a>
		</li>
		<li class="hot__mobile-12 hot__tablet-6 hot__desktop-4">
			<a href="https://github.com/hjdesigner/css-padawan">
				<div class="repos-per-star-item">
					<h3>css-padawan</h3>
					<p>CSS Padawan</p>
					<i><svg class="icon-account_balance"><use xlink:href="#icon-read-more" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>
				</div>
			</a>
		</li>`;

	const data = [
		{
			"id": 95467615,
			"name": "vibration-api",
			"full_name": "hjdesigner/vibration-api",
			"owner": {
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
			"private": false,
			"html_url": "https://github.com/hjdesigner/vibration-api",
			"description": null,
			"fork": false,
			"url": "https://api.github.com/repos/hjdesigner/vibration-api",
			"forks_url": "https://api.github.com/repos/hjdesigner/vibration-api/forks",
			"keys_url": "https://api.github.com/repos/hjdesigner/vibration-api/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/hjdesigner/vibration-api/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/hjdesigner/vibration-api/teams",
			"hooks_url": "https://api.github.com/repos/hjdesigner/vibration-api/hooks",
			"issue_events_url": "https://api.github.com/repos/hjdesigner/vibration-api/issues/events{/number}",
			"events_url": "https://api.github.com/repos/hjdesigner/vibration-api/events",
			"assignees_url": "https://api.github.com/repos/hjdesigner/vibration-api/assignees{/user}",
			"branches_url": "https://api.github.com/repos/hjdesigner/vibration-api/branches{/branch}",
			"tags_url": "https://api.github.com/repos/hjdesigner/vibration-api/tags",
			"blobs_url": "https://api.github.com/repos/hjdesigner/vibration-api/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/hjdesigner/vibration-api/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/hjdesigner/vibration-api/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/hjdesigner/vibration-api/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/hjdesigner/vibration-api/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/hjdesigner/vibration-api/languages",
			"stargazers_url": "https://api.github.com/repos/hjdesigner/vibration-api/stargazers",
			"contributors_url": "https://api.github.com/repos/hjdesigner/vibration-api/contributors",
			"subscribers_url": "https://api.github.com/repos/hjdesigner/vibration-api/subscribers",
			"subscription_url": "https://api.github.com/repos/hjdesigner/vibration-api/subscription",
			"commits_url": "https://api.github.com/repos/hjdesigner/vibration-api/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/hjdesigner/vibration-api/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/hjdesigner/vibration-api/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/hjdesigner/vibration-api/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/hjdesigner/vibration-api/contents/{+path}",
			"compare_url": "https://api.github.com/repos/hjdesigner/vibration-api/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/hjdesigner/vibration-api/merges",
			"archive_url": "https://api.github.com/repos/hjdesigner/vibration-api/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/hjdesigner/vibration-api/downloads",
			"issues_url": "https://api.github.com/repos/hjdesigner/vibration-api/issues{/number}",
			"pulls_url": "https://api.github.com/repos/hjdesigner/vibration-api/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/hjdesigner/vibration-api/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/hjdesigner/vibration-api/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/hjdesigner/vibration-api/labels{/name}",
			"releases_url": "https://api.github.com/repos/hjdesigner/vibration-api/releases{/id}",
			"deployments_url": "https://api.github.com/repos/hjdesigner/vibration-api/deployments",
			"created_at": "2017-06-26T16:39:21Z",
			"updated_at": "2017-12-12T12:00:47Z",
			"pushed_at": "2017-12-12T17:37:34Z",
			"git_url": "git://github.com/hjdesigner/vibration-api.git",
			"ssh_url": "git@github.com:hjdesigner/vibration-api.git",
			"clone_url": "https://github.com/hjdesigner/vibration-api.git",
			"svn_url": "https://github.com/hjdesigner/vibration-api",
			"homepage": "http://henriquemelanda.com.br/vibration-api/",
			"size": 191,
			"stargazers_count": 23,
			"watchers_count": 23,
			"language": "HTML",
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"forks_count": 6,
			"mirror_url": null,
			"archived": false,
			"open_issues_count": 0,
			"license": {
				"key": "mit",
				"name": "MIT License",
				"spdx_id": "MIT",
				"url": "https://api.github.com/licenses/mit"
			},
			"forks": 6,
			"open_issues": 0,
			"watchers": 23,
			"default_branch": "master"
		},
		{
			"id": 90907526,
			"name": "css-padawan",
			"full_name": "hjdesigner/css-padawan",
			"owner": {
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
			"private": false,
			"html_url": "https://github.com/hjdesigner/css-padawan",
			"description": "CSS Padawan",
			"fork": false,
			"url": "https://api.github.com/repos/hjdesigner/css-padawan",
			"forks_url": "https://api.github.com/repos/hjdesigner/css-padawan/forks",
			"keys_url": "https://api.github.com/repos/hjdesigner/css-padawan/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/hjdesigner/css-padawan/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/hjdesigner/css-padawan/teams",
			"hooks_url": "https://api.github.com/repos/hjdesigner/css-padawan/hooks",
			"issue_events_url": "https://api.github.com/repos/hjdesigner/css-padawan/issues/events{/number}",
			"events_url": "https://api.github.com/repos/hjdesigner/css-padawan/events",
			"assignees_url": "https://api.github.com/repos/hjdesigner/css-padawan/assignees{/user}",
			"branches_url": "https://api.github.com/repos/hjdesigner/css-padawan/branches{/branch}",
			"tags_url": "https://api.github.com/repos/hjdesigner/css-padawan/tags",
			"blobs_url": "https://api.github.com/repos/hjdesigner/css-padawan/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/hjdesigner/css-padawan/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/hjdesigner/css-padawan/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/hjdesigner/css-padawan/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/hjdesigner/css-padawan/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/hjdesigner/css-padawan/languages",
			"stargazers_url": "https://api.github.com/repos/hjdesigner/css-padawan/stargazers",
			"contributors_url": "https://api.github.com/repos/hjdesigner/css-padawan/contributors",
			"subscribers_url": "https://api.github.com/repos/hjdesigner/css-padawan/subscribers",
			"subscription_url": "https://api.github.com/repos/hjdesigner/css-padawan/subscription",
			"commits_url": "https://api.github.com/repos/hjdesigner/css-padawan/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/hjdesigner/css-padawan/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/hjdesigner/css-padawan/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/hjdesigner/css-padawan/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/hjdesigner/css-padawan/contents/{+path}",
			"compare_url": "https://api.github.com/repos/hjdesigner/css-padawan/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/hjdesigner/css-padawan/merges",
			"archive_url": "https://api.github.com/repos/hjdesigner/css-padawan/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/hjdesigner/css-padawan/downloads",
			"issues_url": "https://api.github.com/repos/hjdesigner/css-padawan/issues{/number}",
			"pulls_url": "https://api.github.com/repos/hjdesigner/css-padawan/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/hjdesigner/css-padawan/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/hjdesigner/css-padawan/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/hjdesigner/css-padawan/labels{/name}",
			"releases_url": "https://api.github.com/repos/hjdesigner/css-padawan/releases{/id}",
			"deployments_url": "https://api.github.com/repos/hjdesigner/css-padawan/deployments",
			"created_at": "2017-05-10T20:54:51Z",
			"updated_at": "2017-08-03T23:53:42Z",
			"pushed_at": "2017-05-24T03:22:33Z",
			"git_url": "git://github.com/hjdesigner/css-padawan.git",
			"ssh_url": "git@github.com:hjdesigner/css-padawan.git",
			"clone_url": "https://github.com/hjdesigner/css-padawan.git",
			"svn_url": "https://github.com/hjdesigner/css-padawan",
			"homepage": "http://henriquemelanda.com.br/css-padawan",
			"size": 974,
			"stargazers_count": 16,
			"watchers_count": 16,
			"language": "CSS",
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"forks_count": 1,
			"mirror_url": null,
			"archived": false,
			"open_issues_count": 0,
			"license": {
				"key": "mit",
				"name": "MIT License",
				"spdx_id": "MIT",
				"url": "https://api.github.com/licenses/mit"
			},
			"forks": 1,
			"open_issues": 0,
			"watchers": 16,
			"default_branch": "master"
		},
	];

	it('should create and append when more than 1 repository', () => {
		const element = document.createElement('div');
		reposSearchStar(data, element);
		expect(element.innerHTML).to.be.eql(markup);
	});

	it('should return the data', () => {
		const element2 = document.createElement('div');
		expect(reposSearchStar(data, element2)).to.be.eql(data);
	});

});
