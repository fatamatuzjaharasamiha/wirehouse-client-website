import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageInventory = ({ product, deleteButton }) => {
    const { _id, name, image, description, price, quantity, Supplier } = product;
    const handleDelete = deleteButton;
    const [products, setProducts] = useProducts()
    console.log(products)
    const navigate = useNavigate();
    const navigateToAddItem = () => {
        navigate('/addItem')
    }
   

    return (
        <div className='col-lg-4'>
            <Card className='shadow-lg p-4 m-5 bg-body rounded container'>
                <Card.Img className='card-img' variant="top container-fluid" src={image} />
                <Card.Body>
                    <Card.Title className=''>Name : {name}</Card.Title>
                    <Card.Text> <span className='fw-bold'>Description:</span> {description.slice(1, 35)}</Card.Text>
                    <h6>Price:{price}</h6>
                    <h6>Quantity : {quantity}</h6>
                    <h6>Supplier Name : {Supplier}</h6>

                    {/* <button className='btn btn-danger mt-3'>Delete</button> */}
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger mt-3'>Delete</button>

                    <br />
                    <button onClick={navigateToAddItem} className='btn btn-dark mt-2'>Add new Item</button>

                </Card.Body>
            </Card>

        </div>
    );
};

export default ManageInventory;