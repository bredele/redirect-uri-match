/**
 * Dependencies.
 */

const test = require('tape')
const validate = require('..')

test('should not validate URI where redirect_uri query parameter does not match given redirection URI', assert => {
  assert.plan(1)
  assert.equal(
    validate('https://test.com?redirect_uri=https://www.world.com', 'https://www.hello.com'),
    false
  )
})

test('should validate URI where redirect_uri query parameter match given redirection URI', assert => {
  assert.plan(1)
  assert.equal(
    validate('https://test.com?redirect_uri=https://www.hello.com', 'https://www.hello.com'),
    true
  )
})

test('should validate encoded redirect_uri', assert => {
  assert.plan(1)
  assert.equal(
    validate('https://test.com?redirect_uri=https%3A%2F%2Fwww.hello.com', 'https://www.hello.com'),
    true
  )
})

test('should match redirect_uri with whitelist', assert => {
  assert.plan(1)
  assert.equal(
    validate('https://test.com?redirect_uri=https://www.hello.com/super', [
      'https://www.hello.com',
      'https://www.hello.com/super'
    ]),
    true
  )
})

test('should match redirect_uri when URI contains multiple query parameters', assert => {
  assert.plan(1)
  assert.equal(
    validate('https://test.com?redirect_uri=https://www.hello.com/super&state=10', [
      'https://www.hello.com',
      'https://www.hello.com/super'
    ]),
    true
  )
})
