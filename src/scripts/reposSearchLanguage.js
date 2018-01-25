
/* eslint indent: [2, "tab"] */
/* eslint	no-tabs: 0 */

const arrayLanguage = [];
const arrayLanguageFilter = {};
const languageType = [];
const languageValue = [];

function language(cont) {
	cont.map(elem => arrayLanguage.push(elem.language));
	arrayLanguage.forEach((item) => {
		arrayLanguageFilter[item] = (arrayLanguageFilter[item] || 0) + 1;
	});
	Object.keys(arrayLanguageFilter).forEach((item) => {
		languageValue.push(arrayLanguageFilter[item]);
		languageType.push(item);
	});
}

export default function reposSearchLanguage(data) {
	language(data);
	const dataChart = {
		labels: languageType,
		datasets: [
			{
				fill: true,
				backgroundColor: [
					'#5DC4AB',
					'#5C2751',
					'#6457A6',
					'#9DACFF',
					'#76E5FC',
				],
				data: languageValue,
			},
		],
	};
	return dataChart;
}

