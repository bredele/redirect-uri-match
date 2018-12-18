/**
 * Dependency
 */

const url = require('url')
const querystring = require('querystring')

module.exports = (uri, redirect) => {
  const parser = url.parse(uri)
  const params = querystring.parse(parser.query)
  return [].concat(redirect).indexOf(params.redirect_uri) > -1
}
