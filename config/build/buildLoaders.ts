import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
    const cssLoader = buildCssLoader(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/, // файлы каких расширений обрабатываем
        use: 'ts-loader', // сам обработчик файлов
        exclude: /node_modules/, // папки или файлы, которые исключаем
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
