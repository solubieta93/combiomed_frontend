module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'vuetify',
    ],
    extends: [
        'plugin:vue/recommended',
        'vuetify',
    ],
    rules: {
        'no-console': 'off',
        'vuetify/no-deprecated-classes': 'error',
        'vuetify/grid-unknown-attributes': 'error',
        'vuetify/no-legacy-grid': 'error',
    },
}
