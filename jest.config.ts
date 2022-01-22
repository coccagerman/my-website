import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-markdown/)'
  ]
}
export default config

// /node_modules/react-markdown/