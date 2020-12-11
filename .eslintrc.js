module.exports =  {
  extends:  [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:import/typescript",
    "plugin:sonarjs/recommended",
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
  ],
  plugins: ['import',"react-hooks","unicorn"],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["**/types/*.ts"],
  rules:  {
    "react/jsx-no-bind": ["warn", {
      "ignoreDOMComponents": false,
      "ignoreRefs": false,
      "allowArrowFunctions": false,
      "allowFunctions": false,
      "allowBind": false
    }],
    'unicorn/no-abusive-eslint-disable': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/no-for-loop': 'warn',
    'unicorn/prefer-type-error': 'warn',
    'react/jsx-no-literals': "warn",
    'react/forbid-component-props': [
      'warn', {
        forbid: [
          {
            'propName': 'className',
            'message': "Use jsx inline style with React.CSSProperties (Goal => kill less => kill ant design)"
          },
        ]
      }
    ],
    'react-hooks/exhaustive-deps': 'warn',
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/camelcase": "warn",
    "react/display-name": "warn",
    "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
    "react/jsx-no-target-blank": "warn",
    "react/no-unescaped-entities": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "react/prop-types": "off",
    "import/no-cycle": "error",
    "import/dynamic-import-chunkname": [2, {
      importFunctions: ["dynamicImport"],
      webpackChunknameFormat: "[a-zA-Z0-57-9-/_]+"
    }],
    "eslint(react/display-name)": "off",
    "react-hooks/rules-of-hooks": "warn",
    // The following should be errors !
    "sonarjs/no-identical-expressions": "warn",
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/no-duplicated-branches": "warn",
    "sonarjs/no-small-switch": "warn",
    "sonarjs/no-identical-functions": "warn",
    "sonarjs/no-redundant-jump": "warn"
  },
  overrides: [],
  settings: {
    react: {
      version: "detect"
    }
  }
};
