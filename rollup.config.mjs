import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

export default {
    input: 'src/index.jsx',
    output: {
        file: 'dist/index.js',
        format: 'es',
    },
    plugins: [
        postcss({
            inject: false,
            extract: true,
            plugins: [
                autoprefixer,
                postcssPresetEnv({
                    stage: 3,
                    features: {
                        'nesting-rules': true,
                    },
                }),
            ],
        }),
        babel({ babelHelpers: 'runtime' }),
    ],
};
