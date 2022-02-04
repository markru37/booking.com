import classes from './Post.module.css';
import avatar from '../img/avatar.jpg';

const Post = (props) => {
    
    return (
        <div className={classes.post}>
            <div className={classes.post_item}>
                <img src={avatar} alt={"avatar"} className={classes.post__avatar}/>
                <div className={classes.post__name}>Имя Фамилия</div>
                <div className={classes.post__text}>{props.message}</div>
                <div className={classes.post__like}>{props.like}</div>  
            </div>
        </div>
    )
}
export default Post;