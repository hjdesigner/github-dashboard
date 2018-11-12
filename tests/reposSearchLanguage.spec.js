import 'jsdom-global/register';
import chai, { expect } from 'chai';

import reposSearchLanguage from '../src/scripts/components/reposSearchLanguage';
import Colors from '../src/scripts/components/colors';
import MockApiResponse from './__MOCK/mockApiResult';

describe('Repository Search Language', () => {
	describe('some tests', () => {
		it('should reposSearchLanguage', () => {
			expect(reposSearchLanguage).to.exist;
		});
		it('should reposSearchLanguage is a function', () => {
			expect(reposSearchLanguage).to.be.a('function');
		});
	});


	const dataChart = {
		labels: ["CSS", "HTML", "JavaScript"],
		datasets: [
			{
				fill: true,
				backgroundColor: Colors,
				data: [9, 6, 8],
			},
		],
	};

it('should create and append then data correct', () => {
	expect(reposSearchLanguage(MockApiResponse)).to.be.eql(dataChart);
});

});
