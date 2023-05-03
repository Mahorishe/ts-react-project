import webpack from "webpack";
export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/, // файлы каких расширений обрабатываем
        use: "ts-loader", // сам обработчик файлов
        exclude: /node_modules/, // папки или файлы, которые исключаем
    };

    return [typescriptLoader];
}
