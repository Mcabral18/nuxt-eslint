import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: typescriptParser,
			},
		},
		ignores: ['node_modules/**'],
		plugins: {
			vue,
			'@typescript-eslint': typescript,
		},
		rules: {
			'vue/order-in-components': [
				'error',
				{
					order: [
						'el',
						'name',
						'key',
						'parent',
						'functional',
						['delimiters', 'comments'],
						['components', 'directives', 'filters'],
						'extends',
						'mixins',
						'inheritAttrs',
						'model',
						['props', 'propsData'],
						'emits',
						'data',
						'computed',
						'watch',
						'LIFECYCLE_HOOKS',
						'methods',
						['template', 'render'],
						'renderError'
					]
				}
			],
			'vue/attributes-order': [
				'error',
				{
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						['UNIQUE', 'SLOT'],
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT'
					],
					alphabetical: false
				}
			],
			'vue/multi-word-component-names': 'off',
			'no-undef': 'off',
			'vue/html-indent': ['error', 'tab'],
			'vue/no-v-for-template-key': 'off',
			'no-unused-vars': [
				'error',
				{
					vars: 'local',
					args: 'after-used',
					ignoreRestSiblings: true,
					argsIgnorePattern: '^_',
				},
			],
			'vue/attribute-hyphenation': 'off',
			'vue/v-on-event-hyphenation': 'off',
			'vue/no-multiple-template-root': 'off',
			'linebreak-style': 0,
			quotes: ['error', 'single'],
			semi: ['error', 'never'],
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: {
						max: 3,
					},
					multiline: {
						max: 1,
					},
				},
			],
		},
	},
	{
		files: ['**/*.js'],
		ignores: ['node_modules/**'],
		rules: {
			indent: ['error', 'tab'],
			'linebreak-style': 0,
			quotes: ['error', 'single'],
			semi: ['error', 'never'],
			'no-unused-vars': [
				'error',
				{
					vars: 'local',
					args: 'after-used',
					ignoreRestSiblings: true,
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		files: ['**/*.scss'],
		ignores: ['node_modules/**'],
		rules: {
			indentation: ['error', 'tab'],
		},
	},
];