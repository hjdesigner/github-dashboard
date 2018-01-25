
/* global document */
/* eslint indent: [2, "tab"] */
/* eslint	no-tabs: 0 */

import getApi from './GetApiGithub';
import getApiRepos from './GetApiGithubRepo';
import renderProfile from './UserData';
import renderLanguage from './reposSearchLanguage';

const Chart = require('chart.js');

const profite = getApi('hjdesigner');
const reposGetApi = getApiRepos('hjdesigner');
const elementProfile = document.querySelector('[data-id="profile"]');
const graphicLanguage = document.querySelector('[data-id="graphic-language"]').getContext('2d');

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

