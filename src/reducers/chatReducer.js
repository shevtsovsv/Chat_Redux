import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";
import  {ADD_MESSAGE} from "../actions/addMessageAction";
import {useState} from "react";

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: []},
    },
    messages:{
        1:{text: "Hello",
            author: "Bot"
        },
        2:{text: "World",
            author: "Bot"
        }
    }
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                            title: store.chats[action.chatId].title,
                            messageList: [...store.chats[action.chatId].messageList, action.messageId]
                        } } },
            });
        }
        case ADD_MESSAGE: {
            // const messagesId = Object.keys(store.messages).length + 1;
            console.log(action.messagesId, action.text, action.author);
            return update(store, {
                messages: { $merge: {
                    [action.messagesId]: {
                        text: action.text,
                        author: action.author
                    }
                }},
            });

        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                        [chatId]: {
                            title: action.title,
                            messageList: []
                        } } },
            });
        }
        default:
            return store;
    }
}

