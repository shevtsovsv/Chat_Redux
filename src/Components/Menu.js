import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { FormControl, InputGroup} from 'react-bootstrap';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { addChat } from '../actions/chatActions';

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

const Menu = (props) => {

    const [input, setInput] = useState("");

    const {chats, addChat} = props;

    let text1;

    const chatElements = Object.keys(chats).map(chatId => (
        <p key={chatId}><Link to={`/Chat/${chatId}`}>
       {chats[chatId].title}
        </Link></p>

    ))

    const enterFunc = (event) => {
        if(event.keyCode == 13){
           addChat(input)
            console.log(input)
           setInput("")
            console.log(input)
            event.target.value = "";
        }
    }
    const handleClick=(text)=>{
        addChat(text);
        // console.log("input " + input, "msg " + msg);
        setInput("");
        // text1.value="";
    };

    useEffect(()=>{
        text1 = document.querySelector(".inputText");
        console.log(text1);
    });


    return <>
        {chatElements}
        <div>
            <InputGroup>
            <FormControl type="text" placeholder="enter name" className="inputText"
                   onChange={(event)=>setInput(event.target.value)}
                   onKeyUp={(event)=>enterFunc(event)}
                    value={input}/>
            <input type="button" value="Create" onClick={()=>{handleClick(input)}}/>
            </InputGroup>
        </div>
    </>

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

 Menu.defaultProps = {chatId: 1}