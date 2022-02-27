//Modules

//Module : Encapsualted Code (Only Share Minimum)
//Node uses CommonJS by default under the hood,
// so evry file is considered as a module by default

const names = require('./4-names')
const sayHi = require('./5-util');

const data = require('./6-alternative-flavour')


require('./7-mind-grenade')
// console.log(data);

/* 
sayHi("Ajay");
sayHi(names.ajay);
sayHi(names.mahee); 
*/