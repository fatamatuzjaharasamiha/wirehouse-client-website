import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    console.log('inside of productjs')
    useEffect(() => {
        fetch('https://aqueous-ravine-17126.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='container'>
            <h1 className='fw-bold pt-3 text-center text'>Inventory Item</h1>


            <div className="row p-5">
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;