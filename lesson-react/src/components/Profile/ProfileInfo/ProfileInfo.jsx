import classes from '../Profile.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.info_block}>
            <div className={classes.info_title}>Имя Фамилия</div>
            <ul className={classes.info_list}>
                <li className={classes.info_item}>День рождения: дата рождения</li>
                <li className={classes.info_item}>Город: город </li>
                <li className={classes.info_item}>Место учёбы: место учёбы</li>
                <li className={classes.info_item}>Языки: Русский, English</li>
            </ul>
        </div>
    )
}
export default ProfileInfo;