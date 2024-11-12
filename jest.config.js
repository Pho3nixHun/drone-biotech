module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    rootDir: './',
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/app/shared/components/$1',
        '^@directives/(.*)$': '<rootDir>/src/app/shared/directives/$1',
        '^@modules/(.*)$': '<rootDir>/src/app/shared/modules/$1',
        '^@interfaces/(.*)$': '<rootDir>/src/app/shared/interfaces/$1',
        '^@utils/(.*)$': '<rootDir>/src/app/shared/utils/$1',
    },
    transformIgnorePatterns: ['node_modules/?!(.\\*.mjs$|@jsverse)'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/ng-snapshot.js',
    ],
};
