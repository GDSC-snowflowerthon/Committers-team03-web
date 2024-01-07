module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    // @react-three/fiber 관련 파일에 대한 규칙 예외 처리 추가
    {
      files: [
        'src/components/SnowmanScene/*.tsx',
        'src/components/Snowman/*.tsx',
        'src/components/CustomOrbitControls/*.tsx',
      ], // 예외 처리를 적용할 파일 경로
      rules: {
        'react/no-unknown-property': 'off', // 해당 파일에서 이 규칙 비활성화
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', {ignore: ['attach']}], // 다른 파일에는 'attach' 속성에 대한 예외 처리
  },
};
