import React from "react";
import styled from "styled-components";
import {orange} from "@material-ui/core/colors";


export const Message = (props) => {

    const Flexxx = styled.div`
      display: flex;
      justify-content: ${props.author === "Me" ? "flex-end" : "flex-start"} ;      
    `

    const Text = styled.div`
      border: solid 1px black;
      border-radius: 90px;
      background-color: ${props.author === "Me" ? "blue" : "orange"} ;
     
      max-width: 70%;
      padding: 20px;
      width: max-content;
      margin: 10px;      
    `

    const Msg = styled.div`
      text-align: center;
      font-size: 20px;
      color:  ${props.author === "Me" ? "white" : "black"};
    `

    const Author = styled.div`
      font-size: 10px;
      padding-left: 20px;
      color:  ${props.author === "Me" ? "white" : "black"};
    `

    return (
        <Flexxx>
            <Text>
                <Msg className="msg">{props.text}</Msg>
                <Author >{props.author}</Author>
            </Text>
        </Flexxx>
    )
}