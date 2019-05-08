module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/ignore-css.js"],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "\\.(css|jpg|png|scss)$": "<rootDir>/ignore-css.js"
  },
  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>./src/tests/"],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ["<rootDir>./src/SetupTests.js"],

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom",

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],

  // Indicates whether each individual test should be reported during the run
  verbose: true
};
