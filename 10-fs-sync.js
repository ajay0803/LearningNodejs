const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);


//Everytime it will overwrite the file
/* writeFileSync('./content/result-sync.txt',
 `Here is the result ${first},${second}`) */


//to append to existing file we should pass one more parameter `flag:'a'`

writeFileSync('./content/result-sync.txt',
 `Here is the result ${first},${second}`,{flag:'a'})

