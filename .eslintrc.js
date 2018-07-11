// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow paren-less arrow functions
    // allow async-await
    'generator-star-spacing': 0,
    "linebreak-style": 0,
    "func-names": 0,
    "max-len": [
      "warn",
      150,
      4,
      {
        "comments": 150
      }
    ],
    "indent": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "no-tabs": 0,
    "spaced-comment": 0,
    "semi": 0,
    "prefer-const": 1,
    "no-plusplus": 1,
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "function-paren-newline": 0,
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "object-shorthand": 0,
    "no-useless-constructor": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "prefer-template": 0,
    "object-curly-newline": 0,
    "class-methods-use-this": 0,
    "no-restricted-syntax": 0
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off',
        'vue/script-indent': ['warn', 2, {
          'baseIndent': 1
        }]
      }
    }
  ]
}
