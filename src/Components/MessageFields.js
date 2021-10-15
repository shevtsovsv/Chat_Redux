import React, {useEffect, useState} from "react";
import {Message} from "./Message";
import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const MessageFields = (props) => {

    const {messages, sendMsgFunc, chats} = props;

    console.log(chats);
    let [input, setInput] = useState("")

    // let formatedMessageArray = messages.map((item,i) => <Message key={i} text={item.text}
    //      author={item.author}></Message>)

    // console.log(messages[0].text)

    let formatedMessageArray2 = [];

    for (let i = 0; i < messages.length; i++){
       formatedMessageArray2.push(<Message
           key={i}
           text={messages[i].text}
           author={messages[i].author}>
       </Message>)
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleClick=(msg)=>{
        sendMsgFunc(msg);
        // console.log("input " + input, "msg " + msg);
        setInput("");
    };

    const enterFunc = (event,msg) => {
        if(event.keyCode === 13){
            sendMsgFunc(msg);
            setInput("");
        };
    }
    // console.log(props)



    const {chatId} = props;

    const messageElements = chats[chatId].messageList.map((messageId,index)=>(
    <Message
        key={index}
        text={messages[messageId].text}
        author={messages[messageId].author}/>));

    return (
    <div>
        <div>{messageElements}</div>
        <div>{formatedMessageArray2}</div>
            <InputGroup>
                <FormControl aria-describedby="basic-addon1" id="inputText" value={input} onChange={handleChange} onKeyUp={(event)=>enterFunc(event,input)}/>
                <Button id="btn" variant="outline-secondary" onClick={(event)=>handleClick(input)}>Send</Button>
            </InputGroup>
    </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageFields);

