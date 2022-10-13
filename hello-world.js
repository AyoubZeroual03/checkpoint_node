const http = require('http');
const fs = require('fs');
const path = require('path');


const PORT=3000;
const print_H=()=>{
    console.log("hello word");
}

print_H();

http
    .createServer((req,res)=>{
        res.write("<h1>Hello Node!!!!</h1>")
    })
    .listen(PORT);


fs.writeFileSync(path.join(__dirname,"welcome.txt"),"Hello Node")

const logFile=()=>{
    const file =fs.readFileSync("./welcome.txt", "UTF-8");
    console.log(file);
}
logFile();


