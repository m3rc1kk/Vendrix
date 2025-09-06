import { Link } from "react-router-dom";
import logo from '../../assets/images/header-small/logo.svg'
import './Header.scss'
import favorite from '../../assets/images/header-small/favorite.svg'
import cart from '../../assets/images/header-small/cart.svg'
import orders from '../../assets/images/header-small/orders.svg'
import notif from '../../assets/images/header-small/notif.svg'
import avatar from '../../assets/images/header-small/example.jpg'

export default function HeaderSmall() {



    return (
        <>
            <header className="header container-small">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo--small logo">
                            <img src={logo} width="36" height="29" alt="" className="logo__image"/>
                        </div>
                        
                        <div className="header__search">
                            <input placeholder="Search" type="search" className="header__search-input"/>
                        </div>
                    </div>


                    <div className="header__right header__right--small">
                        <select name="" id="" className="header__language">
                            <option value="en" className="header__language-option">EN</option>
                            <option value="ru" className="header__language-option">RU</option>
                        </select>

                        <div className="header__tabs">
                            <ul className="header__tabs-list">
                                <li className="header__tabs-item">
                                    <Link to="/" className="header__tabs-link">
                                        <img src={favorite} width="18" height="18" alt="" className="header__tabs-icon"/>
                                        Favorite
                                    </Link>
                                </li>

                                <li className="header__tabs-item">
                                    <Link to="/" className="header__tabs-link">
                                        <img src={notif} width="18" height="18" alt="" className="header__tabs-icon"/>
                                        Notif.
                                    </Link>
                                </li>

                                <li className="header__tabs-item">
                                    <Link to="/" className="header__tabs-link">
                                        <img src={orders} width="18" height="18" alt="" className="header__tabs-icon"/>
                                        Orders
                                    </Link>
                                </li>

                                <li className="header__tabs-item">
                                    <Link to="/" className="header__tabs-link">
                                        <img src={cart} width="18" height="18" alt="" className="header__tabs-icon"/>
                                        Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="header__profile">
                            <img src={avatar} width="40" height="40" alt="" className="header__profile-image"/>
                            <div className="header__profile-body">
                                <span className="header__profile-name">Maksim</span>
                                <span className="header__profile-email">maksim@g...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
