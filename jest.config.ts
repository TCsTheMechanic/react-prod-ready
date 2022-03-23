export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^.+\\.(css|scss|svg|png)$': 'jest-transform-stub',
  },
}
