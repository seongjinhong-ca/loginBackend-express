const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry:'./app.js', // starting point of creating a bundle file -> source code of bundle.js
    output: {
        // __dirname : current location (.)
        path:path.resolve(__dirname, 'dist'),// bundle.js location: ./dist/
        filename: 'bundle.js'
    },// transfer: app.js -. bundle.js, bundle.js = all the dependency gather to run app.js
    // location: ./dist/bundle.js

    /*
    ```
    $ webpack app.js // this will create a bundle.js using app.js as a source file
    ```
    or you can do on `package.json` file:
    ```
    "scripts":{
        "build":"webpack"
    }
    ```
    and then
    ```
    $ npm run build
    ```
    */
    module:{
        rules:[
            {
                test:/\.css$/, // what kind of file is it? .css file
                use:[
                    'style-loader', // npm install style-loader --save
                    'css-loader' // npm install css-loader --save
                ]
            }
        ]
    },
    /*
    
     */
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin()
    ],
    mode: 'production' // production mode vs development mode

}