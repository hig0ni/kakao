/*---------------------------------------------------------------------동기식 파일읽기
// 파일을 읽고 쓸 수 있는 모듈 가져오기
const fs = require('fs');

let data = fs.readFileSync('./test.txt');
// console.log(data.toString());

// Enter 단위로 분할해서 읽기
let ar = data.toString().split("\n");
console.log(ar[1])
*/
/*---------------------------------------------------------------------비동기식 파일읽기
// 비동기식 파일 읽기 - error는 에러의 내용이고 data가 Buffer

// const fs = require('fs');
fs.readFile('./test.txt',(error,data)=>{
    if(error){
        // 에러가 발생했을 때
        console.log(error.message);
    }else{
        // 에러가 발생하지 않았을 때
        console.log(data.toString());
    }
});
console.log("파일 읽기 종료"); // 비동기식인지 확인
*/
/*---------------------------------------------------------------------비동기식 파일읽기 promise 사용*/
const fs = require('fs').promises;
fs.readFile('./test.txt')
    .then((data)=>{console.log(data.toString())})
    .catch((error)=>{console.log(error.message)})