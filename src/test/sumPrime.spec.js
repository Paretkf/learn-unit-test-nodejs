const sumPrime = require('../sumPrime')

describe('sumPrime', () => {
  it('Should return 15 if send 5, 10', () => {
      const expected = 15
      const result = sumPrime(5, 10)
      expect(expected).toEqual(result)
  })
})
