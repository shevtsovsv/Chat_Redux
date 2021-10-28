export const ADD_MESSAGE = '@@addMessage/ADD_MESSAGE';

export const addMessage = (messagesId,text, author) => ({
    type: ADD_MESSAGE,
    messagesId,
    text,
    author,
});