/*---------------------------------------------------------------------스트림을 이용한 읽기
const fs = require('fs');

// 읽기 전용 스트림 생성
const readStream = fs.createReadStream("./test.txt", {highWaterMark:16});

// 데이터를 저장하기 위한 객체를 생성
const data = [];

// 읽는 동안 발생하는 이벤트를 처리
readStream.on('data',(chunk)=>{
    // 읽는 동안에는 읽어온 데이터를 추가
    data.push(chunk);
});

// 읽기가 끝나면 발생하는 이벤트를 처리
readStream.on('end',(chunk)=>{
    // 지금까지 읽은 내용을 하나로 만듬
    let result = Buffer.concat(data)
    console.log(result.toString());
});

// 에러가 발생하면 발생하는 이벤트를 처리
readStream.on('error',(chunk)=>{
    console.log(error.message)
});
*/
/*---------------------------------------------------------------------용량이 큰 파일을 생성
const fs = require('fs');
const file = fs.createWriteStream('./data.txt');

for(let i=0; i<10000000; i++){
    file.write("용량이 큰 파일 만들기\n");
}

file.end();
*/
/*---------------------------------------------------------------------스트림을 사용하지 않고 읽어서 쓰기
const fs = require('fs');
console.log('복사하기 전 메모리 사용량: ' + process.memoryUsage().rss); // 복사하기 전 메모리 사용량: 26988544

const data1 = fs.readFileSync('./data.txt');
fs.writeFileSync('./nostreamdata.txt', data1);

console.log('복사한 후 메모리 사용량: ' + process.memoryUsage().rss); // 복사한 후 메모리 사용량: 337702912
*/
/*---------------------------------------------------------------------스트림을 사용해서 읽어서 쓰기
const fs = require('fs');
console.log('복사하기 전 메모리 사용량: ' + process.memoryUsage().rss); // 복사하기 전 메모리 사용량: 27082752
// 읽기 스트림과 쓰기 스트림 생성
const readStream = fs.createReadStream("./data.txt");
const writeStream = fs.createWriteStream("./streamdata.txt");
// 읽고 쓰기
readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log('복사한 후 메모리 사용량: ' + process.memoryUsage().rss); // 복사한 후 메모리 사용량: 55058432
});
*/
/*---------------------------------------------------------------------기타함수*/
/*---------------------------------------------------------------------오늘 날짜로 된 디렉토리(20221116)가 없으면 생성*/
// 합쳐서 하나의 문자열 만들기
let today = new Date();
let Y = today.getFullYear().toString();
let M = (today.getMonth()+1).toString();
let D = today.getDate().toString();
let day = Y + M + D

// 디렉토리 존재 여부 확인
const fs = require('fs');
fs.access(day, (error)=>{
    if(error){
        console.log("디렉토리 없음");
        fs.mkdir(day, (error)=>{
            if(error){console.log("디렉토리 만들기 실패")}
            else{console.log("디렉토리 만들기 성공")} 
        })
    }else{
        console.log("디렉토리 존재");
    }
})