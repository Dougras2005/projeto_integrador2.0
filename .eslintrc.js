module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false, // permite rodar sem precisar de .babelrc
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
