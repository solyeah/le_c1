var http = require('http'); //파일이던 라이브러리던 끌고옴. node_modules폴더나 현재 디렉토리에서.

//console.log(http);

var server = http.createServer();
//createServer()한 객체를 server로 받는다.

//server.listen(); //127.0.0.1:3000
var port = 3000;
server.listen(port,function(){
    console.log("Server is started : %d",port)
});
