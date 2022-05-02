const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    output: {
        filename: "index.jsx",
        path: path.resolve(__dirname, 'dist')
    }
}