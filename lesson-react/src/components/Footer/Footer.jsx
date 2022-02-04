import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.form__footer}>
            <div className={classes.form__first}>
                <ul className={classes.form__container_one}>
                    <li className={classes.form__li_one}><a className={classes.form__link_one}>Политика конфидициальности</a></li>
                    <li className={classes.form__li_one}><a className={classes.form__link_one}>Контакты службы поддержки</a></li>
                </ul>
            </div>
            <div className={classes.form__two}>
                <ul className={classes.form__container_two}>
                    <li className={classes.form__li_two}><a className={classes.form__link_two}>Где наш сервер</a></li>
                    <li className={classes.form__li_two}><a className={classes.form__link_two}>Наша политика</a></li>
                    <li className={classes.form__li_two}><a className={classes.form__link_two}>Подать заявку в модерацию</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;