import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";

function App() {

    let [message, setMessage] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message3'}
    ])

    const newMessage = (title: string) => {
        let addMessage = {message: title}
        setMessage([addMessage, ...message])
    }

    const ButtonFoo1 = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }

    const StupidButton = () => {
        console.log('Im Stupid Button')
    }

/// Микротаска UseState
//     let [a, setA] = useState(1)
//
//     const onclickPlusHandler = () => {
//         setA(++a)
//     }
//     const onclickMinusHandler = () => {
//         setA(--a)
//     }
//
//     const onclick0Handler = () =>{
//         setA(a=0)
//     }

    return (
        <div className={"App"}>
            <FullInput newMessage={newMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}

            <Button name='MyYoutubeChanel-1' callback={() => ButtonFoo1('Im Vasya')}/>
            <Button name='MyYoutubeChanel-2' callback={() => ButtonFoo2('Im Petya')}/>
            <Button name='Stupid Button' callback={StupidButton}/>

            //Микротаска UseState
            {/*<h1>{a}</h1>*/}

            {/*<button onClick={onclickPlusHandler}> +++</button>*/}
            {/*<button onClick={onclick0Handler}> 0 </button>*/}
            {/*<button onClick={onclickMinusHandler}> --- </button>*/}


        </div>
    );
}

export default App;
