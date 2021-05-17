import React from "react";
import MessageFields from "./MessageFileds";
import Header from "./Header";
import Menu from "./Menu";
import {Col, Container, Overlay, Row} from "react-bootstrap";
import "./Layout.css"



const Layout = (props) => {

    return (

            <div className="Layout">
                <Row className="Row1">
                    <Col className="Col1">
                        <Header className="header" chatId={props.idNumber}/>
                    </Col>
                </Row>
                <Row className="Row2">
                    <Col className="Col2">
                        <Menu/>
                    </Col>
                    <Col className="Col3" xs={10}>
                        <MessageFields/>
                    </Col>
                </Row>
            </div>


    )
}

export default Layout;

Layout.defaultProps = {chatId: 1};