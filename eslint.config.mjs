import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      'vue/attribute-hyphenation': ['error', 'never'],
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/v-on-event-hyphenation': ['error', 'never'],
    },
  })
