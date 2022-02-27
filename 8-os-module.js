const os = require('os');


//info about current user

const user = os.userInfo();

console.log(`The System Uptime is ${os.uptime()} Seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS)

// console.log(user);
/*
{
  uid: 1000,
  gid: 1000,
  username: 'ajay',
  homedir: '/home/ajay',
  shell: '/bin/bash'
}
*/const os = require('os');


//info about current user

const user = os.userInfo();

console.log(`The System Uptime is ${os.uptime()} Seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS)

// console.log(user);
/*
{
  uid: 1000,
  gid: 1000,
  username: 'ajay',
  homedir: '/home/ajay',
  shell: '/bin/bash'
}
*/