module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "turbo", "prettier"],
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
    ]
  },
  parserOptions: {
    project: "./tsconfig.json"
  }
};
