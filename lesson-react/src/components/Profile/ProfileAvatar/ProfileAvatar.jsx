import classes from '../Profile.module.css';
import avatar from '../img/avatar.jpg';

const ProfileAvatar = () => {
    return (
        <div className={classes.content_avatar}>
            <img src={avatar} alt={"avatar"} className={classes.avatar_img} />
            <a href="#" className={classes.profile_edit}>Редактировать профиль</a>
        </div>
    )
}
export default ProfileAvatar;