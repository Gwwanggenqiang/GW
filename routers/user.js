const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/register",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd
  var email=req.query.email;
  var gender=req.query.gender;
  var phone=req.query.phone
  var sql = "insert into aili_user values(null,?,?,?,?) "
  pool.query(sql,[uname,upwd,email,gender],(err,result)=>{
    if(err)throw err;
    if( result.affectedRows>0){
      res.send({"code":"1"})
    }else
    res.send({"code":"0"})
  })
})

module.exports=router;

