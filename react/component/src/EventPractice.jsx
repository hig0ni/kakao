import React, {useState} from 'react';
const EventPractice  = () =>{
    /*
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    */
    
    const [form,setForm] = useState({
        username:'',
        message:''
    })
    
    const {username,message} = form;

    const onChange = (e)=>{
        //form을 복제해서 e.target.name에 해당하는 속성만
        //e.target.value로 수정
        //react에서는 state를 수정할 때 복제해서 수정한다.
        //하나의 항목으로 만들어진 데이터는 바로 수정하면 되지만
        //여러 항목으로 구성된 객체나 배열은 복제해서 수정한다.
        //자바스크립트에서 객체와 배열을 복제한 후 작업하는 방법에
        //대해서 알아두어야 한다.
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        };
        setForm(nextForm);
    }

    //버튼 클릭 이벤트 처리 함수
    const onClick = (e)=>{
        alert(username + ":" + message);
        setForm({
            username:'',
            message:''
        })
    }

    //input에서 enter 쳤을 때 처리를 위한 함수
    const onKeyPress = (e)=>{
        if(e.key==='Enter'){
            onClick();
        }
    }

    return(
        <>
            <input 
                type='text'
                name='username'
                value={username}
                placeholder='이름을 입력하세요'
                onChange={onChange}
                onKeyPress={onKeyPress}/>
                
            <input 
                type='text'
                name='message'
                value={message}
                placeholder='메시지를 입력하세요'
                onChange={onChange}
                onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>  
        </>
    );
}

export default EventPractice;