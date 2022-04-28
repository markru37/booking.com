import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from './img/logo.jpg';
import lang from './img/lang.svg';
import support from './img/support.svg';
import notific from './img/notific.svg';
import share from './img/share.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__container _container">
                <div className="content__container">
                    <div className="header__logo_container">
                        <img src={logo} alt={"logo"} className='header__logo' />
                    </div>
                    <div className="header__row">
                        <div className="header__functional">
                            <img src={lang} alt={"lang"} className='header__func_img' />
                            <img src={support} alt={"support"} className='header__func_img' />
                            <img src={notific} alt={"notific"} className='header__func_img' />
                            <img src={share} alt={"share"} className='header__func_img' />
                            <div className="header__registr">
                                <a className="registr__link" >Зарегистрировать свой объект</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__row__two">
                    <div className="header__buttons">
                        <NavLink to="/" className="header__button">Страны</NavLink>
                        <NavLink to="/" className="header__button">Отели</NavLink>
                        <NavLink to="/" className="header__button">Цены</NavLink>
                        <NavLink to="/" className="header__button">Перевозки</NavLink>
                        <NavLink to="/" className="header__button">Новинки</NavLink>
                        <NavLink to="/" className="header__button">Досуг</NavLink>
                    </div>
                </div>
                <div className="header__title">
                    С нами выгодно! Лучшие цены и места для отдыха.
                    Станьте счастливыми клиентами с программой SenSell!
                </div>
                <div className="form__container">
                <form className="header__form">
                    <input type="text" className="header__input" placeholder="Куда вы хотите поехать?" />
                    <div className="header__date__container">
                        <input type="text" className="header__date" placeholder="Заезд" />
                        <div className="solid__line"></div>
                        <input type="text" className="header__date" placeholder="Выезд" />
                    </div>
                    <div className="form__buttons">
                        <NavLink to="/" className="form__button">Проверить цены</NavLink>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}
export default Header;