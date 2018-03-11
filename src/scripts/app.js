

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

let profite = '';
let reposGetApi = '';
let contribuition = '';
const elementProfile = document.querySelector('[data-id="profile"]');
const graphicLanguage = document.querySelector('[data-id="graphic-language"]').getContext('2d');
const graphicFork = document.querySelector('[data-id="graphic-fork"]').getContext('2d');
const graphicCommits = document.querySelector('[data-id="graphic-commits"]').getContext('2d');
const elementListStar = document.querySelector('[data-id="repoPerStarList"]');
const elementContribution = document.querySelector('[data-id="repoPerContributions"]');
const elementForm = document.querySelector('[data-id="formUser"]');
const elementGitProfile = document.querySelector('[data-id="resultGithub"]');
const elementTitle = document.querySelector('[data-id="nameTitle"]');
const elementLinkfacebook = document.querySelector('[data-id="linkFacebook"]');
const elementLinkTwitter = document.querySelector('[data-id="linkTwitter"]');
const elementLinkTwitterEn = document.querySelector('[data-id="linkTwitterEn"]');
const elementError = document.querySelector('[data-id="error"]');
const input = document.querySelector('[data-id="inputUser"]');
const button = document.querySelector('[data="search"]');
const url = window.location.href;
function updateContent() {
	document.querySelector('body').classList.add(i18next.t('bodyLanguage'));
	document.querySelector('[data-id="titleForm"]').innerHTML = i18next.t('titleForm');
	document.querySelector('[data-id="textButton"]').innerHTML = i18next.t('textButton');
	document.querySelector('[data-id="error"]').innerHTML = i18next.t('textError');
	document.querySelector('[data-id="textForm1"]').innerHTML = i18next.t('textForm1');
	document.querySelector('[data-id="textForm2"]').innerHTML = i18next.t('textForm2');
	document.querySelector('[data-id="textFooter"]').innerHTML = i18next.t('textFooter');
	document.querySelector('[data-id="info1"]').innerHTML = i18next.t('info1');
	document.querySelector('[data-id="info2"]').innerHTML = i18next.t('info2');
	document.querySelector('[data-id="star"]').innerHTML = i18next.t('star');
	document.querySelector('[data-id="language"]').innerHTML = i18next.t('language');
	document.querySelector('[data-id="fork"]').innerHTML = i18next.t('fork');
	document.querySelector('[data-id="commits"]').innerHTML = i18next.t('commits');
	document.querySelector('[data-id="contributed"]').innerHTML = i18next.t('contributed');
	document.querySelector('[data-id="share"]').innerHTML = i18next.t('share');
	document.querySelector('title').innerHTML = i18next.t('title');
}
i18next
	.use(LngDetector)
	.init(objectLanguage, () => {
		updateContent();
	});

function init() {
	profite
		.then(data => renderProfile(data, elementProfile))
		.then(data => renderNameUser(data, elementTitle));
	reposGetApi.then((data) => {
		const valueLanguage = renderLanguage(data);
		/* eslint-disable no-unused-vars */
		const barLanguage = new Chart(graphicLanguage, {
			type: 'pie',
			data: valueLanguage,
			options: {
				layout: {
					borderWidth: 10,
				},
				legend: {
					position: 'bottom',
					lineWidth: 10,
					labels: {
						boxWidth: 20,
					},
				},
			},
		});
	});
	reposGetApi
		.then(data => renderStarRepository(data, elementListStar))
		.then((data) => {
			const valueFork = renderForkRepository(data);
			/* eslint-disable no-unused-vars */
			const barFork = new Chart(graphicFork, {
				type: 'pie',
				data: valueFork,
				options: {
					layout: {
						borderWidth: 10,
					},
					legend: {
						position: 'bottom',
						lineWidth: 10,
						labels: {
							boxWidth: 20,
						},
					},
				},
			});
		});

	const repository = [];
	function arrayGet(dados, name, fork) {
		if (fork === false) {
			const returnArray = getApiReposCommit(dados);
			returnArray.then((data) => {
				repository.push({ nome: name, amount: data.length });
			});
		}
	}

	reposGetApi.then((data) => {
		data.map(dadosCommit => arrayGet(dadosCommit.full_name, dadosCommit.name, dadosCommit.fork));
		setTimeout(() => {
			const valueCommits = renderCommits(repository);
			/* eslint-disable no-unused-vars */
			const barLanguage = new Chart(graphicCommits, {
				type: 'pie',
				data: valueCommits,
				options: {
					layout: {
						borderWidth: 10,
					},
					legend: {
						position: 'bottom',
						lineWidth: 10,
						labels: {
							boxWidth: 20,
						},
					},
				},
			});
		}, 2000);
	});
	contribuition.then(data => renderContributions(data.items, elementContribution));
}

function urlShare(user) {
	elementLinkfacebook.setAttribute('href', `http://www.facebook.com/sharer.php?u=https://meu-curriculo.wedeploy.io/?${user}&t=1234`);
	elementLinkTwitter.setAttribute('href', `http://twitter.com/share?text=Confira+de+uma+forma+diferente+um+resumo+do+meu+GitHub&url=https%3A%2F%2Fmeu-curriculo.wedeploy.io/?${user}`);
	elementLinkTwitterEn.setAttribute('href', `http://twitter.com/share?text=Check+out+in+a+different+way+a+summary+of+my+GitHub&url=https%3A%2F%2Fmeu-curriculo.wedeploy.io/?${user}`);
}

function getUser(urlUser) {
	const user = urlUser.includes('/?') ? url.split('/?')[1] : urlUser;

	profite = getApi(user);
	reposGetApi = getApiRepos(user);
	contribuition = getApiContribution(user);
	elementForm.classList.add('hide');
	elementGitProfile.classList.remove('hide');

	return profite.then((data) => {
		if (data.message) {
			elementForm.classList.remove('hide');
			elementGitProfile.classList.add('hide');
			elementError.classList.remove('hide');
			return false;
		}

		urlShare(urlUser);
		init();
		return urlUser.includes('/?') ? false : window.history.pushState(null, null, `?${user}`);
	});
}

function loadPage(urlUser) {
	if (urlUser.slice(-1) === '/') {
		elementForm.classList.remove('hide');
		elementGitProfile.classList.add('hide');
		return false;
	}

	return getUser(urlUser);
}

button.addEventListener('click', (event) => {
	event.preventDefault();
	window.history.pushState('', '', '/');
	const user = input.value;
	getUser(user);
});

loadPage(url);
