import * as Exercise from '../src/'

describe(`Reducing`, () => {
  
  it(`should out an object identifying party counts`, () => {
    const results = Exercise.reducedCount()
    expect(results).to.not.be.false()
    expect(results).to.be.an.object()
    expect(results.republican).to.be.equal(52)
    expect(results.democrat).to.be.equal(46)
    expect(results.independent).to.be.equal(2)
  })
})
