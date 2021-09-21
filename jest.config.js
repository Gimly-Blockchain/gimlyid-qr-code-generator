module.exports = {
  transform: {'^.+\\.(ts|tsx)?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/test/.*\\.(test|spec)?\\.(js|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
