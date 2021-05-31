import React, {useState} from "react";
import {List} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {Link} from "react-router-dom"

const Menu = (props) => {

    const [input, setInput] = useState("");

    console.log(input);

    console.log(props)

    const {chats, addChat} = props;

    console.log(chats)

    const chatElements = Object.keys(chats).map(chatId => (
        <p key={chatId}><Link to={`/Chat/${chatId}`}>
       {chats[chatId].title}
        </Link></p>

    ))

    const enterFunc = (event) => {
        if(event.keyCode == 13){
           addChat(input)
        }
    }


    return <div>
        {chatElements}
        <p>
            <input type="text" placeholder="enter chat name"
                   onChange={(event)=>setInput(event.target.value)}
                   onKeyUp={(event)=>enterFunc(event)}/>
            <input type="button" value="create" onClick={()=>{addChat(input)}}/>
        </p>

    </div>

}

export default Menu;

 Menu.defaultProps = {chatId: 1}