// var.js 에서 내보낸 내용 가져오기
const {odd, even} = require('./var');

const checkOddOrEven = (num) => {
    if(num%2){
        return odd;
    }else {
        return even;
    }
}
// 이렇게 내보내면 가져올 땐 아무 이름이나 사용해서 받으면 된다.
module.exports = checkOddOrEven;