
// let posts = [
//     {id: 1, message: 'Hi, how are you?', likesCount: 12},
//     {id: 2, message: 'This is my first post', likesCount: 0},
// ]
//
//
// let dialogsDate = [
//     {id: 1, name: 'Dimych'},
//     {id: 2, name: 'Andrew'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Sasha'},
//     {id: 5, name: 'Viktor'},
//     {id: 6, name: 'Valera'},
// ]

// let messages = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How is your it kama'},
//     {id: 3, message: 'Yo'},
//     {id: 4, message: 'Yo'},
//     {id: 5, message: 'Yo'},
// ]

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'This is my first post', likesCount: 0},
        ],

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
            {id: 5, message: 'Yo'},
        ]
    }



}

export default state;
