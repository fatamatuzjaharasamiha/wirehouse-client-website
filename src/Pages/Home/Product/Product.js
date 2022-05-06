import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { _id, name, image, description, price, quantity, supplier } = product
    return (
        <div className='col-lg-4'>
            <Card className='shadow-lg p-4 m-5 bg-body rounded container box'>
                <Card.Img className='' variant="top container-fluid" src={image} />
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <Card.Text> <span className='fw-bold'>Description:</span> {description}</Card.Text>
                    <h6>Price:{price}</h6>
                    <h6>Quantity : {quantity}</h6>
                    <h6>Supplier Name : {supplier}</h6>
                    <Link className='' to='/inventory/:id'><button type="button" className="btn btn-dark mt-3">Update</button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;