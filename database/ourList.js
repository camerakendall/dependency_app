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
    },
    {
        technology: 'Node',
        dependencies: [''],
        docs: ['https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew'],
        notes: ['Don\'t have node? May we suggest installing Homebrew and using it to install node?']
    },
    {
        technology: 'Express',
        dependencies: ['express'],
        docs: ['https://www.npmjs.com/package/express'],
        notes: ['']
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
        notes: ['']
    },
    {
        technology: 'Mongoose',
        dependencies: ['mongoose'],
        docs: ['https://www.npmjs.com/package/mongoose'],
        notes: ['']
    },
    {
        technology: 'Babel',
        dependencies: ['@babel/core, babel-loader, @babel/preset-env'],
        docs: ['https://www.npmjs.com/package/@babel/core, https://github.com/babel/babel-loader, https://www.npmjs.com/package/@babel/preset-env'],
        notes: ['']
    },
    {
        technology: 'React',
        dependencies: ['@babel/preset-react, react,prop-types'],
        docs: ['https://www.npmjs.com/package/@babel/preset-react, https://www.npmjs.com/package/react, https://www.npmjs.com/package/prop-types'],
        notes: ['']
    },
    {
        technology: 'CSS',
        dependencies: ['style-loader, css-loader'],
        docs: ['https://www.npmjs.com/package/style-loader, https://github.com/webpack-contrib/css-loader'],
        notes: ['']
    },
    {
        technology: 'Redux',
        dependencies: ['react-redux, react-dom, redux, redux-devtool-extensions, redux-thunk'],
        docs: ['https://www.npmjs.com/package/react-redux, https://www.npmjs.com/package/react-dom, https://www.npmjs.com/package/redux, https://www.npmjs.com/package/redux-devtools-extension, https://www.npmjs.com/package/redux-thunk'],
        notes: ['']
    },
]

// export default ourList;
module.exports = ourList;







