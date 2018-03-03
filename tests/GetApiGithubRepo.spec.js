import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import getApiGithubRepo from '../src/scripts/get/GetApiGithubRepo';

describe('Get Api Github Repo', () => {
  describe('some tests', () => {
    it('should getApiGithubRepo', () => {
      expect(getApiGithubRepo).to.exist;
    });
    it('shoould getApiGithubRepo is a function', () => {
      expect(getApiGithubRepo).to.a.be.a('function');
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
      const user = getApiGithubRepo();
  
      expect(fetchedStub).to.have.been.calledOnce;
    });
  
    it('should receive the correct url to fetch', () => {
      const user = getApiGithubRepo('hjdesigner');
			expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/hjdesigner/repos?per_page=100&client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510');
  
      const user2 = getApiGithubRepo('grippado');
			expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/grippado/repos?per_page=100&client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510');      
    });

    it('should return JSON Data from the promise', () => {
      promise.resolves({ login: 'name' });
      const userApi = getApiGithubRepo('hjdesigner');
      expect(userApi.resolveValue).to.be.eql({ login: 'name' });
    });

  });

});
