const express=require('express');
const pool=require('./pool.js');
const bodyParser=require('body-parser');
//引入路由
const users=require("./routers/user")
var app = express();
app.listen(3000,()=>{
	console.log("服务器创建成功！")
});
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
	extendd:false
}))

app.post("/aili",(req,res)=>{
	//console.log(req.body);
	res.send("注册成功"+req.body.uname)
})
//登录
app.post("/login",(req,res)=>{
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var sql = " SELECT * FROM aili_user WHERE uname=? AND upwd = ?";
  pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.RowDataPacket==0){
          res.send({code:-1,msg:"用户名或密码有误！"});
        }else{
          res.send({code:1,msg:"登录成功"});
        }
  	})
})
//挂载路由
app.use('/users',users);
