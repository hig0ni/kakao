// 노드에서는 4개의 스레드를 만들어두고 활용
// 노드에서 파일을 비동기적으로 읽거나 암호화를 하게되면 순서대로처리가 안되는 경우가 많다.
const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', ()=>{
    console.log("1: ", Date.now()-start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', ()=>{
    console.log("2: ", Date.now()-start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', ()=>{
    console.log("3: ", Date.now()-start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', ()=>{
    console.log("4: ", Date.now()-start);
})