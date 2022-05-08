import React from 'react';
import { Link } from 'react-router-dom';
import './ManageLink.css'

const ManageLink = () => {
   

    return (
        <div className='view mb-4'>
           <Link to={`/manageInventory`}><button className='btn btn-dark mt-3 '>Manage Inventory</button></Link>
        </div>
    );
};

export default ManageLink;