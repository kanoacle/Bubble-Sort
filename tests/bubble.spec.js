/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const bubble = require('../bubble.js');

describe('bubble', () => {
  it('should take in an array of numbers', () => {
    expect(bubble(undefined)).to.equal(false);
    expect(bubble(null)).to.equal(false);
    expect(bubble({hey: 'hi'})).to.equal(false);
    expect(bubble('18')).to.equal(false);
    expect(bubble(['18', 12])).to.equal(false);
    expect(bubble([18, 'hey'])).to.equal(false);
  });
  it('should sort the array by numeric value', () => {
    expect(bubble([9, 7, 4, 2, 7, 5, 8])).to.deep.equal([2, 4, 5, 7, 7, 8, 9]);
  });
});