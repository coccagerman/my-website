import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: false,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!react-markdown/)'
  ]
}
export default config

// /node_modules/react-markdown/