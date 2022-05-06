import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='fw-bold pt-3 text-center text'>Inventory Item</h1>
            <h4>{products.length}</h4>
            <div className="row p-5">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }

            </div>
        </div>
    );
};

export default Products;