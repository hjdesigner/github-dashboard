
/* eslint indent: [2, "tab"] */
/* eslint	no-tabs: 0 */
import colors from './colors';

export default function reposSearchCommit(data) {
	const maxStar = data.sort((a, b) => b.amount - a.amount);
	const dataChart = {
		labels: maxStar.slice(0, 10).map(name => name.nome),
		datasets: [
			{
				fill: true,
				backgroundColor: colors,
				data: maxStar.slice(0, 10).map(amount => amount.amount),
			},
		],
	};
	return dataChart;
}

