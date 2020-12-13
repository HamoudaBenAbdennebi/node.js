const fs = require('fs');
const path = require('path');
const folder = process.argv[2]
const ext = '.' + process.argv[3]
fs.readdir(folder,(err,files) => {
    if (err) return console.log(err)
    for(i = 0 ; i < files.length ; i++){
        if(path.extname(files[i]) === ext){
            console.log(files[i])
        }
    }
})