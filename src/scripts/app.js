

import Chart from 'chart.js';
import getApi from './GetApiGithub';
import getApiRepos from './GetApiGithubRepo';
import getApiContribution from './GetApiGithubContributions';
import getApiReposCommit from './GetApiReposCommit';
import renderProfile from './UserData';
import renderLanguage from './reposSearchLanguage';
import renderStarRepository from './reposSearchStar';
import renderContributions from './reposSearchContributions';
import renderCommits from './reposSearchCommit';

const profite = getApi('zenorocha');
const reposGetApi = getApiRepos('zenorocha');
const contribuition = getApiContribution('zenorocha');
const elementProfile = document.querySelector('[data-id="profile"]');
const graphicLanguage = document.querySelector('[data-id="graphic-language"]').getContext('2d');
const graphicCommits = document.querySelector('[data-id="graphic-commits"]').getContext('2d');
const elementListStar = document.querySelector('[data-id="repoPerStarList"]');
const elementContribution = document.querySelector('[data-id="repoPerContributions"]');

profite.then(data => renderProfile(data, elementProfile));
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
				position: 'top',
				lineWidth: 10,
				labels: {
					boxWidth: 20,
				},
			},
		},
	});
});
reposGetApi
	.then(data => renderStarRepository(data, elementListStar));
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
					position: 'top',
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

