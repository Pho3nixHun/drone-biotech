module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^flat': 'node_modules/flat/index.js',
    '^@components/(.*)$': '<rootDir>/src/app/shared/components/$1',
    '^@directives/(.*)$': '<rootDir>/src/app/shared/directives/$1',
    '^@modules/(.*)$': '<rootDir>/src/app/shared/modules/$1',
  },
  transformIgnorePatterns: ['node_modules/?!(.\\*.mjs$|@jsverse)'],
};
