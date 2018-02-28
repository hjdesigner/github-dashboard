import chai, { expect } from 'chai';

import reposSearchCommit from '../src/scripts/reposSearchCommit';

describe('Repository Search Commits', () => {
	describe('some tests', () => {
		it('should reposSearchCommit', () => {
			expect(reposSearchCommit).to.exist;
		});
		it('should reposSearchCommit is a function', () => {
			expect(reposSearchCommit).to.be.a('function');
		});
	});
	describe('reposSearchCommit', () => {
		const data = [
			{
		nome: "hjdesigner.github.io",
	amount: 100
},
{
	nome: "cursos",
	amount: 89
},
{
	nome: "Brincando-com-CSS3",
	amount: 67
}, {
	nome: "desafio-daily-css-images",
	amount: 36
}, {
	nome: "css-components",
	amount: 30
}, {
	nome: "sku-color",
	amount: 21
}, {
	nome: "vibration-api",
	amount: 20
}, {
	nome: "css-padawan",
	amount: 19
}, {
	nome: "javascript30",
	amount: 18
}, {
	nome: "CSS-Reference",
	amount: 16
}, {
	nome: "github-dashboard",
	amount: 13
}, {
	nome: "lady-problems-hackthon",
	amount: 12
}, {
	nome: "simple-grid-css",
	amount: 11
}, {
	nome: "js-tdd-course",
	amount: 11
}, {
	nome: "github-course",
	amount: 11
}, {
	nome: "test-netshoes",
	amount: 10
}, {
	nome: "Estudando-Reactjs",
	amount: 10
}, {
	nome: "css-quiz",
	amount: 9
}, {
	nome: "spotify-wrapper",
	amount: 9
}, {
	nome: "monetus-actions-dashboard",
	amount: 9
}, {
	nome: "javascript-avancado-I-ES6",
	amount: undefined
}, {
	nome: "search-github",
	amount: 9
}, {
	nome: "test-rv",
	amount: 6
}, {
	nome: "curso-nodejs",
	amount: 5
}, {
	nome: "battery-status-api",
	amount: 5
}, {
	nome: "talk-meetup-css",
	amount: 5
}, {
	nome: "old-clock",
	amount: 4
}, {
	nome: "spotify-wrapper-play",
	amount: 4
}, {
	nome: "workflow-reactjs",
	amount: 4
}, {
	nome: "ambient-light-api",
	amount: 3
}, {
	nome: "workflow-webpack",
	amount: 3
}, {
	nome: "curso-react-ninja",
	amount: 2
}, {
	nome: "React-For-Beginners-Starter-Files-master",
	amount: 1
}, {
	nome: "device-orientation",
	amount: 1
}, {
	nome: "my-site-react",
	amount: 1
}, {
	nome: "fat-components",
	amount: 1
},
		];

const dataChart = {
		labels: ["hjdesigner.github.io", "cursos", "Brincando-com-CSS3", "desafio-daily-css-images", "css-components", "sku-color", "vibration-api", "css-padawan", "javascript30", "CSS-Reference"],
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
				data: [100, 89, 67, 36, 30, 21, 20, 19, 18, 16],
			},
		],
	};

		it('should create and append then data correct', () => {
			expect(reposSearchCommit(data)).to.be.eql(dataChart);
		});

	});

});
