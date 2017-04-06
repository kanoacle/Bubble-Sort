/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const quick = require('../js/quick.js');

describe('quick sort', () => {
  it('should take in an array of numbers or number strings', () => {
    expect(quick(undefined)).to.equal(false);
    expect(quick(null)).to.equal(false);
    expect(quick({hey: 'hi'})).to.equal(false);
    expect(quick('18')).to.equal(false);
    expect(quick.bind(quick, [18, 'hey'])).to.throw(Error);
    expect(quick.bind(quick, ['18', 12])).to.throw(Error);
  });
  it('should sort the array by numeric value', () => {
    expect(quick([9, 7, 4, 2, 7, 5, 8])).to.deep.equal([2, 4, 5, 7, 7, 8, 9]);
    expect(quick([6, 18, 6, 34, 2, 6, 9, 56, 12])).to.deep.equal([2, 6, 6, 6, 9, 12, 18, 34, 56]);
  });
});