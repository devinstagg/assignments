import * as Exercise from '../src/'

describe(`Filtering`, () => {
  
  it(`should filter out only republicans`, () => {
    const PARTY = 'Republican'
    const results = Exercise.republicans()
    expect(results).to.not.be.false()
    expect(results).to.not.be.empty()
    expect(results.length).to.be.equal(52)
    expect(results[0].party).to.be.equal(PARTY)
  })
  
  it(`should filter out only democrats`, () => {
    const PARTY = 'Democrat'
    const results = Exercise.democrats()
    expect(results).to.not.be.false()
    expect(results).to.not.be.empty()
    expect(results.length).to.be.equal(46)
    expect(results[0].party).to.be.equal(PARTY)
  })
  
  it(`should filter out only independents`, () => {
    const PARTY = 'Independent'
    const results = Exercise.independents()
    expect(results).to.not.be.false()
    expect(results).to.not.be.empty()
    expect(results.length).to.be.equal(2)
    expect(results[0].party).to.be.equal(PARTY)
  })
  
  it(`should filter out males`, () => {
    const results = Exercise.males()
    expect(results).to.not.be.false()
    expect(results).to.not.be.empty()
    expect(results.length).to.be.equal(79)
  })
  
  it(`should filter out females`, () => {
    const results = Exercise.females()
    expect(results).to.not.be.false()
    expect(results).to.not.be.empty()
    expect(results.length).to.be.equal(21)
  })
  
  it(`should filter out by state`, () => {
    const results = Exercise.byState('UT')
    expect(results).to.not.be.false()
    expect(results).to.not.be.empty()
    expect(results.length).to.be.equal(2)
  })
  
  
})
