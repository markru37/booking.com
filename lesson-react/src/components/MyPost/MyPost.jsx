import classes from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../redux/state';

const MyPost = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} like={post.like} />);

    let newPostElement = React.createRef();
    
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return ( 
        <div>
            <div className={classes.post}>
                <div className={classes.add_post}>
                    <form action="">
                        <textarea onChange={onPostChange}  value={props.newPostText} ref = {newPostElement} placeholder="Расскажите друзьям о чём-то новом" className={classes.add_post_textarea}/>
                    </form>
                    <div className={classes.add_post_links}>
                        <button className={classes.add_post_link} onClick={ addPost }>Опубликовать</button>
                    </div>
                </div>
            </div>
            <div className={classes.posts_all}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPost;