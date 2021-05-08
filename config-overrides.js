const { alias, aliasJest } = require('react-app-rewire-alias');
const path = require('path');

const aliasMap = {
  '@': path.resolve(__dirname, 'src'),
};

module.exports = alias(aliasMap);
module.exports.jest = function (config) {
  const jestConfig = aliasJest(aliasMap)(config);

  jestConfig.collectCoverage = true;
  jestConfig.moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/src/$1',
  };

  return jestConfig;
};
