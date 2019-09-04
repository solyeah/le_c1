var app = require('http')
var route = app.createServer();

route.listen(3000,()=>{
    console.log('Server is starting~!');
})
route.on('connection',(socket)=>{
    var addr = socket.address()
    console.log('웹 클라이언트에 접속하였습니다. %s : %d',addr.address,addr.port)
})
route.on('request',(req,res)=>{
    console.log('요청이 들어왔습니다. ');
    // res.writeHead({"Content-Type":"text/html"});
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>응답페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>서버로 부터 온 응답!</h1>");
    res.write("</body>");
    res.write("</html>");
    
})