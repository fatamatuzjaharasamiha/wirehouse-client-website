import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddProduct = () => {
    const [user] = useAuthState(auth);
    // console.log(user)
    const handleAddProduct = (e) => {
        console.log('something ')
        e.preventDefault();
        const email = user.email;
        const name = e.target.name.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const Supplier = e.target.Supplier.value;
        const image = e.target.image.value;
        // const data = { email, name, description, quantity, price, Supplier, image };
        // console.log(data)
        const url = 'http://localhost:5000/add-inventory';
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email, name, description, quantity, price, Supplier, image })
        }).then((res) => res.json())

    };
    return (
        <div className='w-50 mx-auto m-4'>
            <h1 className='text-center'>Add a product</h1>
            <form className='d-flex flex-column' onSubmit={handleAddProduct}>
                <input className='mb-2' value={user?.email} type="text" placeholder='email' readOnly />
                <input className='mb-2' type="text" name='name' placeholder='Name' />
                <textarea className='mb-2' name='description' placeholder='Description' />
                <input className='mb-2' name='quantity' placeholder='Quantity' type="number" />
                <input className='mb-2' name='price' placeholder='Price' type="number" />
                <input className='mb-2' name='Supplier' type="text" placeholder='Supplier Name' />
                <input className='mb-2' name='image' placeholder='photo URL' type="text" />
                <input className='fw-bold' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;


