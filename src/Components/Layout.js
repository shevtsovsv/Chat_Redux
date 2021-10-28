import React, {useEffect, useState} from "react";
import MessageFields from "./MessageFields";
import Header from "./Header";
import Menu from "./Menu";
import {Col, Container, Overlay, Row} from "react-bootstrap";
import "./Layout.css"
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { sendMessage } from "../actions/messageActions";
import { addMessage} from "../actions/addMessageAction";

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    messages: chatReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, addMessage }, dispatch);

const Layout = (props) => {

    const {chatId, sendMessage, chats, addMessage, messages} = props;

    // let [messages, setMessages] = useState( {
    //     1:{text: "Hello",
    //         author: "Bot"
    //     },
    //     2:{text: "World",
    //         author: "Bot"
    //     }})

    useEffect(()=>{
        if(messages[Object.keys(messages).length].author === "Me"){
            console.log("mememe")
            const messageId1 = Object.keys(messages).length + 1;
            addMessage(messageId1, "Bugger off, I am Bot","Bot")
            chats[chatId].messageList.push(messageId1);
        }
    }) ;

    // const sendMsgFunc = (msg,author) => {
    //     if(msg.length>0){
    //         const chatId = props.chatId;
    //         const messageId = Object.keys(messages).length + 1;
    //         setMessages({...messages,[messageId]:{
    //                 text: msg,
    //                 author: "Me"
    //             }})
    //         sendMessage(messageId,msg,author,chatId)
    //     }
    // }

    // const addChat = (inputText) => {
    //     const chatIndex = Object.keys(chat).length +1;
    //     const add = {[chatIndex]:
    //             {title: inputText,
    //             messageList: [1]}}
    //     setChat({...chat,...add});
    // }

    const inputFunc = (text) => {
        if(text.length){
            return true;
        } else {
            return false;
        }

    }



    return (

            <div className="Layout">
                <Row className="Row1">
                    <Col className="Col1">
                        <Header className="header" chatId={chatId} />
                    </Col>
                </Row>
                <Row className="Row2">
                    <Col className="Col2">
                        <Menu/>
                    </Col>
                    <Col className="Col3" xs={9}>
                        <MessageFields chatId={props.chatId} />
                    </Col>
                </Row>
            </div>


    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

Layout.defaultProps = {chatId: 1};