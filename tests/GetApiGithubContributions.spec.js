import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import getApiGithubContributions from '../src/scripts/GetApiGithubContributions';

describe('Get Api Github Contribuitions', () => {
  describe('some tests', () => {
    it('should getApiGithubContributions', () => {
      expect(getApiGithubContributions).to.exist;
    });
    it('shoould getApiGithubRepo is a function', () => {
      expect(getApiGithubContributions).to.a.be.a('function');
    });
	}); 
	
	describe('searchApiGithub', () => {
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
      const contributions = getApiGithubContributions();
  
      expect(fetchedStub).to.have.been.calledOnce;
    });
  
    it('should receive the correct url to fetch', () => {
      const contributions = getApiGithubContributions('hjdesigner');
			expect(fetchedStub).to.have.been.calledWith('https://api.github.com/search/issues?q=type:pr+is:merged+author:hjdesigner&per_page=100&client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510');
  
      const contributions2 = getApiGithubContributions('grippado');
			expect(fetchedStub).to.have.been.calledWith('https://api.github.com/search/issues?q=type:pr+is:merged+author:grippado&per_page=100&client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510');
    });

    it('should return JSON Data from the promise', () => {
      promise.resolves({ login: 'name' });
      const contributionsApi = getApiGithubContributions('hjdesigner');
      expect(contributionsApi.resolveValue).to.be.eql({ login: 'name' });
    });

  });

});
