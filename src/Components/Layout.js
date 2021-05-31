import React, {useEffect, useState} from "react";
// import MessageFields from "./MessageFields";
import Header from "./Header";
import Menu from "./Menu";
import {Col, Container, Overlay, Row} from "react-bootstrap";
import "./Layout.css"



const Layout = (props) => {

    const {chatId} = props;

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

    // const sendMsgFunc = (msg) => {
    //     const chatId = props.chatId;
    //     if(input.length > 0){
    //         const messageId = Object.keys(messages).length + 1;
    //         setMessages({...messages,[messageId]:{
    //                 text: msg,
    //                 author: "Me"
    //             }})
    //         chat[chatId].messageList.push(messageId);
    //         document.getElementById("inputText").value = "";
    //         input = "";
    //
    //     }
    //     // const add = {"3":{text: "msg", author: "Me"}};
    //     // setMessages({...messages,...add})
    //     // setTimeout(()=>{console.log(messages)},2000);
    // }

    const addChat = (inputText) => {
        const chatIndex = Object.keys(chat).length +1;
        const add = {[chatIndex]:{title: inputText, messageList: []}}
        setChat({...chat,...add});
    }



    return (

            <div className="Layout">
                <Row className="Row1">
                    <Col className="Col1">
                        <Header className="header" chatId={props.chatId}/>
                    </Col>
                </Row>
                <Row className="Row2">
                    <Col className="Col2">
                        <Menu chats={chat} addChat={addChat}/>
                    </Col>
                    <Col className="Col3" xs={10}>
                        {/*<MessageFields chatId={props.chatId}/>*/}
                    </Col>
                </Row>
            </div>


    )
}

export default Layout;

Layout.defaultProps = {chatId: 1};