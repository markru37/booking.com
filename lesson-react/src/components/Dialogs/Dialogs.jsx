import classes from './Dialogs.module.css';
import Navigation from '../Navigation/Navigation';
import PeopleItem from './PeopleItem/PeopleItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <PeopleItem name={dialog.name} id={dialog.id} />);

    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} name={message.name} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>
            < Navigation />
            <div className={classes.dialog_people}>
                <div className={classes.dialog_people_list}>
                    {dialogsElements}
                </div>
                <div className={classes.dialog}>
                    <div className={classes.me}>
                        {messageElements}
                    </div>
                    <div className={classes.dialog__add__message, classes.add__message}>
                        <form action="">
                            <textarea  onChange={onMessageChange} value={props.newMessageText} ref={newMessageElement} className={classes.add__message__area} placeholder="Ваше сообщение" />
                        </form>
                        <button onClick={addMessage} className={classes.add__message__link}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;