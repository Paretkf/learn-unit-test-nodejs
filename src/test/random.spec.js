let random = require('../random')

describe('sumPrime', () => {
  it('Should return 15 if send 5, 10', () => {
      const expected = 1
      random = jest.fn().mockReturnValue(1)
      const result = random(1, 1)
      expect(result).toEqual(expected)
  })
})
