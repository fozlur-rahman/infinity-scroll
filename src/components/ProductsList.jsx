import { useEffect, useRef, useState } from "react";
import Product from "./Product";

const productsPerPage = 10;

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    console.log(products);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
                    productsPerPage * page
                }`
            );
            const data = await response.json();
            if (data.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prevProducts) => [...prevProducts, ...data.products]);
                setPage((prevPage) => prevPage + 1);
            }
        };

        const onIntersection = (entries) => {
            const loaderItem = entries[0];
            if (loaderItem.isIntersecting && hasMore) {
                fetchProducts();
            }
        };

        const observer = new IntersectionObserver(onIntersection);
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [hasMore, page]);

    return (
        <div>
            <h1>Products List</h1>

            {/* ========== */}
            <div className="grid grid-cols-3 gap-10">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            {/* ========== */}

            {hasMore && (
                <div className="text-3xl" ref={loaderRef}>
                    Loading more products...
                </div>
            )}
        </div>
    );
};

export default ProductsList;
