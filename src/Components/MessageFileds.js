import React, {useEffect, useState} from "react";
import {Message} from "./Message";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';

const MessageFields = () => {

    let [messages, setMessages] = useState([{
        text: "Hello",
        author: "Bot"
    },{
        text: "World",
        author: "Bot"
    }])

    let [input, setInput] = useState("")

    // let formatedMessageArray = messages.map((item,i) => <Message key={i} text={item.text}
    //      author={item.author}></Message>)

    // console.log(messages[0].text)

    let formatedMessageArray2 = [];

    for (let i = 0; i < messages.length; i++){
       formatedMessageArray2.push(<Message key={i} text={messages[i].text} author={messages[i].author}></Message>)
    }

    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(event.target.value);
    }

    const handleClick=(msg)=>{
        setMessages([...messages,{
            text: msg,
            author: "Me"
        }]);
        document.getElementById("inputText").value = "";
    };

    useEffect(()=>{
        if(messages[messages.length -1].author === "Me"){
            setMessages([...messages,{
                text: "Bugger off, I am Bot",
                author: "Bot"
            }])
        }
    }) ;

    const enterFunc = (event,msg) => {
        if(event.keyCode === 13){
            setMessages([...messages,{
                text: msg,
                author: "Me"
            }])
            document.getElementById("inputText").value = "";
        };
    }

    return (
    <div>
        <div>{formatedMessageArray2}</div>
            <InputGroup>
                <FormControl aria-describedby="basic-addon1" id="inputText" onChange={handleChange} onKeyUp={(event)=>enterFunc(event,input)}/>
                <Button id="btn" variant="outline-secondary" onClick={(event)=>handleClick(input)}>Send</Button>
            </InputGroup>
        <p><Link className="blablabla" role="button" to="/UserOutput">UserOutput</Link></p>
    </div>

    )
}

export default MessageFields;