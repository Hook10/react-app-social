const addmessage = 'ADD_MESSAGE';
const updatenewmessagetext = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case addmessage:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case updatenewmessagetext:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: addmessage
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: updatenewmessagetext,
        newMessage: text
    }
}

export default dialogsReducer;
