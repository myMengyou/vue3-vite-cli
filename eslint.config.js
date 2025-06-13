import eslint from '@eslint/js'
import globals from 'globals'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
      'vite.config.js',
      'src/assets/**',
      'src/**/iconfont/**',
    ],
  },

  eslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],

  /**
   * javascript 规则
   */
  {
    rules: {},
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  /**
   * vue 规则
   */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'vue/require-default-prop': 'off',
    },
  },

  /**
   * prettier 配置
   * 会合并根目录下的prettier.config.js 文件
   * @see https://prettier.io/docs/en/options
   */
  eslintPluginPrettierRecommended,
]
