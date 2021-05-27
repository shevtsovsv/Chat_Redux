import React from "react";
import {List} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {Link} from "react-router-dom"

const Menu = () => {
    return <div>
        <p><Link to="/Chat1">Chat 1</Link></p>
        <p><Link to="/Chat2">Chat 2</Link></p>
        <p><Link to="/Chat3">Chat 3</Link></p>
    </div>

}

export default Menu;

 Menu.defaultProps = {chatId: 1}