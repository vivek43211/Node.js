const os = require("os")
// os is build in module 
console.log(os.freemem()); // Returns the amount of free system memory in bytes as an integer.
console.log(os.homedir()); //Returns the string path of the current user's home directory.
console.log(os.hostname()); //Returns the host name of the operating system as a string.
console.log(os.loadavg()); //Returns an array containing the 1, 5, and 15 minute load averages.
console.log(os.networkInterfaces()); //Returns an object containing network interfaces that have been assigned a network address.
console.log(os.totalmem()) //Returns the total amount of system memory in bytes as an integer.
console.log(os.uptime()) //Returns the system uptime in number of seconds.
console.log(os.userInfo()) 
console.log(os.version()) //Returns a string identifying the kernel version.