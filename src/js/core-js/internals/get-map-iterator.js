var IS_PURE = require('./is-pure');
var getIterator = require('./get-iterator');

module.exports = IS_PURE ? getIterator : function (it) {
  // eslint-disable-next-line no-undef -- safe
  return Map.prototype.entries.call(it);
};
