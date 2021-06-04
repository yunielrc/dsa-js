module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  // testTimeout: 5000,
  verbose: true,
  // forceExit: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  // collectCoverageFrom: [
  //   'src/**/*.js',
  // ],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
};
