set names UTF8;
DROP DATABASE IF EXISTS aili;
CREATE DATABASE aili charset UTF8;
use aili;
create table aili_user(
	uid int primary key auto_increment,
	uname varchar(32),
	upwd varchar(16),
	email varchar(32),
	gender boolean
);
insert into aili_user values(NULL,"lucy",123456,"123456@16.com",1);
insert into aili_user values(NULL,"lucy",123456,"123456@16.com",0);
insert into aili_user values(NULL,"lucy",123456,"123456@16.com",1);
insert into aili_user values(NULL,"lucy",123456,"123456@16.com",0);
insert into aili_user values(NULL,"lucy",123456,"123456@16.com",1);


 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 insert into aili_user values(null,"lucy",123456,"123456@16.com",null);
 