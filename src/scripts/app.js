

import Chart from 'chart.js';
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
const elementNameInfo = document.querySelector('[data-id="nameInfo"]');
const input = document.querySelector('[data-id="inputUser"]');
const button = document.querySelector('[data="search"]');
const url = window.location.href;
const urlUser = url.split('/?')[1];

function init() {
	profite
		.then(data => renderProfile(data, elementProfile))
		.then(data => renderNameUser(data, elementTitle))
		.then(data => renderNameUser(data, elementNameInfo));
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

if (urlUser !== undefined) {
	elementForm.classList.add('hide');
	elementGitProfile.classList.remove('hide');
	profite = getApi(urlUser);
	reposGetApi = getApiRepos(urlUser);
	contribuition = getApiContribution(urlUser);
	init();
} else {
	elementForm.classList.remove('hide');
	elementGitProfile.classList.add('hide');
}
button.addEventListener('click', (event) => {
	event.preventDefault();
	const user = input.value;
	profite = getApi(user);
	reposGetApi = getApiRepos(user);
	contribuition = getApiContribution(user);
	init();
	elementForm.classList.add('hide');
	elementGitProfile.classList.remove('hide');
});
