module.exports = {
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: "node",
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '\\.ts?$': 'ts-jest',
  },
  globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.json',
      useESM: true,
      isolatedModules: true,
		},
	},
	transformIgnorePatterns: [
		"node_modules/(?!stringify-object/.*)",
	],
}
