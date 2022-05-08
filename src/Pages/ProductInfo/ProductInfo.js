import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProductInfo.css'
import { Link, useParams } from 'react-router-dom';

const ProductInfo = () => {
    const { myId } = useParams()
    console.log(myId)
    const [products, setProducts] = useState({});
    const {quantity}=products;
    console.log(quantity)
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${myId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    return (
        <div className='text-center mx-auto w-50 shadow-lg p-4 m-5 bg-body rounded'>
            <Card className="">
                <Card.Img className='img' variant="top" src={products.image} />
                <Card.Header className='fw-bold'>ID : {products._id}</Card.Header>
                <Card.Header className='fw-bold fs-4 text-info'>Name : {products.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Quantity : {products.quantity}</Card.Title>
                    <Card.Title>Price : {products.price}</Card.Title>
                    <Card.Text>
                        {products.description}
                       
                    </Card.Text>
                    <h6>Supplier Name : {products.Supplier}</h6>
                    <h6>Sold : </h6>
                    <Button variant="dark m-3">Delivered</Button>
                </Card.Body>

            </Card>
                <form className='border border-3 mt-2'>
                <h4>Restock the item</h4>
                <input type="number" className='bg-success p-1 text-dark bg-opacity-25 rounded' name="" id="" placeholder='Stock Amount' />
                <Button variant="dark m-4">Restock</Button>
                </form>

                <Link to={`/manageInventory`}><button className='btn btn-dark mt-3'>Manage Inventory</button></Link>
                       

        </div>
    );
};

export default ProductInfo;