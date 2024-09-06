const { isUtf8 } = require("buffer");
const { error } = require("console");
const fs = require("fs");

// fs.readFile('file.txt','utf-8',(err,data)=>{
//     console.log(err , data)
// })
// const a = fs.readFileSync('file.txt')
// console.log(a)
// console.log(a.toString())
//  console.log("fineshed reading the file")

//  fs.writeFile('file2.txt',"this is data for file 2" ,()=>{
//     console.log("written to file")
//  })

const b = fs.writeFileSync('file2.txt',"this is data ")
console.log(b)
 console.log("fineshed reading the file")