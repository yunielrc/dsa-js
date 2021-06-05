module.exports = {
  testEnvironment: 'node',
  // The bail config option can be used here to have Jest stop running tests after
  // the first failure.
  bail: false,
  // Indicates whether each individual test should be reported during the run.
  verbose: false,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // testTimeout: 5000,
  // forceExit: true,
  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  // collectCoverageFrom: [
  //   'src/**/*.js',
  // ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
