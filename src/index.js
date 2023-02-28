module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier", "plugin:solid/typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "solid"],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: ["**/tests/**"] }],
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": "off",
    "import/extensions": "off",
    "solid/reactivity": "off"
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }
  }
};
