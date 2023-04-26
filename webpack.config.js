const path = require('path') //by default provided by node

module.exports={
    mode: "development",  //type of mode we run development/production
    entry:"./index.js",   
    output:{
        path: path.resolve(__dirname, "public"), //require package path
        filename: "main.js"
    },
    target: "web",
    devServer:{
        // port: "9500",
        contentBase:["./public"],
        open: true //whenever we run the webpack-dev-server directly its gonna open 9500 port 
    },
    resolve: {  //we need to tell the webpack what kind to files it needs to take to build the final output
        extensions:[".js", ".jsx", ".json"]
    },
    module:{    //we need set of rules inside the webpack to tell webpack what to do
        rules:[
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:["babel-loader"]  //what loader should we use to apply these rules
            },
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader']  
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/i,
                use:['file-loader'] 
            },
            
        ]
    }
}