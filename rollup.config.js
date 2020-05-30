import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const IS_PROD = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      name: 'ReactFancySpinners',
      file: 'dist/bundle.umd.js',
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    IS_PROD && terser(),
  ],
};
