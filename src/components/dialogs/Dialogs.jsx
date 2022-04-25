import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./dialogitem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>   {
       // props.dispatch(sendMessageCreator())
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
