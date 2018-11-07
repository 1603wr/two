var express = require('express');
const multer = require('multer')
const upload = multer()
var router = express.Router();
const fs = require('fs')
const path = require('path')
let util =require('../util')

/* GET home page. */
router.get('/api', function(req, res, next) {
   let buf = fs.readFileSync(path.join(__dirname,'../config/config.json'))
   res.end(buf)
  });

router.post('/list', upload.single('img'),function(req, res, next) {
  let str=''
  req.on('data',(chunk)=>{
      str+=chunk
   })
  req.on('end',()=>{
    try{
      req.body = JSON.parse(str)
    }catch(err){
      try{
        req.body = querystring(str)
      }catch(err){
        throw err
      }
      }
  })
  if(req.file){
    if(req.body.usernames&&req.body.selects){
      let allnames=req.body.usernames+'-'+req.body.selects
        util(req,allnames)
      }else{
        let allnames=''
        util(req,allnames)
     }
   }
  res.writeHead(200,{
    'content-type':'text/plain;charset=utf8'
  })
  res.end('上传成功')
  });
 
module.exports = router;
