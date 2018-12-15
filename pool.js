const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	post:3306,
	user:'root',
	passsword:'',
	database:'aili',
	connectionlimit:20
})
module.exports=pool;