import classes from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const PeopleItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.people_item}>
            <NavLink to={path} className={classes.item_link}>{props.name}</NavLink>
        </div>
    )
}

export default PeopleItem;