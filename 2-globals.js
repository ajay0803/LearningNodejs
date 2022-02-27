//GLOBALS NO WINDOW OBJECT IN NODE


/**
 *  somw of the global variables are :
 * __dirname : path to current direcory
 * __filename : filename
 * module : info about current module(file)
 * require : function to use modules(CommonJS)
 * process : info about env where the program is being executed
 * 
 */

console.log(__dirname);     ///home/ajay/Workspace/Node
console.log(__filename);    ///home/ajay/Workspace/Node/app.js

setInterval(() => {
    console.log("Hello Worls");
},1000)