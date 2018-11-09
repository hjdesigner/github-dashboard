
import Colors from './colors';

const arrayLanguage = [];
const arrayLanguageFilter = {};
const languageType = [];
const languageValue = [];

function language(cont) {
	cont.map(elem => arrayLanguage.push(elem.language));
	arrayLanguage
		.filter(item => item != null)
		.map((item) => {
			arrayLanguageFilter[item] = (arrayLanguageFilter[item] || 0) + 1;
			return arrayLanguageFilter;
		});
	Object.keys(arrayLanguageFilter).map((item) => {
		languageValue.push(arrayLanguageFilter[item]);
		languageType.push(item);
		return true;
	});
}

export default function reposSearchLanguage(data) {
	language(data);
	const dataChart = {
		labels: languageType,
		datasets: [
			{
				fill: true,
				backgroundColor: Colors,
				data: languageValue,
			},
		],
	};
	return dataChart;
}

