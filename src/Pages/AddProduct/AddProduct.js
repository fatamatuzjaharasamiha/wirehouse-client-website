import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        console.log(data)
        const url = `http://localhost:5000/inventoryAll`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    };
    return (
        <div className='w-50 mx-auto m-4'>
            <h1 className='text-center'> Add a product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' value={user?.email} placeholder='email' {...register("email")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("Supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='photo URL' type="text" {...register("image")} />
                <input className='fw-bold' type='submit' value='Add Inventory Product' />
            </form>
        </div>
    );
};

export default AddProduct;