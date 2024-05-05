module.exports = {
  "root": true,
  "ignorePatterns": [".eslintrc.mjs"],
  "overrides": [
    {
      "files": ["src/**/*.ts", "src/**/*.tsx"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "plugins": ["react-refresh"],
      "rules": {
        "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }]
      }
    }
  ]
}

