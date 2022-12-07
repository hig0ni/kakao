/*import React, {Component} from 'react';

class StateComponent extends Component{
    state = {number:0};

    constructor(props){
        //상위 클래스의 생성자 호출
        super(props);
        //state 생성
        this.state = {number:0}
    }
 
   
    render(){
        return(
            <>
                <p>숫자:{this.state.number}</p>
                <button onClick={(e)=>{
                    this.setState(
                        {number:this.state.number+1},
                        () => {
                            console.log('state의 값이 변경됨');
                            console.log(this.state);
                        }
                    )
                }}>증가</button>
            </>
        )
    }
};

export default StateComponent;*/

import React, {useState} from 'react';

const StateComponent = () => {
    //함수형 컴포넌트에서 state를 생성하는 방법
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');

    //버튼에 연결할 이벤트 처리 함수
    const onClickEnter = (e) => {setMessage('안녕하세요')}
    const onClickLeave = (e) => {setMessage('안녕히 가세요')}

    
    return(
        <>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={()=>setColor('red')}>빨강</button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>초록</button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>파랑</button>
        </>
    )
};

export default StateComponent