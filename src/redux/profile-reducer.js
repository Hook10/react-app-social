const addpost = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case addpost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case updatenewposttext:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
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

export default profileReducer;
