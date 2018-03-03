
import Colors from './colors';

const arrayName = [];
const arrayAmount = [];

function generatorArray(content) {
	content.map((item) => {
		arrayName.push(item.name);
		arrayAmount.push(item.forks_count);
		return false;
	});
}

export default function repoSearchFork(data) {
	const maxStar = data.sort((a, b) => b.forks_count - a.forks_count);
	generatorArray(maxStar.slice(0, 10));
	const dataChart = {
		labels: arrayName,
		datasets: [
			{
				fill: true,
				backgroundColor: Colors,
				data: arrayAmount,
			},
		],
	};
	return dataChart;
}

