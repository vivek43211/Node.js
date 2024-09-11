const fs =  require("fs");
//creating a file
//fs.writeFileSync("read.txt","welcome to my tutrial")
//fs.writeFileSync("read.txt","hey , welcome to my tutrial")
    
// append a file
//fs.appendFileSync("read.txt","how are you, you look great today");

//read from file
const buf_data = fs.readFileSync("read.txt")
//console.log(buf_data)
//<Buffer 68 65 79 20 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 74 75 74 72 69 61 6c 68 6f 77 20 61 72 65 20 79 6f 75 2c 20 79 6f 75 20 6c 6f 6f 6b 20 67 ... 80 more bytes>
// this addtinal data type called buffer .use to store the inary data

//to sting convert the buffer data into string from
const org_data = buf_data.toString()
//console.log(org_data)

// to rename the file
fs.renameSync("read.txt","readwrite.txt")
