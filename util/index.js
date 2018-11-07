const fs = require('fs')
const path = require('path')
module.exports =(req,allnames)=>{
        let exnames=path.extname(req.file.originalname)
        let newpath = path.join(__dirname,'../','/public/imgs/')
        let newpath1 = path.join(__dirname,'../','/public/texts/')
        let newpath2 = path.join(__dirname,'../','/public/ppts/')
        switch(exnames){
          case '.txt':fs.writeFileSync(`${newpath1}/`+allnames+req.file.originalname,req.file.buffer)
          break;
          case '.jpg':fs.writeFileSync(`${newpath}/`+allnames+req.file.originalname,req.file.buffer)
          break;
          case '.ppt':fs.writeFileSync(`${newpath2}/`+allnames+req.file.originalname,req.file.buffer)
          break;
        }
}