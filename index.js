/**
 * Dependency
 */

const match = require('uri-params-match')

/**
 * Match redirect_uri query parameters with redirection URI or array of possible
 * redirection URIs.
 *
 * @param {String} ury
 * @param {String|Array} redirect
 * @param {String?} param
 * @api public
 */

module.exports = (uri, redirect, param = 'redirect_uri') => {
  return match(uri, {
    [param]: redirect
  })
}
