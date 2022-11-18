// 모듈 가져오기 
// const http = require('http');

// 서버 생성
// 포트번호는 일반적으로 1024번까지는 예약되어 있으므로 사용하지 않음
// 1521번, 3306번, 27017번은 데이터베이스 사용
// 8080번은 톰캣 같은 WebContainer가 사용
// 80을 사용하게 되면 http의 경우 포트번호 생략 가능
// 443을 사용하게 되면 https의 경우 포트번호 생략 가능
/*
http.createServer((request, response)=>{
    // 응답 생성
    response.writeHead(200, 
        {'Content-Type':'text/html;charset=utf-8'});
    response.write('<h1>처음 만든 웹 서버</h1>');
    response.end('<p>http 모듈 사용</p>');
}).listen(9000, ()=>{
    console.log('9000 번 포트에서 서버 대기 중')
});
*/
// 서버 중지는 터미널에서 ctrl+c 인데 안되면 메시지 확인
const http = require('http');
const fs = require('fs').promises;
http.createServer(async(request, response)=>{
   try{
    // 파일의 내용을 읽어서 data에 저장
    // 다음 명령은 이 명령이 끝나고 나면 수행
    const data = await fs.readFile('./index.html');
    // 200이면 성공
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    response.end(data);
   }catch(error){
    response.writeHead(500, {'Content-Type':'text/html;charset=utf-8'});
    response.end(error.message);
   }
}).listen(8000, ()=>{
    console.log('8000 번 포트에서 서버 대기 중')
});