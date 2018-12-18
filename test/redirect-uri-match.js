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
