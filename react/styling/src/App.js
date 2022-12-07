import React from 'react';
import axios from 'axios';

function App() {
    return (
        <div>
            <button onClick={(e)=>{
                /*
                let requset = new XMLHttpRequest();
                //GET 방식으로 요청
                requset.open('GET', 'https://jsonplaceholder.typicode.com/users')
                //POST 방식일 때는 send에 파라미터를 대입
                requset.send('');
                requset.addEventListener('load',()=>{
                    let data = JSON.parse(requset.responseText);
                    //데이터를 가져오는데 성공했을 때
                    console.log(data);
                })
                requset.addEventListener('error',(error)=>{
                    //데이터를 가져오는데 실패했을 때 처리
                    console.log(error);
                })
                */

               /*
               fetch('https://jsonplaceholder.typicode.com/users')
               .then((response)=>response.json())
               .then((data)=>console.log(data))
               .catch((error)=>console.log(error.message))
               */

               axios.get('https://jsonplaceholder.typicode.com/users')
               .then(response => console.log(response.data))
               .catch(error => console.log(error))

            }}>다운로드</button>
        </div>
    );
}

export default App;


const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(createProxyMiddleware('/클라이언트공통URL', {
        target:'서버의 URL',
        changeOrigin:true
    })
    )
}