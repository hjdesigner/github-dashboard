
/* eslint indent: [2, "tab"] */
/* eslint	no-tabs: 0 */
// import colors from './colors';

export default function reposSearchCommit(data) {
	const maxStar = data.sort((a, b) => b.amount - a.amount);
	const dataChart = {
		labels: maxStar.slice(0, 10).map(name => name.nome),
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
				data: maxStar.slice(0, 10).map(amount => amount.amount),
			},
		],
	};
	return dataChart;
}

