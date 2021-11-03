import { addMessage, ADD_MESSAGE } from "../actions/addMessageAction";
import { sendMessage, SEND_MESSAGE } from "../actions/messageActions";

const func = store => next => (action) => {
    console.log(Object.keys(store.getState().chatReducer.chats).length)
   switch (action.type) {
        case ADD_MESSAGE:
           if (action.author === 'Me') {
               console.log('Надо ответить')     
                store.dispatch(addMessage(Object.keys(store.getState().chatReducer.messages).length + 1,'bot','Не приставай ко мне, я робот!'))
                store.dispatch(sendMessage(Object.keys(store.getState().chatReducer.messages).length,Object.keys(store.getState().chatReducer.chats).length))
            }
           break
        default:
               
   }
   return next(action)
}

export default func
