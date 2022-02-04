import classes from './Profile.module.css';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePhotos from './ProfilePhotos/ProfilePhotos';
import MyPost from '../MyPost/MyPost';
import Navigation from '../Navigation/Navigation';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.content__profile}>
                < Navigation />
                < ProfileAvatar />
                <div className={classes.content_container}>
                    <div className={classes.content_info}>
                        < ProfileInfo />
                    </div>
                    < ProfilePhotos />
                    <MyPost  posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
                </div>
            </div>
        </div>
    )
}
export default Profile;