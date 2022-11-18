/*--------------------------------------------------------------------- 웹 서버 만들기*/
// 웹 서버 구축을 위한 외부 모듈
const express = require('express'); 
// 현재 디렉토리에 대한 절대 경로를 알아내기 위한 내장 모듈
const path = require('path');
// 일 단위 로그 기록을 위한 설정
const morgan = require('morgan');
const FileStreamRotator = require('file-stream-rotator');
// 내장 모듈
const fs = require('fs');
/*--------------------------------------------------------------------- 로그*/
// 로그 파일을 저장할 디렉토리 생성
const logDirectory = path.join(__dirname, 'log');
// 디렉토리 존재 여부를 확인하고 디렉토리가 없으면 생성
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// 일 단위 로그 기록 설정
const accessLogStream = FileStreamRotator.getStream({
    date_format:'YYYYMMDD',
    filename:path.join(logDirectory, 'access-%DATE%.log'),
    frequency:'daily',
    verbose:true
})

/*--------------------------------------------------------------------- 서버*/
// 서버를 준비
const app = express(); // 웹서버 인스턴스 생성
app.set('port', 3000); // 포트 설정

app.use(morgan('combined',{stream:accessLogStream}));

// 사용자의 요청 처리 
// /는 포트번호까지의 요청
app.get('/', (req,res)=>{
    // 현재 디렉토리에 있는 main.html을 출력
    res.sendFile(path.join(__dirname, '/main.html'));
})

// 서버를 구동
app.listen(app.get('port'), () => {
    // 서버가 정상적으로 구동되었을 때 수행할 내용
    // 일반적으로는 콘솔에 메시지를 출력
    console.log(app.get('port'), '번 포트에서 대기 중');
});