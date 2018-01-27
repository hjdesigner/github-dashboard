
/* global document */
/* eslint indent: [2, "tab"] */
/* eslint	no-tabs: 0 */

import Chart from 'chart.js';
import getApi from './GetApiGithub';
import getApiRepos from './GetApiGithubRepo';
import getApiContribution from './GetApiGithubContributions';
import renderProfile from './UserData';
import renderLanguage from './reposSearchLanguage';
import renderStarRepository from './reposSearchStar';
import renderContributions from './reposSearchContributions';

const profite = getApi('hjdesigner');
const reposGetApi = getApiRepos('hjdesigner');
const contribuition = getApiContribution('hjdesigner');
const elementProfile = document.querySelector('[data-id="profile"]');
const graphicLanguage = document.querySelector('[data-id="graphic-language"]').getContext('2d');
const elementListStar = document.querySelector('[data-id="repoPerStarList"]');
const elementContribution = document.querySelector('[data-id="repoPerContributions"]');
const arrayNameRepo = [];

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
				position: 'left',
				lineWidth: 10,
				labels: {
					boxWidth: 20,
				},
			},
		},
	});
});
reposGetApi.then(data => renderStarRepository(data, elementListStar))
	.then(data => data.map(nameRepo => arrayNameRepo.push(nameRepo.name)));
contribuition.then(data => renderContributions(data.items, elementContribution));

console.log(arrayNameRepo);

