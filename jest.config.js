module.exports = {
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {},]
    },
    testMatch: [
        '**/test/**/*.test.(ts|js)','**/*.steps.ts'
    ],
    preset: 'ts-jest',
    testEnvironment: 'node'
};