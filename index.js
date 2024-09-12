const fs  = require("fs")

// fs.writeFile("read.txt","this is my async file " , (err)=>{

//     console.log("file is created ")
//     console.log(err)
// })

fs.appendFile("read.txt","and it have ability to handle mutliple taska simultanesulu",(err)=>{
console.log("file is applended")
})

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data)
})
