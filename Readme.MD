npm init

npm i react react-dom
npm i -D webpack webpack-dev-server webpack-cli
npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-jest
npm i -D babel-eslint babel-loader @babel/core @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @babel/runtime
npm i -D css-loader style-loader file-loader lodash

<!-- The difference between dependencies and devdependencies, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. -->

<!-- React: a javascript library, designed for building user interfaces
React-DOM: a complimentary library to React which glues React to the browser DOM -->

<!-- webpack to work properly
webpack-cli  we need command line interface to work inside our project
webpack-dev-server act as frontend static file server
to bundle all the files in our project prejented in public folder
we are going to serve this public folder by using webpack-dev-server -->

<!-- eslint helps to allow eslint allows in our project
its a linter
it helps to have a standard code not have mess around 
install prettier extension to customize the code order, formatting code -->

<!-- webpack plugins
babel is transpiler  -->


create ./public folder
<!-- this is the where we have to serve project  -->
create ./src folder
create ./webpack.config.js file
<!-- how to bundle the whole file into single file -->
create ./index.js file
create ./.babelrc file



.babelrc
webpack.config.js
index.js
index.html
App.js

change script in package.json

change dev dependencies version
webpack : 4.43.0
webpack-cli : 3.3.11
webpack-dev-server: 3.10.3
style-loader: 2.0.0
css-loader:5.1.1
<!-- npm i -->

npm run build
npm start





