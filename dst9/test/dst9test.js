const funcs = require('../dst9.js');
const expect = require('chai').expect;

describe('Testing ds9 -functions', () => {
  const testroot = 10;

  const testarr = [2, 6, 23, 1, 12, 21, 5];

  it('Should export function', () => {
    expect(funcs.createTree).to.be.a('Function');
  });

  it('Function createTree', () => {
    const testgraph = funcs.createTree(testroot, testarr);
    expect(testgraph).to.be.an('Object');
  });
});
