// 내보낼 데이터 만들기
const foo = Math.PI * Math.SQRT2;

function cube(x){
    return x * x * x;
}

var graph = {
    options:{
        color: "white",
        thickness: "2px solid black"
    },
    draw:function(){
        console.log("Draw Function");
    }
}

export {foo, graph, cube}; // 중괄호로 묶은 것은 이름으로 받기 때문에 순서는 상관 없음
