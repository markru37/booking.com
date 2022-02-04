import classes from '../Profile.module.css';
import photo1 from '../img/photo1.jpg';
import photo2 from '../img/photo2.jpg';
import photo3 from '../img/photo3.jpg';

const ProfilePhotos = () => {
    return (
        <div className={classes.container_photos}>
            <div className={classes.photos_title}>Мои фотографии</div>
            <div className={classes.photos__all}>
            <img src={photo1} alt={"1"} className={classes.photos_img} />
            <img src={photo2} alt={"2"} className={classes.photos_img} />
            <img src={photo3} alt={"3"} className={classes.photos_img} />
            </div>
            <a href="#" className={classes.photos_more_link}>Другие фото</a>
        </div>
    )
}
export default ProfilePhotos;