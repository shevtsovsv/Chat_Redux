import React from "react";

const Header = (props) => {
    return `Chat ${props.chatId}`;
}
Header.defaultProps = {chatId: 1};
export default Header;

