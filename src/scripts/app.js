import Chart from 'chart.js';
import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';

import getApi from './get/GetApiGithub';
import getApiRepos from './get/GetApiGithubRepo';
import getApiContribution from './get/GetApiGithubContributions';
import getApiReposCommit from './get/GetApiReposCommit';

import renderProfile from './components/UserData';
import renderLanguage from './components/reposSearchLanguage';
import renderStarRepository from './components/reposSearchStar';
import renderContributions from './components/reposSearchContributions';
import renderCommits from './components/reposSearchCommit';
import renderForkRepository from './components/repoSearchFork';
import renderNameUser from './components/nameUser';
import objectLanguage from './components/translate';

let profilePromise = null;
let reposPromise = null;
let contributionPromise = null;

let languageChart = null;
let forkChart = null;
let commitChart = null;

const elementProfile = document.querySelector('[data-id="profile"]');

const graphicLanguage =
	document.querySelector('[data-id="graphic-language"]');

const graphicFork =
	document.querySelector('[data-id="graphic-fork"]');

const graphicCommits =
	document.querySelector('[data-id="graphic-commits"]');

const elementListStar =
	document.querySelector('[data-id="repoPerStarList"]');

const elementContribution =
	document.querySelector('[data-id="repoPerContributions"]');

const elementForm =
	document.querySelector('[data-id="formUser"]');

const elementGitProfile =
	document.querySelector('[data-id="resultGithub"]');

const elementTitle =
	document.querySelector('[data-id="nameTitle"]');

const elementLinkfacebook =
	document.querySelector('[data-id="linkFacebook"]');

const elementLinkTwitter =
	document.querySelector('[data-id="linkTwitter"]');

const elementLinkTwitterEn =
	document.querySelector('[data-id="linkTwitterEn"]');

const elementError =
	document.querySelector('[data-id="error"]');

const input =
	document.querySelector('[data-id="inputUser"]');

const button =
	document.querySelector('[data="search"]');

const url = window.location.href;

function updateContent() {
	document.body.classList.add(
		i18next.t('bodyLanguage')
	);

	document.querySelector('[data-id="
