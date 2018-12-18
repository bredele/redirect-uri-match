/**
 * Dependency
 */

const url = require('url')
const querystring = require('querystring')

module.exports = (uri, redirect, param = 'redirect_uri') => {
  const parser = url.parse(uri)
  const params = querystring.parse(parser.query)
  return [].concat(redirect).indexOf(params[param]) > -1
}
