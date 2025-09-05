import { Link } from "react-router-dom";
import logo from '../../assets/images/header/logo.svg'
import arrowRight from '../../assets/images/header/arrow-right.svg'
import './Header.scss'

export default function Header() {



    return (
        <>
            <header className="header container-big">
                <div className="header__inner">
                    <div className="header__logo logo">
                        <img src={logo} width="129" height="34" alt="" className="logo__image"/>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <Link to="/" className="header__nav-link">
                                    Main
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/" className="header__nav-link">
                                    Products
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/" className="header__nav-link">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__right">
                        <select name="" id="" className="header__language">
                            <option value="en" className="header__language-option">EN</option>
                            <option value="ru" className="header__language-option">RU</option>
                        </select>

                        <div className="header__sign">
                            <Link to='/' className="header__sign-in hidden-mobile">Sign In</Link>
                            <Link to='/' className="header__sign-up button">Sign Up <img src={arrowRight} alt=""
                                                                                  className="header__sign-icon"/> </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
