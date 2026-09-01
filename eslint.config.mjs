import baseConfig from '@wirenboard/eslint';
import vueConfig from '@wirenboard/eslint/vue';

const customIgnores = [
  'dist',
];

const getCustomBaseConfig = (cfg) => {
  const { rules, ignores, ...rest } = cfg.at(0);

  return [
    {
      ...rest,
      rules: { ...rules, 'no-undef': 0 },
      ignores: ignores ? [...ignores, ...customIgnores] : customIgnores,
      files: [
        '**/*.js',
        '**/*.mjs',
        '**/*.ts',
        '**/*.tsx',
      ],
    },
  ];
};

const getCustomConfig = (cfg) => {
  const { rules, ignores, ...rest } = cfg.at(0);

  return [
    {
      ...rest,
      rules: { ...rules, 'no-undef': 0 },
      ignores: ignores ? [...ignores, ...customIgnores] : customIgnores,
    },
  ];
};

export default [
  ...getCustomBaseConfig(baseConfig),
  ...getCustomConfig(vueConfig),
];
