import React, {useState, useMemo, useCallback} from 'react';

//배열의 평균을 구해서 리턴해주는 함수

const getAverage = (numbers) => {
    console.log("평균 계산");
    if(numbers.length === 0){
        return 0;
    }
    //reduce는 배열을 순회하면서 연산을 수행한 후 하나의 값을 리턴
    //매개변수는 2개인데 첫번째 매개변수는 수행할 함수이고
    //두번째 매개변수는 연산을 시작할 때의 초기값이다.
    //두번째 매개변수를 생략하면 배열의 첫번째 요소로 설정
    //첫번째 매개변수인 함수는 매개변수를 4개까지 갖는데
    //첫번째는 누적값이고 두번째는 배열의 요소
    //세번째는 배열의 인덱스이고 네번째는 배열

    //ex) [10,20,130,240]
    //10+20=30 30+130=160 160+240=400 리턴
    const sum = numbers.reduce((a,b)=> a+b);
    return sum / numbers.length;
}

const Average = () => {
    //숫자 배열
    const [list,setList] = useState([]);
    //useMemo를 이용해서 getAverage를 호출
    //list에 변화가 생긴 경우만 메서드를 호출하고
    //그 이외의 경우는 결과를 재사용한다.
    const avg = useMemo(()=>getAverage(list),[list])

    //입력받은 내용
    const [number,setNumber] = useState('');
    //input에 내용을 수정할 때 호출 될 메서드
    const onChange = useCallback((e) => {setNumber(e.target.value)},
    [])
    //추가를 눌렀을 때 호출될 메서드
    //이 함수는 number와 list가 변경될 때만 다시 생성
    const onInsert = useCallback((e) =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number,list])

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>추가</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균:</b>{avg}
            </div>
        </div>
    )
}

export default React.memo(Average);