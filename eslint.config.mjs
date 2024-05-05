import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
    ignores: [".eslintrc.js"]
  },
);