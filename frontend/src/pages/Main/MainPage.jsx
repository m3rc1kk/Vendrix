import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import {useEffect, useState} from "react";
import HeaderSmall from "../../components/Header/HeaderSmall.jsx";

export default function MainPage() {
    const [products, setProducts] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    const fetchProducts = (url = "http://127.0.0.1:8000/api/v1/products/") => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <HeaderSmall />
            <ul className="product-card__list container-small">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>

            <div className="pagination container-small">
                <button
                    onClick={() => fetchProducts(prevPage)}
                    disabled={!prevPage}
                    className="pagination__button"
                >
                    Previous
                </button>
                <button
                    onClick={() => fetchProducts(nextPage)}
                    disabled={!nextPage}
                    className="pagination__button"
                >
                    Next
                </button>
            </div>
        </>
    );
}

