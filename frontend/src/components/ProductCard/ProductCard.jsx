import favorite from '../../assets/images/product-card/heart.svg'
import rates from '../../assets/images/product-card/star.svg'
import comments from '../../assets/images/product-card/comments.svg'

export default function ProductCard({ product }) {
    return (
        <>
            <li className="product-card__item">
                <img src={product.preview} alt={product.title} width="284" height="286" className="product-card__image"/>
                <div className="product-card__body">
                    <header className="product-card__body-header">
                        <h2 className="product-card__title">{product.title}</h2>
                        <img src={favorite} width="24" height="24" alt="" className="product-card__favorite"/>
                    </header>

                    <footer className="product-card__body-footer">
                        <div className="product-card__reviews">

                            <div className="product-card__rates">
                                <span className="product-card__rates-text">4.4</span>
                                <img src={rates} alt="" width="14" height="14" className="product-card__rates-icon"/>
                            </div>

                            <div className="product-card__comments">
                                <span className="product-card__comments-text">12К</span>
                                <img src={comments} alt="" width="14" height="15" className="product-card__comments-icon"/>
                            </div>

                        </div>

                        <div className="product-card__price">
                            <span className="product-card__price-now">
                                {Math.floor(Number(product.price))}$
                            </span>
                            <span className="product-card__price-old">
                                123$
                            </span>
                        </div>


                    </footer>
                </div>
            </li>
        </>
    )
}
