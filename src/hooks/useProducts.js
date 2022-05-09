import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-ravine-17126.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts]
}

export default useProducts;
