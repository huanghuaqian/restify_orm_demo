####restify & orm �����Ӵ�
REST
>(Representational State Transfer������״̬ת��)��һ���������Ӧ�õ���ƺͿ�����ʽ�����Խ��Ϳ����ĸ����ԣ����ϵͳ�Ŀ������ԡ�
>
ORM 
>�����ϵӳ�䣨Ӣ�(Object Relational Mapping�����ORM����O/RM����O/R mapping������һ�ֳ�����������ʵ����������������ﲻͬ����ϵͳ������֮���ת����

#####��demoͨ��orm���ʵ�ֳ�����󵽹�ϵ���ݿ����ĵ�ӳ�䣬���ҳ���������REST��ܡ�(ֻ���к��Ĳ���)
1. ��װmysql,restify,orm(���)
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
		server.get('/hello/:name', respond);//·�ɿ���
		server.head('/hello/:name', respond);//
		
		server.listen(3900, function() {
		  console.log('%s listening at %s', server.name, server.url);
		});
3. ���ݿ�![Alt text](./1492526668523.png)

#####���н��
![Alt text](./3LIPTR5PJ@07$]GNY[6`9M.png)

#####�ܽ�
һ���µ�˼ά��ʽ��REST��ͨ��url�����ϵͳ�Ľṹ��ÿ��url������һ����Դ��������ϵͳ��������Щ��Դ��ɵġ���ע��Ա�����MVCģʽ��REST�������û��������Ϊ��Դ,MVC�����ݣ���ͼ�Ϳ��� �����ɣ�ͨ��Event����Controller���ı�Model��View��