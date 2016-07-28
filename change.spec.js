/* global describe it expect */
const Change = require('./change')

describe('count change', function () {
  it('test 1', function () {
    expect(Change.count(4, [1, 2])).toEqual(3)
  })

  it('test 2', function () {
    expect(Change.count(300, [5, 10, 20, 50, 100, 200, 500])).toEqual(1022)
  })

  it('test 3', function () {
    expect(Change.count(301, [5, 10, 20, 50, 100, 200, 500])).toEqual(0)
  })

  it('test 4', function () {
    expect(Change.count(300, [500, 5, 50, 100, 20, 200, 10])).toEqual(1022)
  })
})
