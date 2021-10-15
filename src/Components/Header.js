import React from "react";
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import connect from "react-redux/es/connect/connect";
const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const Header = (props) => {
    const {chatId, chats} = props;
    console.log(chats);
    return `${chats[chatId].title}`;
}
Header.defaultProps = {chatId: 1};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

