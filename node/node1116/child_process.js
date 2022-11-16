/*---------------------------------------------------------------------windows 확인 코드
const os = require('os');

let position = os.type().toLocaleLowerCase().indexOf("windows")
if(position>=0){
    console.log("windows");
}else{
    console.log("windows 아님");
}
*/
/*---------------------------------------------------------------------dir 명령
// 다른 프로세스를 실행할 수 있는 모듈을 가져오기
const exec = require('child_process').exec;

// 프로세스 준비
// 윈도우즈에서는 dir이 디렉토리의 목록을 확인하는 것이고
// 나머지에서는 ls
let process = exec('dir');
	
// 프로세스가 정상적으로 수행되면
process.stdout.on('data', (data)=>{
	console.log(data.toString());
})

// 프로세스가 정상적으로 수행되지 않으면
process.stderr.on('data', (data)=>{
	console.log(data.toString());
})
*/
/*------------------------------------------------------위 2개를 조합해서 windows일 때는 dir 명령을 그렇지 않은 경우엔 ls 명령을 수행하도록 작성*/
const os = require('os');
const exec = require('child_process').exec;

let position = os.type().toLocaleLowerCase().indexOf("windows")
if(position >=0 ){
    let process = exec('dir');
    process.stdout.on('data', (data)=>{
        console.log(data.toString());
    })
    process.stderr.on('data', (data)=>{
        console.log(data.toString());
    })
}else{
    let process = exec('ls');
    process.stdout.on('data', (data)=>{
        console.log(data.toString());
    })
    process.stderr.on('data', (data)=>{
        console.log(data.toString());
    })
}
