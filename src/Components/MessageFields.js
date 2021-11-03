import React, {useEffect, useState} from "react";
import {Message} from "./Message";
import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import connect from "react-redux/es/connect/connect";
import {addMessage} from "../actions/addMessageAction";
import {sendMessage} from "../actions/messageActions";



    const mapStateToProps = ({ chatReducer }) => ({
        chats: chatReducer.chats,
        messages: chatReducer.messages,
    });

    const mapDispatchToProps = dispatch => bindActionCreators({addMessage, sendMessage}, dispatch);

    const MessageFields = (props) => {

    const {messages, sendMessage, addMessage, chats, chatId} = props;

    let [input, setInput] = useState("")

    // useEffect(()=>{
    //     fetch('https://shevtsovsv.github.io/online-api/messages.json'
    //    ).then(body => body.json()).then(json => {console.log(json)
    //                 json.forEach(msg => {
    //                     props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId);
    //             })

    //         })
    //    }, []
    // ) ;
    

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
        const messageId = Object.keys(messages).length+1 
        addMessage(messageId, msg, "Me");
        // console.log("input " + input, "msg " + msg);
        setInput("");
        sendMessage(messageId,chatId)
    };

    const enterFunc = (event,msg) => {
        if(event.keyCode === 13){
            addMessage(msg);
            setInput("");
        };
    }
    // console.log(props)

    const messageElements = chats[chatId].messageList.map((messageId,index)=>(
    <Message
        key={index}
        text={messages[messageId].text}
        author={messages[messageId].author}
    />
    ));

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

