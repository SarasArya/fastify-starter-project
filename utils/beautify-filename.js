const _ = require('lodash');

module.exports.beautifiedFileName = filename => {
  return filename
    .replace('.js', '')
    .split('-')
    .map(fragment => _.capitalize(fragment))
    .join('');
};
