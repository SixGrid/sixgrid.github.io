// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential'],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    'rules': {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        'no-trailing-spaces': 0,
        'eqeqeq': 0,
        'no-useless-escape': 0,
        'no-unused-vars': 0,
        'curly': 0,
        'no-undef': 0,
        'new-cap': 0,
        'no-restricted-imports': 2,
        'no-global-assign': 0,
        'indent': [ 'error', 4 ],
        'no-shadow-restricted-names': 0,
        'promise/param-names': 0,
        'no-unneeded-ternary': 0,
        'no-extend-native': 0
    }
}
