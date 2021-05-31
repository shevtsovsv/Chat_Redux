// import React, {useEffect, useState} from "react";
// import {Message} from "./Message";
// import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// import {Button, Container, FormControl, InputGroup} from 'react-bootstrap';
//
// const MessageFields = (props) => {
//
//
//
//     let [input, setInput] = useState("")
//
//     // let formatedMessageArray = messages.map((item,i) => <Message key={i} text={item.text}
//     //      author={item.author}></Message>)
//
//     // console.log(messages[0].text)
//
//     let formatedMessageArray2 = [];
//
//     for (let i = 0; i < messages.length; i++){
//        formatedMessageArray2.push(<Message key={i} text={messages[i].text} author={messages[i].author}></Message>)
//     }
//
//     const handleChange = (event) => {
//         setInput(event.target.value);
//     }
//     const handleClick=(msg)=>{
//         sendMsgFunc(msg);
//         // console.log("input " + input, "msg " + msg);
//     };
//
//
//
//     const enterFunc = (event,msg) => {
//         if(event.keyCode === 13){
//             sendMsgFunc(msg);
//         };
//     }
//     // console.log(props)
//
//
//
//     const {chatId} = props;
//
//     console.log(chatId);
//     console.log(chat[chatId]["messageList"])
//
//     const messageElements = chat[chatId].messageList.map((messageId,index)=>(
//     <Message
//         key={index}
//         text={messages[messageId].text}
//         author={messages[messageId].author}/>));
//
//     console.log(messageElements)
//
//     return (
//     <div>
//         <div>{messageElements}</div>
//         <div>{formatedMessageArray2}</div>
//             <InputGroup>
//                 <FormControl aria-describedby="basic-addon1" id="inputText" onChange={handleChange} onKeyUp={(event)=>enterFunc(event,input)}/>
//                 <Button id="btn" variant="outline-secondary" onClick={(event)=>handleClick(input)}>Send</Button>
//             </InputGroup>
//     </div>
//
//     )
// }
//
// export default MessageFields;