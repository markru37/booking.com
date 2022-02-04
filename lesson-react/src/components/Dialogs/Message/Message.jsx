import classes from '../Dialogs.module.css';
import avatar from '../img/avatar.jpg';

const Message = (props) => {
    return (
        <div className={classes.we__dialogs}>
            <img src={avatar} alt={"avatar"} className={classes.dialog_avatar} />
            <div className={classes.dialog_name}>{props.name}</div>
            <div className={classes.dialog_sms}>{props.message}</div>
        </div>
    )
}

export default Message;