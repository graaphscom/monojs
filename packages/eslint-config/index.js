"use strict";
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/all",
    "plugin:react/all",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      extends: ["plugin:jest/all", "plugin:testing-library/react"],
      files: ["**/*.test.ts?(x)"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "import"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["PascalCase", "camelCase"],
        selector: "function",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        variables: false,
      },
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "id-length": "off",
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],
    "no-underscore-dangle": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "sort-imports": "off",
  },
};
