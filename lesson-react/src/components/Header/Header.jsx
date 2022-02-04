import classes from './Header.module.css';
import logo from './img/logo.jpg';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_item_logo}>
        <img src={logo} alt={"logo"} className={classes.header__logo} />
        <div className={classes.header__item}>Социальная сеть</div>
      </div>
      <div className={classes.header__element}>
        <a href="#" className={classes.header__link}>Оповещения</a>
        <a href="#" className={classes.header__link}>Приложения</a>
      </div>
    </div>
  );
}
export default Header;