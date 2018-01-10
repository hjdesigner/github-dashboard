import { expect } from 'chai';

import getApiGithub from '../src/scripts/app';

describe('App', () => {
  
  it('should getApiGithub exist', () => {
    expect(getApiGithub).exist;
  });
  it('should getApiGithub is a function', () => {
    expect(getApiGithub).to.be.a('function');
  });
  it('should getApiGithub return USER when i pass USER', () => {
    expect(getApiGithub('USER')).to.be.equal('USER');
  });

});