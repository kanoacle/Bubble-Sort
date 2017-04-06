/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const select = require('../js/select.js');

describe('select sort', () => {
  it('should take in an array of numbers', () => {
    expect(select(undefined)).to.equal(false);
    expect(select(null)).to.equal(false);
    expect(select({hey: 'hi'})).to.equal(false);
    expect(select('18')).to.equal(false);
    expect(select.bind(select, ['18', 12])).to.throw(Error);
    expect(select.bind(select, [18, 'hey'])).to.throw(Error);
  });
  it('should sort the array by numeric value', () => {
    expect(select([9, 7, 4, 2, 7, 5, 8])).to.deep.equal([2, 4, 5, 7, 7, 8, 9]);
    expect(select([6, 18, 6, 34, 2, 6, 9, 56, 12])).to.deep.equal([2, 6, 6, 6, 9, 12, 18, 34, 56]);
  });
});