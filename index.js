const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx'];

module.exports = {
  plugins: ['import'],
  extends: ['plugin:@typescript-eslint/recommended', '@react-native-community'],
  settings: {
    'import/extensions': allExtensions,
  },
  rules: {
    'max-len': ['error', 120],
  },
};
