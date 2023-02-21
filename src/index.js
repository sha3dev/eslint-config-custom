module.exports = {
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  plugins: ["prettier", "eslint-plugin-tsdoc"],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/tests/**"] }
    ],
    "import/extensions": ["error", "ignorePackages", { "": "never" }]
  },
  parserOptions: {
    project: "./tsconfig.json"
  }
};
