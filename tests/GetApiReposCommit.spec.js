import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import getApiGithubReposCommit from '../src/scripts/get/GetApiReposCommit.js';

describe('Get Api Github Repositories Commit', () => {
	describe('some tests', () => {
		it('shoukd getApiGithubReposCommit', () => {
			expect(getApiGithubReposCommit).to.exist;
		})
		it('should getApiGithubReposCommit', () => {
			expect(getApiGithubReposCommit).to.a.be.a('function');
		});
	});
	describe('Return API', () => {
		let fetchedStub;
    let promise;
  
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });
  
    afterEach(() => {
      fetchedStub.restore();
    });
    
    it('should call fetch function', () => {
      const reposCommit = getApiGithubReposCommit();
      expect(fetchedStub).to.have.been.calledOnce;
		});
		
		it('should receive the correct url to fetch', () => {
			const repoCommit = getApiGithubReposCommit('hjdesigner/hjdesigner.github.io');
			expect(fetchedStub).to.have.been.calledWith('https://api.github.com/repos/hjdesigner/hjdesigner.github.io/commits?per_page=100&client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510');
		});

		it('should return JSON Data from the promise', () => {
			promise.resolves({ login: 'name' });
			const reposCommitApi = getApiGithubReposCommit('hjdesigner/hjdesigner.github.io');
			expect(reposCommitApi.resolveValue).to.be.eql({ login: 'name' });
		});

	});
});

