module.exports = {
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/index.ts',
		'<rootDir>/src/Entities/',
		'<rootDir>/src/Events/',
		'<rootDir>/src/schemas.ts',
		'<rootDir>/src/SystemIdentifier*',
	],
	testResultsProcessor: 'jest-teamcity-reporter',
};
