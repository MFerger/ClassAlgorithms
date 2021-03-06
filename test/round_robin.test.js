const expect = require('chai').expect
const roundRobin = require('../src/round_robin');

describe('roundRobin', function () {
  it('returns rounds for 6 correctly', function () {
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);
    expect(result[0]).to.deep.equal([
      [1,6],
      [2,5],
      [3,4],
    ]);
    expect(result[1]).to.deep.equal([
      [1,5],
      [6,4],
      [2,3],
    ]);
    expect(result[2]).to.deep.equal([
      [1,4],
      [5,3],
      [6,2],
    ]);
    expect(result[3]).to.deep.equal([
      [1,3],
      [4,2],
      [5,6]
    ]);
    expect(result[4]).to.deep.equal([
      [1,2],
      [3,6],
      [4,5],
    ]);
    expect(result[5]).to.deep.equal(undefined);
  });

  it('returns rounds for 8 correctly', function () {
    var input = [1,2,3,4,5,6,7,8];
    var result = roundRobin(input);
    expect(result[0]).to.deep.equal([
      [1,8],
      [2,7],
      [3,6],
      [4,5],
    ]);
    expect(result[1]).to.deep.equal([
      [1,7],
      [8,6],
      [2,5],
      [3,4],
    ]);
    expect(result[2]).to.deep.equal([
      [1,6],
      [7,5],
      [8,4],
      [2,3],
    ]);
    expect(result[3]).to.deep.equal([
      [1,5],
      [6,4],
      [7,3],
      [8,2],
    ]);
    expect(result[4]).to.deep.equal([
      [1,4],
      [5,3],
      [6,2],
      [7,8],
    ]);
    expect(result[5]).to.deep.equal([
      [1,3],
      [4,2],
      [5,8],
      [6,7],
    ]);
    expect(result[6]).to.deep.equal([
      [1,2],
      [3,8],
      [4,7],
      [5,6],
    ]);
    expect(result[7]).to.deep.equal(undefined);
  });
});
