import React, {useEffect, useState} from "react";
import {Message} from "./Message";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';

const MessageFields = (props) => {

    let [messages, setMessages] = useState( {
        1:{text: "Hello",
        author: "Bot"
    },
        2:{text: "World",
        author: "Bot"
    }})

    let [chat, setChat] = useState({
        1: {title: "Chat1",
            messageList: [1]
        },
        2:{title:"Chat2",
        messageList:[2]
        }
    })

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
    }
    const handleClick=(msg)=>{
        sendMsgFunc(msg);
        // console.log("input " + input, "msg " + msg);
    };

    useEffect(()=>{
        if(messages[Object.keys(messages).length].author === "Me"){
            const messageId1 = Object.keys(messages).length + 1;
            setMessages({...messages,[messageId1]:{
                text: "Bugger off, I am Bot",
                author: "Bot"
            }})
            chat[chatId].messageList.push(messageId1);
        }
        console.log(messages);
    }) ;

    const enterFunc = (event,msg) => {
        if(event.keyCode === 13){
            sendMsgFunc(msg);
        };
    }
    // console.log(props)

    const sendMsgFunc = (msg) => {
        const chatId = props.chatId;
        if(input.length > 0){
            const messageId = Object.keys(messages).length + 1;
            setMessages({...messages,[messageId]:{
                text: msg,
                author: "Me"
            }})
            chat[chatId].messageList.push(messageId);
            document.getElementById("inputText").value = "";
            input = "";

        }
        // const add = {"3":{text: "msg", author: "Me"}};
        // setMessages({...messages,...add})
        // setTimeout(()=>{console.log(messages)},2000);
    }

    const {chatId} = props;

    console.log(chatId);
    console.log(chat[chatId]["messageList"])

    const messageElements = chat[chatId].messageList.map((messageId,index)=>(
    <Message
        key={index}
        text={messages[messageId].text}
        author={messages[messageId].author}/>));

    console.log(messageElements)

    return (
    <div>
        <div>{messageElements}</div>
        <div>{formatedMessageArray2}</div>
            <InputGroup>
                <FormControl aria-describedby="basic-addon1" id="inputText" onChange={handleChange} onKeyUp={(event)=>enterFunc(event,input)}/>
                <Button id="btn" variant="outline-secondary" onClick={(event)=>handleClick(input)}>Send</Button>
            </InputGroup>
    </div>

    )
}

export default MessageFields;