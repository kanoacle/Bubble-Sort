/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const insert = require('../js/insert.js');

describe('insert sort', () => {
  it('should take in an array of numbers', () => {
    expect(insert(undefined)).to.equal(false);
    expect(insert(null)).to.equal(false);
    expect(insert({hey: 'hi'})).to.equal(false);
    expect(insert('18')).to.equal(false);
    expect(insert.bind(insert, ['18', 12])).to.throw(Error);
    expect(insert.bind(insert, [18, 'hey'])).to.throw(Error);
  });
  it('should sort the array by numeric value', () => {
    expect(insert([9, 7, 4, 2, 7, 5, 8])).to.deep.equal([2, 4, 5, 7, 7, 8, 9]);
    expect(insert([6, 18, 6, 34, 2, 6, 9, 56, 12])).to.deep.equal([2, 6, 6, 6, 9, 12, 18, 34, 56]);
  });
});