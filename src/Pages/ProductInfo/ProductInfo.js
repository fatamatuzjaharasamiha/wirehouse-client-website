import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const { myId } = useParams()
    console.log(myId)
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${myId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <Card className="text-center mx-auto w-50 shadow-lg p-4 m-5 bg-body rounded container">
                <Card.Img variant="top" src={products.image} />
                <Card.Header className='fw-bold'>ID : {products._id}</Card.Header>
                <Card.Header className='fw-bold fs-4'>Name : {products.name}</Card.Header>
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


        </div>
    );
};

export default ProductInfo;