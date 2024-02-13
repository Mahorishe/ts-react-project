import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.alias = {
        'entities/User': path.resolve(__dirname, '..', '..', 'src', 'entities', 'User'),
        'entities/Counter': path.resolve(__dirname, '..', '..', 'src', 'entities', 'Counter'),
        'entities/Profile': path.resolve(__dirname, '..', '..', 'src', 'entities', 'Profile'),
        'entities/Currency': path.resolve(__dirname, '..', '..', 'src', 'entities', 'Currency'),
        'entities/Country': path.resolve(__dirname, '..', '..', 'src', 'entities', 'Country'),
    };
    config!.resolve!.extensions!.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));
    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: true,
    }));

    return config;
};
