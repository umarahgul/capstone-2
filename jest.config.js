module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./testSetup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/imageMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};