import { Link } from "react-router-dom";
import start from '../../assets/images/hero/start.svg'
import view from '../../assets/images/hero/view.svg'
import vk from '../../assets/images/hero/vk.svg'
import twitter from '../../assets/images/hero/twitter.svg'
import facebook from '../../assets/images/hero/facebook.svg'
import main from '../../assets/images/hero/main.png'
import Header from "../../components/Header/Header.jsx";

export default function Hero() {
    return (
        <>
            <Header />
            <div className="hero container-big">
                <div className="hero__inner">
                    <div className="hero__body">
                        <h1 className="hero__title">
                            EVERYTHING <span className="hero__title-accent">YOU NEED</span> <br/> IN <span className="hero__title-accent">ONE PLACE</span>
                        </h1>
                        <div className="hero__description">
                            <p>Our marketplace is a place where thousands of products for <span
                                className="hero__description-accent">any needs are collected</span>:
                                from stylish clothes and technology to home goods, beauty and hobbies. We unite sellers
                                and buyers so that every purchase is <span className="hero__description-accent">simple, profitable</span> and <span
                                    className="hero__description-accent">enjoyable</span>.
                                Here you will find
                                the best offers, trusted sellers and convenient service - everything you need for
                                comfortable
                                shopping <span className="hero__description-accent">in one
                                place.</span> </p>
                        </div>
                        <div className="hero__buttons">
                            <Link to='/' className="hero__button hero__button-start button">Start Shopping <img
                                src={start} alt="" width="20" height="20"
                                className="hero__button-icon"/></Link>
                            <Link to='/' className="hero__button hero__button-view button button--transparent">View Products <img src={view}
                                                                                                              alt="" width="20" height="20"
                                                                                                              className="hero__button-icon"/></Link>
                        </div>
                        <div className="hero__social">
                            <ul className="hero__social-list">
                                <li className="hero__social-item">
                                    <a className="hero__social-link" href="#"><img src={vk}
                                                                                   width="28" height="28" alt=""
                                                                                   className="hero__social-icon"/> </a>
                                </li>
                                <li className="hero__social-item">
                                    <a className="hero__social-link" href="#"><img src={twitter}
                                                                                   width="28" height="28" alt=""
                                                                                   className="hero__social-icon"/> </a>
                                </li>
                                <li className="hero__social-item">
                                    <a className="hero__social-link" href="#"><img src={facebook}
                                                                                   width="28" height="28" alt=""
                                                                                   className="hero__social-icon"/> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__image-wrapper">
                        <img src={main} width="830" height="842" alt="" className="hero__image"/>
                    </div>
                </div>

            </div>
        </>
    )
}
