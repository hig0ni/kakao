import MyComponent from './MyComponent';
import StateComponent from './StateComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox'
import React, {Component} from "react";

class App extends Component {
    render(){
        return(
            <div>
                <MyComponent name = {3}>태그 안의 내용</MyComponent>
                <StateComponent/>
                <EventPractice/>
                <ValidationSample/>
                <ScrollBox ref = {ref => {this.Box = ref}}/>
                <button onClick= {(e)=>{this.Box.scrollToBottom()}}>맨 아래로</button>
            </div>    
            )
    } 
}

export default App;