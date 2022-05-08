import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/inventoryAll')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='container'>
            <h1 className='fw-bold pt-3 text-center text'>Total Items : {products.length}</h1>


            <div className="row p-5">
                {
                    products.map(product => <ManageInventory key={product._id} product={product}></ManageInventory>)
                }

            </div>
        </div>
    );

};

export default ManageInventories;