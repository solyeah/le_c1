// http라이브러리를 활용하여 request하는 방법.
var app = require('http');
var route = app.createServer();
route.listen(8080,()=>{
    console.log('웹 서버가 시작되었습니다. ');
});

//client(여기서는 크롬)가 접속하기 위해서 connection
route.on('connection',(socket)=>{
    var addr =socket.address()
    console.log('웹 클라이언트에 접속하였습니다. %s : %d', addr.address,addr.port);
    //console.log(addr);
});
//client가 요청하기 위해서 request & 그의 응답 response
route.on('request',(request,response)=>{
    console.log('웹 클라이언트에서 요청이 왔습니다.');
    console.log(request);
});
