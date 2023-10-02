// !∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘
// !∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘ JEST CONFIGURATION ∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘
// !∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘
// *∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘ BACKEND ∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘
// !∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘

/* eslint-disable */
export default {
    
	displayName: 'libs/BACKEND',
    
	preset: '../../jest.preset.js',
    coverageDirectory: '../../coverage/libs/BACKEND',
    
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
	
	transform: {
        
		'^.+\\.(ts|mjs|js|html)$': ['jest-preset-angular', {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$'
        }]
	},
	
	snapshotSerializers: [
		'jest-preset-angular/build/serializers/ng-snapshot',
		'jest-preset-angular/build/serializers/html-comment',
        'jest-preset-angular/build/serializers/no-ng-attributes'
	]
};
