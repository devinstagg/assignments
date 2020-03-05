import * as Exercise from '../src/'

describe(`Mapping`, () => {
  
  it(`should map out only the required properties`, () => {
    const results = Exercise.mapping()
    expect(results).to.not.be.false()
    expect(results.length).to.be.equal(100)
    
    const keys = Object.keys(results[0])
    expect(keys).to.contain('firstName')
    expect(keys).to.contain('lastName')
    expect(keys).to.contain('party')
    expect(keys).to.contain('gender')
    expect(keys.length).to.equal(4)
  })
  
})
