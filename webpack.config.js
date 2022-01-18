const path = require("path");

module.exports = {
    entry: "./code/index.js",
    output: {
        path: path.join(__dirname, "build"),    //  Folder name
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
            },
        ],
    },
};





//  @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader




// create-react-app react-intro  (all in one)