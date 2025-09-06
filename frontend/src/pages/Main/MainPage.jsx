import Header from "../../components/Header/Header.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import {useEffect, useState} from "react";

export default function MainPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/products/")
            .then((res) => res.json())
            .then((data) => setProducts(data.results))
            .catch((err) => console.error(err));
    }, []);
    return (
        <>
            <Header />
            <ul className="product-card__list container-small">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>

        </>
    )
}
