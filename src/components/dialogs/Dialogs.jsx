import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./dialogitem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () =>   {
       props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.messagesPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
