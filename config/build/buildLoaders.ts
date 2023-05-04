import webpack from "webpack";
export function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/, // файлы каких расширений обрабатываем
        use: "ts-loader", // сам обработчик файлов
        exclude: /node_modules/, // папки или файлы, которые исключаем
    };

    return [typescriptLoader, cssLoader];
}
