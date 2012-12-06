
/**
 * Clone an array/object
 *
 * @param {Object|Array} o
 * @return {Object|Array} new obj
 * @api public
 */

module.exports = function (o){
  return JSON.parse(JSON.stringify(o));
};
