import 'jsdom-global/register';
import chai, { expect } from 'chai';

import repoSearchFork from '../src/scripts/components/repoSearchFork';
import Colors from '../src/scripts/components/colors';

describe('Repository Search Fork', () => {
	describe('Some tests', () => {
		it('should exist repoSearchFork', () => {
			expect(repoSearchFork).to.exist;
		});
		it('should repoSearchFork is a function', () => {
			expect(repoSearchFork).to.be.a('function');
		})
	});

	const data = [
		{
			"id": 98181160,
			"name": "ambient-light-api",
			"full_name": "hjdesigner/ambient-light-api",
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
			"html_url": "https://github.com/hjdesigner/ambient-light-api",
			"description": null,
			"fork": false,
			"url": "https://api.github.com/repos/hjdesigner/ambient-light-api",
			"forks_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/forks",
			"keys_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/teams",
			"hooks_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/hooks",
			"issue_events_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/issues/events{/number}",
			"events_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/events",
			"assignees_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/assignees{/user}",
			"branches_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/branches{/branch}",
			"tags_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/tags",
			"blobs_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/languages",
			"stargazers_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/stargazers",
			"contributors_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/contributors",
			"subscribers_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/subscribers",
			"subscription_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/subscription",
			"commits_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/contents/{+path}",
			"compare_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/merges",
			"archive_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/downloads",
			"issues_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/issues{/number}",
			"pulls_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/labels{/name}",
			"releases_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/releases{/id}",
			"deployments_url": "https://api.github.com/repos/hjdesigner/ambient-light-api/deployments",
			"created_at": "2017-07-24T10:57:39Z",
			"updated_at": "2017-07-25T21:25:43Z",
			"pushed_at": "2017-07-24T20:16:59Z",
			"git_url": "git://github.com/hjdesigner/ambient-light-api.git",
			"ssh_url": "git@github.com:hjdesigner/ambient-light-api.git",
			"clone_url": "https://github.com/hjdesigner/ambient-light-api.git",
			"svn_url": "https://github.com/hjdesigner/ambient-light-api",
			"homepage": null,
			"size": 7,
			"stargazers_count": 2,
			"watchers_count": 2,
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
			"watchers": 2,
			"default_branch": "master"
		},
	];

	const data2 = [
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
		{
			"id": 65954471,
			"name": "css-components",
			"full_name": "hjdesigner/css-components",
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
			"html_url": "https://github.com/hjdesigner/css-components",
			"description": "CSS COMPONENTS",
			"fork": false,
			"url": "https://api.github.com/repos/hjdesigner/css-components",
			"forks_url": "https://api.github.com/repos/hjdesigner/css-components/forks",
			"keys_url": "https://api.github.com/repos/hjdesigner/css-components/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/hjdesigner/css-components/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/hjdesigner/css-components/teams",
			"hooks_url": "https://api.github.com/repos/hjdesigner/css-components/hooks",
			"issue_events_url": "https://api.github.com/repos/hjdesigner/css-components/issues/events{/number}",
			"events_url": "https://api.github.com/repos/hjdesigner/css-components/events",
			"assignees_url": "https://api.github.com/repos/hjdesigner/css-components/assignees{/user}",
			"branches_url": "https://api.github.com/repos/hjdesigner/css-components/branches{/branch}",
			"tags_url": "https://api.github.com/repos/hjdesigner/css-components/tags",
			"blobs_url": "https://api.github.com/repos/hjdesigner/css-components/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/hjdesigner/css-components/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/hjdesigner/css-components/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/hjdesigner/css-components/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/hjdesigner/css-components/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/hjdesigner/css-components/languages",
			"stargazers_url": "https://api.github.com/repos/hjdesigner/css-components/stargazers",
			"contributors_url": "https://api.github.com/repos/hjdesigner/css-components/contributors",
			"subscribers_url": "https://api.github.com/repos/hjdesigner/css-components/subscribers",
			"subscription_url": "https://api.github.com/repos/hjdesigner/css-components/subscription",
			"commits_url": "https://api.github.com/repos/hjdesigner/css-components/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/hjdesigner/css-components/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/hjdesigner/css-components/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/hjdesigner/css-components/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/hjdesigner/css-components/contents/{+path}",
			"compare_url": "https://api.github.com/repos/hjdesigner/css-components/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/hjdesigner/css-components/merges",
			"archive_url": "https://api.github.com/repos/hjdesigner/css-components/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/hjdesigner/css-components/downloads",
			"issues_url": "https://api.github.com/repos/hjdesigner/css-components/issues{/number}",
			"pulls_url": "https://api.github.com/repos/hjdesigner/css-components/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/hjdesigner/css-components/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/hjdesigner/css-components/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/hjdesigner/css-components/labels{/name}",
			"releases_url": "https://api.github.com/repos/hjdesigner/css-components/releases{/id}",
			"deployments_url": "https://api.github.com/repos/hjdesigner/css-components/deployments",
			"created_at": "2016-08-18T01:25:38Z",
			"updated_at": "2017-02-10T12:25:10Z",
			"pushed_at": "2017-02-25T22:01:36Z",
			"git_url": "git://github.com/hjdesigner/css-components.git",
			"ssh_url": "git@github.com:hjdesigner/css-components.git",
			"clone_url": "https://github.com/hjdesigner/css-components.git",
			"svn_url": "https://github.com/hjdesigner/css-components",
			"homepage": "http://henriquemelanda.com.br/css-components/",
			"size": 1016,
			"stargazers_count": 11,
			"watchers_count": 11,
			"language": "HTML",
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"forks_count": 1,
			"mirror_url": null,
			"archived": false,
			"open_issues_count": 0,
			"license": null,
			"forks": 1,
			"open_issues": 0,
			"watchers": 11,
			"default_branch": "master"
		},
	];

	const data3 = [
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
		{
			"id": 65954471,
			"name": "css-components",
			"full_name": "hjdesigner/css-components",
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
			"html_url": "https://github.com/hjdesigner/css-components",
			"description": "CSS COMPONENTS",
			"fork": false,
			"url": "https://api.github.com/repos/hjdesigner/css-components",
			"forks_url": "https://api.github.com/repos/hjdesigner/css-components/forks",
			"keys_url": "https://api.github.com/repos/hjdesigner/css-components/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/hjdesigner/css-components/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/hjdesigner/css-components/teams",
			"hooks_url": "https://api.github.com/repos/hjdesigner/css-components/hooks",
			"issue_events_url": "https://api.github.com/repos/hjdesigner/css-components/issues/events{/number}",
			"events_url": "https://api.github.com/repos/hjdesigner/css-components/events",
			"assignees_url": "https://api.github.com/repos/hjdesigner/css-components/assignees{/user}",
			"branches_url": "https://api.github.com/repos/hjdesigner/css-components/branches{/branch}",
			"tags_url": "https://api.github.com/repos/hjdesigner/css-components/tags",
			"blobs_url": "https://api.github.com/repos/hjdesigner/css-components/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/hjdesigner/css-components/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/hjdesigner/css-components/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/hjdesigner/css-components/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/hjdesigner/css-components/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/hjdesigner/css-components/languages",
			"stargazers_url": "https://api.github.com/repos/hjdesigner/css-components/stargazers",
			"contributors_url": "https://api.github.com/repos/hjdesigner/css-components/contributors",
			"subscribers_url": "https://api.github.com/repos/hjdesigner/css-components/subscribers",
			"subscription_url": "https://api.github.com/repos/hjdesigner/css-components/subscription",
			"commits_url": "https://api.github.com/repos/hjdesigner/css-components/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/hjdesigner/css-components/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/hjdesigner/css-components/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/hjdesigner/css-components/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/hjdesigner/css-components/contents/{+path}",
			"compare_url": "https://api.github.com/repos/hjdesigner/css-components/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/hjdesigner/css-components/merges",
			"archive_url": "https://api.github.com/repos/hjdesigner/css-components/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/hjdesigner/css-components/downloads",
			"issues_url": "https://api.github.com/repos/hjdesigner/css-components/issues{/number}",
			"pulls_url": "https://api.github.com/repos/hjdesigner/css-components/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/hjdesigner/css-components/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/hjdesigner/css-components/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/hjdesigner/css-components/labels{/name}",
			"releases_url": "https://api.github.com/repos/hjdesigner/css-components/releases{/id}",
			"deployments_url": "https://api.github.com/repos/hjdesigner/css-components/deployments",
			"created_at": "2016-08-18T01:25:38Z",
			"updated_at": "2017-02-10T12:25:10Z",
			"pushed_at": "2017-02-25T22:01:36Z",
			"git_url": "git://github.com/hjdesigner/css-components.git",
			"ssh_url": "git@github.com:hjdesigner/css-components.git",
			"clone_url": "https://github.com/hjdesigner/css-components.git",
			"svn_url": "https://github.com/hjdesigner/css-components",
			"homepage": "http://henriquemelanda.com.br/css-components/",
			"size": 1016,
			"stargazers_count": 11,
			"watchers_count": 11,
			"language": "HTML",
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"forks_count": 1,
			"mirror_url": null,
			"archived": false,
			"open_issues_count": 0,
			"license": null,
			"forks": 1,
			"open_issues": 0,
			"watchers": 11,
			"default_branch": "master"
		},
	];
	
	const markup = {
		labels: ["ambient-light-api"],
		datasets: [
			{
				fill: true,
				backgroundColor: Colors,
				data: [1],
			},
		],
	};

	const markup2 = {
		labels: ["ambient-light-api", "css-padawan", "css-components"],
		datasets: [
			{
				fill: true,
				backgroundColor: Colors,
				data: [1, 1, 1],
			},
		],
	};
	it('should create and append the markup given a correct data', () => {
		expect(repoSearchFork(data)).to.be.eql(markup);
	});
	it('should create and append when more than 1 repository', () => {
		expect(repoSearchFork(data2)).to.be.eql(markup2);
	});

});
