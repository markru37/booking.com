import classes from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.nav_items}>
            <NavLink to="/profile" className={classes.item}>Моя страница</NavLink>
            <NavLink to="/friends" className={classes.item}>Друзья</NavLink>
            <NavLink to="/dialogs/" className={classes.item}>Сообщения</NavLink>
            <NavLink to="/music" className={classes.item}>Музыка</NavLink>
            <NavLink to="/video" className={classes.item}>Видео</NavLink>
            </div >
        </div >
    )
}
export default Navigation;