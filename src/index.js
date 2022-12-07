module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "turbo", "prettier"],
  plugins: ["prettier", "eslint-plugin-tsdoc"],
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
