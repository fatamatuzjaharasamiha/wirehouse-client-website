import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = (id) => {
        console.log('deleting',id)
        const proceed = window.confirm('Are You Sure???')
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // setProducts(data)
                    // if(data.deleteCount){
                        const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                    // }
                    
                })
        }
    }

     

    return (
        <div className='container'>
            <h1 className='fw-bold pt-3 text-center text'>Total Items : {products.length}</h1>


            <div className="row p-5">
                {
                    products.map(product => <ManageInventory key={product._id} product={product} deleteButton={handleDelete}></ManageInventory>)
                }

            </div>
        </div>
    );

};

export default ManageInventories;