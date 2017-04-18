####restify & orm 初步接触
REST
>(Representational State Transfer表述性状态转移)是一种针对网络应用的设计和开发方式，可以降低开发的复杂性，提高系统的可伸缩性。
>
ORM 
>对象关系映射（英语：(Object Relational Mapping，简称ORM，或O/RM，或O/R mapping），是一种程序技术，用于实现面向对象编程语言里不同类型系统的数据之间的转换。

#####此demo通过orm框架实现程序对象到关系数据库数的的映射，并且初步感受下REST框架。(只罗列核心部分)
1. 安装mysql,restify,orm(框架)
2. **//app.js**

		var restify = require('restify');
		var orm = require("orm");
		
		
		function respond(req, res, next) {
		  
		
		  orm.connect("mysql://root:@127.0.0.1/cxcycf", function (err, db) {
		  if (err) throw err;
		 
		    var Notices = db.define("notices", {
		        id            : Number,
		        noticeTitle   : String,
		        releaseTime   : String, 
		        browseTimes   : Date,
		        noticeText    : String, 
		        noticeSrc     : String 
		    
		    });
		    Notices.find({
		    	browseTimes:req.params.name
		    }, function(err, noticeRec){
		    	console.log(noticeRec);
		    	res.charSet('utf-8');
		    	res.json(noticeRec);
		    });
		});
		}
		
		var server = restify.createServer();
		server.get('/hello/:name', respond);//路由控制
		server.head('/hello/:name', respond);//
		
		server.listen(3900, function() {
		  console.log('%s listening at %s', server.name, server.url);
		});
3. 数据库![Alt text](./1492526668523.png)

#####运行结果
![Alt text](./3LIPTR5PJ@07$]GNY[6`9M.png)

#####总结
一种新的思维方式：REST，通过url来设计系统的结构，每个url都代表一个资源，而整个系统就是由这些资源组成的。需注意对比其与MVC模式。REST把所有用户需求抽象为资源,MVC由数据，视图和控制 器构成，通过Event触发Controller来改变Model和View。