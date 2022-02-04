const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = { 
    _state: {
        profilePage: {
            posts:  [
                { id: 1, message: 'Hi my first post', like: 'Like 142' },
                { id: 2, message: "Hello guys, it's my second post", like: 'Like 32' },
                { id: 3, message: 'Boooobs', like: 'Like 10' },
            ], 
            newPostText: '',
        },
        dialogsPage: {
            dialogs:  [
                { id: 1, name: 'Александр' },
                { id: 2, name: 'Маша' },
                { id: 3, name: 'Паша' },
                { id: 4, name: 'Кирилл' },
                { id: 5, name: 'Дима' },
            ],
            messages: [
                { id: 1, name: 'Я', message: 'Ку кд чд?' },
                { id: 2, name: 'Не я', message: 'Ку да норм а ты кд чд?' },
            ],
            newMessageText: '',
        },
        navBar: [],
    },
    _callSubscriber() {
        console.log('state');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         like: 'Lile 0',
    //     };
    
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
        
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    // addMessage()  {
    //     let newMessage = { 
    //         id: 3,
    //         name: 'Я',
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newe) {
    //     this._state.dialogsPage.newMessageText = newe;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 'Lile 0',
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE){
            let newMessage = { 
                id: 3,
                name: 'Я',
                message: this._state.dialogsPage.newMessageText,
            };
        
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newe;
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE,})

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newe: text})

export default store;