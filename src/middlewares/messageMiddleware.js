import { addMessage, ADD_MESSAGE } from "../actions/addMessageAction";
import { sendMessage } from "../actions/messageActions";

const func = store => next => (action) => {
    // console.log(Object.keys(store.getState().chatReducer.chats).length)
    // console.log(action.chatId)
   switch (action.type) {
        case ADD_MESSAGE:
           if (action.author === 'Me') {
               console.log('Надо ответить')     
                let msgId=Object.keys(store.getState().chatReducer.messages).length + 2
                console.log(msgId)
                store.dispatch(addMessage(msgId,'Не приставай ко мне, я робот!','Bot',action.chatId))
                store.dispatch(sendMessage(msgId,action.chatId))
            }
           break
        default:
               
   }
   return next(action)
}

export default func
