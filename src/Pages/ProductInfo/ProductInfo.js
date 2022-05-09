import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProductInfo.css'
import { Link, useParams } from 'react-router-dom';

const ProductInfo = () => {
    const { myId } = useParams()
    console.log(myId)
    const [products, setProducts] = useState({});
    const { quantity } = products;
    console.log(quantity)

    const handleDeliver = () => {
        let newQuantity = quantity - 1;
        const newProducts = { ...products, quantity: newQuantity }
        setProducts(newProducts)
        fetch(`https://aqueous-ravine-17126.herokuapp.com/update-product/${myId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
    }
    const handleRestock = (event) => {
        event.preventDefault();
        const stock = parseInt(event.target.addStock.value);
        const newQuantity = quantity + stock;
        const newProducts = { ...products, quantity: newQuantity }
        setProducts(newProducts);
        fetch(`https://aqueous-ravine-17126.herokuapp.com/update-product/${myId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
    }

    useEffect(() => {
        const url = `https://aqueous-ravine-17126.herokuapp.com/inventory/${myId}`
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
                    <Card.Title>Quantity : {quantity}</Card.Title>
                    <Card.Title>Price : {products.price}</Card.Title>
                    <Card.Text>
                        {products.description}

                    </Card.Text>
                    <h6>Supplier Name : {products.Supplier}</h6>

                    <Button onClick={handleDeliver} variant="dark m-3">Delivered</Button>
                </Card.Body>

            </Card>
            <form onSubmit={handleRestock} className='border border-3 mt-2'>
                <h4>Restock the item</h4>
                <input type="number" className='bg-success p-1 text-dark bg-opacity-25 rounded' name="addStock" id="" placeholder='Stock Amount' />
                <input className="dark m-4" type='submit' value='Restock' />
            </form>

            <Link to={`/manageInventory`}><button className='btn btn-dark mt-3'>Manage Inventory</button></Link>


        </div>
    );
};

export default ProductInfo;