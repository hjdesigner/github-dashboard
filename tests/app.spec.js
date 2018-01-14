/* global document */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
global.window = global.document.defaultView;

import { user, getApiGithub } from '../src/scripts/app';

describe('App', () => {

  describe('smoke tests', () => {
    it('should User exist', () => {
      expect(user).to.exist;
    });

    it('should getApiGithub exist', () => {
      expect(getApiGithub).to.exist;
    });

    it('should getApiGithub is function', () => {
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
      expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/hjdesigner');
  
      const user2 = getApiGithub('grippado');
      expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/grippado');      
    });

    it('should return JSON Data from the promise', () => {
      promise.resolves({ login: 'name' });
      const userApi = getApiGithub('hjdesigner');
      expect(userApi.resolveValue).to.be.eql({ login: 'name' });
    });

  });

});