import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import getApiGithub from '../src/scripts/get/GetApiGithub';

describe('App', () => {

  describe('smoke tests', () => {
    
    it('should getApiGithub exist', () => {
      expect(getApiGithub).to.exist;
    });

    it('should getApiGithub is a function', () => {
      expect(getApiGithub).to.be.a('function');
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
      const user = getApiGithub();
  
      expect(fetchedStub).to.have.been.calledOnce;
    });
  
    it('should receive the correct url to fetch', () => {
      const user = getApiGithub('hjdesigner');
      expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/hjdesigner?client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510');
  
      const user2 = getApiGithub('grippado');
      expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/grippado?client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510');      
    });

    it('should return JSON Data from the promise', () => {
      promise.resolves({ login: 'name' });
      const userApi = getApiGithub('hjdesigner');
      expect(userApi.resolveValue).to.be.eql({ login: 'name' });
    });

  });


});
