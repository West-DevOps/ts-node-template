import type { Config } from '@jest/types'; 

const config: Config.InitialOptions = {
  preset: "ts-jest",
  clearMocks: true,
  resetMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testTimeout: 600000,
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports/junit"
      }
    ]
  ],
  cache: true,
  testMatch: ["**/?(*.)+(unit).[tj]s?(x)"],
  maxWorkers: 5
}

export default config; 
