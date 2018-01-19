const path = require('path');

module.exports = {
    entry: __dirname + "/src/js/index1.js", //ビルドするファイル
    output: {
        path: __dirname + "/src/js",
        filename: 'bundle.js' //ビルドした後のファイル名
    },
    module: {
        loaders: [
            //loader
      ]
    }
};
