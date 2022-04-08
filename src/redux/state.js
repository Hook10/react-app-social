const addpost = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';
const addmessage = 'ADD_MESSAGE';
const updatenewmessagetext = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'This is my first post', likesCount: 0},
            ],
            newPostText: 'it-kama.com'

        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it kama'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: 'it-message'
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
            ]
        }
    },

    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action){
        if(action.type  === addpost) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        if(action.type === updatenewposttext) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        if(action.type === addmessage) {
            let newMessage = {
                id: 6,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        if(action.type === updatenewmessagetext) {
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },

}

export const addPostActionCreator = () =>     {
    return {
        type: addpost
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: updatenewposttext, newText: text
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


export default store;
window.store = store;
