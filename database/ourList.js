// _id SERIALKEY  //DEFAULT
// {technology VARCHAR //string
//  dependencies text [] //text array
//  docs text [] //text array
//  notes text [] // text arr

const ourList = [
    {
        technology: 'Webpack',
        dependencies: ['webpack', 'webpack-cli'],
        docs: ['https://www.npmjs.com/package/webpack', 'https://www.npmjs.com/package/webpack-cli'],
        notes: ['Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included. Webpack takes modules with dependencies and generates static assets representing those modules.']
    },
    {
        technology: 'Node',
        dependencies: [''],
        docs: ['https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew'],
        notes: ['Dont have node? May we suggest installing Homebrew and using it to install node?']
    },
    {
        technology: 'Express',
        dependencies: ['express'],
        docs: ['https://www.npmjs.com/package/express'],
        notes: ['Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.']
    },
    {
        technology: 'Nodemon',
        dependencies: ['nodemon'],
        docs: ['https://www.npmjs.com/package/nodemon'],
        notes: ['nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.']
    },
    {
        technology: 'Request',
        dependencies: ['request'],
        docs: ['https://www.npmjs.com/package/request'],
        notes: ['Allows for server requests']
    },
    {
        technology: 'Body-Parser',
        dependencies: ['body-parser'],
        docs: ['https://www.npmjs.com/package/request'],
        notes: ['Needed for post requests']
    },
    {
        technology: 'node-postgres',
        dependencies: ['pg'],
        docs: ['https://node-postgres.com/'],
        notes: ['This is needed to interact with your PostgreSQL database.']
    },
    {
        technology: 'Mongo',
        dependencies: ['mongodb'],
        docs: ['https://www.npmjs.com/package/mongodb'],
        notes: ['MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.']
    },
    {
        technology: 'Mongoose',
        dependencies: ['mongoose'],
        docs: ['https://www.npmjs.com/package/mongoose'],
        notes: ['Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.']
    },
    {
        technology: 'Babel',

        dependencies: ['@babel/core', 'babel-loader', '@babel/preset-env'],

        docs: ['https://www.npmjs.com/package/@babel/core, https://github.com/babel/babel-loader, https://www.npmjs.com/package/@babel/preset-env'],
        notes: ['Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Babel-loader allows for transpiling Javascript files using Babel and webpack. @babel/preset-env is a preset that allows for the latest JavaScript to be used in your application.']
    },
    {
        technology: 'React',

        dependencies: ['@babel/preset-react', 'react', 'prop-types'],

        docs: ['https://www.npmjs.com/package/@babel/preset-react, https://www.npmjs.com/package/react, https://www.npmjs.com/package/prop-types'],
        notes: ['React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces.']
    },
    {
        technology: 'CSS',

        dependencies: ['style-loader', 'css-loader'],

        docs: ['https://www.npmjs.com/package/style-loader, https://github.com/webpack-contrib/css-loader'],
        notes: ['These loaders load, parse, and transform CSS files.']
    },
    {
        technology: 'Redux',

        dependencies: ['react-redux', 'react-dom', 'redux', 'redux-devtools-extension', 'redux-thunk'],
        docs: ['https://www.npmjs.com/package/react-redux, https://www.npmjs.com/package/react-dom, https://www.npmjs.com/package/redux, https://www.npmjs.com/package/redux-devtools-extension, https://www.npmjs.com/package/redux-thunk'],
        notes: ['Redux is a predictable state container for JavaScript apps. Redux makes it easy to manage the state of your application.']
    },

]

module.exports = ourList;







