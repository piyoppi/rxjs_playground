module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {filename: 'dist/js/[name].bundle.js'},
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["transform-async-to-generator", "transform-runtime"],
                        presets: ['env'],
                    }
                }
            },
        ],
        loaders: [
        ]
    },
    node: {
        fs: "empty"
    }
}
