
/**
 * Clone an array/object
 *
 * @param {Object|Array} o
 * @return {Object|Array} new array|object
 * @api public
 */

module.exports = function (o){
  return JSON.parse(JSON.stringify(o));
};
