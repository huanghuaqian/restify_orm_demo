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